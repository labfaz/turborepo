import React, { FC } from 'react';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import { Container, Rectangle, Text } from 'Pages/Construction/Mobile/style';

import Image from '../Image';

export const Mobile: FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <Rectangle>
          <Image alt="Não encontrado" />
        </Rectangle>
        <Rectangle invert={true}>
          <Text level={1}>A página que você está procurando não existe</Text>
        </Rectangle>
      </div>
      <Footer />
    </Container>
  );
};

export default Mobile;
