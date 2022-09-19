import React, { FC } from 'react';

import image from './ImageCircle.png';
import { ImageConstruction } from './style';

type ImageType = {
  alt?: string;
};

export const Image: FC<ImageType> = ({ alt }) => {
  return (
    <ImageConstruction
      layout="fill"
      src={image}
      alt={alt || 'Não encontrado'}
    />
  );
};

export default Image;
