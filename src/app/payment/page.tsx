'use client'
import { useVerifyPayment } from '@/api/paymentApi';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast';

const PaymentPage = () => {
  const searchParams=useSearchParams();
  const pidx = searchParams.get("pidx");
  const bookingId = searchParams.get("purchase_order_id");
  const {mutate} = useVerifyPayment();
  const handleVerifyPayment = () => {
      mutate({
        pidx,bookingId
      },{
        onSuccess: () => {
          toast.success("Payment Verified Successfully")
        },
        onError: () => toast.error("Oops! something went wrong")
      })
  }
  return (
    <div className='py-40 px-10'>
        <Button onClick={handleVerifyPayment } 
        className='bg-teal-700 hover:bg-teal-800 cursor-pointer'>Verify Payment</Button>
    </div>
  )
}

export default PaymentPage
