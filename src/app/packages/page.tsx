import ViewPackages from '@/components/packages/ViewPackages'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const PackagesPage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
        <h1 className='text-xl text-teal-700 font-bold'>All Packages</h1>
        <Button className='bg-teal-600 hover:bg-teal-700 cursor-pointer'>
            <Link href={`/packages/create`}>Create Package</Link>
        </Button>
        <ViewPackages/>
    </div>
  )
}

export default PackagesPage
