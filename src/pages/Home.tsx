import type { Recipe } from "../types/RecipeList";
import { useEffect, useState } from "react";
import { recipeList } from "../services/RecipeService";
import { Search } from "../components/SearchBar";
import { Filter } from "../components/FilterBar";
import { RecipeList } from "../components/RecipeList";

export const Home = () => {
  const [recipeListData, setRecipeListData] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [categories, setCategories] = useState("");
  const [meal, setMeal] = useState("");
  useEffect(() => {
    const fetchRecipeList = async () => {
      const response = await recipeList({
        s: search,
      });
      setRecipeListData(response);
    };
    fetchRecipeList();
  }, [search]);
  const filteredRecipes = recipeListData.filter((recipe) => {
    const matchesSearch = recipe.strMeal
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categories === "" || recipe.strCategory === categories;

    const matchesMeal = meal === "" || recipe.strArea === meal;

    const matchesIngredient =
      ingredients === "" ||
      Array.from({ length: 20 }, (_, index) => {
        const ingredient = recipe[`strIngredient${index + 1}` as keyof Recipe];

        return typeof ingredient === "string" ? ingredient.toLowerCase() : "";
      }).includes(ingredients.toLowerCase());

    return matchesSearch && matchesCategory && matchesMeal && matchesIngredient;
  });
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
            recipeListData={filteredRecipes}
          />

          <RecipeList recipeListData={filteredRecipes} />
        </div>
      </main>
    </>
  );
};
