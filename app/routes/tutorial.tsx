import { Heading, Text } from '@chakra-ui/react';
import { Footer, Tutorial } from '~/components';

export default function tutorial() {
  return (
    <section >
      <div className='mb-20'>
        <div className="pb-20">
          <div className="p-20 bg-blue-300 j">
            <Heading className="text-center">Tutorials</Heading>
            <Text className="text-center" fontSize="md">
              Learm About IPTV
            </Text>
          </div>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 px-4">
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <Tutorial key={index} />
            ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
