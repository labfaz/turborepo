import React, { FC } from 'react';

import image from './ImageCircle.png';
import { ImageConstruction } from './style';

type ImageType = {
  alt?: string;
};

export const Image: FC<ImageType> = ({ alt }) => {
  return <ImageConstruction src={image} alt={alt || 'Não encontrado'} />;
};

export default Image;
