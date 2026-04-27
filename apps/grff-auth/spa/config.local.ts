// Local dev override for the ESM lifecycle bundle.
// Colleague's config.js points to the deployed Vercel API; we want local.
export const API_URL = "http://localhost:5001/api";

// Re-export grff-auth-lib helpers so consumers importing from config work.
export { getSession, logout } from "grff-auth-lib";
