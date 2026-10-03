import { Link } from "react-router-dom";
import type { Recipe } from "../types/RecipeList";

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link
      to={`/recipe/${recipe.idMeal}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h2 className="truncate text-lg font-bold text-text-primary group-hover:text-primary">
          {recipe.strMeal}
        </h2>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {recipe.strCategory}
          </span>

          <span className="text-sm text-text-secondary">
            {recipe.strArea}
          </span>
        </div>
      </div>
    </Link>
  );
};