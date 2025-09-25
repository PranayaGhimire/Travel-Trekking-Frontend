'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import {useForm} from "react-hook-form";

const RegisterPage = () => {
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Register your account</CardTitle>
          <CardDescription>
            Enter your details below to Register your account
          </CardDescription>
          <CardAction>
            <Button variant="link" asChild>
              <Link href={`/auth/login`}>Login</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  {...register("name")}
                  placeholder="john"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <select {...register("role")}
                className="border-[1px] p-1.5 rounded-lg">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white cursor-pointer "
          >
            Register
          </Button>
          <Button
            variant="outline"
            className="w-full bg-violet-500 hover:bg-violet-600 cursor-pointer text-white border-0"
          >
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
