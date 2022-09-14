import React, { FC } from 'react';

import type { ButtonProps } from '../ButtonProps';

import { StyledButton } from './style';

export const ExternalLinkButton: FC<ButtonProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <>
      <StyledButton
        as="a"
        target="_blank"
        rel="noopener"
        href={href}
        {...props}
      >
        {children}
      </StyledButton>
    </>
  );
};
