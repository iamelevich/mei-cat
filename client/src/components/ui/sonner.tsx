import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			theme={undefined}
			className="toaster group"
			toastOptions={{
				unstyled: true,
				classNames: {
					toast:
						"group toast grid w-full grid-cols-[auto_1fr] items-start gap-x-4 rounded-lg border bg-background p-4 text-foreground shadow-lg [&_:is([data-buttons],[data-action])]:col-start-2 [&_:is([data-buttons],[data-action])]:mt-2 [&_:is([data-buttons],[data-action])]:flex [&_:is([data-buttons],[data-action])]:gap-2",
					title: "text-sm font-semibold",
					description: "text-sm text-muted-foreground",
					actionButton:
						"inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground",
					cancelButton:
						"inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-muted px-3 text-xs font-medium text-muted-foreground",
					closeButton:
						"absolute right-2 top-2 rounded-full p-1.5 text-foreground/50 opacity-0 transition-opacity hover:bg-accent hover:text-foreground group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2",
					loader:
						"h-5 w-5 animate-spin rounded-full border-4 border-muted border-t-primary",
					success:
						"!border-green-500 !bg-green-50 !text-green-600 dark:!border-green-800 dark:!bg-green-950 dark:!text-green-400",
					info: "!border-blue-500 !bg-blue-50 !text-blue-600 dark:!border-blue-800 dark:!bg-blue-950 dark:!text-blue-400",
					warning:
						"!border-yellow-500 !bg-yellow-50 !text-yellow-600 dark:!border-yellow-800 dark:!bg-yellow-950 dark:!text-yellow-400",
					error:
						"!border-red-500 !bg-red-50 !text-red-600 dark:!border-red-800 dark:!bg-red-950 dark:!text-red-400",
					icon: "h-5 w-5 shrink-0",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
