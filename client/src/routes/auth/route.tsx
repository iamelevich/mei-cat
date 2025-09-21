import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
	component: AppLayoutComponent,
});

function AppLayoutComponent() {
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<h1 className="text-3xl font-bold text-center mb-2">MEI Catalogue</h1>
				<Outlet />
			</div>
		</div>
	);
}
