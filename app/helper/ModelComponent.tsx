import {
  Button,
  Highlight,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

interface isOpenInterface {
  isOpen: boolean;
  onClose: () => void;
}

const ModelComponent = (props: isOpenInterface) => {
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
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            jskdlskldklaklksldklaklsklkl
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModelComponent;
