import React, { FC } from 'react';
import { ApiStayTuned } from 'Api/StayTuned';
import useMobile from 'Hooks/useMobile';

import {
  Button,
  MainText,
  MainTitle,
  StyledImage,
  TextWrapper,
  Wrapper,
} from './styles';

export interface Props {
  data: ApiStayTuned;
}

export const StayTuned: FC<Props> = ({ data }) => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <Wrapper>
          <TextWrapper>
            <MainTitle>{data.title}</MainTitle>
            <MainText>{data.description}</MainText>
          </TextWrapper>
          <StyledImage src={data.image.url} alt={data.image.alternativeText} />
          <Button href={data.link}>Saiba Mais</Button>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextWrapper>
            <MainTitle>{data.title}</MainTitle>
            <MainText>{data.description}</MainText>
            <Button href={data.link}>Saiba Mais</Button>
          </TextWrapper>
          <StyledImage src={data.image.url} alt={data.image.alternativeText} />
        </Wrapper>
      )}
    </>
  );
};

export default StayTuned;
