import React, { FC } from 'react';
import { BlogBannerInfo } from 'Api/BlogBannerInfo';
import { BlogPost } from 'Api/BlogPost';
import Banner from 'Components/Banner';
import Wireframe from 'Components/Wireframe';

import PostCard from './PostCard/Display';

export interface DisplayProps {
  data: BlogBannerInfo;
  posts: BlogPost[];
}

export const Display: FC<DisplayProps> = ({ data, posts }) => {
  const { title, subtitle, image } = data;

  return (
    <Wireframe>
      <Banner title={title} subtitle={subtitle} image={image} align="left" />
      <PostCard posts={posts} />
    </Wireframe>
  );
};

export default Display;
