import { IconDotsVertical, IconLogout } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";

/**
 * Get the initials from a name
 * @param name - The name to get the initials from
 * @returns The initials
 */
function getInitials(name: string) {
	if (!name) return "MC";
	const parts = name.split(" ").filter((part) => part.length >= 1);
	if (parts.length === 0) return "MC";
	if (parts.length === 1) {
		return parts[0].slice(0, 2).toUpperCase();
	}
	return parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase();
}

export function NavUser() {
	const navigate = useNavigate();
	const { isMobile } = useSidebar();
	const { data: session } = authClient.useSession();

	if (!session) return null;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg grayscale">
								<AvatarImage
									src={session.user.image ?? undefined}
									alt={session.user.name}
								/>
								<AvatarFallback className="rounded-lg">
									{getInitials(session.user.name)}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">
									{session.user.name}
								</span>
								<span className="text-muted-foreground truncate text-xs">
									{session.user.email}
								</span>
							</div>
							<IconDotsVertical className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										src={session.user.image ?? undefined}
										alt={session.user.name}
									/>
									<AvatarFallback className="rounded-lg">
										{getInitials(session.user.name)}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">
										{session.user.name}
									</span>
									<span className="text-muted-foreground truncate text-xs">
										{session.user.email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						{/* <DropdownMenuGroup>
							<DropdownMenuItem>
								<IconUserCircle />
								Account
							</DropdownMenuItem>
							<DropdownMenuItem>
								<IconCreditCard />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem>
								<IconNotification />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator /> */}
						<DropdownMenuItem
							variant="destructive"
							onClick={async () => {
								await authClient.signOut();
								navigate({ to: "/auth/sign-in" });
							}}
						>
							<IconLogout />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
