const localStorageKey = 'savedRecipes';

export const getSavedRecipes = () => {
    const savedRecipesString = localStorage.getItem(localStorageKey);
    return savedRecipesString ? JSON.parse(savedRecipesString) : [];
};

export const saveRecipe = (recipe) => {
    const savedRecipes = getSavedRecipes();
    savedRecipes.push(recipe);
    localStorage.setItem(localStorageKey, JSON.stringify(savedRecipes));
};

export const removeRecipe = (recipeId) => {
    const savedRecipes = getSavedRecipes().filter((recipe) => recipe.id !== recipeId);
    localStorage.setItem(localStorageKey, JSON.stringify(savedRecipes));
};
