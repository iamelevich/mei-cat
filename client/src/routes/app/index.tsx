import type { MeiListItem } from "@mei-cat/server";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { MEITable } from "@/components/MEITable";
import { SiteHeader } from "@/components/SiteHeader";
import { app } from "@/lib/app";

export const Route = createFileRoute("/app/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["mei-files"],
		queryFn: () => app.api.mei.get(),
	});

	if (isLoading) {
		return (
			<>
				<SiteHeader title="MEI Files" />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<div className="flex items-center justify-center h-32">
								<div className="text-muted-foreground">
									Loading MEI files...
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (error) {
		return (
			<>
				<SiteHeader title="MEI Files" />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<div className="flex items-center justify-center h-32">
								<div className="text-destructive">Error loading MEI files</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	// Transform the API response data to match our MeiTable schema
	const meiFiles =
		data?.data?.data.map((file: MeiListItem) => ({
			id: file.id,
			title: file.title || [],
			createdAt: new Date(file.createdAt),
			updatedAt: new Date(file.updatedAt),
		})) || [];

	return (
		<>
			<SiteHeader title="MEI Files" />
			<div className="flex flex-1 flex-col">
				<div className="@container/main flex flex-1 flex-col gap-2">
					<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
						<MEITable data={meiFiles} />
					</div>
				</div>
			</div>
		</>
	);
}
