import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box className="px-10 flex justify-center items-center flex-col " style={{minHeight:'calc(100vh - 125px)'}}>
        <Heading >We are the best IPTV Provider </Heading>
        <div className="py-5"/>
        <Heading className="text-red-400">+54,000 IPTV Channels & VODs in 4K & Ultra HD Picture Quality.</Heading>
        <div className="py-5"/>

        <div className='px-5 bg-white '> <Heading>Get The Most Of Your IPTV Server Today</Heading> </div>
        <div className="py-10"/>
        <Button colorScheme={'red'} size='lg' >GET STARTED</Button>
    </Box>
  )
}
