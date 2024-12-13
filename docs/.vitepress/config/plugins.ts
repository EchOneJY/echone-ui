import type { MarkdownRenderer } from 'vitepress';

import mdContainer from 'markdown-it-container';

// import { ApiTableContainer } from '../plugins/api-table';
import createDemoContainer from '../plugins/demo';
import tableWrapper from '../plugins/table-wrapper';
import tooltip from '../plugins/tooltip';

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(tableWrapper);
  md.use(tooltip);
  md.use(mdContainer, 'demo', createDemoContainer(md));
  // md.use(ApiTableContainer);
};
