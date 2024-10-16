import type { AppContext, EmitsOptions, Plugin, SetupContext } from 'vue';

export type SFCWithInstall<T> = Plugin & T;

export type SFCInstallWithContext<T> = {
  _context: AppContext | null;
} & SFCWithInstall<T>;

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit'];
