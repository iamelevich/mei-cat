import { type Icon, IconCirclePlusFilled } from "@tabler/icons-react";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "./NavLink";
import { UploadMeiFileDialog } from "./UploadMeiFileDialog";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		external?: boolean;
		icon?: Icon;
	}[];
}) {
	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu>
					<SidebarMenuItem className="flex items-center gap-2">
						<UploadMeiFileDialog>
							<SidebarMenuButton
								tooltip="Quick Create"
								className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
							>
								<IconCirclePlusFilled />
								<span>Upload MEI File</span>
							</SidebarMenuButton>
						</UploadMeiFileDialog>
					</SidebarMenuItem>
				</SidebarMenu>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton tooltip={item.title} asChild>
								<NavLink url={item.url} external={item.external ?? false}>
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
