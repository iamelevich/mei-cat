import { TanstackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	Outlet,
	redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Toaster } from "@/components/ui/sonner";
import { authClient } from "@/lib/auth-client";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	beforeLoad: async ({ location }) => {
		const { data: session, error } = await authClient.getSession();
		if (error || (!session && !location.pathname.startsWith("/auth"))) {
			throw redirect({
				to: "/auth/sign-in",
			});
		}
	},
	component: Layout,
});

function Layout() {
	return (
		<>
			<Outlet />
			<Toaster />
			<TanstackDevtools
				config={{
					position: "bottom-left",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
					TanStackQueryDevtools,
				]}
			/>
		</>
	);
}
