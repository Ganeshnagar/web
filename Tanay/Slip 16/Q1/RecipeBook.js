const recipes = [
    {
        name: "Spaghetti Bolognese",
        ingredients: ["Spaghetti", "Minced Meat", "Tomato Sauce", "Onion", "Garlic"],
        instructions: "Cook spaghetti. Prepare sauce with meat, tomato, onion, and garlic. Mix and serve."
    },
    {
        name: "Pancakes",
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
        instructions: "Mix all ingredients. Cook on a hot pan until golden brown on both sides."
    },
    {
        name: "Grilled Cheese Sandwich",
        ingredients: ["Bread", "Cheese", "Butter"],
        instructions: "Butter the bread, place cheese in between slices, and grill until cheese melts."
    }
];


function showRecipes() {
    console.log("=== Recipe Book ===");
    recipes.forEach((recipe, index) => {
        console.log(`\nRecipe ${index + 1}: ${recipe.name}`);
        console.log("Ingredients:", recipe.ingredients.join(", "));
        console.log("Instructions:", recipe.instructions);
    });
}


showRecipes();