"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDeletePackage, useGetPackages } from "@/api/packagesApi";
import { ClipLoader } from "react-spinners";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
const ViewPackages = () => {
  const queryClient = useQueryClient();
  const { data: packages,isLoading } = useGetPackages();
  console.log(packages);
  const {mutate} = useDeletePackage();
  const handleDeletePackage = (id:string) => {
    mutate(id,{
        onSuccess: (response) => {
            toast.success(response.message);
            queryClient.invalidateQueries({queryKey:['packages']})
        }
    })
  }
  if (isLoading) return <div><ClipLoader color="teal"/></div>
  return (
    <Table className="bg-white rounded-lg shadow-lg p-2">
      <TableCaption>A list of packages</TableCaption>
      <TableHeader className="">
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Difficulty</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Itinerary</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {packages?.data?.map(
          (
            pkg: {
              _id:string,
              title: string;
              destination: { name: string };
              difficulty: string;
              price: number;
              duration: number;
              itinerary: string;
            },
            index: number
          ) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{pkg.title}</TableCell>
              <TableCell>{pkg.destination?.name}</TableCell>
              <TableCell>{pkg.difficulty}</TableCell>
              <TableCell>{pkg.price}</TableCell>
              <TableCell>{pkg.duration}</TableCell>
              <TableCell>{pkg.itinerary}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button className="bg-gray-600 hover:bg-gray-700 cursor-pointer">View</Button>
                <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">Edit</Button>
                <Button onClick={() => handleDeletePackage(pkg._id)} 
                className="bg-red-600 hover:bg-red-700 cursor-pointer">Delete</Button>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default ViewPackages;
