import React, { FC } from 'react';
import { RecoverData } from 'Api/RecoverPassImage';
import Footer from 'Components/Footer';
import FullPage from 'Components/FullPage';
import Header from 'Components/Header';
import RecoverForm from 'Components/PasswordRecover';
import WithImageContainerForm from 'Components/WithImageContainerForm';

import { Container, Span } from '../styles';

interface DisplayProps {
  image: RecoverData;
}

export const Display: FC<DisplayProps> = ({ image }) => {
  return (
    <FullPage>
      <Header />
      <Container>
        <WithImageContainerForm image={image.image} title="Alteração de senha">
          <RecoverForm />
        </WithImageContainerForm>
      </Container>
      <Span>
        {' '}
        Laboratório dos Fazeres e Saberes Técnicos da Economia Criativa{' '}
      </Span>
      <Footer />
    </FullPage>
  );
};

export default Display;
