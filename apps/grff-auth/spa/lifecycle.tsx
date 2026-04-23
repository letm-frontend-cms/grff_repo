import React from "react";
import { createRoot, type Root } from "react-dom/client";
import Providers from "../src/app/providers";
import LoginPage from "../src/app/login/page";
import SignupPage from "../src/app/signup/page";
import VerifyEmailPage from "../src/app/verify-email/page";
import ForgotPasswordPage from "../src/app/forgot-password/page";
import ResetPasswordPage from "../src/app/reset-password/page";
import DashboardPage from "../src/app/dashboard/page";
import "../src/app/globals.css";

let root: Root | null = null;

function AppRoutes() {
  const path = window.location.pathname;

  let content: React.ReactNode;
  if (path === "/login") content = <LoginPage />;
  else if (path === "/signup") content = <SignupPage />;
  else if (path === "/verify-email") content = <VerifyEmailPage />;
  else if (path === "/forgot-password") content = <ForgotPasswordPage />;
  else if (path === "/reset-password") content = <ResetPasswordPage />;
  else if (path === "/dashboard") content = <DashboardPage />;
  else content = <LoginPage />;

  return (
    <Providers>
      {content}
    </Providers>
  );
}

export async function bootstrap() {}

export async function mount() {
  const container = document.getElementById("mf-root");
  if (!container) {
    throw new Error("mf-root not found");
  }

  root = createRoot(container);
  root.render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
}

export async function unmount() {
  root?.unmount();
  root = null;
}
