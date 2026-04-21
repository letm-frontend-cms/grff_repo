import { createRoot, type Root } from 'react-dom/client';
import { Header } from './Header';
import { Footer } from './Footer';

let headerRoot: Root | null = null;
let footerRoot: Root | null = null;

export function bootstrap() {
  return Promise.resolve();
}

export function mount() {
  const headerEl = document.getElementById('nav-header')!;
  const footerEl = document.getElementById('nav-footer')!;

  headerRoot = createRoot(headerEl);
  headerRoot.render(<Header />);

  footerRoot = createRoot(footerEl);
  footerRoot.render(<Footer />);

  return Promise.resolve();
}

export function unmount() {
  headerRoot?.unmount();
  footerRoot?.unmount();
  headerRoot = null;
  footerRoot = null;
  return Promise.resolve();
}
