import type { Plugin } from 'vite';

import fs from 'node:fs';
import path from 'node:path';

import { camelize } from '@vue/shared';

type Append = Record<'footers' | 'headers' | 'scriptSetups', string[]>;

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`;

const combineMarkdown = (
  code: string,
  headers: string[],
  footers: string[],
) => {
  const frontmatterEnds = code.indexOf('---\n\n');
  const firstHeader = code.search(/\n#{1,6}\s.+/);
  let sliceIndex = firstHeader;
  if (firstHeader < 0) {
    sliceIndex = frontmatterEnds < 0 ? 0 : frontmatterEnds + 4;
  }
  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex);
  code += footers.join('\n');

  return `${code}\n`;
};

const vpScriptSetupRE =
  /<vp-script\s(.*\s)?setup(\s.*)?>([\S\s]*)<\/vp-script>/;

const transformVpScriptSetup = (code: string, append: Append) => {
  const matches = code.match(vpScriptSetupRE);
  if (matches) code = code.replace(matches[0], '');
  const scriptSetup = matches?.[3] ?? '';
  if (scriptSetup) append.scriptSetups.push(scriptSetup);
  return code;
};

const getExampleImports = (componentId: string) => {
  const examplePath = path.resolve(
    process.cwd(),
    'src',
    'components',
    'demos',
    componentId,
  );
  if (!fs.existsSync(examplePath)) return [];
  const files = fs.readdirSync(examplePath);
  const imports: string[] = [];

  for (const item of files) {
    if (!/\.vue$/.test(item)) continue;
    const file = item.replace(/\.vue$/, '');
    const name = camelize(`Eo-${componentId}-${file}`);

    imports.push(
      `import ${name} from '../../src/components/demos/${componentId}/${file}.vue'`,
    );
  }

  return imports;
};

export function MarkdownTransform(): Plugin {
  return {
    enforce: 'pre',

    name: 'echone-ui-md-transform',

    async transform(code, id) {
      if (!id.endsWith('.md')) return;

      const componentId = path.basename(id, '.md');
      if (componentId === 'index') return;

      const append: Append = {
        footers: [],
        headers: [],
        scriptSetups: getExampleImports(componentId),
      };

      code = transformVpScriptSetup(code, append);

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers,
      );
    },
  };
}
