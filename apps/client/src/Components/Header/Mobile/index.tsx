import React, { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
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
import { navLink, navLinks } from 'Utils/navLinks';

import {
  Button,
  CloseMenu,
  Container,
  ContainerIcon,
  IconButton,
  LogoLink,
  LogoutButton,
  NavBar,
  NavLink,
} from './style';

const Link = ({ link, show }: { link: navLink; show: boolean }) =>
  !show ? <></> : <NavLink href={link.path}> {link.label} </NavLink>;

export const Mobile: FC = () => {
  const [open, setOpen] = useState(false);
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
      <div className={open ? 'navBar active' : 'navBar'}>
        <NavBar>
          <NavLink href="/"> HOME </NavLink>
          {<Link show={ShowAboutUs()} link={navLinks['about us']} />}
          {<Link show={ShowCourses()} link={navLinks['cursos']} />}
          {<Link show={ShowBlog()} link={navLinks['blog']} />}
          {
            <Link
              show={ShowUserSearch()}
              link={navLinks['busca profissionais']}
            />
          }
          {<Link show={ShowObservatorio()} link={navLinks['observatorio']} />}

          {isLoggedIn ? (
            <>
              <Link show={ShowProfileMine()} link={navLinks['perfil']} />
              <LogoutButton onClick={() => handleLogoutUser()}>
                SAIR
              </LogoutButton>
            </>
          ) : (
            <>
              <Button BackgroundColor={'login'} href={navLinks['login'].path}>
                {' '}
                {navLinks['login'].label}{' '}
              </Button>
              <Button href={navLinks['cadastro'].path}>
                {' '}
                {navLinks['cadastro'].label}{' '}
              </Button>
            </>
          )}
        </NavBar>
      </div>
      <CloseMenu open={open} onClick={() => setOpen(false)}></CloseMenu>
      <ContainerIcon>
        <div className="ContainerDiv">
          <IconButton onClick={() => setOpen(true)}>
            <FaBars title="menu" />
          </IconButton>
          <LogoLink href="/" data-testid="home">
            <Logo />
          </LogoLink>
        </div>
      </ContainerIcon>
    </Container>
  );
};

export default Mobile;
