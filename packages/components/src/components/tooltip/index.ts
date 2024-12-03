import type { SFCWithInstall } from '@echone-ui/utils';

import { withInstall } from '@echone-ui/utils';

import HelpTooltip from './src/help-tooltip.vue';
import Tooltip from './src/tooltip.vue';

export * from './src/tooltip';
export const EoTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip);

export const EoHelpTooltip: SFCWithInstall<typeof HelpTooltip> =
  withInstall(HelpTooltip);

export default EoTooltip;
