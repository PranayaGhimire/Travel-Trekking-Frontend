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

const ViewBookings = () => {
  const queryClient = useQueryClient();
  const {user} = useAuth();
  const { data: bookings } = useGetBookings();
  const {mutate} = useDeleteBooking();
  const handleDeleteBooking = (id:string) => {
      mutate(id,{
        onSuccess: (response) => {
            toast.success(response.message);
            queryClient.invalidateQueries({queryKey:['bookings']});
        },
        onError: () => toast.error("Oops! something went wrong")
      })
  }
  console.log(bookings);

  return (
    <div className="space-y-5">
     {user?.role === "admin" && <Table>
        <TableCaption>A list of bookings</TableCaption>
        <TableHeader className="border-2 border-gray-500 bg-teal-300 hover:bg-teal-400">
          <TableRow>
            <TableHead>S.N.</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Package</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-2 border-gray-500">
          {bookings?.data?.map(
            (
              booking: {
                _id:string,
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
                <TableCell>{booking?.user?.email}</TableCell>
                <TableCell>{booking?.package?.title}</TableCell>
                <TableCell>
                  {new Date(booking?.bookingDate).toDateString()}
                </TableCell>
                <TableCell>{booking?.status}</TableCell>
                <TableCell>{booking?.amount}</TableCell>
                <TableCell>{booking?.paymentStatus}</TableCell>
                <TableCell className="flex justify-center space-x-2">
                  <Button className="bg-gray-600 hover:bg-gray-700 cursor-pointer">View</Button>
                  <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">Edit</Button>
                  <Button
                    onClick={() => handleDeleteBooking(booking?._id)} 
                  className="bg-red-600 hover:bg-red-700 cursor-pointer">Delete</Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>}
    </div>
  );
};

export default ViewBookings;
