import axios from "axios"

const token = localStorage.getItem("token");

export const api = axios.create({
    baseURL: 'http://localhost:8989',
    headers: {'Authorization': 'Bearer '+token} 
})

export const createSession = async (email, password) => {
    return api.post('/login', email, password)
}