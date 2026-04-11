declare module 'single-spa-preact' {
  import { ComponentType } from 'preact';

  interface SingleSpaPreactOpts {
    preact: typeof import('preact');
    rootComponent: ComponentType;
    domElementGetter?: () => HTMLElement;
  }

  interface Lifecycles {
    bootstrap: (props: Record<string, unknown>) => Promise<void>;
    mount: (props: Record<string, unknown>) => Promise<void>;
    unmount: (props: Record<string, unknown>) => Promise<void>;
  }

  export default function singleSpaPreact(opts: SingleSpaPreactOpts): Lifecycles;
}
