/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';
import Logo from 'Components/Logo';

import { Icon, IconContainer, LogoContainer, Title } from './style';

interface LogoProps {
  data: SocialNetworksLabfaz;
}

const LogoFooter: FC<LogoProps> = ({ data }) => {
  const { facebook, twitter, googlePlus, linkedin, instagram, youtube } = data;
  return (
    <LogoContainer id="logo-container">
      <Logo color="pink" />
      <Title>Nossas redes e mídias</Title>
      <IconContainer>
        {!!youtube && youtube !== '' && (
          <Icon href={youtube} data-testid="youtube">
            <FaYoutubeSquare name="Youtube" />
          </Icon>
        )}
        {!!facebook && facebook !== '' && (
          <Icon href={facebook} data-testid="facebook">
            <FaFacebookSquare name="Facebook" />
          </Icon>
        )}
        {!!twitter && twitter !== '' && (
          <Icon href={twitter} data-testid="twitter">
            <FaTwitterSquare name="Twitter" />
          </Icon>
        )}
        {!!instagram && instagram !== '' && (
          <Icon href={instagram} data-testid="instagram">
            <FaInstagramSquare name="Instagram" />
          </Icon>
        )}
        {!!googlePlus && googlePlus !== '' && (
          <Icon href={googlePlus} data-testid="google">
            <FaGooglePlusSquare name="Google Plus" />
          </Icon>
        )}
        {!!linkedin && linkedin !== '' && (
          <Icon href={linkedin} data-testid="linkedin">
            <FaLinkedin name="Linkedin" />
          </Icon>
        )}
      </IconContainer>
    </LogoContainer>
  );
};

export default LogoFooter;
