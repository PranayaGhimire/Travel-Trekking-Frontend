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
import {
  useDeleteDestination,
  useGetDestinations,
} from "@/api/destinationsApi";
import { Button } from "../ui/button";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Skeleton } from "../ui/skeleton";
import { useAuth } from "@/context/AuthProvider";

const ViewDestinations = () => {
  const {user} = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: destinations, isLoading } = useGetDestinations();
  const { mutate } = useDeleteDestination();
  const handleDeleteDestination = (id: string) => {
    mutate(id, {
      onSuccess: (response) => {
        toast.success(response.message);
        queryClient.invalidateQueries({ queryKey: ["destinations"] });
        router.refresh();
      },
      onError: () => toast.error("Oops! something went wrong"),
    });
  };
  return (
    <div className="space-y-5">
      { user?.role === "admin" &&<Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
        <Link href={`/destinations/create`}>Create Destination</Link>
      </Button>}
      {isLoading ? (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full bg-teal-500" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-teal-500" />
            <Skeleton className="h-4 w-[200px] bg-teal-500" />
          </div>
        </div>
      ) : (
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
            {destinations?.data?.map(
              (
                d: {
                  _id: string;
                  name: string;
                  location: string;
                  bestSeason: string;
                },
                index: number
              ) => (
                <TableRow key={d._id} className="border-2 border-gray-500">
                  <TableCell className="">{index + 1}</TableCell>
                  <TableCell>{d.name}</TableCell>
                  <TableCell>{d.location}</TableCell>
                  <TableCell>{d.bestSeason}</TableCell>
                  <TableCell className="flex justify-center space-x-2">
                    <Button
                      className="bg-gray-500 hover:bg-gray-600 cursor-pointer"
                      asChild
                    >
                      <Link href={`/destinations/view/${d._id}`}>
                        <FaEye />
                        View
                      </Link>
                    </Button>
                  { user?.role === "admin"  && <Button
                      className="bg-teal-500 hover:bg-teal-600 cursor-pointer"
                      asChild
                    >
                      <Link href={`/destinations/edit/${d._id}`}>
                        <FaRegEdit />
                        Edit
                      </Link>
                    </Button>}
                    { user?.role === "admin" &&  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="bg-red-500 hover:bg-red-600 cursor-pointer">
                          <MdDelete />
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you sure you want to delete this destination ?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            remove this destination from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="cursor-pointer">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-teal-600 hover:bg-teal-700 cursor-pointer"
                            onClick={() => handleDeleteDestination(d._id)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ViewDestinations;
