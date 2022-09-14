import React, { FC } from 'react';

import image from './EmailVerification.png';
import { ImageConstruction } from './styles';

type ImageType = {
  alt?: string;
};

export const Image: FC<ImageType> = ({ alt }) => {
  return <ImageConstruction src={image} alt={alt || 'Erro'} />;
};

export default Image;
