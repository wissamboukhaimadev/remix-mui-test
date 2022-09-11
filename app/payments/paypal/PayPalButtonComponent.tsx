import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { Button, Highlight, Input, Spinner, Text } from '@chakra-ui/react'
import { PricingListInterface } from '~/utils/pricingList'
import { useNavigate } from '@remix-run/react'
import axios from 'axios'

import Cookies from 'js-cookie'

interface PaypalButtonPropsInterface {
    item: PricingListInterface
}

interface UserInfoInterface {
    username: string
    email: string
    phonenumber: string
}

const userInfo: UserInfoInterface = {
    username: '',
    email: '',
    phonenumber: ''
}

const userEroorValidation: UserInfoInterface = {
    username: '',
    email: '',
    phonenumber: ''
}

const PayPalButtonComponent = (props: PaypalButtonPropsInterface) => {

    const navigate = useNavigate()
    const { item: product } = props
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [userState, setUserState] = useState<UserInfoInterface>(userInfo)
    const [userErrors, setUserErrors] = useState<UserInfoInterface>(userEroorValidation)

    const [loading, setLoading] = useState<boolean>(false)

    const { username, email, phonenumber } = userState

    localStorage.setItem('user', 'wissamis uesr')



    const [paypalDisabled, setPaypalDisabled] = useState<boolean>(true)









    const baseUrl = 'https://nestjs-iptv.onrender.com'



    const addPayedUser = async () => {
        const userId = Cookies.get('userwanttopayid')
        try {

            const { data: userData } = await axios.get(`${baseUrl}/userswanttopay/singleuser/${userId}`)

            await axios.post(`${baseUrl}/userspayed/create`, {
                name: userData.name,
                phoneNumber: userData.phoneNumber,
                email: userData.email,
                subscriptionDuration: product.duration,
                subscriptionPrice: product.price
            })



        } catch (error) {
            alert('error ocuured')
            console.error('==============>>>>>>>>>>>>>>>>>>>>>>>>>>><::::::' + error)
        }
    }

    const handleApprove = async (orderId: any) => {
        // Call backend function to fulfill order


        await addPayedUser()
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
            <ModelSignUpComponent
                paypalDisabled={paypalDisabled}
                setPaypalDisabled={setPaypalDisabled}
                userState={userState}
                setUserState={setUserState}
                userErrors={userErrors}
                setUserErrors={setUserErrors}
                loading={loading}
                setLoading={setLoading}
            />

            <PayPalButtons
                disabled={paypalDisabled}
                style={{
                    color: "silver",
                    layout: "horizontal",
                    height: 48,
                    tagline: false,
                    shape: "pill"
                }}
                onClick={async (data, actions) => {
                    // Validate on button click, client or server side
                    const hasAlreadyBoughtCourse = false;
                    await addPayedUser()
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
                    alert("PayPal Checkout onError");
                }}
            />
        </div>
    )
}

export default PayPalButtonComponent



interface ModelSignUpComponentInterface {
    paypalDisabled: boolean
    setPaypalDisabled: (value: React.SetStateAction<boolean>) => void
    userState: UserInfoInterface
    setUserState: React.Dispatch<React.SetStateAction<UserInfoInterface>>
    userErrors: UserInfoInterface
    setUserErrors: React.Dispatch<React.SetStateAction<UserInfoInterface>>
    loading: boolean
    setLoading: (value: React.SetStateAction<boolean>) => void
}

const ModelSignUpComponent = (props: ModelSignUpComponentInterface) => {
    const { paypalDisabled, setPaypalDisabled, userState, setUserState, userErrors, setUserErrors, loading, setLoading } = props

    const { username, email, phonenumber } = userState
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email);

    //axios base Url
    const axiosBaseUrl = 'https://nestjs-iptv.onrender.com'

    const addingUserWantToPayDB = async () => {
        // Show Loading State When Data Is Moved To DB
        setLoading(true)
        try {
            const { data, status } = await axios.post(`${axiosBaseUrl}/userswanttopay/create`, {
                phoneNumber: phonenumber,
                name: username,
                email
            })

            Cookies.set('userwanttopayid', data.id)


            const userCookie = Cookies.get('userwanttopayid')
            setLoading(false)


        } catch (error) {
            alert('error')
            console.log('error ModelSignUpComponent' + error)
        }
    }
    const handleCompleteOrder = async () => {
        if (result) {
            setUserErrors({ ...userErrors, email: '' })
            if (username.trim().length > 2 && phonenumber.trim().length > 2) {

                // adding user to UserWantToPay Database
                await addingUserWantToPayDB()
                setPaypalDisabled(!paypalDisabled)
            } else {
                setUserErrors({ ...userErrors, username: 'username or phoneNumber is Not Valid' })
            }

        } else {
            setUserErrors({ ...userErrors, email: 'Not A Valid Email' })
        }


    }

    if (!paypalDisabled) {
        return <Text></Text>
    }


    return (

        <div className='mb-10'>


            {loading && (
                <div className='flex justify-center' >
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>
            )}
            {!loading && (
                <div>
                    <Input className='mb-2' placeholder="name" type='text' value={username} onChange={(e) => setUserState({ ...userState, username: e.target.value })} />
                    <Input className='mb-2' placeholder="email" type='email' value={email} onChange={(e) => setUserState({ ...userState, email: e.target.value })} />
                    <Input className='mb-2' placeholder="phonenumber" type='text' value={phonenumber} onChange={(e) => setUserState({ ...userState, phonenumber: e.target.value })} />

                    <div className='flex justify-center'>
                        <Button colorScheme={'teal'} onClick={handleCompleteOrder} >Complete Order</Button>
                    </div>


                    <>
                        <Text className='text-red-500'> {userErrors.email} </Text>
                        <Text className='text-red-500'> {userErrors.username} </Text>
                    </>
                </div>
            )
            }


        </div>
    )
}
