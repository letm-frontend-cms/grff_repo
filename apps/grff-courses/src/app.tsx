import { CoursesPage } from './pages/CoursesPage';

// grff-auth-lib's getSession() reads this key to know where the backend lives.
const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5001/api';
try {
  localStorage.setItem('GRFF_API_URL', API_BASE);
} catch {}

export function App() {
  return (
    <div class="min-h-screen bg-[#05010d] text-white">
      <CoursesPage />
    </div>
  );
}
