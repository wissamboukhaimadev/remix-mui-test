import { memo } from 'react';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { listsUrls } from '~/utils/listUrls';
import { Link } from '@remix-run/react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  console.log('rendering LargeWithNewsletter');
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      id="footer"
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '2fr 2fr', md: '10fr 2fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <div className="py-2" />
              <Text fontSize={'md'}>
                {' '}
                <span className="font-bold">Email :</span>{' '}
                <span className="text-red-400">admi@gmail.com</span>{' '}
              </Text>
              <div className="py-2  " />
              <Text fontSize={'md'}>
                {' '}
                <span className="font-bold">PhoneNumber :</span>{' '}
                <span className="text-red-400">87632764689</span>{' '}
              </Text>
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            {listsUrls.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="px-5 cursor-pointer"
                >
                  {' '}
                  {item.name}{' '}
                </Link>
              );
            })}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default memo(Footer);
