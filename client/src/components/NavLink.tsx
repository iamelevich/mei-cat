import { Link, type LinkProps } from "@tanstack/react-router";

export type NavLinkProps =
	| (Omit<LinkProps, "to"> & {
			external: false;
			url: string;
	  })
	| (Omit<React.ComponentProps<"a">, "href"> & {
			external: true;
			url: string;
	  });

export function NavLink({ children, external, url, ...props }: NavLinkProps) {
	if (external) {
		return (
			<a href={url} target={props.target} {...props} rel="noopener noreferrer">
				{children}
			</a>
		);
	}
	return (
		<Link
			to={url as LinkProps["to"]}
			activeProps={{
				className: "bg-accent text-accent-foreground",
			}}
			activeOptions={{
				exact: true,
			}}
			{...props}
		>
			{children}
		</Link>
	);
}
