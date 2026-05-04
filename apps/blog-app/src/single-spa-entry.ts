import { mount as svelteMount, unmount as svelteUnmount } from 'svelte';
import App from './App.svelte';
import './styles/global.css';

type AppInstance = ReturnType<typeof svelteMount>;

let app: AppInstance | null = null;

export const bootstrap = async (_props: unknown): Promise<void> => {};

export const mount = async (_props: unknown): Promise<void> => {
  const target = document.getElementById('single-spa-application:blog-app');
  if (!target) {
    console.error('[blog-app] Mount target #single-spa-application:blog-app not found');
    return;
  }
  app = svelteMount(App, { target });
};

export const unmount = async (_props: unknown): Promise<void> => {
  if (app) {
    svelteUnmount(app);
    app = null;
  }
};
