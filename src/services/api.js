import axios from "axios";

const api = axios.create({
    baseURL: "https://love-calculator.p.rapidapi.com/getPercentage",
    headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': 'cc4c601829msh9229e1f0b80cd17p137e4fjsn77ffe818ccbe'
    }
})

export default api