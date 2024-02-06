import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://www.dnd5eapi.co',
    headers: {
        Accept: 'application/json'
    }
});

export default authFetch;