import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Illustration */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface text-5xl shadow-lg sm:h-28 sm:w-28 sm:text-6xl">
            🍳
          </div>
        </div>

        {/* Error Code */}
        <p className="text-7xl font-extrabold tracking-tight text-primary sm:text-8xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
          Recipe Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-text-secondary sm:text-base">
          Looks like this recipe has disappeared from the kitchen. Let's get you
          back to something delicious.
        </p>

        {/* Action */}
        <div className="mt-8">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-background
              transition
              hover:bg-primary-hover
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:ring-offset-2
              focus:ring-offset-background
            "
          >
            <span className="mr-2">←</span>
            Back to Recipes
          </Link>
        </div>
      </div>
    </main>
  );
};