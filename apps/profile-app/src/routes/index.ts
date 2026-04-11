import Profile from './Profile.svelte';
import Settings from './Settings.svelte';
import NotFound from './NotFound.svelte';

export const routes = {
  '/': Profile,
  '/settings': Settings,
  '*': NotFound,
};
