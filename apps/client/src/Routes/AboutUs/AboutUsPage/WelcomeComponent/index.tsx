import React, { FC } from 'react';
import { DataObject } from 'Api/AboutUs';
import { Text } from 'Components/Typography/Text';

import { Container, StyledImage, TextDiv } from '../styles';

export interface WelcomeProps {
  data: DataObject;
}

export const WelcomeComponent: FC<WelcomeProps> = ({ data }) => {
  return (
    <Container key={data.id}>
      <TextDiv position="right">
        <Text>{data.text}</Text>
      </TextDiv>
      <StyledImage src={data.img.url} alt={data.img.caption} position="left" />
    </Container>
  );
};

export default WelcomeComponent;
