import api from "./api"

export const getPercentage = ({sname,fname})=>{
    const baseURL = `?fname=${fname}&sname=${sname}`
    return api.get(baseURL)
}