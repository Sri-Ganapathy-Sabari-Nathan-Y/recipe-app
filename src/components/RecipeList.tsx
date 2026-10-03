import type { Recipe } from "../types/RecipeList";
import { RecipeCard } from "./RecipeCard";

interface RecipeListProps {
  recipeListData: Recipe[];
}

export const RecipeList = ({ recipeListData }: RecipeListProps) => {
  if (recipeListData.length === 0) {
    return (
      <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-border bg-surface px-4 text-center">
        <span className="text-5xl">🍽️</span>

        <h2 className="mt-4 text-xl font-bold text-text-primary">
          No recipes found
        </h2>

        <p className="mt-2 text-sm text-text-secondary">
          Try changing your search or filter options.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {recipeListData.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};
