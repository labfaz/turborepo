import React, { FC } from 'react';
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';

import Contact from '../Contact';
import LogoFooter from '../Logo';

import { FooterContainer } from './style';

interface Props {
  data: SocialNetworksLabfaz;
}

const Mobile: FC<Props> = ({ data }) => {
  return (
    <FooterContainer>
      <div className="miniContainer">
        <LogoFooter data={data} />
        <Contact phone={data.phone} email={data.email} />
      </div>
    </FooterContainer>
  );
};

export default Mobile;
