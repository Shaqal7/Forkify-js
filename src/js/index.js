// Global app controller
import Search from "./models/Search";

import axios from "axios";

async function getResults(query) {
    try {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (e) {
        alert(e);
    }

}
//const res = await Axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

getResults('pizza');