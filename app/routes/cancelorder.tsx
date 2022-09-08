import { Heading, Text } from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import { Footer } from "~/components"

const cancelorder = () => {
    return (
        <div  >

            <div className='mb-28'>
                <Heading className='py-5 text-center'>Order Canceled</Heading>
                <Text className='pt-5 text-center'>If you Want to Purchase Click Here</Text>
                <div className='text-center'>
                    <Link className='font-bold text-lg text-red-400 hover:text-red-500 hover:text-xl transition-all duration-300' to='/pricing' >Pricing</Link>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default cancelorder