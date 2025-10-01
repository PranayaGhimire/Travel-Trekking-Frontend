
import CreateDestinationForm from '@/components/destinations/CreateDestinationForm'
import React from 'react'

const DestinationsPage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
      <h1 className='text-xl text-teal-700 font-bold'>Select Your Destination</h1>
      <CreateDestinationForm/>
    </div>
  )
}

export default DestinationsPage
