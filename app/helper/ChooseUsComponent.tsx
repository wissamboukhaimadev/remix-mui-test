import { Box, Heading, Text } from "@chakra-ui/react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


export default function ChooseUsComponents({title,text,children}:any) {
  return (
    <Box maxW="sm" overflow="hidden" className="hover:shadow-lg hover:bg-yellow-100 cursor-pointer transition-all">
    <div className="flex justify-center ">
      {children}
    </div>

    <Box p="6">
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      ></Box>
      <Heading className="text-center" size="md">
        {title}
      </Heading>
      <Text className="pt-4 text-center " fontSize='md' >{text}</Text>
    </Box>
  </Box>
  )
}
