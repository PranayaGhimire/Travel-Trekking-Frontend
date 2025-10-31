import { axiosInstance } from "@/utils/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateBooking = () => 
    useMutation({
        mutationFn: async (data:any) => {
            const response = await axiosInstance.post(`/bookings`,data);
            return response.data;
        }
    })

export const useGetBookings = () =>
    useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/bookings`);
            return response.data;
        }
    })
 
export const useGetBooking = (id:string) => 
    useQuery({
        queryKey: ['bookings',id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/bookings/${id}`);
            return response.data;
        }
    })

export const useUpdateBooking = () => 
    useMutation({
        mutationFn: async ({id,data}:{id:string,data:any}) => {
            const response = await axiosInstance.put(`/bookings/${id}`,data);
            return response.data;
        }
    })

export const useDeleteBooking = () =>
    useMutation({
        mutationFn: async (id:string) => {
            const response = await axiosInstance.delete(`/bookings/${id}`);
            return response.data;
        } 
    })