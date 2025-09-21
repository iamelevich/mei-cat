import { Link } from "@tanstack/react-router";
import * as v from "valibot";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAppForm } from "@/hooks/form";
import { cn } from "@/lib/utils";

const ForgotPasswordSchema = v.pipe(
	v.object({
		email: v.pipe(
			v.string("Email is required"),
			v.email("Please enter a valid email address"),
			v.maxLength(255, "Email must be less than 255 characters"),
			v.trim(),
		),
	}),
);

export function ForgotPasswordForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const form = useAppForm({
		defaultValues: {
			email: "",
		},
		validators: {
			onChange: ForgotPasswordSchema,
		},
		onSubmit: ({ value }) => {
			console.log("Password reset requested for:", value.email);
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(true);
				}, 3000);
			});
		},
	});
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Reset your password</CardTitle>
					<CardDescription>
						Enter your email address and we'll send you a link to reset your
						password
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
							<div className="flex flex-col gap-3">
								<form.AppForm>
									<form.SubscribeButton label="Send Reset Link" />
								</form.AppForm>
							</div>
						</div>
						<div className="mt-4 text-center text-sm">
							Remember your password?{" "}
							<Link to="/auth/sing-in" className="underline underline-offset-4">
								Sign in
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
