import React, { FC } from 'react';
import Markdown from 'Components/Markdown';
import SocialMediaIcons from 'Components/SocialMediaIcons';
import { formatPostDate } from 'Utils/formatPostDate';

import {
  BottomWrapper,
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

export const Mobile: FC<DisplayProps> = ({ title, content, created_at }) => {
  return (
    <>
      <MainTextContainer>
        <PostTitle>{title}</PostTitle>
        <Markdown content={content} />
      </MainTextContainer>
      <BottomWrapper>
        <SocialMediaIcons />
        <Divisor />
        <DateContainer>
          <Date size="var(--font-size-medium)">
            {formatPostDate(created_at)?.day}
          </Date>
          <Date size="var(--font-size-medium)">
            {formatPostDate(created_at)?.hour}
          </Date>
        </DateContainer>
      </BottomWrapper>{' '}
    </>
  );
};

export default Mobile;
