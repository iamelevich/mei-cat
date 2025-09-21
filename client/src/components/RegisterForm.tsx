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

const SignUpSchema = v.pipe(
	v.object({
		name: v.pipe(
			v.string("Name is required"),
			v.minLength(2, "Name must be at least 2 characters"),
			v.maxLength(100, "Name must be less than 100 characters"),
			v.trim(),
		),
		email: v.pipe(
			v.string("Email is required"),
			v.email("Please enter a valid email address"),
			v.maxLength(255, "Email must be less than 255 characters"),
			v.trim(),
		),
		password: v.pipe(
			v.string("Password is required"),
			v.minLength(8, "Password must be at least 8 characters"),
			v.maxLength(128, "Password must be less than 128 characters"),
			v.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				"Password must contain at least one uppercase letter, one lowercase letter, and one number",
			),
		),
		confirmPassword: v.string("Please confirm your password"),
	}),
	v.forward(
		v.partialCheck(
			[["password"], ["confirmPassword"]],
			(input) => input.password === input.confirmPassword,
			"The two passwords do not match.",
		),
		["confirmPassword"],
	),
);

export function RegisterForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const navigate = useNavigate();
	const form = useAppForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validators: {
			onChange: SignUpSchema,
		},
		onSubmit: async ({ value }) => {
			const result = await authClient.signUp.email({
				email: value.email,
				password: value.password,
				name: value.name,
			});

			if (result.error) {
				toast.error(`${result.error.status}: ${result.error.statusText}`, {
					description: result.error.message,
				});
			} else {
				toast.success("Account created successfully");
				navigate({ to: "/" });
			}
		},
	});
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Create an account</CardTitle>
					<CardDescription>
						Enter your information below to create your account
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
							<form.AppField name="name">
								{(field) => (
									<field.TextField label="Name" placeholder="John Doe" />
								)}
							</form.AppField>
							<form.AppField name="email">
								{(field) => (
									<field.TextField
										label="Email"
										type="email"
										placeholder="john.doe@example.com"
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
							<form.AppField name="confirmPassword">
								{(field) => (
									<field.TextField
										label="Confirm Password"
										type="password"
										placeholder="Confirm your password"
									/>
								)}
							</form.AppField>
							<div className="flex flex-col gap-3">
								<form.AppForm>
									<form.SubscribeButton label="Create Account" />
								</form.AppForm>
							</div>
						</div>
						<div className="mt-4 text-center text-sm">
							Already have an account?{" "}
							<Link to="/auth/sign-in" className="underline underline-offset-4">
								Sign in
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
