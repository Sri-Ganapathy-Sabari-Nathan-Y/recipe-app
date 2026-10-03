import { Link } from "react-router-dom";
import type { Recipe } from "../types/RecipeList";

interface FavoriteRecipeCardProps {
  recipe: Recipe;
}

export const FavoriteRecipeCard = ({
  recipe,
}: FavoriteRecipeCardProps) => {
  return (
    <Link
      to={`/recipe/${recipe.idMeal}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:border-primary"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="p-4">
        <h2 className="truncate text-lg font-bold text-text-primary group-hover:text-primary">
          {recipe.strMeal}
        </h2>

        <div className="mt-3 flex gap-2">
          {recipe.strCategory && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {recipe.strCategory}
            </span>
          )}

          {recipe.strArea && (
            <span className="rounded-full bg-surface-hover px-3 py-1 text-xs text-text-secondary">
              {recipe.strArea}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};