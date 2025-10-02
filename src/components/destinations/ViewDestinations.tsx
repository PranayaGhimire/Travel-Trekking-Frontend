'use client'
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useDeleteDestination, useGetDestinations } from "@/api/destinationsApi";
import { Button } from "../ui/button";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const ViewDestinations = () => {
    const queryClient = useQueryClient();
    const {data:destinations} = useGetDestinations();
    const {mutate} = useDeleteDestination();
    const handleDeleteDestination = (id:string) => {
        mutate(id,{
            onSuccess: (response) => {
                toast.success(response.message);
                queryClient.invalidateQueries({queryKey:['destinations']});
            } 
        });
    }
  return (
    <Table>
      <TableCaption>A list of destinations</TableCaption>
      <TableHeader>
        <TableRow className="border-2 border-gray-500 bg-teal-400 text-white">
          <TableHead className="w-[100px]">S.N.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Best Season</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-2 border-gray-500">
        {destinations?.data?.map((d:{_id:string,name:string,location:string,bestSeason:string},index:number) => 
            <TableRow key={d._id} className="border-2 border-gray-500">
                <TableCell className="font-medium">{index+1}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.location}</TableCell>
                <TableCell>{d.bestSeason}</TableCell>
                <TableCell className="space-x-2">
                    <Button className="bg-gray-500 hover:bg-gray-600 cursor-pointer"> <FaEye />View</Button>
                    <Button className="bg-teal-500 hover:bg-teal-600 cursor-pointer"><FaRegEdit />Edit</Button>
                    <Button onClick={() => handleDeleteDestination(d._id)} 
                    className="bg-red-500 hover:bg-red-600 cursor-pointer"><MdDelete />Delete</Button>
                </TableCell>
            </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ViewDestinations;
