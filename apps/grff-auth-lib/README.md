# grff-auth-lib

A simple authentication library for GRFF projects.

## Installation

```bash
npm install grff-auth-lib
```

## Usage

### React Hook
```js
import { useSession } from 'grff-auth-lib/react';

const session = useSession();
```


### Auth Functions in a React Component
```jsx
import { useEffect, useState } from "react";
import { getSession, logout } from "grff-auth-lib";

export default function HomePage() {
	const [loadingSession, setLoadingSession] = useState(true);
	const [sessionUser, setSessionUser] = useState(null);

	useEffect(() => {
		let mounted = true;
		const checkSession = async () => {
			try {
				if (!mounted) return;
				const user = await getSession();
				setSessionUser(user);
			} catch {
				if (mounted) setSessionUser(null);
			} finally {
				if (mounted) setLoadingSession(false);
			}
		};
		void checkSession();
		return () => { mounted = false; };
	}, []);

	const handleLogout = async () => {
		try {
			await logout();
		} finally {
			setSessionUser(null);
			window.location.href = "/login";
		}
	};

	return (
		<div>
			{loadingSession ? "Checking session..." : sessionUser ? `Active: ${sessionUser.name}` : "No active session"}
			{sessionUser && <button onClick={handleLogout}>Logout</button>}
		</div>
	);
}
```

---

See the documentation or source code for more details.
