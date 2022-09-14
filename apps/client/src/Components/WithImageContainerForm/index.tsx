import React, { FC } from 'react';
import { Image } from 'Utils/Image';

import { Container, Content, Frame, ImageDiv, Line, PageTitle } from './style';

interface ContainerProps {
  image: Image;
  title: string;
  children?: React.ReactNode;
}

export const WithImageContainerForm: FC<ContainerProps> = ({
  children,
  image,
  title,
}) => {
  return (
    <Container>
      <PageTitle> {title} </PageTitle>
      <Line />
      <Content>
        <ImageDiv>
          <Frame src={image.url} alt={image.alternativeText} />
        </ImageDiv>
        {children}
      </Content>
    </Container>
  );
};

export default WithImageContainerForm;
