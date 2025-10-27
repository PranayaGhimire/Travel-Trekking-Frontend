import ViewPackage from '@/components/packages/ViewPackage'
import React from 'react'

const ViewPackagePage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
        <h1 className='text-xl text-teal-700 font-bold'>Package Details</h1>
        <ViewPackage/>
    </div>
  )
}

export default ViewPackagePage
