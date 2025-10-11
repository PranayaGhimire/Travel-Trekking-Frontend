import { axiosInstance } from "@/utils/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreatePackage = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axiosInstance.post(`/packages`,data);
            return response.data;
        }
    })

export const useGetPackages = () => 
    useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/packages`);
            return response.data;
        }
    })

export const useGetPackage = (id:string) => 
    useQuery({
        queryKey: ['packages',id],
        queryFn: async () => {
            const response = await axiosInstance.get(`packages/${id}`);
            return response.data;
        }
    })

export const useUpdatePackage = () => 
    useMutation({
        mutationFn: async ({id,data}:{id:string,data:any}) => {
            const response = await axiosInstance.put(`/packages/${id}`,data);
            return response.data;
        }
    })

export const useDeletePackage = () => 
    useMutation({
        mutationFn: async (id:string) => {
            const response = await axiosInstance.delete(`/packages/${id}`);
            return response.data;
        }
    })