import singleSpaSvelte from 'single-spa-svelte';
import App from './App.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
