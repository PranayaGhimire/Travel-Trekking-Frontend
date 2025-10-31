'use client'
import React from "react";
import { Table } from "../ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useGetBookings } from "@/api/BookingsApi";

const ViewBookings = () => {
    const searchParams = useSearchParams();
    const packageId = searchParams.get("package");
    const {data:bookings} = useGetBookings();
    console.log(bookings);
    
  return (
    <div className="space-y-5">
      <Button asChild className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
        <Link href={`/bookings/create/?package=${packageId}`}>Create Booking</Link>
      </Button>
      <Table></Table>
    </div>
  );
};

export default ViewBookings;
