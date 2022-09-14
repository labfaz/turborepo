/* eslint-disable @cspell/spellchecker */
import React, { ElementType, FC } from 'react';
import { IconType } from 'react-icons';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiTiktok } from 'react-icons/si';
import ExternalLink from 'Components/ExternalLink';
import { User } from 'Context/LoggedUserToken';
import {
  getFacebookLink,
  getInstagramLink,
  getLinkedinLink,
  getTiktokLink,
  getTwitterLink,
  getYoutubeLink,
} from 'Utils/userUtils';

export interface SocialMediaLinkProps {
  label: string;
  labelToLink?: (label: string) => string;
  icon: IconType;
  noAt?: boolean;
  ContainerElement?: ElementType;
}

export const SocialMediaLink: FC<SocialMediaLinkProps> = ({
  label,
  icon: Icon,
  labelToLink,
  noAt = false,
  ContainerElement = 'span',
}) => {
  const labelWithAt = noAt || label.startsWith('@') ? label : `@${label}`;

  if (!labelToLink)
    return (
      <ContainerElement>
        <Icon />
        <span>{labelWithAt}</span>
      </ContainerElement>
    );

  return (
    <ExternalLink href={labelToLink(label)}>
      <ContainerElement>
        <Icon />
        <span>{labelWithAt}</span>
      </ContainerElement>
    </ExternalLink>
  );
};

export const SocialMediaLinks: FC<{
  user: User;
  ContainerElement?: ElementType;
}> = ({ user, ContainerElement }) => {
  const linksProps: SocialMediaLinkProps[] = [
    { ContainerElement, icon: MdEmail, label: user.email, noAt: true },
    {
      ContainerElement,
      icon: FaFacebookSquare,
      label: user.artist.contact.facebook,
      labelToLink: getFacebookLink,
    },
    {
      ContainerElement,
      icon: FaInstagramSquare,
      label: user.artist.contact.instagram,
      labelToLink: getInstagramLink,
    },
    {
      ContainerElement,
      icon: FaTwitterSquare,
      label: user.artist.contact.twitter,
      labelToLink: getTwitterLink,
    },
    {
      ContainerElement,
      icon: SiTiktok,
      label: user.artist.contact.tiktok,
      labelToLink: getTiktokLink,
    },
    {
      ContainerElement,
      icon: FaYoutubeSquare,
      label: user.artist.contact.youtube,
      labelToLink: getYoutubeLink,
    },
    {
      ContainerElement,
      icon: FaLinkedin,
      label: user.artist.contact.linkedin,
      labelToLink: getLinkedinLink,
    },
  ].filter(({ label }) => !!label && label !== '');

  return <>{linksProps.map(SocialMediaLink)}</>;
};

export default SocialMediaLink;
