import axios from "axios";

let api = axios.create({
    baseURL: "https://api.github.com/users/JoaoCNascimento"
})

export default api;