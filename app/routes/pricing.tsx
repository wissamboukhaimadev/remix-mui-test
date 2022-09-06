import {  Heading,Text } from "@chakra-ui/react";
import { Footer } from "~/components";
import { PricingComponent } from "~/helper";

export default function pricing() {
  return (
    <section>
      <div className="mb-20 " >
      <div className="pb-20">
          <div className="p-20 bg-blue-300 j">
            <Heading className="text-center">Pricing</Heading>
            <Text className="text-center" fontSize="md">
              IPTV Pricing
            </Text>
          </div>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 px-4">
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <PricingComponent key={index} />
            ))}
        </div>
      </div>
      <Footer/>
    </section>
  )
}
