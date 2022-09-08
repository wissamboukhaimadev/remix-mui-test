import { Heading, Text } from "@chakra-ui/react";
import { Footer } from "~/components";
import { PricingComponent } from "~/helper";
import { pricingList } from "~/utils/pricingList";

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
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0 px-4">
          {pricingList.map((item, index) => (
            <PricingComponent key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}
