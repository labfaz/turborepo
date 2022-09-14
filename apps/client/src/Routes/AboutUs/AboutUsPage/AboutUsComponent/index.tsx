import React, { FC } from 'react';
import { DataObject } from 'Api/AboutUs';
import Markdown from 'Components/Markdown';

// import { Text } from 'Components/Typography/Text';
import { Container, StyledImage, TextDiv, Wrapper } from '../styles';

export interface AboutProps {
  data: DataObject[];
}

const About: FC<AboutProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item) => (
        <Container key={item.id} about="true">
          <TextDiv>
            {/* <Text>{item.text}</Text> */}
            <Markdown content={item.text} />
          </TextDiv>
          <StyledImage src={item.img.url} alt={item.img.caption} />
        </Container>
      ))}
    </Wrapper>
  );
};

export default About;
