import React, { FC, Fragment } from 'react';
import { BlogPost } from 'Api/BlogPost';
import useMobile from 'Hooks/useMobile';

import Mobile from './Mobile';
import { Container, Content, Wrapper } from './styles';
import Web from './Web';

interface DisplayProps {
  post: BlogPost;
}

export const Display: FC<DisplayProps> = ({ post }) => {
  const isMobile = useMobile();

  return (
    <Container>
      <Content>
        <Fragment>
          <Wrapper>
            {isMobile ? (
              <Mobile
                title={post.title}
                created_at={post.created_at}
                content={post.content}
              />
            ) : (
              <Web
                title={post.title}
                created_at={post.created_at}
                content={post.content}
              />
            )}
          </Wrapper>
        </Fragment>
      </Content>
    </Container>
  );
};

export default Display;
