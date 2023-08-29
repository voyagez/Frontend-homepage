import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="m-5">
      <h1 className="text-xl">Error</h1>
      <p className="text-xs mb-2">Something went wrong.</p>
      <p className="mb-3">
        <code>
          {error.status}: {error.statusText}
        </code>
      </p>
      <Link href="/">Take me home</Link>
      <footer className="mt-4 text-xs"></footer>
    </div>
  );
}
