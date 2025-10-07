import ViewDestination from '@/components/destinations/ViewDestination'
import React from 'react'

const ViewDestinationPage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
        <h1 className='text-xl text-teal-700 font-bold'>Destination Details</h1>
        <ViewDestination/>
    </div>
  )
}

export default ViewDestinationPage
