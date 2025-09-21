import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/LoginForm";

export const Route = createFileRoute("/auth/sing-in")({
	component: SignIn,
});

function SignIn() {
	return <LoginForm />;
}
