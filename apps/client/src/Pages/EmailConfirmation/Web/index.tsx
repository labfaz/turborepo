import React, { FC } from 'react';
import { InternalLinkButton } from 'Components/Buttons/InternalLinkButton';
import { navLinks } from 'Utils/navLinks';

import Image from '../Image';

import { Content, Rectangle2, TextWrapper, TitleText } from './style';

export const Web: FC = () => {
  return (
    <Content>
      <Rectangle2>
        <Image alt="Erro" />
        <TextWrapper>
          <TitleText>Email confirmado</TitleText>
          <InternalLinkButton
            className="empty-black"
            href={navLinks.login.path}
          >
            CLIQUE PARA ENTRAR
          </InternalLinkButton>
        </TextWrapper>
      </Rectangle2>
    </Content>
  );
};

export default Web;
