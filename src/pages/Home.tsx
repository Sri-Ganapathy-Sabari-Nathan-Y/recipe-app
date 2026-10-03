import type { Recipe } from "../types/RecipeList";
import { useEffect, useState } from "react";
import { recipeList } from "../services/RecipeService";
import { Search } from "../components/SearchBar";
import { Filter } from "../components/FilterBar";
import { RecipeList } from "../components/RecipeList";

export const Home = () => {
  const [recipeListData, setRecipeListData] = useState<Recipe[]>([]);
  const [search, setSearch] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [categories, setCategories] = useState<string>("");
  const [meal, setMeal] = useState<string>("");
  useEffect(() => {
    const fetchRecipeList = async () => {
      const response = await recipeList({
        s: search,
      });
      setRecipeListData(response);
    };
    fetchRecipeList();
  }, [search]);
  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Search setSearch={setSearch} />

          <Filter
            ingredients={ingredients}
            setIngredients={setIngredients}
            categories={categories}
            setCategories={setCategories}
            meal={meal}
            setMeal={setMeal}
            recipeListData={recipeListData}
          />

          <RecipeList recipeListData={recipeListData} />
        </div>
      </main>
    </>
  );
};
