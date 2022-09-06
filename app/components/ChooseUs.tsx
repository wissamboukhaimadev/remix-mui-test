
import { Heading } from '@chakra-ui/react';
import { ChooseUsComponent } from '~/helper';

export default function ChooseUs() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <Heading>Why Choose Us</Heading>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {Array(5).fill(1).map((item,index)=>(
            <ChooseUsComponent/>
          ))}
        </div>
      </div>
    </section>
  );
}
