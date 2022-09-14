import React, { FC } from 'react';

import { ImageConstruction } from './styles';

export const Image: FC<{ alt?: string }> = ({ alt }) => {
  return <ImageConstruction alt={alt || 'Imagem de erro'} />;
};

export default Image;
