"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useRegister } from "@/api/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { FaLock, FaUser, FaUserShield } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useRegister();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("User registered successfully");
        router.push("/auth/login");
      },
      onError: () => toast.error("Oops! something went wrong"),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username" className="text-teal-700">
            Username
          </Label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              {...register("username")}
              placeholder="john"
              required
              className="pl-10"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-teal-700">
            Email
          </Label>
          <div className="relative">
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              className="pl-10"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="text-teal-700">
            Password
          </Label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter password"
              required
              className="pl-10"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="role" className="text-teal-700">
            Role
          </Label>
          <div className="relative">
            <FaUserShield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground " />
            <select
              {...register("role")}
              className="w-full border border-gray-300 p-1.5 rounded-lg outline-0 focus:ring-2 focus:ring-teal-500 pl-10"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white cursor-pointer "
        >
          {isPending ? <ClipLoader size={20} color="white" /> : "Register"}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
