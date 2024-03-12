import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/recipes';
const REST_API_GET_ALL_URL = 'http://localhost:8080/api/recipes/getRecipes';
const REST_API_POST_CREATE_URL = 'http://localhost:8080/api/recipes/createNewRecipe';
const REST_API_GET_URL = 'http://localhost:8080/api/recipes/getRecipe/';
const REST_API_PUT_UPDATE_URL = 'http://localhost:8080/api/recipes/update';

export const listRecipes = () => {
    return axios.get(REST_API_GET_ALL_URL);
}

export const createRecipe = (recipe) => axios.post(REST_API_POST_CREATE_URL, recipe);

export const getRecipe = (recipeName) => {
    // REST_API_GET_URL.
    var getRecipeUrl = REST_API_GET_URL.concat(recipeName);
    // console.log(getRecipeUrl)
    return axios.get(getRecipeUrl);
}

export const updateRecipe = (recipe) => {
    console.log("inside RecipeService.updateRecipe()")
    console.log("recipe object = ->")
    console.log(recipe)
    return axios.put(REST_API_PUT_UPDATE_URL, recipe);
}