import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSubscribeToCouse, useSubscription } from 'Api/Courses';
import { useCurrentUserToken } from 'Context/LoggedUserToken';
import { exception } from 'Utils/debugger';
import { navLinks } from 'Utils/navLinks';

import { ButtonStyled, Link } from './styles';

export interface ButtonProps {
  requestStatus?: 'pending' | 'accepted' | 'denied' | undefined;
  courseId: string;
  isAvailable?: boolean;
  hasSubscription?: boolean;
  link: string;
  children?: React.ReactNode;
}

export interface SubscriptionDeps {
  status: string;
  code: number;
  data:
    | {
        exists: boolean;
        request: {
          id: string;
          status: 'accepted' | 'pending' | 'denied';
        };
      }
    | undefined;
}

const status = {
  pending: 'EM ANÁLISE',
  denied: 'NÃO ACEITO',
};

export const Button: FC<ButtonProps> = ({
  hasSubscription,
  isAvailable,
  courseId,
  link,
}) => {
  const history = useHistory();
  const user = useCurrentUserToken();

  const treatedLink = link?.startsWith('https') ? link : `https://${link}`;

  const { isLoading, data, refetch } = useSubscription(courseId, user.token);
  const {
    isLoading: subscribeLoading,
    mutateAsync,
    error,
  } = useSubscribeToCouse(courseId, user.token);

  const redirectLogin = useCallback(() => {
    history.push(navLinks.login.path);
  }, [history]);

  const handleClick = useCallback(() => {
    if (user.isLoggedIn) mutateAsync().then(() => refetch());
    else redirectLogin();
  }, [redirectLogin, mutateAsync, user.isLoggedIn, refetch]);

  if (!user.isLoggedIn) {
    return <ButtonStyled onClick={redirectLogin}>FAZER LOGIN</ButtonStyled>;
  }

  if (error) {
    exception('subscriptionButton', 'erro em inscrição: ' + error);
    return <ButtonStyled disabled>ERRO TENTE DE NOVO MAIS TARDE</ButtonStyled>;
  }

  if (isLoading || (user.isLoggedIn && subscribeLoading)) {
    return <ButtonStyled>Loading...</ButtonStyled>;
  }

  if (!isAvailable) {
    return <ButtonStyled disabled>INDISPONÍVEL</ButtonStyled>;
  }

  if (data && data?.exists && data?.request.status !== 'accepted') {
    const key = data.request.status;
    return <ButtonStyled disabled>{status[key]}</ButtonStyled>;
  }

  if (
    !hasSubscription ||
    (data?.exists && data?.request.status === 'accepted')
  ) {
    return (
      <Link href={treatedLink} target="_blank" rel="noopener noreferrer">
        ENTRAR NO CURSO
      </Link>
    );
  }

  return <ButtonStyled onClick={handleClick}>INSCREVA-SE</ButtonStyled>;
};

export default Button;
