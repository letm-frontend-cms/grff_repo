// Centralized API URL config
// export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://grff-dwzp1keky-ankits-projects-9297b5c9.vercel.app/api" || "http://localhost:5000/api";
// export const API_URL = "http://localhost:5000/api";
export const API_URL = "https://grff-mm.vercel.app/api";

// Auth helpers from grff-auth-lib
// (Make sure grff-auth-lib is installed in your project)
import { getSession, logout } from "grff-auth-lib";

export { getSession, logout };
