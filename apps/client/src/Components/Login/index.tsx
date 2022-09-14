import React, { FC, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ErrorObject } from 'Api';
import { useLoginInfo } from 'Api/LoginAssets';
import { login } from 'Api/Session';
import { CheckboxInput } from 'Components/Inputs/CheckboxInput';
import { Modal } from 'Components/Modal/LoginModal';
import { CurrentUserTokenContext } from 'Context/LoggedUserToken';
import { ShowForgotPassword } from 'FeatureFlags';
import { Form, Formik } from 'formik';
import useQueries from 'Hooks/useUrlQueries';
import { navLinks } from 'Utils/navLinks';
import * as yup from 'yup';

import Icon from './Icon.svg';
import {
  Button,
  ButtonContainer,
  CheckboxInputContainer,
  Container,
  FormContainer,
  Img,
  InputPassword,
  InputText,
  InputTextContainer,
  // LoginTitle,
  LabfazText,
  LeftSide,
  NavLink,
  RegisterButton,
  RightSide,
} from './style';

interface FormProps {
  email: string;
  password: string;
  stayConnected?: boolean;
}

export interface LoginComponentProps {
  onSubmit: FormSubmitFn;
  buttonType?: 'submit' | 'button' | 'reset';
}

export type FormSubmitFn = (values: FormProps) => void;

// eslint-disable-next-line abcsize/abcsize
export const Login: FC<LoginComponentProps> = ({ buttonType }) => {
  const { setToken } = useContext(CurrentUserTokenContext);
  const [error, setError] = useState<ErrorObject | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { data: infoData } = useLoginInfo();

  const history = useHistory();
  const queries = useQueries();
  const redirect_to = queries.get('redirect_to');

  const handleSubmit = useCallback(
    (values: FormProps) => {
      login(values.email, values.password)
        .then(({ token }) => {
          setToken(token);
          history.push(`/${redirect_to ?? 'home'}`);
        })
        .catch((err) => [setError(err), setToastMessage(true)]);
    },
    [setToken, redirect_to, history]
  );

  return (
    <Container>
      <FormContainer openToastMessage={toastMessage}>
        <div className="formContainer">
          <LeftSide>
            <Img
              src={infoData?.imagem?.url ?? Icon}
              alt="Imagem da página de login"
            />
          </LeftSide>
          <RightSide>
            <Formik
              initialValues={{
                email: '',
                password: '',
                stayConnected: false,
              }}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .required('Campo obrigatório')
                  .email('Email inválido'),
                password: yup.string().required('Campo obrigatório'),
              })}
              onSubmit={(values: FormProps) => handleSubmit(values)}
            >
              {() => (
                <Form>
                  <InputTextContainer>
                    <InputText
                      name="email"
                      label="E-mail"
                      placeholder="Digite seu email"
                    />

                    <InputPassword
                      name="password"
                      label="Senha"
                      placeholder="Digite sua senha"
                    />
                  </InputTextContainer>

                  <CheckboxInputContainer>
                    <CheckboxInput
                      name="stayConnected"
                      label="Permanecer conectado"
                    />
                  </CheckboxInputContainer>

                  <ButtonContainer>
                    <Button type={buttonType ? buttonType : 'submit'}>
                      ENTRAR
                    </Button>

                    <RegisterButton href={navLinks.cadastro.path}>
                      CADASTRE-SE
                    </RegisterButton>
                  </ButtonContainer>

                  {ShowForgotPassword() && (
                    <NavLink to={navLinks.forgotPass.path}>
                      {navLinks.forgotPass.label}
                    </NavLink>
                  )}
                  {error && error.message === 'Email confirmation needed' && (
                    <span onClick={() => setIsVisible(true)}>
                      {' '}
                      Reenviar email de confirmação ?{' '}
                    </span>
                  )}
                </Form>
              )}
            </Formik>
          </RightSide>
        </div>
        {error && (
          <div className="errorMessage">
            <span>{error.message}</span>
            <button onClick={() => setToastMessage(false)}> X</button>
          </div>
        )}
      </FormContainer>
      <Modal isVisible={isVisible} setFunction={setIsVisible} />
      <LabfazText level={2}>
        Laboratório dos Fazeres e Saberes Técnicos da Economia Criativa
      </LabfazText>
    </Container>
  );
};
