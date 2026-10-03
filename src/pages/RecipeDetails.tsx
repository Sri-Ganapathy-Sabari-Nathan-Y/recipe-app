import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { recipeDetails } from "../services/RecipeService";
import type { Recipe } from "../types/RecipeList";
import { RecipeDetailsCard } from "../components/RecipeDetailsCard";

export const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipeDetails = async () => {
      if (!id) return;

      try {
        setLoading(true);

        const data = await recipeDetails({
          i: id,
        });

        setRecipe(data[0] || null);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
        setRecipe(null);
      } finally {
        setLoading(false);
      }
    };

    getRecipeDetails();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-lg text-text-secondary">
          Loading recipe...
        </p>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <p className="text-5xl">🍳</p>

          <h1 className="mt-4 text-2xl font-bold text-text-primary">
            Recipe not found
          </h1>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-background hover:bg-primary-hover"
          >
            Back to Recipes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary"
        >
          ← Back to Recipes
        </Link>

        <RecipeDetailsCard recipe={recipe} />
      </div>
    </main>
  );
};