const API_BASE = (import.meta as any).env?.VITE_API_URL || "http://localhost:5001/api";

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export async function request<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
    credentials: "include",
  });
  const json = await res.json();

  if (!res.ok) {
    throw { success: false, message: json.message || "Something went wrong", status: res.status };
  }
  return json;
}
