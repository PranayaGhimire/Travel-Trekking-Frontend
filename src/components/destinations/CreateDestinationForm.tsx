'use client'
import React from "react";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from "react-hook-form";
import { useCreateDestination } from "@/api/destinationsApi";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const CreateDestinationForm = () => {
    const {mutate,isPending} = useCreateDestination();
    const {register,handleSubmit} = useForm();
    const onSubmit = (data:any) => {
        mutate(data,{
            onSuccess: (response) => {
                toast.success(response.message)
            },
            onError: () => toast.error("Oops! Something went wrong")
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-5 rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row gap-3">
        {/* name */}
        <div className="w-full space-y-3">
          <Label htmlFor="name">Destination Name</Label>
          <Input {...register("name")} placeholder="Enter destination name" required />
        </div>
        {/* location */}
        <div className="w-full space-y-2">
          <Label htmlFor="location">Destination Location</Label>
          <Input {...register("location")} placeholder="Enter destination location" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {/* description */}
        <div className="w-full space-y-2">
          <Label htmlFor="description">Destination Description</Label>
          <Input {...register("description")} placeholder="Enter destination description" />
        </div>
        {/* best season */}
        <div className="w-full space-y-2">
          <Label htmlFor="best season">Destination Best Season</Label>
          <Input {...register("bestSeason")} placeholder="Enter destination best season" />
        </div>
      </div>
      {/* image */}
      <div className=" space-y-2">
        <Label htmlFor="image">Destination Image</Label>
        <Input type="file" className="" />
      </div>
      <Button disabled={isPending} className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
        {isPending ? <ClipLoader size={20} color="white"/> : "Submit"}
      </Button>
    </form>
  );
};

export default CreateDestinationForm;
