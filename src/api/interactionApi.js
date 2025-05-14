import {createApiWithToken} from "./apiConfig"

export const interact = async (token, requestData) => {
    const api = createApiWithToken(token)
    const response = await api.post("/interactions/interact", requestData)
    return response.data
}

export const countInteractionsOfOneRating = async (token, requestData) => {
    const api = createApiWithToken(token)
    const response = await api.get("/interactions/count", requestData)
    return response.data
}