import {
  Heading,
  Text,
} from '@chakra-ui/react';
import { Footer } from '~/components';
import ContactComponent from '~/components/Contact';

export default function ContactPage() {
  return (
    <div>
      <div className="p-20 bg-blue-300 j">
        <Heading className="text-center">Contact</Heading>
        <Text className="text-center" fontSize='md'>Contact Info</Text>
      </div>
      <ContactComponent />
      <Footer />
    </div>
  );
}
