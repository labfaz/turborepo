import React, { FC } from 'react';
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';

import Footer from '../Footer';
import Header from '../Header';
import Image from '../Image';

import { Container, Rectangle, Text } from './style';

export interface Props {
  data: SocialNetworksLabfaz;
}

export const Web: FC<Props> = ({ data }) => {
  return (
    <Container>
      <Header data={data} />
      <div>
        <Rectangle>
          <Image alt="Em construção" />
          <Text>Olá, ainda estamos organizando as coisas.</Text>
        </Rectangle>
      </div>
      <Footer />
    </Container>
  );
};

export default Web;
