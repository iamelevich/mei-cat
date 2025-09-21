import { createFileRoute } from "@tanstack/react-router";
import { MEITable } from "@/components/MEITable";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/app/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<SiteHeader title="MEI Files" />
			<div className="flex flex-1 flex-col">
				<div className="@container/main flex flex-1 flex-col gap-2">
					<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
						<MEITable />
					</div>
				</div>
			</div>
		</>
	);
}
