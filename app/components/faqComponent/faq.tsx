import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { questionsAndResponse } from '~/utils/questionResponse';
export default function MostAsketQuestions() {
  return (
    <div className='mb-10'>
      <Accordion >
        {questionsAndResponse.map((item, index) => {
          return (
            <>
            {/* <div className='my-5'/> */}
            <AccordionItem className='bg-teal-100 p-5 mb-2' >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className='pl-10'>
                <ul>
                    <li> - {item.response1}</li>
                    <li> - {item.response2}</li>
                    {item.response3?<li> - {item.response3}</li>:''}
                </ul>
              </AccordionPanel>
            </AccordionItem>
            </>
          );
        })}
      </Accordion>
      
    </div>
  );
}
