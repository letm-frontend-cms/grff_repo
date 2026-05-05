#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APPS=(
  grff-homepage
  grff-auth
  nav-app
  profile-app
  backend
  root-config
  cms
  grff-courses
  blog-app
  blog-admin-app
)

pids=()

cleanup() {
  echo "\nStopping all apps..."
  if [ "${#pids[@]}" -gt 0 ]; then
    kill "${pids[@]}" 2>/dev/null || true
    wait "${pids[@]}" 2>/dev/null || true
  fi
}

trap cleanup EXIT INT TERM

for app in "${APPS[@]}"; do
  APP_DIR="$ROOT_DIR/apps/$app"
  if [ ! -d "$APP_DIR" ]; then
    echo "Error: app directory not found: $APP_DIR" >&2
    exit 1
  fi

  (
    cd "$APP_DIR"
    echo "Starting $app..."
    pnpm dev
  ) 2>&1 | sed "s/^/[$app] /" &
  pids+=("$!")
done

echo "Started ${#APPS[@]} apps. Press Ctrl+C to stop."
wait
