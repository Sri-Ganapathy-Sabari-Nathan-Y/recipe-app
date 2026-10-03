import { useState } from "react";
import { Link } from "react-router-dom";
import type { Recipe } from "../types/RecipeList";
import { FavoriteRecipeCard } from "../components/FavoriteRecipeCard";

const FAVORITES_KEY = "recipeFavorites";

export const Favorites = () => {
  const [favorites] = useState<Recipe[]>(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);

    if (!storedFavorites) {
      return [];
    }

    return JSON.parse(storedFavorites);
  });

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-text-primary">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="mt-10 text-center">
            <p className="text-5xl">♡</p>

            <h2 className="mt-4 text-xl font-bold text-text-primary">
              No Favorites Yet
            </h2>

            <p className="mt-2 text-text-secondary">
              Add some recipes to your favorites.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-background hover:bg-primary-hover"
            >
              Browse Recipes
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((recipe) => (
              <FavoriteRecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};