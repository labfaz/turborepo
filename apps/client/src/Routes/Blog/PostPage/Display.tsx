import React, { FC } from 'react';
import { BlogBannerInfo } from 'Api/BlogBannerInfo';
import { BlogPost } from 'Api/BlogPost';
import Banner from 'Components/Banner';
import Wireframe from 'Components/Wireframe';

import PostDetails from './PostDetails/Display';

export interface DisplayProps {
  data: BlogBannerInfo;
  post: BlogPost;
}

export const Display: FC<DisplayProps> = ({ data, post }) => {
  const { title, subtitle } = data;
  return (
    <Wireframe>
      <Banner title={title} subtitle={subtitle} align="left" />
      <PostDetails post={post} />
    </Wireframe>
  );
};

export default Display;
