import axios from "axios"



const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGUzNjdhYmE0NThkM2UyMGM4MTAxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjk5MjUwMSwiZXhwIjoxNjYzMTY1MzAxfQ.kYFFaN-NgDpFqbgVClGH4zgpNjtCqEuQbcOplynKqq4"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})

