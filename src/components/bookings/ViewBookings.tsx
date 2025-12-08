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
} from "../ui/table";
import { Button } from "../ui/button";
import { useDeleteBooking, useGetBookings } from "@/api/BookingsApi";
import { useAuth } from "@/context/AuthProvider";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";

const ViewBookings = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { data: bookings, isLoading } = useGetBookings();
  const { mutate } = useDeleteBooking();
  const handleDeleteBooking = (id: string) => {
    mutate(id, {
      onSuccess: (response) => {
        toast.success(response.message);
        queryClient.invalidateQueries({ queryKey: ["bookings"] });
      },
      onError: () => toast.error("Oops! something went wrong"),
    });
  };
  console.log(bookings);

  if (isLoading)
    return (
      <div className="flex flex-col space-y-1 ">
        <Skeleton className="h-8  bg-teal-500"  />
        <Skeleton className="h-8  bg-teal-500" />
      </div>
    );
  return (
    <div className="space-y-5">
      <Table>
        <TableCaption>A list of bookings</TableCaption>
        <TableHeader className="border-2 border-gray-500 bg-teal-300 hover:bg-teal-400">
          <TableRow>
            <TableHead>S.N.</TableHead>
            {user?.role === "admin" && <TableHead>User</TableHead>}
            <TableHead>Package</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-2 border-gray-500">
          {bookings?.data
            ?.filter((booking: { user: { email: string } }) =>
              user?.role === "user"
                ? booking?.user?.email === user?.email
                : true
            )
            .map(
              (
                booking: {
                  _id: string;
                  user: { email: string };
                  package: { title: string };
                  bookingDate: string;
                  status: string;
                  amount: string;
                  paymentStatus: string;
                },
                index: number
              ) => (
                <TableRow key={index} className="border-2 border-gray-500">
                  <TableCell>{index + 1}</TableCell>
                  {user?.role === "admin" && (
                    <TableCell>{booking?.user?.email}</TableCell>
                  )}
                  <TableCell>{booking?.package?.title}</TableCell>
                  <TableCell>
                    {new Date(booking?.bookingDate).toDateString()}
                  </TableCell>
                  <TableCell>{booking?.status}</TableCell>
                  <TableCell>{booking?.amount}</TableCell>
                  <TableCell>{booking?.paymentStatus}</TableCell>
                  <TableCell className="flex justify-center space-x-2">
                    <Button className="bg-gray-600 hover:bg-gray-700 cursor-pointer">
                      View
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteBooking(booking?._id)}
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
    </div>
  );
};

export default ViewBookings;
