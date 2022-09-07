import { memo } from 'react';
import { Box, Button, Heading, Highlight } from '@chakra-ui/react';
import { useNavigate } from '@remix-run/react'
const Home = () => {

  const navigate=useNavigate()
  

  const navigateToPricingPage=()=>{
    navigate('/pricing')
  }

  return (
    <Box
      className="px-10 flex justify-center items-center flex-col bg-gray-50"
      style={{ minHeight: 'calc(100vh - 125px)' }}
    >
      <Heading>We are the best IPTV Provider </Heading>
      <div className="py-5" />
      <Heading className="text-red-400">
        +54,000 IPTV Channels & VODs in 4K & Ultra HD Picture Quality.
      </Heading>
      <div className="py-5" />

      <div className="px-5 ">
        {' '}
        <Heading>
          <Highlight
            query="IPTV Server"
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            Get The Most Of Your IPTV Server Today!
          </Highlight>
        </Heading>{' '}
      </div>
      <div className="py-10" />

        <Button onClick={navigateToPricingPage} colorScheme={'red'} size="lg">
          GET STARTED
        </Button>
    </Box>
  );
};
export default memo(Home);
