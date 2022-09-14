import type { ReactNode } from 'react';
import React, { FC } from 'react';
import Footer from 'Components/Footer';
import FullPage from 'Components/FullPage';
import Header from 'Components/Header';
import styled from 'styled-components';

const Container = styled(FullPage)`
  display: flex;
  flex-direction: column;

  --background-color: var(--background-black);
  background-color: var(--background-color);
`;

const Content = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type TWireframe = {
  children?: ReactNode;
};

export const Wireframe: FC<TWireframe> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Wireframe;
