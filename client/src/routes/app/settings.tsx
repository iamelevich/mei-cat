import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/app/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<SiteHeader title="Settings" />
			<div className="flex flex-1 flex-col">
				<div className="@container/main flex flex-1 flex-col gap-2">
					<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
						<h2 className="text-2xl font-bold text-center">No settings yet</h2>
					</div>
				</div>
			</div>
		</>
	);
}
