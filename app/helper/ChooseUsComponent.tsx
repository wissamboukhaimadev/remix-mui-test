import { Box, Heading } from "@chakra-ui/react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function ChooseUsComponents() {
  return (
    <Box maxW="sm" overflow="hidden">
    <div className="flex justify-center ">
      <SupportAgentIcon sx={{ fontSize: '8rem' }} />
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
        Great User Experience With Awesome Support
      </Heading>
    </Box>
  </Box>
  )
}
