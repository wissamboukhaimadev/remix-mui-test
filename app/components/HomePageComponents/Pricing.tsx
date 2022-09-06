import React,{memo} from 'react'
import { PricingComponent } from '~/helper';

 const Pricing: React.FC =()=> {

  return (
    <section>
      <div  className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" >
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <PricingComponent key={index} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Pricing)
