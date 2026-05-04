import { mount as svelteMount, unmount as svelteUnmount } from 'svelte';
import App from './App.svelte';

let app: Record<string, any> | null = null;

export function bootstrap() {
  return Promise.resolve();
}

export function mount(props: { domElement?: HTMLElement }) {
  const container = props.domElement ?? document.getElementById('single-spa-application:profile-app')!;
  app = svelteMount(App, { target: container });
  return Promise.resolve();
}

export function unmount() {
  if (app) {
    svelteUnmount(app);
    app = null;
  }
  return Promise.resolve();
}
