
import RegisterForm from "@/components/Auth/RegisterForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import React from "react";

const RegisterPage = () => {

  return (
    <div className="flex justify-center items-center py-40">
      <Card className="bg-white w-[95%] md:w-full max-w-sm border-0 border-t-4 border-t-teal-600 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-teal-700">Register your account</CardTitle>
          <CardDescription className="text-teal-700">
            Enter your details below to Register your account
          </CardDescription>
          <CardAction>
            <Button variant="link" asChild>
              <Link href={`/auth/login`} className="text-teal-700">Login</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
            <RegisterForm/>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
