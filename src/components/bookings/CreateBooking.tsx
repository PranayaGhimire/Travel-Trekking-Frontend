"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthProvider";
import { useCreateBooking } from "@/api/BookingsApi";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const CreateBooking = () => {
  const {user} = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");
  const { register, handleSubmit } = useForm();
  const {mutate} = useCreateBooking();
  const onSubmit = (data:any) => {
      data = {...data, user:user._id, package:packageId}
      mutate(data,{
        onSuccess: (response) => {
            toast.success(response.message);
            router.push("/bookings");
        },
        onError: () => toast.error("Oops! something went wrong")
      })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded-lg space-y-3">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Booking Date */}
          <div className="w-full space-y-2">
            <Label>Booking Date</Label>
            <Input {...register("bookingDate")} type="date" className="w-full" />
          </div>
          {/* Amount */}
          <div className="w-full space-y-2">
            <Label>Amount</Label>
            <Input {...register("amount")} type="number" placeholder="Enter amount" />
          </div>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">Submit</Button>
      </form>
    </div>
  );
};

export default CreateBooking;
