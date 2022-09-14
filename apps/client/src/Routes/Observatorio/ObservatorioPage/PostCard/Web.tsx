import React, { FC } from 'react';
import { formatPostDate } from 'Utils/formatPostDate';

import {
  Button,
  ButtonLayer,
  ButtonText,
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
    url: string;
    alternativeText: string;
  };
  created_at: string;
  id: number;
}

export const Web: FC<DisplayProps> = ({
  title,
  description,
  image,
  created_at,
  id,
}) => {
  const yearRegExp = /[0-9]{4}/;
  const isYear = yearRegExp.test(formatPostDate(created_at)?.hour as string);

  const route = `/observatorio/${id}`;

  return (
    <>
      <MainTextContainer to={route}>
        <PostTitle>{title}</PostTitle>
        <Description>{description}</Description>
        {!!image && <StyledImage src={image.url} alt={image.alternativeText} />}
        <ButtonLayer />
        <Button href={route}>
          <ButtonText>leia mais</ButtonText>
        </Button>
      </MainTextContainer>
      <Divisor />
      <DateContainer>
        <Date size="var(--font-size-subtitle)">
          {formatPostDate(created_at)?.day}
        </Date>
        <Date
          size={
            isYear
              ? 'var(--font-size-title-medium)'
              : 'var(--font-size-subtitle)'
          }
        >
          {formatPostDate(created_at)?.hour}
        </Date>
      </DateContainer>{' '}
    </>
  );
};

export default Web;
