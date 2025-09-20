import { useId } from "react";
import type { Route } from "./+types/login";

export function loader() {
  return { title: "Login" };
}

export default function Login({ loaderData }: Route.ComponentProps) {
  const emailId = useId();
  const passwordId = useId();
  return (
    <>
      <h2 className="card-title text-xl font-semibold mb-6">
        {loaderData.title}
      </h2>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label" htmlFor={emailId}>
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id={emailId}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor={passwordId}>
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id={passwordId}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </div>

            <div className="card-actions form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p className="text-sm text-base-content/70 mb-2">
              Don't have an account?
            </p>
            <a href="/auth/signup" className="link link-primary">
              Sign up here
            </a>
          </div>

          <div className="text-center mt-4">
            <a href="/auth/forgot-password" className="link link-secondary text-sm">
              Forgot your password?
            </a>
          </div>
    </>
  );
}
