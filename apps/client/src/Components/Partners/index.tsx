import React, { FC } from 'react';
import { HomePartners } from 'Api/HomePartners';

import Display from './Display';

export interface PartnersProps {
  partners: HomePartners[];
}

export const Partners: FC<PartnersProps> = ({ partners }) => {
  return <Display data={partners} />;
};

export default Partners;
