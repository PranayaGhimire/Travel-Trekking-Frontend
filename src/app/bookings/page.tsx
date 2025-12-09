import ViewBookings from '@/components/bookings/ViewBookings'
import React, { Suspense } from 'react'

const BookingsPage = () => {

  return (
    <div className='py-40 px-10 space-y-5'>
        <Suspense>
            <ViewBookings/>
        </Suspense>
    </div>
  )
}

export default BookingsPage
