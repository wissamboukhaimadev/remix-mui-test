import { memo } from 'react';
import { Heading } from '@chakra-ui/react';

const CoverWorld = () => {
  return (
    <div>
      <Heading className="text-center text-orange-300">
        We Cover Almost All Countries Around The World
      </Heading>
      <Heading className="text-center ">
        We offer thousands of TV channels
      </Heading>

    </div>
  );
};
export default memo(CoverWorld);
