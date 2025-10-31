import LoginForm from "@/components/Auth/LoginForm";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="bg-white w-[95%] md:w-full max-w-sm border-0 border-t-4 border-t-teal-600 shadow-lg">
        <CardHeader>
          <CardTitle className="text-teal-700 font-bold text-xl">Login to your account</CardTitle>
          <CardDescription className="text-teal-700 font-semibold">
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" asChild>
                <Link href={`/auth/register`} className="text-teal-700">Register</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
            <LoginForm/>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
