import { axiosInstance } from "@/utils/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

const baseURL=process.env.NEXT_PUBLIC_URL;

export const useCreateDestination = () =>
    useMutation({
        mutationFn: async (data:any) => {
            const response = await axiosInstance.post(`/destinations`,data);
            return response.data;
        }
    })

export const useGetDestinations = () => 
    useQuery({
        queryKey:['destinations'],
        queryFn: async () => {
            const response = await axios.get(`${baseURL}/destinations`);
            return response.data;
        }
    })

export const useGetDestination = (id:string) => 
    useQuery({
        queryKey:['destination',id],
        queryFn: async () => {
            const response = await axios.get(`${baseURL}/destinations/${id}`);
            return response.data;
        }
    })

export const useUpdateDestination = () => 
    useMutation({
        mutationFn: async ({id,data}:{id:string,data:any}) => {
            const response = await axiosInstance.put(`/destinations/${id}`,data);
            return response.data;
        }
    })

export const useDeleteDestination = () => 
    useMutation({
        mutationFn: async (id:string) => {
            const response = await axiosInstance.delete(`/destinations/${id}`);
            return response.data;
        }
    })