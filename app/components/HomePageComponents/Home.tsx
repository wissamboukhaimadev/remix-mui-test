import { memo, useRef, useEffect } from 'react';
import { Box, Button, Heading, Highlight } from '@chakra-ui/react';
import { useNavigate } from '@remix-run/react'
import gsap from 'gsap';
const Home = () => {

  const navigate = useNavigate()


  const navigateToPricingPage = () => {
    navigate('/pricing')
  }
  const headingRed = useRef(null)
  const headingRed2 = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      gsap.from(headingRed.current, { x: 1000, duration: 1, opacity: 0 });
      gsap.from(headingRed2.current, { y: 1000, duration: 0.8 });
    }, 100)
  }, [])

  return (
    <Box
      className="px-10 flex justify-center items-center flex-col bg-gray-50"
      style={{ minHeight: 'calc(100vh - 125px)' }}
    >
      <Heading ref={headingRed}>We are the best IPTV Provider </Heading>
      <div className="py-5" />
      <Heading ref={headingRed2} className="text-red-400">
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
