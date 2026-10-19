import api from "./api"

const ApiSousCategories = 
{
    getAll: async () =>
    {
        const response = await api.get("/sous_categories");
        return response.data;
    },
    create: async(data: FormData) =>
    {
        const response = await api.post("/sous_categories", data);
        return response.data;
    }
}

export default ApiSousCategories;