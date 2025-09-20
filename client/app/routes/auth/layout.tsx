import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">MEI Catalog</h1>
      </div>

      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
