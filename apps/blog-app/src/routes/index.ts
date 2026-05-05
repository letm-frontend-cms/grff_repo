import BlogList from './BlogList.svelte';
import BlogPost from './BlogPost.svelte';
import NotFound from './NotFound.svelte';

export const routes = {
  '/': BlogList,
  '/blog': BlogList,
  '/blog/:id': BlogPost,
  '*': NotFound,
};
