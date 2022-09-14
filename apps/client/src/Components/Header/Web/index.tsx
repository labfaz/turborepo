import React, { FC } from 'react';
import { useHistory } from 'react-router';
import Logo from 'Components/Logo';
import { useCurrentUserToken } from 'Context/LoggedUserToken';
import {
  ShowAboutUs,
  ShowBlog,
  ShowCourses,
  ShowObservatorio,
  ShowProfileMine,
  ShowUserSearch,
} from 'FeatureFlags';
import useEvent from 'Hooks/useEvent';
import { navLink, navLinks } from 'Utils/navLinks';

import {
  Button,
  Container,
  LogIn,
  LogoutButton,
  Navbar,
  NavLink,
  RedirectLink,
  UserSession,
} from './style';

const Link = ({ label, path }: navLink) => (
  <NavLink href={path}> {label} </NavLink>
);

export const Web: FC = () => {
  useEvent({ category: 'Navigation', action: 'click', value: 0 });
  const { isLoggedIn } = useCurrentUserToken();

  const history = useHistory();

  const handleLogoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    history.push('/home');
    history.go(0);
  };

  return (
    <Container>
      <RedirectLink href="/" data-testid="home">
        <Logo />
      </RedirectLink>
      <Navbar>
        {ShowAboutUs() && <Link {...navLinks['about us']} />}
        {ShowCourses() && <Link {...navLinks['cursos']} />}
        {ShowBlog() && <Link {...navLinks['blog']} />}
        {ShowUserSearch() && <Link {...navLinks['busca profissionais']} />}
        {ShowObservatorio() && <Link {...navLinks['observatorio']} />}
      </Navbar>
      <div className="line" />
      <UserSession>
        {isLoggedIn ? (
          ShowProfileMine() && (
            <>
              <Button href={navLinks['perfil'].path}> PERFIL </Button>
              <LogoutButton onClick={() => handleLogoutUser()}>
                SAIR
              </LogoutButton>
            </>
          )
        ) : (
          <>
            <LogIn href={navLinks['login'].path}>
              {' '}
              {navLinks['login'].label}{' '}
            </LogIn>
            <Button href={navLinks['cadastro'].path}>
              {' '}
              {navLinks['cadastro'].label}{' '}
            </Button>
          </>
        )}
      </UserSession>
    </Container>
  );
};

export default Web;
