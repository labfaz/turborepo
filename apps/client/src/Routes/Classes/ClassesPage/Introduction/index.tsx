import React, { FC } from 'react';
import { CoursesPageIntroduction } from 'Api/CoursesPageIntroduction';

import {
  Container,
  MainTitle,
  StyledImage,
  TitleText,
  TitleWrapper,
} from './styles';

export interface Props {
  data: CoursesPageIntroduction;
}

const Introduction: FC<Props> = ({ data }) => {
  return (
    <Container>
      <StyledImage src={data.image.url} alt={data.image.alternativeText} />
      <TitleWrapper>
        <MainTitle>{data.title}</MainTitle>
        <TitleText>{data.description}</TitleText>
      </TitleWrapper>
    </Container>
  );
};

export default Introduction;
