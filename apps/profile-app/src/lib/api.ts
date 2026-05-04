// Centralized API calls for the Profile microfrontend

const defaultHeaders = {
  "Content-Type": "application/json",
};

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const api = {
  /**
   * Fetches the user profile data
   */
  async getUserProfile() {
    const response = await fetch(`${API_BASE}/api/user/profile`, {
      headers: defaultHeaders,
      credentials: "include",
    });
    return response.json();
  },

  /**
   * Updates the user profile data
   * @param payload Object containing profile fields to update
   */
  async updateUserProfile(payload: {
    name?: string;
    username?: string;
    bio?: string;
    location?: string;
    website?: string;
  }) {
    const response = await fetch(`${API_BASE}/api/user/profile`, {
      method: "PUT",
      headers: defaultHeaders,
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return { response, data };
  },

  /**
   * Fetches the user's enrolled courses (both in-progress and completed)
   */
  async getUserCourses() {
    const response = await fetch(`${API_BASE}/api/user/courses`, {
      headers: defaultHeaders,
      credentials: "include",
    });
    return response.json();
  },

  /**
   * Fetches the user's test history
   */
  async getUserTestHistory() {
    const response = await fetch(`${API_BASE}/api/user/tests`, {
      headers: defaultHeaders,
      credentials: "include",
    });
    return response.json();
  },
};
