import React, { FC } from 'react';
import { formatPostDate } from 'Utils/formatPostDate';

import {
  Button,
  ButtonContainer,
  ButtonLayer,
  ButtonText,
  ButtonWrapper,
  Date,
  DateContainer,
  Description,
  Divisor,
  MainTextContainer,
  PostTitle,
  StyledImage,
} from './styles';

interface DisplayProps {
  title: string;
  description: string;
  image: {
    name?: string;
    url: string;
  };
  created_at: string;
  id: number;
}

export const Mobile: FC<DisplayProps> = ({
  title,
  description,
  image,
  created_at,
  id,
}) => {
  const route = `/observatorio/${id}`;

  return (
    <>
      <MainTextContainer to={route}>
        <PostTitle>{title}</PostTitle>
        <Description>{description}</Description>
        {!!image && <StyledImage src={image.url} alt={image.name} />}
      </MainTextContainer>
      <ButtonWrapper>
        <ButtonContainer>
          <Button href={route}>
            <ButtonText>leia mais</ButtonText>
          </Button>
          <ButtonLayer />
        </ButtonContainer>
        <Divisor />
        <DateContainer>
          <Date size="var(--font-size-medium)">
            {formatPostDate(created_at)?.day}
          </Date>
          <Date size="var(--font-size-medium)">
            {formatPostDate(created_at)?.hour}
          </Date>
        </DateContainer>
      </ButtonWrapper>{' '}
    </>
  );
};

export default Mobile;
