// Centralized API URL config
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

// Auth helpers from grff-auth-lib
// (Make sure grff-auth-lib is installed in your project)
import { getSession, logout } from "grff-auth-lib";

export { getSession, logout };
