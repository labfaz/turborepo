import React, { FC } from 'react';

import LogoImageBlack from './LABFAZBLACK.png';
import LogoImagePink from './LABFAZPINK.png';
import { StyledImage } from './style';

export interface LogoProps {
  color?: string;
}
const Logo: FC<LogoProps> = ({ color = 'pink' }) => {
  if (color === 'black') return <StyledImage src={LogoImageBlack} alt="logo" />;
  else return <StyledImage src={LogoImagePink} alt="logo" />;
};

export default Logo;
