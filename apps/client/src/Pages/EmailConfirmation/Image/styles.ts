import Image from 'next/image';
import styled, { css } from 'styled-components';
import { DesktopSmall, Mobile } from 'Utils/breakpoints';

export const ImageConstruction = styled(Image)`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;

  ${DesktopSmall(css`
    height: 15rem;
    width: 15rem;
  `)}

  ${Mobile(css`
    height: 12rem;
    width: 12rem;
  `)}
`;
