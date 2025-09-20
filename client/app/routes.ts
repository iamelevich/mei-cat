import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	...prefix("auth", [
		layout("routes/auth/layout.tsx", [
			route("login", "routes/auth/login.tsx"),
			route("signup", "routes/auth/signup.tsx"),
			route("forgot-password", "routes/auth/forgot-password.tsx"),
		]),
	]),
] satisfies RouteConfig;
