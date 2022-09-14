import React, { FC } from 'react';
import type { StaticImageData } from 'next/image';

import { Container, LabelImage, LabelText } from './styles';

export interface LabelProps {
  name: string;
  image?: StaticImageData;
  lightMode?: boolean;
  alt?: string;
}

export const Label: FC<LabelProps> = ({
  name,
  image,
  lightMode = false,
  alt = '',
}) => {
  return (
    <Container lightMode={lightMode}>
      {image && <LabelImage src={image} alt={alt} icon />}
      <LabelText lightMode={lightMode}>{name}</LabelText>
    </Container>
  );
};

export default Label;
