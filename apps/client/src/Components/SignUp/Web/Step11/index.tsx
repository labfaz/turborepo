import React, { FC } from 'react';
import { CheckboxInput } from 'Components/Inputs/CheckboxInput';
import { useFormikContext } from 'formik';
import Image from 'next/image';

import {
  AvatarInput,
  Container,
  Content,
  Input,
  InputCheckBoxContainer,
  PasswordInputContainer,
} from './style';

interface Step11Props {
  profilePicture: Blob;

  use_terms: string;
}

export const Step11: FC = () => {
  const { values, errors } = useFormikContext<Step11Props>();

  return (
    <Container>
      <div className="centralContent">
        <Content>
          <AvatarInput>
            <Image
              src={
                values.profilePicture
                  ? URL.createObjectURL(values.profilePicture)
                  : (undefined as never)
              }
              alt={values.profilePicture ? 'User avatar' : ''}
            />
          </AvatarInput>
          <PasswordInputContainer>
            <Input
              name="password"
              label="Escolha uma senha"
              placeholder="Digite uma senha"
              required
            />
          </PasswordInputContainer>

          <PasswordInputContainer>
            <Input
              name="confirm_password"
              label="Confirmar Senha"
              placeholder="Digite novamente a senha"
              required
            />
          </PasswordInputContainer>

          <InputCheckBoxContainer>
            <CheckboxInput type="checkbox" name="use_terms" value="sim">
              Li e concordo com os
              <a
                href="/politica-de-privacidade.pdf"
                target="_blank"
                rel="noopener"
              >
                {' '}
                Termos de Uso{' '}
              </a>
              e estou ciente e autorizo que os meus dado sejam usados única e
              exclusivamente para o projeto LabFaz.
            </CheckboxInput>
            {errors.use_terms && (
              <span className="errorMessage">{errors.use_terms}</span>
            )}
          </InputCheckBoxContainer>
        </Content>
      </div>
    </Container>
  );
};
