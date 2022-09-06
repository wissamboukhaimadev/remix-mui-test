import { memo } from 'react';
import { Box, Button, Heading, Highlight } from '@chakra-ui/react';

const Home = () => {
  console.log('rendering Home');

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
      <Button colorScheme={'red'} size="lg">
        GET STARTED
      </Button>
    </Box>
  );
};
export default memo(Home);
