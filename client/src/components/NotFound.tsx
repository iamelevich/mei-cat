import { Link } from "@tanstack/react-router";

export function NotFound() {
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm text-center">
				<h1 className="text-3xl font-bold text-center mb-2">NotFound</h1>
				<Link to="/">Go to home</Link>
			</div>
		</div>
	);
}
