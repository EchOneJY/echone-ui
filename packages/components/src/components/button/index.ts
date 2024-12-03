import {
  type SFCWithInstall,
  withInstall,
  withNoopInstall,
} from '@echone-ui/utils';

import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

export type * from './src/button';
export * from './src/constants';
export const EoButton: {
  ButtonGroup: typeof ButtonGroup;
} & SFCWithInstall<typeof Button> = withInstall(Button, {
  ButtonGroup,
});

export const EoButtonGroup: SFCWithInstall<typeof ButtonGroup> =
  withNoopInstall(ButtonGroup);
export default EoButton;
