"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useGetDestinations } from "@/api/destinationsApi";
import { useForm } from "react-hook-form";
import { useCreatePackage } from "@/api/packagesApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const CreatePackage = () => {
  const router = useRouter();
  const { data: destinations } = useGetDestinations();
  const {mutate} = useCreatePackage();  
  const {register,handleSubmit} = useForm();
  const onSubmit = (data:any) => {
      mutate(data,{
        onSuccess: (response) => {
            toast.success(response.message);
            router.push("/packages");
        },
        onError: () => toast.error("Oops! something went wrong")
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded-lg shadow-lg space-y-5">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Package Title */}
        <div className="w-full space-y-2">
          <Label className="text-[15px]">Title</Label>
          <Input {...register("title")} placeholder="Enter Package Title" required />
        </div>
        {/* destination */}
        <div className="w-full space-y-2">
          <Label className="text-[15px]">Destination</Label>
          <select {...register("destination")} className="w-full focus:ring-2 focus:ring-teal-500 border border-gray-300 p-2 rounded-lg">
            <option value="">Select Destination</option>
            {destinations?.data?.map(
              (destination: { _id: string; name: string }) => (
                <option key={destination._id} value={destination._id}>
                  {destination.name}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {/* Price */}
        <div className="w-full space-y-2">
          <Label className="text-[15px]">Price</Label>
          <Input {...register("price")} type="number" placeholder="Enter amount" required />
        </div>
        {/* Duration */}
        <div className="w-full space-y-2">
          <Label className="text-[15px]">Duration</Label>
          <Input {...register("duration")} type="number" placeholder="Enter duration in days" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {/* Itinerary */}
        <div className="w-full space-y-2">
          <Label className="text-[15px]">Itinerary</Label>
          <Input {...register("itinerary")}  placeholder="Enter Itinerary" />
        </div>
        {/* Difficulty */}
        <div className="w-full space-y-2">
          <Label className="text-[15px]">Difficulty</Label>
          <Input {...register("difficulty")}  placeholder="Enter Difficulty Level" />
        </div>
      </div>
      {/* ImageUrl */}
      <div className="w-full space-y-2">
        <Label>Image</Label>
        <Input type="file" className="py-1" />
      </div>
      <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">Submit</Button>
    </form>
  );
};

export default CreatePackage;
