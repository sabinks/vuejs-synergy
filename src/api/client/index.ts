import { apiClient } from "..";

export const listClient = async () => {
    const res = await apiClient.get('client')
    return res.data
}
export const showClient = async (id: number) => {
    const res = await apiClient.get(`/client/${id}`)
    return res.data
}