import React, { FC } from 'react';
import { RecoverData } from 'Api/RecoverPassImage';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import PasswordChange from 'Components/PasswordRecover/passwordChange';
import WithImageContainerForm from 'Components/WithImageContainerForm';

import { Container, Span } from '../styles';

interface DisplayProps {
  image: RecoverData;
  token: string;
}

export const Display: FC<DisplayProps> = ({ image, token }) => {
  return (
    <>
      <Header />
      <Container>
        <WithImageContainerForm
          image={image.image}
          title="Recuperação de senha"
        >
          <PasswordChange token={token} />
        </WithImageContainerForm>
      </Container>
      <Span>
        {' '}
        Laboratório dos Fazeres e Saberes Técnicos da Economia Criativa{' '}
      </Span>
      <Footer />
    </>
  );
};

export default Display;
