import ViewDestinations from "@/components/destinations/ViewDestinations"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const DestinationsPage = () => {
  return (
    <div className='py-40 px-10 space-y-5'>
      <h1 className='text-xl text-teal-700 font-bold'>Select Your Destination</h1>
      <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
        <Link href={`/destinations/create`}>Create Destination</Link>
      </Button>
      <ViewDestinations/>
    </div>
  )
}

export default DestinationsPage
