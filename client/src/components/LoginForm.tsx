import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import * as v from "valibot";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAppForm } from "@/hooks/form";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const SignInSchema = v.pipe(
	v.object({
		email: v.pipe(
			v.string("Email is required"),
			v.email("Please enter a valid email address"),
			v.maxLength(255, "Email must be less than 255 characters"),
			v.trim(),
		),
		password: v.pipe(
			v.string("Password is required"),
			v.minLength(1, "Password is required"),
		),
	}),
);

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const navigate = useNavigate();
	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onChange: SignInSchema,
		},
		onSubmit: async ({ value }) => {
			const result = await authClient.signIn.email({
				email: value.email,
				password: value.password,
			});

			if (result.error) {
				toast.error(`${result.error.status}: ${result.error.statusText}`, {
					description: result.error.message,
				});
				return;
			}

			toast.success("Logged in successfully");
			navigate({ to: "/" });
		},
	});
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
					>
						<div className="flex flex-col gap-6">
							<form.AppField name="email">
								{(field) => (
									<field.TextField
										label="Email"
										type="email"
										placeholder="m@example.com"
									/>
								)}
							</form.AppField>
							<form.AppField name="password">
								{(field) => (
									<field.TextField
										label="Password"
										type="password"
										placeholder="Enter your password"
									/>
								)}
							</form.AppField>
							<div className="flex items-center justify-end">
								<Link
									to="/auth/forgot-password"
									className="text-sm underline-offset-4 hover:underline"
								>
									Forgot your password?
								</Link>
							</div>
							<div className="flex flex-col gap-3">
								<form.AppForm>
									<form.SubscribeButton label="Login" />
								</form.AppForm>
							</div>
						</div>
						<div className="mt-4 text-center text-sm">
							Don&apos;t have an account?{" "}
							<Link to="/auth/sign-up" className="underline underline-offset-4">
								Sign up
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
