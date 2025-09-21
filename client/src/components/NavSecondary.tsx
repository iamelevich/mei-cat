"use client";

import type { Icon } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type * as React from "react";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "./NavLink";

export function NavSecondary({
	items,
	...props
}: {
	items: {
		title: string;
		url: string;
		target?: React.ComponentProps<"a">["target"];
		external?: boolean;
		icon: Icon;
	}[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<NavLink
									url={item.url}
									external={item.external ?? false}
									target={item.target}
								>
									{item.icon && <item.icon />}
									<span>{item.title}</span>
								</NavLink>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
