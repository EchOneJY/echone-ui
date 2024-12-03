import type { SFCWithInstall } from '@echone-ui/utils';

import { withInstall } from '@echone-ui/utils';

import Icon from './src/icon.vue';
import IconWrap from './src/icon-wrap.vue';

export const EoIcon: SFCWithInstall<typeof Icon> = withInstall(Icon);
export const EoIconWrap: SFCWithInstall<typeof IconWrap> =
  withInstall(IconWrap);
export * from './src/icon-wrap';

export default EoIcon;
