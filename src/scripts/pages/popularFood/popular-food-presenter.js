export default class PopularFoodPresenter {
    constructor() {
        this.recipes = [];
    }

    async fetchRecipes() {
        const response = await fetch("/data/recipes.json");
        const data = await response.json();
        this.recipes = data.recipes;
        return this.recipes;
    }

    filterRecipesByTaste(taste) {
        if (taste === "All") return this.recipes;
        return this.recipes.filter(
            (r) => r.rasa_dominan.toLowerCase() === taste.toLowerCase()
        );
    }

    getRecipeById(id) {
        return this.recipes.find((r) => r.id === id);
    }
}
