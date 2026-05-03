// Centralized API calls for the Profile microfrontend

// Hardcoded token for development purposes (should ideally be moved to an environment variable or auth context)
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjE5YWFlNWUwYTliN2Y4ODIzMGU1NyIsImlhdCI6MTc3NzQ0MTUyMCwiZXhwIjoxNzc4MDQ2MzIwfQ.6njB7vwmgTIav-W4SzEaDO8QjrYYmcixCQ3Vjxr3JL8';

const defaultHeaders = {
  'Authorization': `Bearer ${TOKEN}`,
  'Content-Type': 'application/json'
};

export const api = {
  /**
   * Fetches the user profile data
   */
  async getUserProfile() {
    const response = await fetch('/api/user/profile', {
      headers: defaultHeaders
    });
    return response.json();
  },

  /**
   * Updates the user profile data
   * @param payload Object containing profile fields to update
   */
  async updateUserProfile(payload: { name?: string; username?: string; bio?: string; location?: string; website?: string }) {
    const response = await fetch('/api/user/profile', {
      method: 'PUT',
      headers: defaultHeaders,
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    return { response, data };
  },

  /**
   * Fetches the user's enrolled courses (both in-progress and completed)
   */
  async getUserCourses() {
    const response = await fetch('/api/user/courses', {
      headers: defaultHeaders
    });
    return response.json();
  },

  /**
   * Fetches the user's test history
   */
  async getUserTestHistory() {
    const response = await fetch('/api/user/tests', {
      headers: defaultHeaders
    });
    return response.json();
  }
};
