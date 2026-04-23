import React from "react";
import { createRoot, type Root } from "react-dom/client";
import HomePage from "../src/components/HomePage";
import "../src/app/globals.css";
import { Header, Footer } from "grff-utils";

let root: Root | null = null;

export async function bootstrap() {}

export async function mount() {
  const container = document.getElementById("mf-root");
  if (!container) {
    throw new Error("mf-root not found");
  }

  root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Header />
      <HomePage />
      <Footer />
    </React.StrictMode>
  );
}

export async function unmount() {
  root?.unmount();
  root = null;
}
