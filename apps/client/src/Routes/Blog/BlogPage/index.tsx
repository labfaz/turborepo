/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import { useBlogBannerInfo } from 'Api/BlogBannerInfo';
import { useBlogPosts } from 'Api/BlogPost';
import LoadingFullPage from 'Components/LoadingFullPage';
import Error from 'Pages/Error';
import { mockImage } from 'Utils/Image';

import Display from './Display';

export const BlogPage: FC = () => {
  const bannerInfo = useBlogBannerInfo();
  const posts = useBlogPosts();
  const mockBannerInfo = {
    title: 'Blog',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: mockImage({
      url: 'https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg',
      alternativeText: 'Blog Banner Image',
    }),
  };

  if (bannerInfo.isLoading || posts.isLoading) return <LoadingFullPage />;

  if (posts.error) {
    // console.log(posts.error);
    return (
      <Error
        errorStatus={posts.error.response?.status}
        errorMessage={posts.error.response?.statusText}
      />
    );
  }

  if (bannerInfo.error) {
    // console.log(bannerInfo.error);
    return <Display data={mockBannerInfo} posts={posts.data || null} />;
  }

  return <Display data={bannerInfo.data} posts={posts.data} />;
};

export default BlogPage;
