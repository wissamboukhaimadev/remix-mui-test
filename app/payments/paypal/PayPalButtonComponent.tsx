import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { Heading, Highlight, Text, useDisclosure } from '@chakra-ui/react'
import { PricingListInterface } from '~/utils/pricingList'
import AlertModelComponent from './AlertModelComponent'
import { useNavigate } from '@remix-run/react'

interface PaypalButtonPropsInterface {
    item: PricingListInterface
}

const PayPalButtonComponent = (props: PaypalButtonPropsInterface) => {

    const navigate = useNavigate()
    const { item: product } = props
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { isOpen, onClose } = useDisclosure()

    const handleApprove = (orderId: any) => {
        // Call backend function to fulfill order
        console.log(orderId)
        // if response is success
        setPaidFor(true);
        // Refresh user's account or subscription status

        // if response is error
        // setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
    };

    if (paidFor) {
        // Display success message, modal or redirect user to success page
        alert('payment succeded Contact Us On Whatsapp Now')
    }

    if (error) {
        // Display error message, modal or redirect user to error page
        alert(error)
    }
    return (
        <div>
            <Text className='text-center py-2' >
                <Highlight query='Subscrition' styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }} >
                    Subscrition
                </Highlight> : {product.duration}
            </Text>
            <Text className='text-center py-2 pb-5'> <Highlight query='Price' styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }} >Price</Highlight> : ${product.price} </Text>
            <PayPalButtons
                style={{
                    color: "silver",
                    layout: "horizontal",
                    height: 48,
                    tagline: false,
                    shape: "pill"
                }}
                onClick={(data, actions) => {
                    // Validate on button click, client or server side
                    const hasAlreadyBoughtCourse = false;

                    if (hasAlreadyBoughtCourse) {
                        setError("You already bought this course. Go to your account to view your list of courses.");

                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.duration,
                                amount: {
                                    value: String(product.price)
                                }
                            }
                        ]
                    });
                }}
                onApprove={async (data, actions) => {
                    if (actions !== undefined && actions.order !== undefined) {
                        const order = await actions.order.capture();
                        console.log("order", order);
                    }

                    handleApprove(data.orderID);
                }}
                onCancel={() => {
                    navigate('/cancelorder')
                    // Display cancel message, modal or redirect user to cancel page or back to cart
                }}
                onError={(err) => {
                    setError(String(err));
                    console.error("PayPal Checkout onError", err);
                }}
            />
        </div>
    )
}

export default PayPalButtonComponent



const CancelOrder = () => {
    return (
        <>
            <Heading>Order Canceled</Heading>
        </>
    )
}