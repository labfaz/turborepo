import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'Components/TextLink';

import { MarkdownStyles, StyledImage } from './styles';

interface Props {
  content: string;
  Text?: FC<{ children?: React.ReactNode; tagName?: string }>;
}

export const Markdown: FC<Props> = ({ content, Text = 'p' }) => {
  return (
    <MarkdownStyles>
      <ReactMarkdown
        components={{
          p: ({ node, children }) => {
            if (
              (node.children[0] as unknown as HTMLAnchorElement).tagName === 'a'
            ) {
              type TAnchor = {
                properties: {
                  href: string;
                };
                children: [{ value: string }];
              };
              const link = node.children[0] as unknown as TAnchor;
              return (
                <Link
                  href={link.properties.href}
                  value={link.children[0].value}
                />
              );
            } else if (
              (node.children[0] as unknown as HTMLImageElement).tagName ===
              'img'
            ) {
              type TImage = {
                properties: {
                  src: unknown;
                  alt: string;
                };
              };
              const image = node.children[0] as unknown as TImage;
              return (
                <StyledImage
                  src={`${image.properties.src}`}
                  alt={image.properties.alt}
                />
              );
            }
            return <Text>{children}</Text>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </MarkdownStyles>
  );
};

export default Markdown;
