import Image from 'next/image';
import styled, { css } from 'styled-components';
import { DesktopSmall, Mobile } from 'Utils/breakpoints';

import image from './ErrorCircle.png';

export const ImageConstruction = styled(Image).attrs({
  src: `${image}`,
})`
  height: 20rem;
  width: 20rem;

  ${DesktopSmall(css`
    height: 15rem;
    width: 15rem;
  `)}

  ${Mobile(css`
    height: 12rem;
    width: 12rem;
  `)}
`;
