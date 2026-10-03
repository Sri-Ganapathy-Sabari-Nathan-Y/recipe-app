import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { RecipeDetails } from "../pages/RecipeDetails";
import { Favorites } from "../pages/Favorites";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
