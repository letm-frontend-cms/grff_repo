const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

async function request<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE}${endpoint}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Attach token if available
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
    }
  }

  const res = await fetch(url, { ...options, headers });
  const json = await res.json();

  if (!res.ok) {
    throw { success: false, message: json.message || "Something went wrong", status: res.status };
  }
  return json;
}

// Auth APIs
export const authApi = {
  signup: (body: { name: string; email: string; password: string; mobile?: string }) =>
    request("/auth/signup", { method: "POST", body: JSON.stringify(body) }),

  verifyEmail: (body: { email: string; otp: string }) =>
    request<{ token: string }>("/auth/verify-email", { method: "POST", body: JSON.stringify(body) }),

  resendOtp: (body: { email: string }) =>
    request("/auth/resend-otp", { method: "POST", body: JSON.stringify(body) }),

  login: (body: { email: string; password: string }) =>
    request<{ token: string; user: User }>("/auth/login", { method: "POST", body: JSON.stringify(body) }),

  forgotPassword: (body: { email: string }) =>
    request("/auth/forgot-password", { method: "POST", body: JSON.stringify(body) }),

  resetPassword: (body: { email: string; otp: string; newPassword: string }) =>
    request("/auth/reset-password", { method: "POST", body: JSON.stringify(body) }),
};

// User APIs
export const userApi = {
  getProfile: () => request<{ user: User }>("/user/profile"),

  updateProfile: (body: Partial<User>) =>
    request<{ user: User }>("/user/profile", { method: "PUT", body: JSON.stringify(body) }),

  changePassword: (body: { currentPassword: string; newPassword: string }) =>
    request("/user/change-password", { method: "PUT", body: JSON.stringify(body) }),
};

export interface User {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
