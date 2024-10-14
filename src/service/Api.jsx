import axios from "axios";

export const api = new axios.create({
    baseURL: "https://labs-talent-desafio.onrender.com",
    headers: {
        'Content-Type': 'application/json'
    }

})