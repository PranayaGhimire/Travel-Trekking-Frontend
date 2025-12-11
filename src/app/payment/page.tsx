
import Payment from '@/components/Payment';
import React, { Suspense } from 'react'

const PaymentPage = () => {
  
  return (
    <div className='py-40 px-10'>
        <Suspense>
          <Payment/>
        </Suspense>
    </div>
  )
}

export default PaymentPage
