import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl">🍳</span>

          <span className="text-xl font-bold text-text-primary">
            Recipe<span className="text-primary">App</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-surface text-primary"
                  : "text-text-secondary hover:bg-surface hover:text-text-primary"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-surface text-primary"
                  : "text-text-secondary hover:bg-surface hover:text-text-primary"
              }`
            }
          >
            <span className="mr-1">♡</span>
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
