import { h } from 'preact';
import singleSpaPreact from 'single-spa-preact';
import App from './App';

const lifecycles = singleSpaPreact({
  rootComponent: App
});

export const { bootstrap, mount, unmount } = lifecycles;