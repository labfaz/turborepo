/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import Image from 'next/image';

import Label from '../../../Components/Label';
import { getIcon } from '../../../Utils/IconDictionary';

import {
  Button,
  CardTitle,
  Container,
  Description,
  LabelWrapper,
  StyledImage,
  TextWrapper,
  TitleWrapper,
  VerifiedText,
  VerifiedWrapper,
} from './styles';
import verifiedIcon from './verified.png';

interface UserCardData {
  data: {
    id: string;
    isVerified: boolean;
    name: string;
    area: {
      name: string;
    }[];
    photo: string;
    description: string;
  };
}

export const Web: FC<UserCardData> = ({ data }) => {
  const { id, isVerified, name, area, photo, description } = data;
  area.length = 2;

  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <CardTitle>{name}</CardTitle>
          {isVerified ? (
            <VerifiedWrapper>
              <Image layout="fill" src={verifiedIcon} alt="verificade" />
              <VerifiedText>Verificado Backstage</VerifiedText>
            </VerifiedWrapper>
          ) : (
            <></>
          )}
        </TitleWrapper>
        <LabelWrapper>
          {area.map((a) => {
            return (
              <Label
                name={a.name}
                alt={a.name}
                image={getIcon(a.name)}
                lightMode={true}
              />
            );
          })}
        </LabelWrapper>
        <Description>{description}</Description>
        <Button href={`/perfil/${id}`}>visualizar perfil</Button>
      </TextWrapper>
      <StyledImage src={photo} />
    </Container>
  );
};

export default Web;
