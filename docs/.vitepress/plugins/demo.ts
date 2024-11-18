import type { MarkdownRenderer } from 'vitepress';

import fs from 'node:fs';
import path from 'node:path';

interface ContainerOpts {
  marker?: string | undefined;
  render?: MarkdownRenderer['renderer']['rules']['container'];
  validate?(params: string): boolean;
}
function createDemoContainer(md: MarkdownRenderer): ContainerOpts {
  return {
    render(tokens, idx) {
      if (!tokens || !tokens[idx]) return '';
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        const sourceFile = sourceFileToken.children?.[0].content ?? '';

        if (sourceFileToken?.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(process.cwd(), 'src', 'demos', `${sourceFile}.vue`),
            'utf8',
          );
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

        return `<VPDemo source="${encodeURIComponent(
          md.render(`\`\`\` vue\n${source}\`\`\``),
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source,
        )}" description="${encodeURIComponent(md.render(description))}">
  <template #source><eo-${sourceFile.replaceAll('/', '-')}/></template>`;
      } else {
        return '</VPDemo>\n';
      }
    },

    validate(params) {
      return !!/^demo\s*(.*)$/.test(params.trim());
    },
  };
}

export default createDemoContainer;
