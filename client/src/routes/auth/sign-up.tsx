import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "@/components/RegisterForm";

export const Route = createFileRoute("/auth/sign-up")({
	component: RouteComponent,
});

function RouteComponent() {
	return <RegisterForm />;
}
