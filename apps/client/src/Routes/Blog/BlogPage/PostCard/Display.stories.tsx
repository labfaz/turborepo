import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { BlogPost } from 'Api/BlogPost';

import PostCardDisplay from './Display';
// import Web from './Web'
// import Mobile from './Mobile'

const samplePost: BlogPost = {
  id: 1,
  title: 'Teste de blog post',
  description: 'Isso é um teste',
  created_at: '2021-06-29T23:50:54.596Z',
  image: {
    url: 'https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'imagem aleatória',
  },
  content: 'Esse é o conteúdo do post!',
};
const posts = Array.from({ length: 4 }, () => samplePost);

storiesOf('Pages/Blog/PostCard', module)
  .addParameters({ component: PostCardDisplay })
  .add('responsive', () => (
    <StaticRouter>
      <PostCardDisplay posts={posts} />
    </StaticRouter>
  ));
// .add("web", () => <StaticRouter><Web {...posts[0]} /></StaticRouter>)
// .add("mobile", () => <StaticRouter><Mobile {...posts[0]}/></StaticRouter>)
