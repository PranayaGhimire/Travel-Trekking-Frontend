import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_URL


export const useInitiatePayment = () =>
    useMutation({
        mutationFn: async ({bookingId,amount,packageName}:{bookingId:string,amount:number,packageName:string}) => {
            const response = await axios.post(`${baseURL}/payment/khalti/initiate`,{
                bookingId,amount,packageName
            });
            return response.data;
        }
    })

export const useVerifyPayment = () => 
    useMutation({
        mutationFn: async ({pidx,bookingId}:{pidx:string | null,bookingId:string | null}) => {
            const response = await axios.post(`${baseURL}/payment/khalti/verify`,{
                pidx,bookingId
            });
            return response.data;
        }
    })