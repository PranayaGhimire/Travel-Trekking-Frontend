import CreatePackage from '@/components/packages/CreatePackage'
import React from 'react'

const CreatePackagePage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
        <h1 className='text-xl text-teal-700 font-bold'>Create a new package</h1>
        <CreatePackage/>
    </div>
  )
}

export default CreatePackagePage
