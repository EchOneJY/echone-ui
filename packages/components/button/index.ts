import type { SFCWithInstall } from '../../utils';

// import MyButton from '../JSXButton'
import { withInstall } from '../../utils';
import Button from './src/button.vue';

export const EoButton: SFCWithInstall<typeof Button> = withInstall(Button);

export * from './src/button';
