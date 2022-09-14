import React, { FC } from 'react';
import { useCurrentUserToken } from 'Context/LoggedUserToken';
import {
  ShowAboutUs,
  ShowBlog,
  ShowCourses,
  ShowObservatorio,
  ShowProfileMine,
  ShowUserSearch,
} from 'FeatureFlags';
import { LinkName, navLinks } from 'Utils/navLinks';

import { Navbar, NavigationContainer, NavLink, Title } from './style';

const RenderLink = (name: LinkName) =>
  navLinks[name] && (
    <NavLink href={navLinks[name].path}> {navLinks[name].label} </NavLink>
  );

const Navigation: FC = () => {
  const { isLoggedIn } = useCurrentUserToken();
  return (
    <NavigationContainer id="navigation-container">
      <Title>Navegação</Title>
      <Navbar>
        <div>
          {ShowAboutUs() && RenderLink('about us')}
          {ShowCourses() && RenderLink('cursos')}
          {ShowBlog() && RenderLink('blog')}
        </div>
        <div>
          {ShowObservatorio() && RenderLink('observatorio')}
          {ShowUserSearch() && RenderLink('busca profissionais')}
          {RenderLink(isLoggedIn && ShowProfileMine() ? 'perfil' : 'cadastro')}
        </div>
      </Navbar>
    </NavigationContainer>
  );
};

export default Navigation;
