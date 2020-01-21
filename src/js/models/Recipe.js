import axios from "axios";
//import { url } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.result = res.data.recipe;
            this.title = this.result.title;
            this.author = this.result.publisher;
            this.img = this.result.image_url;
            this.url = this.result.source_url;
            this.ingredients = this.result.ingredients;
            this.rank = this.result.social_rank;
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }
}