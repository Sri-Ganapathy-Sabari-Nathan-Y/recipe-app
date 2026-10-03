import type { Recipe } from "../types/RecipeList";
import { FavoriteButton } from "./FavoriteButton";

interface RecipeDetailsCardProps {
  recipe: Recipe;
}

export const RecipeDetailsCard = ({
  recipe,
}: RecipeDetailsCardProps) => {
  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const ingredient =
      recipe[`strIngredient${index + 1}` as keyof Recipe];

    const measure =
      recipe[`strMeasure${index + 1}` as keyof Recipe];

    return {
      ingredient:
        typeof ingredient === "string"
          ? ingredient.trim()
          : "",
      measure:
        typeof measure === "string"
          ? measure.trim()
          : "",
    };
  }).filter((item) => item.ingredient);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <div className="p-5 sm:p-8">
        <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
          {recipe.strMeal}
        </h1>

        <FavoriteButton recipe={recipe} />

        <div className="mt-4 flex flex-wrap gap-3">
          {recipe.strCategory && (
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              {recipe.strCategory}
            </span>
          )}

          {recipe.strArea && (
            <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
              {recipe.strArea}
            </span>
          )}
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-text-primary">
            Ingredients
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-background p-3"
              >
                <span className="font-medium text-text-primary">
                  {item.ingredient}
                </span>

                {item.measure && (
                  <span className="ml-2 text-text-secondary">
                    — {item.measure}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-text-primary">
            Instructions
          </h2>

          <p className="mt-4 whitespace-pre-line leading-7 text-text-secondary">
            {recipe.strInstructions}
          </p>
        </section>

        {recipe.strYoutube && (
          <section className="mt-10">
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-background hover:bg-primary-hover"
            >
              Watch Recipe Video
            </a>
          </section>
        )}
      </div>
    </div>
  );
};