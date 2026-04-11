// Dynamic import is required for Module Federation shared dependency resolution.
// This pattern lets the host shell negotiate shared modules (e.g. svelte)
// before the app boots, avoiding duplicate instances at runtime.
import('./bootstrap');
