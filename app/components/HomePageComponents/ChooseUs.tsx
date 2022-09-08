import { memo } from 'react';
import { Heading } from '@chakra-ui/react';
import { ChooseUsComponent } from '~/helper';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import WindPowerIcon from '@mui/icons-material/WindPower';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const ChooseUs = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <Heading>Why Choose Us</Heading>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <ChooseUsComponent
            title="Great User Experience With Awesome Support"
            text=""
          >
            <SupportAgentIcon sx={{ fontSize: '8rem' }} />
          </ChooseUsComponent>
          <ChooseUsComponent
            title="HD Sports"
            text="Stream all your favorite live HD sports from all around the world. Don’t miss your favorite teams anymore!"
          >
            <SportsSoccerIcon sx={{ fontSize: '8rem' }} />
          </ChooseUsComponent>
          <ChooseUsComponent
            title="Video On Demand"
            text="Enjoy more than 54000 TV Channels, Movies and TV shows! with Features of Catch Up & EPG (Electronic Program Guide) for all UK Channels."
          >
            <PersonalVideoIcon sx={{ fontSize: '8rem' }} />
          </ChooseUsComponent>
          <ChooseUsComponent
            title="Server Stability"
            text="No more freezing, stuttering. Our IPTV Services are always ready with our powerful streaming servers."
          >
            <WindPowerIcon sx={{ fontSize: '8rem' }} />
          </ChooseUsComponent>
        </div>
      </div>
    </section>
  );
};

export default memo(ChooseUs);
