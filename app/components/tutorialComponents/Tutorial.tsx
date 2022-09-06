import { Button } from '@chakra-ui/react';

export default function Tutorial() {
  return (
    <div className="shadow-xl hover:shadow-2xl flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100  xl:p-8 darkl;l:bg-gray-800 darkl;l:text-white hover:scale-105 transition">
      <img src="/assets/Delux-IPTV.webp" />
      <h3 className="mb-4 text-2xl font-semibold">Tutorial</h3>
      <p className="font-light text-gray-500 sm:text-lg ">IpTv</p>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li>Tutorial Text</li>
      </ul>
      <Button colorScheme={'teal'}>Learn More</Button>
    </div>
  );
}
