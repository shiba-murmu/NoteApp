import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white px-4">
      <h1 className="text-8xl font-bold text-(--primary)">404</h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-zinc-400 mt-2 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-(--primary) hover:bg-(--primary-hover) px-6 py-3 rounded-lg transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;