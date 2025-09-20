import { useId } from "react";
import type { Route } from "./+types/forgot-password";

export function loader() {
  return { title: "Forgot Password" };
}

export default function ForgotPassword({ loaderData }: Route.ComponentProps) {
  const emailId = useId();

  return (
    <>
      <h2 className="card-title text-xl font-semibold mb-6">
        {loaderData.title}
      </h2>

          <div className="text-center mb-6">
            <p className="text-base-content/70">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

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

            <div className="card-actions form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Send Reset Link
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p className="text-sm text-base-content/70 mb-2">
              Remember your password?
            </p>
            <a href="/auth/login" className="link link-primary">
              Back to Login
            </a>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-base-content/70 mb-2">
              Don't have an account?
            </p>
            <a href="/auth/signup" className="link link-secondary text-sm">
              Sign up here
            </a>
          </div>
    </>
  );
}
