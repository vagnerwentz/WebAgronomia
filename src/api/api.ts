import axios from "axios";
import { ApiResponse } from "./ApiResponse";
import { RegisterPlantDTO } from "../models/Plant/RegisterPlantDTO";
import { ListPlantsDTO } from "../models/Plant/ListPlantsDTO";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080"
});

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Type": "application/json",
    // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBUEkgYXV0aGVudGljYXRpb24iLCJpZCI6ImY5Yjc5YjJmLTQzNzgtNGQ1OC04ZTU1LWI4NjhlODU0OTgzZCIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNzM0NTMzNzIwLCJleHAiOjE3MzQ1MzczMjAsImlzcyI6IlVURlBSIn0.ok6Ekr-LOmYyrZ1SqVjBZDPu_FWPTWHLpH6p48zqhpw"
};

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const get = async <T>(url: string) => {
    try {
        const response = await api.get<ApiResponse<T>>(url, { headers });
        console.log("Response do get no api.ts" + JSON.stringify(response));
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Erro ao buscar ${url}: ${error.message}`);
            if (error.response) {
                console.error("Resposta da API com erro:", error.response.data);
            }
        } else {
            console.error("Erro inesperado:", error);
        }
        throw error; // Re-lança o erro para que o chamador possa tratá-lo
    }
};


const post = async <T>(url: string, data: T) => {
    try {
        return await api.post(url, data, { headers });
    } catch (error) {
        console.error(`Erro ao fazer um post ${url}:`, error);
        throw error;
    }
};

const patch = async <T>(url: string, data: T) => {
    try {
        return await api.patch(url, data, { headers });
    } catch (error) {
        console.error(`Erro ao fazer um patch ${url}:`, error);
        throw error;
    }
};

const deleteRequest = async(url: string) => {
    try {
        return await api.delete(url, { headers });
    } catch (error) {
        console.error(`Erro ao fazer um delete ${url}:`, error);
        throw error;
    }
};

export const registerPlant = (plant: RegisterPlantDTO) => post('/api/planting', plant);
export const getAllPlants = () => get<ListPlantsDTO[]>('/api/planting/list');
export const deletePlantById = (id: string) => deleteRequest(`api/planting/${id}`);
export const updatePartialPlantById = (id: string, fields: Partial<ListPlantsDTO>) => 
    patch(`api/planting/${id}`, fields);
export const signIn = (email: string, password: string) => post('/auth', {email, password});