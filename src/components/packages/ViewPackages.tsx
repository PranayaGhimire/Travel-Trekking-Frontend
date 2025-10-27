"use client";
import React, { ChangeEvent, useState } from "react";
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
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { useGetDestinations } from "@/api/destinationsApi";
const ViewPackages = () => {
  const searchParams = useSearchParams();
  const destinationId = searchParams.get("destination");
  const [selectedDestination,setSelectedDestination] = useState< string>(destinationId || "All");
  const queryClient = useQueryClient();
  const {data:destinations} = useGetDestinations();
  const { data: packages, isLoading } = useGetPackages();
  console.log(packages);
  const { mutate } = useDeletePackage();
  const handleChangeDestination = (e:ChangeEvent<HTMLSelectElement>) => {
    setSelectedDestination(e.target.value  )
  }
  const handleDeletePackage = (id: string) => {
    mutate(id, {
      onSuccess: (response) => {
        toast.success(response.message);
        queryClient.invalidateQueries({ queryKey: ["packages"] });
      },
      onError: () => toast.error("Oops! something went wrong")
    });
  };
  return (
    <div className="space-y-5">
      <div className="md:flex md:justify-between space-y-5 md:space-y-0">
        <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
          <Link href={`/packages/create`}>Create Package</Link>
        </Button>
        <select value={selectedDestination} onChange={(e) => handleChangeDestination(e)} 
        className="border-[2px] border-teal-500 p-2 rounded-lg outline-0">
          <option value="All">All</option>
          {destinations?.data?.map((destination:{_id:string,name:string}) => 
              <option key={destination._id} value={destination._id}>{destination.name}</option>
          )}
        </select>
      </div>

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
          <TableCaption>A list of packages</TableCaption>
          <TableHeader className="border-2 border-gray-500 bg-teal-300 hover:bg-teal-400">
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
          <TableBody className="border-2 border-gray-500">
            {packages?.data?.filter((pkg:{destination:{_id:string}}) =>
              selectedDestination === "All" || pkg.destination._id === selectedDestination  
          ).map(
              (
                pkg: {
                  _id: string;
                  title: string;
                  destination: { name: string };
                  difficulty: string;
                  price: number;
                  duration: number;
                  itinerary: string;
                },
                index: number
              ) => (
                <TableRow key={index} className="border-2 border-gray-500">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{pkg.title}</TableCell>
                  <TableCell>{pkg?.destination?.name}</TableCell>
                  <TableCell>{pkg.difficulty}</TableCell>
                  <TableCell>{pkg.price}</TableCell>
                  <TableCell>{pkg.duration}</TableCell>
                  <TableCell>{pkg.itinerary}</TableCell>
                  <TableCell className="flex justify-center gap-2">
                    <Button asChild className="bg-gray-600 hover:bg-gray-700 cursor-pointer">
                        <Link href={`/packages/view/${pkg._id}`}>
                            View
                        </Link>
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                        <Link href={`/packages/edit/${pkg._id}`}>
                            Edit
                        </Link>
                    </Button>
                    <Button
                      onClick={() => handleDeletePackage(pkg._id)}
                      className="bg-red-600 hover:bg-red-700 cursor-pointer"
                    >
                      Delete
                    </Button>
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

export default ViewPackages;
