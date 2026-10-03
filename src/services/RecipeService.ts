import axios from "axios";
import type { RecipeResponse } from "../types/RecipeList";

export const recipeApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_API_KEY,
});

export const recipeList = async (params = {}) => {
  const response = await recipeApi.get<RecipeResponse>("/search.php", {
    params,
  });

  return response.data.meals || [];
};

export const recipeDetails = async (params = {}) => {
  const response = await recipeApi.get<RecipeResponse>("/lookup.php", {
    params,
  });

  return response.data.meals || [];
};