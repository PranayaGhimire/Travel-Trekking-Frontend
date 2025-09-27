'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useForm} from "react-hook-form";
import { Button } from "../ui/button";
import { useRegister } from "@/api/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const RegisterForm = () => {
  const router = useRouter();
  const {mutate,isPending} = useRegister();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data:any) => {
    mutate(data,{
      onSuccess: () => {
        toast.success("User registered successfully");
        router.push("/auth/login")
      }
    })
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username" className="text-teal-700">Username</Label>
          <Input {...register("username")} placeholder="john" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-teal-700">Email</Label>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="text-teal-700">Password</Label>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="role" className="text-teal-700">Role</Label>
          <select
            {...register("role")}
            className="border border-gray-300 p-1.5 rounded-lg outline-0 focus:ring-2 focus:ring-teal-500"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
         <Button disabled={isPending}
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white cursor-pointer "
          >
            {isPending ? <ClipLoader size={20} color="white"/> :'Register'}
          </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
