/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';

import Label from '../../../Components/Label';
import { getIcon } from '../../../Utils/IconDictionary';

import {
  CardTitle,
  Container,
  Description,
  LabelWrapper,
  MobileMainContent,
  MobileWrapper,
  StyledImage,
  TextWrapper,
  TitleWrapper,
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

export const Mobile: FC<UserCardData> = ({ data }) => {
  const { id, isVerified, name, area, photo, description } = data;
  area.length = 2;

  return (
    <Link
      to={`/profile/${id}`}
      style={{
        width: '100%',
      }}
    >
      <Container>
        <MobileWrapper>
          <MobileMainContent>
            <StyledImage src={photo} />
            <TextWrapper>
              <TitleWrapper>
                <CardTitle>{name}</CardTitle>
                {isVerified ? (
                  <VerifiedWrapper>
                    <Image src={verifiedIcon} alt="verificade" />
                  </VerifiedWrapper>
                ) : (
                  <></>
                )}
              </TitleWrapper>
              <Description>{description}</Description>
            </TextWrapper>
          </MobileMainContent>
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
        </MobileWrapper>
      </Container>
    </Link>
  );
};

export default Mobile;
