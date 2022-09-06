import {
  useColorModeValue,
} from '@chakra-ui/react';
import SimpleCard from '~/components/Contact';

export default function ContactPage() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        background: useColorModeValue('gray.50', 'gray.800'),
      }}
      className="flex justify-center items-center min-h-screen"
    >
      <SimpleCard />
    </div>
  );
}
