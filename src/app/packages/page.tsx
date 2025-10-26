import ViewPackages from '@/components/packages/ViewPackages'
import React from 'react'

const PackagesPage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
        <h1 className='text-xl text-teal-700 font-bold'>All Packages</h1>
        <ViewPackages/>
    </div>
  )
}

export default PackagesPage
