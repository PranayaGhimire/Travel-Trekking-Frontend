import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

const baseURL=process.env.NEXT_PUBLIC_URL

export const useCreateDestination = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(`${baseURL}/destinations`,data)
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

export const useUpdateDestination = (id:string) => 
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.put(`${baseURL}/destinations/${id}`,data);
            return response.data;
        }
    })

export const useDeleteDestination = () => 
    useMutation({
        mutationFn: async (id:string) => {
            const response = await axios.delete(`${baseURL}/destinations/${id}`);
            return response.data;
        }
    })