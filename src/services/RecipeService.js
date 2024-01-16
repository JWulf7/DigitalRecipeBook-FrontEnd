import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/recipes';

export const listRecipes = () => {
    return axios.get(REST_API_BASE_URL);
}