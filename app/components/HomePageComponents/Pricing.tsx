import { useDisclosure } from '@chakra-ui/react';
import React, { memo } from 'react'
import { ModelComponent, PricingComponent } from '~/helper';
import { pricingList } from '~/utils/pricingList';

const Pricing: React.FC = () => {



  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" >
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingList.map((item, index) => (
            <PricingComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Pricing)
