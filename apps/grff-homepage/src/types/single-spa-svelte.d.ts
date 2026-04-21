declare module 'single-spa-svelte' {
  interface SingleSpaSvelteOpts {
    component: object;
    domElementGetter?: () => HTMLElement;
  }

  interface Lifecycles {
    bootstrap: (props: Record<string, unknown>) => Promise<void>;
    mount: (props: Record<string, unknown>) => Promise<void>;
    unmount: (props: Record<string, unknown>) => Promise<void>;
  }

  export default function singleSpaSvelte(opts: SingleSpaSvelteOpts): Lifecycles;
}
