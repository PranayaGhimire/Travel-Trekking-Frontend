'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useLogin } from "@/api/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {ClipLoader} from "react-spinners"
import { useAuth } from "@/context/AuthProvider";

const LoginForm = () => {
  const {setToken,setUser} = useAuth();
  const router = useRouter();
  const {mutate,isPending} = useLogin();
  const {register,handleSubmit} = useForm();
  const onSubmit = (data:any) => {
      mutate(data,{
        onSuccess: (response) =>{ 
          console.log(response);
          toast.success(response.message);
          Cookies.set("token",response.accessToken);
          setToken(response.accessToken);
          localStorage.setItem("user",JSON.stringify(response.data));
          setUser(response.data);
          router.push("/");
        },
        onError: () => toast.error("Oops! Something went wrong")
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-teal-700">Email</Label>
          <Input {...register("email")} id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-teal-700">Password</Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-teal-700"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
         <Button disabled={isPending} type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white cursor-pointer ">
            {isPending ?
              <ClipLoader size={20} color="white"/>
               : "Login"}
          </Button>
      </div>
    </form>
  );
};

export default LoginForm;
