@echo off
setlocal

REM Ensure this script runs from the repository root.
cd /d "%~dp0"

where pnpm >nul 2>&1
if errorlevel 1 (
  echo pnpm not found on PATH. Install pnpm and try again.
  exit /b 1
)

echo Starting apps in separate windows...

start "grff-homepage" cmd /k "pnpm --filter grff-homepage dev"
start "grff-auth" cmd /k "pnpm --filter grff-auth dev"
start "nav-app" cmd /k "pnpm --filter nav-app dev"
start "profile-app" cmd /k "pnpm --filter profile-app dev"
start "backend" cmd /k "pnpm --filter letm-grff-backend dev"
start "root-config" cmd /k "pnpm --filter root-config dev"
start "cms" cmd /k "pnpm --filter cms dev"
start "grff-courses" cmd /k "pnpm --filter grff-courses dev"
start "blog-app" cmd /k "pnpm --filter blog-app dev"
start "blog-admin-app" cmd /k "pnpm --filter blog-admin-app dev"

echo All start commands launched. Close the app windows individually when finished.
endlocal
