import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='flex justify-around items-center bg-teal-600 text-white h-14'>
        <p className='text-xl'>Adventure Trails</p>
        <Button className='bg-teal-800 hover:bg-teal-900 w-28 h-full cursor-pointer'>Start Now</Button>
    </header>
  )
}

export default Header
