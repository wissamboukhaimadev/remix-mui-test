interface questionsAndResponseInterface {
    question: string
    response1: string
    response2: string
    response3?: string
}
export const questionsAndResponse: questionsAndResponseInterface[] = [
    {
        question: 'How can I subscribe for the service ?',
        response1: 'Open Plan & Prices page to see plans and prices.',
        response2: 'Select your service and you can pay via PayPal.',
        response3: 'We will deliver your order between 5 to 30 mins manually.'
    },
    {
        question: 'Can I test the service before ordering?',
        response1: 'You can request a free 24 hours test first and check quality and playlist',
        response2: 'We won’t offer free test on live match days.',
        response3: 'Each user only receive test line once. If you liked the service you can subscribe.'
    },
    {
        question: 'How long does it take for orders to proceed?  ',
        response1: 'We usually process orders manually (because of security purposes). So please be Patient after payment.',
        response2: 'We will send your order details to your provided email address between 5 minutes to 12 hours.',
        response3: 'Please contact us on live chat or Whatsapp  if you haven’t received your order after 12 hours and check your inbox/spam/bulk folder first.'
    },
    {
        question: 'Payment Methods',
        response1: 'We accept PayPal.',
        response2: 'We accept Stripe',
    },
]