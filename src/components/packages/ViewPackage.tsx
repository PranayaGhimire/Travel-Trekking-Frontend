'use client'
import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useParams } from "next/navigation";
import { useGetPackage } from "@/api/packagesApi";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const ViewPackage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: pkg, isLoading } = useGetPackage(id);
  console.log(pkg);
  
  if (isLoading)
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full bg-teal-500" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-teal-500" />
          <Skeleton className="h-4 w-[200px] bg-teal-500" />
        </div>
      </div>
    );
  return (
    <div>
      <Card className="border-l-4 border-l-teal-600">
        <CardHeader>
          <CardTitle>{pkg?.data?.title}</CardTitle>
          <CardDescription>Rs. {pkg?.data?.price}</CardDescription>
          <CardAction>
            <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
              <Link href={`/bookings/?package=${pkg?.data?._id}`}>
                Book Now
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          {/* <Image
            src={pkg?.data?.imageUrl}
            alt=""
            width={200}
            height={200}
          /> */}
        </CardContent>
        <CardFooter>{pkg?.data?.difficulty}</CardFooter>
      </Card>
    </div>
  );
};

export default ViewPackage;
