import { Heading, Text } from "@chakra-ui/react";
import { Footer } from "~/components";
import MostAsketQuestions from "~/components/faqComponent/faq";

export default function faq() {
  return (
    <div className='' >
        <div className="p-20 bg-blue-300 j">
            <Heading className="text-center">FAQ</Heading>
            <Text className="text-center" fontSize='md'>Frequently Asked Questions</Text>
        </div>
        <div className="py-20" />
        <MostAsketQuestions/>

        <Footer/>
    </div>
  )
}
