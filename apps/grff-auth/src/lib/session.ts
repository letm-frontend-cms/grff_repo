import { userApi, authApi, User } from "@/lib/api";

export async function getSession(): Promise<User | null> {
	try {
		const res = await userApi.getProfile();
		return res.data?.user ?? null;
	} catch {
		return null;
	}
}

export async function logout(): Promise<void> {
	await authApi.logout();
}
