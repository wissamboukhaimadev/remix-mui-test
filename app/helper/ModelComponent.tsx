import {
  Button,
  Highlight,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import PayPalButtonComponent from '~/payments/paypal/PayPalButtonComponent';
import { PricingListInterface } from '~/utils/pricingList';

interface isOpenInterface {
  isOpen: boolean;
  onClose: () => void;
  item: PricingListInterface
}

const ModelComponent = (props: isOpenInterface) => {
  const { item } = props
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='text-center' >
            <Highlight
              query="Pay And Enjoy Your IPTV"
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
              Pay And Enjoy Your IPTV
            </Highlight>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" className='text-center' mb="1rem">
              We are using Paypal
            </Text>
            <PayPalButtonComponent item={item} />
          </ModalBody>


          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Cancel
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModelComponent;



