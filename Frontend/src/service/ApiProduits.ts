import api from "./api";
import type { ProduitsType } from "../presentation/admin/product/type";

const ApiProduit = 
{
    getAll: async(params?: {search?:string; SousCategorieFilter?:string; statsFilter?:string}): Promise<ProduitsType []> =>
    {
        const response = await api.get('/produits', { params });
        return response.data;
    },
    create: async(data: FormData): Promise<ProduitsType>=>
    {
        const response = await api.post('/produits',data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    getOne: async(id: string): Promise<ProduitsType>=>
    {
        const response = await api.get(`/produits/${id}`);
        return response.data;
    },
    update: async(id: string, data:FormData): Promise<ProduitsType> =>
    {
        const response = await api.put(`/produits/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    delete: async(id: string): Promise<void>=>
    {
        await api.delete(`/produits/${id}`);
    }
}

export default ApiProduit;