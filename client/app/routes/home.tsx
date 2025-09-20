export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary">MEI Catalog</h1>
        <p className="text-xl text-base-content/70 mb-8">Welcome to the Music Encoding Initiative Catalog</p>

        <div className="flex flex-col items-center space-y-4">
          <a
            className="btn btn-primary btn-lg w-32"
            href="/auth/login"
          >
            Login
          </a>

          <div className="divider w-48">OR</div>

          <a
            className="link link-primary text-lg"
            href="https://reactrouter.com/docs"
          >
            React Router Docs
          </a>
        </div>
      </div>
    </div>
  );
}
