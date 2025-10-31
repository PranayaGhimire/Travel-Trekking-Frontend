import CreateBooking from '@/components/bookings/CreateBooking'
import React from 'react'

const CreateBookingPage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
        <h1 className='text-xl text-teal-700 font-bold'>Create a new booking</h1>
        <CreateBooking/>
    </div>
  )
}

export default CreateBookingPage
