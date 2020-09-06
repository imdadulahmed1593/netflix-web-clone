import axios from "axios";



/* base URL to make requests to the movies database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;