import { useId } from "react";
import type { Route } from "./+types/signup";

export function loader() {
  return { title: "Sign Up" };
}

export default function SignUp({ loaderData }: Route.ComponentProps) {
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const nameId = useId();

  return (
    <>
      <h2 className="card-title text-xl font-semibold mb-6">
        {loaderData.title}
      </h2>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label" htmlFor={nameId}>
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                id={nameId}
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

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
              <label className="label" htmlFor={confirmPasswordId}>
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                id={confirmPasswordId}
                placeholder="Confirm your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">I agree to the terms and conditions</span>
                <input type="checkbox" className="checkbox checkbox-primary" required />
              </label>
            </div>

            <div className="card-actions form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p className="text-sm text-base-content/70 mb-2">
              Already have an account?
            </p>
            <a href="/auth/login" className="link link-primary">
              Login here
            </a>
          </div>
    </>
  );
}
