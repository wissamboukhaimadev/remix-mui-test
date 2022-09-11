export interface PricingListInterface {
    price: number
    duration: string
    details: DetailsInterface[],
    slashduration: string
}

interface DetailsInterface {
    detail: string
}

const commonDetailsArr = [
    {
        detail: '+188000 Channels & Movies ',
    },
    {
        detail: '	4K / Ultra HD / HD Picture Quality ',
    },
    {
        detail: '	Anti Freeze System ',
    },
    {

        detail: 'All Devices are Supported',
    },
    {
        detail: 'You get unlimited access 24/7 ',

    },
    {

        detail: '24/7 Technical Assistance ',
    },
    {
        detail: 'No more expensive cable bills'

    }
]
const pack89dolar = [
    {
        detail: '+188000 Channels & Movies ',
    },
    {
        detail: '	4K / Ultra HD / HD Picture Quality ',
    },
    {
        detail: '	Anti Freeze System ',
    },
    {

        detail: 'All Devices are Supported',
    },
    {
        detail: 'You get unlimited access 24/7 ',

    },
    {

        detail: '24/7 Technical Assistance ',
    },
    {
        detail: 'No more expensive cable bills'

    }, {
        detail: 'VoD 80000 Channels'
    }
]

export const pricingList: PricingListInterface[] = [

    {
        price: 39.99,
        duration: '6 Months',
        details: commonDetailsArr,
        slashduration: 'month'
    },
    {
        price: 59.99,
        duration: '1 Year',
        details: commonDetailsArr,
        slashduration: 'year'
    },
    {
        price: 24.99,
        duration: '3 Months',
        details: commonDetailsArr,
        slashduration: 'month'
    },
    {
        price: 88.99,
        duration: '12 Months',
        details: pack89dolar,
        slashduration: 'year'
    },

]





