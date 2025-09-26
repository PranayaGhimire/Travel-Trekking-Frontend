import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_URL;

export const useRegister = () => 
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(`${baseURL}/auth/register`,data);
            return response.data;
        }
    })

export const useLogin = () => 
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(`${baseURL}/auth/login`,data);
            return response.data;
        }
    })
    