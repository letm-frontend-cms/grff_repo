"use client";

import { useEffect, useState } from "react";
import { userApi, User } from "@/lib/api";

export function useSession() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;
		userApi.getProfile()
			.then(res => {
				if (mounted) setUser(res.data?.user ?? null);
			})
			.catch(() => {
				if (mounted) setUser(null);
			})
			.finally(() => {
				if (mounted) setLoading(false);
			});
		return () => { mounted = false; };
	}, []);

	return { user, loading };
}
