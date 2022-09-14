import React, { FC } from 'react';
import { Text } from 'Components/Typography/Text';
import { Title } from 'Components/Typography/Title';

import { ResumeInfoDiv } from '../styles';

interface ResumeProps {
  requirements: string;
  about: string;
}

export const Resume: FC<ResumeProps> = ({ requirements, about }) => {
  return (
    <ResumeInfoDiv>
      <Title>Sobre essa atividade</Title>
      <Text> {about} </Text>

      <Title>Requisitos</Title>
      <Text> {requirements} </Text>
    </ResumeInfoDiv>
  );
};

export default Resume;
