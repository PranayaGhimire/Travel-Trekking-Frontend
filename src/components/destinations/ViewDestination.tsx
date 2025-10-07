'use client'
import { useGetDestination } from '@/api/destinationsApi';
import { useParams } from 'next/navigation'
import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

const ViewDestination = () => {
    const {id} = useParams<{id:string}>();
    const {data:destination} = useGetDestination(id);
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>{destination?.data?.name}</CardTitle>
            <CardDescription>{destination?.data?.description}</CardDescription>
            <CardAction>{destination?.data?.bestSeason}</CardAction>
        </CardHeader>
        <CardContent>
            Card Content
        </CardContent>
        <CardFooter>{destination?.data?.location}</CardFooter>
      </Card>
    </div>
  )
}

export default ViewDestination
