/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';
import Logo from 'Components/Logo';

import { Container, Icon, IconsDiv } from './style';

export interface Props {
  data: SocialNetworksLabfaz;
}

export const Header: FC<Props> = ({ data }) => {
  const { facebook, twitter, linkedin, googlePlus, instagram } = data;
  return (
    <Container>
      <Logo />
      <IconsDiv>
        {!!facebook && facebook !== '' && (
          <Icon href={facebook} data-testid="facebook">
            <FaFacebookSquare />
          </Icon>
        )}
        {!!twitter && twitter !== '' && (
          <Icon href={twitter} data-testid="twitter">
            <FaTwitterSquare />
          </Icon>
        )}
        {!!instagram && instagram !== '' && (
          <Icon href={instagram} data-testid="instagram">
            <FaInstagramSquare />
          </Icon>
        )}
        {!!googlePlus && googlePlus !== '' && (
          <Icon href={googlePlus} data-testid="google">
            <FaGooglePlusSquare />
          </Icon>
        )}
        {!!linkedin && linkedin !== '' && (
          <Icon href={linkedin} data-testid="linkedin">
            <FaLinkedin />
          </Icon>
        )}
      </IconsDiv>
    </Container>
  );
};

export default Header;
