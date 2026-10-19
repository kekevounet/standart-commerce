import api from "./api"
import type { Categorie } from './type/Categorie';

const ApiCategories = 
{
    getAll: async(): Promise<Categorie []> =>
    {
        const response = await api.get<Categorie[]>('client/categories');
        return response.data;
    },
    create: async(data: FormData) =>
    {
        const response = await api.post('/categories', data);
        return response.data;
    }
}

export default ApiCategories;