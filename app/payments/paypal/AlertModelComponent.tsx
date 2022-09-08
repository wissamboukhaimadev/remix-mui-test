import { Button, Heading, Highlight, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { whatsappNumbers } from "~/utils/whatsappNumbers"

interface AlertModelComponentInterface {
    isOpen: boolean
    onClose: () => void
    title: string
    body: string
}


const AlertModelComponent = (props: AlertModelComponentInterface) => {



    const { isOpen, onClose, title, body } = props
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className='text-center' >
                    <Heading > {title} </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontWeight="bold" mb="1rem">
                        {body}
                    </Text>
                </ModalBody>
                <ModalBody>
                    <PhoneNumbers />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default AlertModelComponent




const PhoneNumbers = () => {

    return (
        <>
            {whatsappNumbers.map((item, index) => {
                return (
                    <>
                        <Text> {item.name} : {item.number} </Text>
                    </>
                )
            })}
        </>
    )

}