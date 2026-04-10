import * as preact from 'preact';
import singleSpaPreact from 'single-spa-preact';
import { App } from './app.jsx';
import './index.css';

const preactLifecycles = singleSpaPreact({
  preact,
  rootComponent: App,
});

export const bootstrap = preactLifecycles.bootstrap;
export const mount = preactLifecycles.mount;
export const unmount = preactLifecycles.unmount;
