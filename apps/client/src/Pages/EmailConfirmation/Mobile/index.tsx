import React, { FC } from 'react';
import { InternalLinkButton } from 'Components/Buttons/InternalLinkButton';
import { navLinks } from 'Utils/navLinks';

import Image from '../Image';

import {
  ErrorContainer,
  ImageRectangle,
  MobileRectangle,
  SubtitleText,
  TitleText,
  TopWrapper,
} from './styles';

export const Mobile: FC = () => {
  return (
    <ErrorContainer>
      <TopWrapper>
        <ImageRectangle>
          <Image alt="Erro" />
        </ImageRectangle>
      </TopWrapper>
      <MobileRectangle invert={true}>
        <SubtitleText level={2}>
          <InternalLinkButton
            className="empty-black"
            href={navLinks.login.path}
          >
            ENTRAR
          </InternalLinkButton>
        </SubtitleText>
        <TitleText level={1}>Email confirmado</TitleText>
      </MobileRectangle>
    </ErrorContainer>
  );
};

export default Mobile;
