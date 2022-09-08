import { Button, Divider, useDisclosure } from '@chakra-ui/react';
import { PricingListInterface } from '~/utils/pricingList';
import ModelComponent from './ModelComponent';

interface PropsType {
  item: PricingListInterface
}
export default function PricingComponent(props: PropsType) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { item } = props

  const { details } = item
  return (
    <div className="shadow-xl hover:shadow-2xl flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100  xl:p-8 darkl;l:bg-gray-800 darkl;l:text-white hover:scale-105 transition">
      <ModelComponent isOpen={isOpen} onClose={onClose} item={item} />

      <h3 className="mb-4 text-2xl font-semibold bg-red-200 p-5 font-semibold">{item.duration}</h3>
      {/* <p className="font-light text-gray-500 sm:text-lg ">
        Best option for personal use & for your next project.
      </p> */}
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">${item.price}</span>
        {/* <span className="text-gray-500 ">/{item.slashduration}</span> */}
      </div>

      <Divider />

      <ul role="list" className="mb-8 space-y-4 text-left">
        {details.map((item, index) => {
          return (
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className='text-center' > {item.detail} </span>
            </li>
          )
        })}

      </ul>
      <Button colorScheme={'teal'} onClick={onOpen} >Get Started</Button>
    </div>
  );
}
