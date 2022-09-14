import React, { FC } from 'react';
import Markdown from 'Components/Markdown';
import SocialMediaIcons from 'Components/SocialMediaIcons';
import { formatPostDate } from 'Utils/formatPostDate';

import {
  Date,
  DateContainer,
  Divisor,
  MainTextContainer,
  PostTitle,
} from './styles';

interface DisplayProps {
  title: string;
  created_at: string;
  content: string;
}

export const Web: FC<DisplayProps> = ({ title, created_at, content }) => {
  const yearRegExp = /[0-9]{4}/;
  const isYear = yearRegExp.test(formatPostDate(created_at)?.hour as string);

  return (
    <>
      <MainTextContainer>
        <PostTitle>{title}</PostTitle>
        <Markdown content={content} />
        <SocialMediaIcons />
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
