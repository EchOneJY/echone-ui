import type { MarkdownRenderer } from 'vitepress';

const tableWrapper = (md: MarkdownRenderer): void => {
  md.renderer.rules.table_open = () => '<div class="vp-table"><table>';
  md.renderer.rules.table_close = () => '</table></div>';
};

export default tableWrapper;
