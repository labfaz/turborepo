import React, { FC } from 'react';
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';

import Contact from '../Contact';
import LogoFooter from '../Logo';
import Navigation from '../Navigation';
import NewsLetter from '../Newsletter';

import { FooterContainer } from './style';

interface Props {
  data: SocialNetworksLabfaz;
}

const Web: FC<Props> = ({ data }) => {
  return (
    <FooterContainer>
      <div className="miniContainer">
        <LogoFooter data={data} />
        <Navigation />
        <NewsLetter />
        <Contact phone={data.phone} email={data.email} />
      </div>
    </FooterContainer>
  );
};

export default Web;
