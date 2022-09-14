import React, { FC } from 'react';
import { AboutUsData, TeamsData } from 'Api/AboutUs';
import { AboutUsBannerInfo } from 'Api/AboutUsBannerInfo';
import Banner from 'Components/Banner';
import Wireframe from 'Components/Wireframe';

import About from './AboutUsComponent';
import Staff from './StaffComponent';
import { Spacer } from './styles';
import WelcomeComponent from './WelcomeComponent';

export interface DisplayProps {
  about_data: AboutUsData | null;
  banner_data: AboutUsBannerInfo | null;
  team: TeamsData | null;
}

export const Display: FC<DisplayProps> = ({
  banner_data,
  about_data,
  team,
}) => {
  return (
    <Wireframe>
      <Banner
        align="left"
        {...banner_data}
        image={banner_data?.image || null}
      />
      {about_data ? <WelcomeComponent data={about_data.welcome_data} /> : <></>}
      {about_data ? <About data={about_data.about_us_data} /> : <></>}
      {team ? <Staff data={team} /> : <></>}
      <Spacer />
    </Wireframe>
  );
};

export default Display;
