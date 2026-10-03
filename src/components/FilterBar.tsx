import type { Recipe } from "../types/RecipeList";
import type { Dispatch, SetStateAction } from "react";

interface FilterBarProps {
  ingredients: string;
  setIngredients: Dispatch<SetStateAction<string>>;

  categories: string;
  setCategories: Dispatch<SetStateAction<string>>;

  meal: string;
  setMeal: Dispatch<SetStateAction<string>>;
  recipeListData: Recipe[];
}

export const Filter = ({
  ingredients,
  setIngredients,
  categories,
  setCategories,
  meal,
  setMeal,
  recipeListData,
}: FilterBarProps) => {
  const ingredientsList = Array.from(
    new Set(
      recipeListData.flatMap((recipe) =>
        Array.from({ length: 20 }, (_, index) => {
          return recipe[`strIngredient${index + 1}` as keyof Recipe] as
            | string
            | null;
        }).filter((ingredient): ingredient is string => Boolean(ingredient)),
      ),
    ),
  );

  const categoriesList = Array.from(
    new Set(recipeListData.map((recipe) => recipe.strCategory).filter(Boolean)),
  );

  const mealList = Array.from(
    new Set(recipeListData.map((recipe) => recipe.strArea).filter(Boolean)),
  );

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Ingredient */}
      <select
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary outline-none focus:border-primary"
      >
        <option value="">All Ingredients</option>

        {ingredientsList.map((ingredient) => (
          <option key={ingredient} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>

      {/* Category */}
      <select
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary outline-none focus:border-primary"
      >
        <option value="">All Categories</option>

        {categoriesList.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Meal / Area */}
      <select
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary outline-none focus:border-primary"
      >
        <option value="">All Meals</option>

        {mealList.map((mealName) => (
          <option key={mealName} value={mealName}>
            {mealName}
          </option>
        ))}
      </select>
    </div>
  );
};
