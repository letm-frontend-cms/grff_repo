import { setSession } from "./store";
import type { User } from "./types";

interface SessionResponse {
  user?: User;
  data?: {
    user?: User;
  };
}


function getApiBase(): string {
  if (typeof window !== "undefined") {
    // Prefer window property, fallback to localStorage
    return window.localStorage.getItem("GRFF_API_URL") || "";
  }
  return "";
}

export async function getSession(): Promise<User | null> {
  try {
    let apiPath = getApiBase() + "/session";
    const response = await fetch(apiPath, { credentials: "include" });
    if (!response.ok) {
      setSession(null);
      return null;
    }

    const body = (await response.json()) as SessionResponse | User;
    const user = (body as SessionResponse).user
      ?? (body as SessionResponse).data?.user
      ?? ((body as User)._id ? (body as User) : null);

    setSession(user);
    return user;
  } catch {
    setSession(null);
    return null;
  }
}

export async function logout(): Promise<void> {
  try {
    let apiPath = getApiBase() + "/auth/logout";
    await fetch(apiPath, {
      method: "POST",
      credentials: "include",
    });
  } finally {
    setSession(null);
  }
}
