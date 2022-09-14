import React, { FC } from 'react';
import { ObservatorioPost } from 'Api/ObservatorioPost';
import useMobile from 'Hooks/useMobile';

import Mobile from './Mobile';
import { Wrapper } from './styles';
import Web from './Web';

export interface PostItemProps {
  post: ObservatorioPost;
}

type ImageType = {
  url: string;
  alternativeText: string;
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const isMobile = useMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <Mobile
          title={post.title}
          description={post.description}
          image={post.image as ImageType}
          created_at={post.created_at}
          id={post.id}
        />
      ) : (
        <Web
          title={post.title}
          description={post.description}
          image={post.image as ImageType}
          created_at={post.created_at}
          id={post.id}
        />
      )}
    </Wrapper>
  );
};

export default PostItem;
