'use client'
import { useGetDestination } from '@/api/destinationsApi';
import { useParams } from 'next/navigation'
import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ClipLoader } from 'react-spinners';
import Image from 'next/image';
import Link from 'next/link';

const ViewDestination = () => {
    const {id} = useParams<{id:string}>();
    const {data:destination,isLoading} = useGetDestination(id);
    console.log(destination);
    
    if (isLoading) return <ClipLoader color='teal'/>
  return (
    <div>
      <Card className='border-l-4 border-l-teal-600'>
        <CardHeader>
            <CardTitle>{destination?.data?.name}</CardTitle>
            <CardDescription>{destination?.data?.description}</CardDescription>
            <CardAction>
                <Button className='bg-teal-600 hover:bg-teal-700 cursor-pointer'>
                    <Link href={`/packages`}>View Packages</Link>
                </Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <Image src={destination?.data?.imageUrl} alt='' width={200} height={200}/>
        </CardContent>
        <CardFooter>{destination?.data?.location}</CardFooter>
      </Card>
    </div>
  )
}

export default ViewDestination
