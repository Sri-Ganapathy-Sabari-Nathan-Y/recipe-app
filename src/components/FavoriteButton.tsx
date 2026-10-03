import { useState } from "react";
import type { Recipe } from "../types/RecipeList";

interface FavoriteButtonProps {
  recipe: Recipe;
}

const FAVORITES_KEY = "recipeFavorites";

export const FavoriteButton = ({ recipe }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);

    if (!storedFavorites) {
      return false;
    }

    const favorites: Recipe[] = JSON.parse(storedFavorites);

    return favorites.some((item) => item.idMeal === recipe.idMeal);
  });

  const handleFavorite = () => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);

    const favorites: Recipe[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (item) => item.idMeal !== recipe.idMeal,
      );

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));

      setIsFavorite(false);
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, recipe];

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));

      setIsFavorite(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFavorite}
      className="mt-5 rounded-lg border border-border bg-background px-5 py-3 font-semibold text-text-primary transition hover:border-primary hover:text-primary"
    >
      {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
    </button>
  );
};
