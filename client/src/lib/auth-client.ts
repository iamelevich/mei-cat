import { redirect } from "@tanstack/react-router";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	// baseURL: import.meta.env.VITE_BETTER_AUTH_URL || "http://localhost:3000",
});

/**
 * Can be used as a loader for the root route to ensure the user is authenticated
 * @returns The session data
 */
export const sessionLoader = async () => {
	const { data: session, error } = await authClient.getSession();
	if (error || !session) {
		throw redirect({
			to: "/auth/sign-in",
		});
	}
	return { session };
};
