import {
	IconApi,
	IconInnerShadowTop,
	IconMusic,
	IconSchema,
	IconSettings,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type * as React from "react";
import { NavMain } from "@/components/NavMain";
import { NavSecondary } from "@/components/NavSecondary";
import { NavUser } from "@/components/NavUser";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	navMain: [
		{
			title: "MEI Files",
			url: "/app",
			icon: IconMusic,
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "/app/settings",
			icon: IconSettings,
		},
		{
			title: "MEI Schema Definition",
			url: "https://music-encoding.org/guidelines/v5/content/index.html",
			target: "_blank",
			external: true,
			icon: IconSchema,
		},
		{
			title: "Server API",
			url: "/openapi",
			target: "_blank",
			external: true,
			icon: IconApi,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<Link to="/">
								<IconInnerShadowTop className="!size-5" />
								<span className="text-base font-semibold">MEI Catalogue</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
