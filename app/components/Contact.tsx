import { Fragment } from 'react'
import { Heading, Highlight } from "@chakra-ui/react";
import { whatsappNumbers } from '~/utils/whatsappNumbers'


export default function ContactComponent() {
  return (
    <div className="pt-10">

      <Heading className="text-center font-bold" >We're known From our fast Response. Contact Us Right Now</Heading>
      <Heading as='h2' size='lg' className='text-center pt-5'>You Can Contact Our Support Team Via <Highlight query='Whatsapp' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>Whatsapp</Highlight></Heading>
      {whatsappNumbers.map(item => {
        return (
          <Fragment key={item.name} >
            <Heading size='md' className='text-center m-5'>
              <Highlight query={['rachid', 'boujmaa']} styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}>{item.name}</Highlight> : {item.number}
            </Heading>
          </Fragment>
        )
      })}
    </div>
  );
}
