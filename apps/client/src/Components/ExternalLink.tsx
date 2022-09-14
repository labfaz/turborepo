import React, { FC } from 'react';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink: FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  );
};

export default ExternalLink;
