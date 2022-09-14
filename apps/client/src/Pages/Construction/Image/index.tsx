import React, { FC } from 'react';

import { ImageConstruction } from './style';

export const Image: FC<{ alt?: string }> = ({ alt }) => {
  return <ImageConstruction alt={alt || 'Construção'} />;
};

export default Image;
