'use client'
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useDeleteDestination, useGetDestinations } from "@/api/destinationsApi";
import { Button } from "../ui/button";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { ClipLoader } from "react-spinners";

const ViewDestinations = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const {data:destinations,isLoading} = useGetDestinations();
    const {mutate} = useDeleteDestination();
    const handleDeleteDestination = (id:string) => {
        mutate(id,{
            onSuccess: (response) => {
                toast.success(response.message);
                queryClient.invalidateQueries({queryKey:['destinations']});
                router.refresh();
            } 
        });
    }
    if (isLoading) return <div><ClipLoader color="teal" /></div>
  return (
    <Table>
      <TableCaption>A list of destinations</TableCaption>
      <TableHeader>
        <TableRow className="border-2 border-gray-500 bg-teal-300 hover:bg-teal-400">
          <TableHead>S.N.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Best Season</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-2 border-gray-500">
        {destinations?.data?.map((d:{_id:string,name:string,location:string,bestSeason:string},index:number) => 
            <TableRow key={d._id} className="border-2 border-gray-500">
                <TableCell className="">{index+1}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.location}</TableCell>
                <TableCell>{d.bestSeason}</TableCell>
                <TableCell className="flex justify-center space-x-2">
                    <Button className="bg-gray-500 hover:bg-gray-600 cursor-pointer" asChild> 
                        <Link href={`/destinations/view/${d._id}`}><FaEye />View</Link>
                    </Button>
                    <Button className="bg-teal-500 hover:bg-teal-600 cursor-pointer" asChild>
                       <Link href={`/destinations/edit/${d._id}`}><FaRegEdit />Edit</Link> 
                    </Button>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button  
                                className="bg-red-500 hover:bg-red-600 cursor-pointer"><MdDelete />Delete</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure you want to delete this destination ?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently remove this destination from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-teal-600 hover:bg-teal-700 cursor-pointer" onClick={() => handleDeleteDestination(d._id)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </TableCell>
            </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ViewDestinations;
