import React, { FC } from 'react';
import { ObservatorioPost } from 'Api/ObservatorioPost';
import Pagination from 'Components/Pagination/Static';

import PostItem from './PostItem';
import { Container, Content } from './styles';

interface DisplayProps {
  posts: ObservatorioPost[];
}

export const Display: FC<DisplayProps> = ({ posts }) => {
  return (
    <Container>
      <Content>
        <Pagination items={posts}>
          {posts.map((post, index) => (
            <PostItem post={post} key={index} />
          ))}
        </Pagination>
      </Content>
    </Container>
  );
};

export default Display;
