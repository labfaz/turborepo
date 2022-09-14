import React, { FC, useState } from 'react';
import { askResetPassword } from 'Api/PasswordReset';
import { InputText, InputTextContainer } from 'Components/Login/style';
import { Modal } from 'Components/Modal/PasswordRecoverModal';
import { Form, Formik, FormikHelpers } from 'formik';

import { FormButton, Message, Span, Wrapper } from './styles';

interface FormProps {
  email: string;
}

type ErrorTypes = {
  email?: string;
};

export const AskReset: FC = () => {
  const [emailStatus, setEmailStatus] = useState('');

  const [isVisible, setIsVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState(false);

  const handleSubmit = (
    values: FormProps,
    { setSubmitting, setValues }: FormikHelpers<FormProps>
  ) => {
    askResetPassword(values.email)
      .then(() => {
        setEmail(values.email);
        setTitle(true);
        setIsVisible(true);
        setValues({
          email: '',
        });
      })
      .catch(() => {
        setEmailStatus('Email não cadastrado');
      });
    setSubmitting(false);
  };

  const validateSubmit = (values: FormProps) => {
    const errors: ErrorTypes = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        validate={validateSubmit}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Wrapper>
            <Form>
              <InputTextContainer>
                <InputText
                  label="Email"
                  placeholder="Digite seu email"
                  name="email"
                />
              </InputTextContainer>
              {emailStatus && <Message isError> {emailStatus} </Message>}
              <FormButton type="submit" disabled={isSubmitting}>
                RECUPERAR SENHA
              </FormButton>
              <Span onClick={() => setIsVisible(!isVisible)}>
                {' '}
                Ainda está com problemas?{' '}
              </Span>
            </Form>
          </Wrapper>
        )}
      </Formik>
      <Modal
        isVisible={isVisible}
        setFunction={setIsVisible}
        title={title}
        userEmail={email}
        success={false}
      />
    </>
  );
};

export default AskReset;
