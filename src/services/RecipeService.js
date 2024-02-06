import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/recipes';
const REST_API_GET_ALL_URL = 'http://localhost:8080/api/recipes/getRecipes';
const REST_API_POST_CREATE_URL = 'http://localhost:8080/api/recipes/createNewRecipe';

export const listRecipes = () => {
    return axios.get(REST_API_GET_ALL_URL);
}

export const createRecipe = (recipe) => axios.post(REST_API_POST_CREATE_URL, recipe);