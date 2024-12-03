import type { SFCWithInstall } from '@echone-ui/utils';

import { withInstall } from '@echone-ui/utils';

import Checkbox from './src/checkbox.vue';

export * from './src/checkbox';
export const EoCheckbox: SFCWithInstall<typeof Checkbox> =
  withInstall(Checkbox);

export default EoCheckbox;
