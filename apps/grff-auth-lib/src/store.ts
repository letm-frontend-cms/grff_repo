import type { MinimalUser, SessionSubscriber, User } from "./types";

const STORAGE_KEY = "grff-auth-lib:session";

interface SessionStore {
  user: User | null;
  subscribers: Set<SessionSubscriber>;
  initialized: boolean;
}

declare global {
  // eslint-disable-next-line no-var
  var __GRFF_AUTH_STORE__: SessionStore | undefined;
}

function getStore(): SessionStore {
  if (!globalThis.__GRFF_AUTH_STORE__) {
    globalThis.__GRFF_AUTH_STORE__ = {
      user: null,
      subscribers: new Set<SessionSubscriber>(),
      initialized: false,
    };
  }
  return globalThis.__GRFF_AUTH_STORE__;
}

function emit(user: User | null): void {
  const store = getStore();
  for (const callback of store.subscribers) {
    callback(user);
  }
}

function toMinimalUser(user: User): MinimalUser {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isVerified: user.isVerified,
  };
}

function readFromStorage(): User | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MinimalUser;
  } catch {
    return null;
  }
}

function persistToStorage(user: User | null): void {
  if (typeof window === "undefined") return;

  try {
    if (user) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toMinimalUser(user)));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Ignore persistence failures in private mode / blocked storage.
  }
}

function initStore(): void {
  const store = getStore();
  if (store.initialized) return;

  store.user = readFromStorage();
  store.initialized = true;

  if (typeof window !== "undefined") {
    window.addEventListener("storage", (event) => {
      if (event.key !== STORAGE_KEY) return;

      const nextUser = event.newValue ? (JSON.parse(event.newValue) as MinimalUser) : null;
      const next = nextUser as User | null;
      getStore().user = next;
      emit(next);
    });
  }
}

export function getSessionSync(): User | null {
  initStore();
  return getStore().user;
}

export function setSession(user: User | null): void {
  initStore();
  getStore().user = user;
  persistToStorage(user);
  emit(user);
}

export function subscribe(callback: SessionSubscriber): () => void {
  initStore();

  const store = getStore();
  store.subscribers.add(callback);

  return () => {
    store.subscribers.delete(callback);
  };
}
