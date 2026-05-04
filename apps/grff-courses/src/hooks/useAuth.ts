import { useState, useEffect } from 'preact/hooks';
import { getSession, getSessionSync, subscribe } from 'grff-auth-lib';

export function useAuth() {
  const [user, setUser] = useState(getSessionSync());

  useEffect(() => {
    const unsubscribe = subscribe((next) => setUser(next));
    // Sync with backend cookie on mount in case another app logged us in.
    getSession();
    return unsubscribe;
  }, []);

  return { isAuthenticated: !!user, user };
}
