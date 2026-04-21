import { h, render } from 'preact';
import { App } from './app';

let containerEl: HTMLElement | null = null;

export function bootstrap() {
  return Promise.resolve();
}

export function mount(props: { domElement?: HTMLElement }) {
  containerEl = props.domElement ?? document.getElementById('single-spa-application:courses')!;
  render(h(App, null), containerEl);
  return Promise.resolve();
}

export function unmount() {
  if (containerEl) {
    render(null, containerEl);
    containerEl = null;
  }
  return Promise.resolve();
}
