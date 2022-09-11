import { memo, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { listsUrls } from '~/utils/listUrls';
import { Link } from '@remix-run/react';
import { Link as ReactLinkTo } from 'react-scroll'

const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let scrollValueClass;

  if (scrollPosition > 10) {

    scrollValueClass = 'shadow-2xl fixed w-screen z-10 -translate-y-16 transition-all ease-in-out duration-500'
  }


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} className='duration-500' alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box className='py-5'>
              <Heading size='2xl' > <span className='px-2 pt-2 text-white' style={{ backgroundColor: '#CC1EB9' }} >V</span> IP IPTV</Heading>
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
            <Link to='/contact'>
              <Button variant={'solid'} colorScheme={'teal'} size={'lg'} mr={4}>
                IPTV TEST
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        className={scrollValueClass}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              className='flex justify-around'
            >
              {scrollValueClass && (
                <Link to='/'>
                  <Heading size='md' className='cursor-pointer' >
                    <span className='px-2 pt-2 text-white' style={{ backgroundColor: '#CC1EB9' }} >V</span> IP IPTV
                  </Heading>
                </Link>
              )}
              <NavigationLinks />
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavigationLinks />
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
};

const NavigationLinks: React.FC = () => {
  return (
    <ul className="list-none flex ">
      {listsUrls.map((item, index) => {
        if (item.type === 'internal') {
          return (
            <ReactLinkTo to='footer' smooth key={index} className="px-5 cursor-pointer">
              {' '}
              {item.name}{' '}
            </ReactLinkTo>
          );
        } else {
          return (
            <Link to={item.link} key={index} className="px-5 cursor-pointer">
              {' '}
              {item.name}{' '}
            </Link>
          );
        }
      })}
    </ul>
  );
};
export default memo(NavigationBar);
