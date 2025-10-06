import EditDestinationForm from '@/components/destinations/EditDestinationForm'
import React from 'react'

const EditDestinationPage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
      <h1 className='text-xl text-teal-700 font-bold'>Select Your Destination</h1>
      <EditDestinationForm/>
    </div>
  )
}

export default EditDestinationPage
