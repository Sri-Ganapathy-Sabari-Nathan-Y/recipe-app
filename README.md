🍳 Recipe App

A dynamic and responsive recipe application built with React.js and Tailwind CSS. The app allows users to discover, search, filter, and explore recipes using data from TheMealDB API.

✨ Features

🔍 Search recipes by name or keyword

🥗 Browse recipes with a clean, responsive UI

🏷️ Filter recipes by category and meal type

📖 View complete recipe details

🧂 Display ingredients and measurements

▶️ Watch recipe videos when available

❤️ Save recipes as favorites

💾 Persist favorites using localStorage

📱 Fully responsive design

⚡ Fast API-based recipe loading

🛠️ Tech Stack

React.js

Tailwind CSS

Axios / Fetch API

TheMealDB API

JavaScript

LocalStorage

🌐 API

This project uses TheMealDB public API:

https://www.themealdb.com/api.php

📂 Project Structure
src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── App.jsx
├── main.jsx
└── index.css

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js

npm

Installation

Clone the repository:

git clone <your-github-repository-url>

Navigate to the project directory:

cd recipe-app

Install dependencies:

npm install

Start the development server:

npm run dev

The application will be available at the local development URL shown in your terminal.

🔎 How It Works

Browse available recipes on the home page.

Search for recipes using the search bar.

Apply filters to refine recipe results.

Select a recipe to view detailed information.

Add recipes to favorites for quick access later.

Favorites are stored in browser localStorage.

📱 Responsive Design

The application is designed to provide a smooth experience across:

📱 Mobile devices

📲 Tablets

💻 Desktop screens

🚀 Deployment

The application can be deployed using Netlify.

Build the project:

npm run build

Upload the generated dist folder to Netlify or connect your GitHub repository for automatic deployment.

📸 Screenshots

Add screenshots of your application here:

screenshots/
├── home.png
├── search.png
├── recipe-details.png
└── favorites.png

🔗 Links

Live Demo: <your-netlify-url>

GitHub Repository: <your-github-repository-url>

📄 License

# This project was created for educational and assessment purposes.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
# recipe-app
