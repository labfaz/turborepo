import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import Image from 'next/image';

import {
  AvatarInput,
  Container,
  Content,
  Input,
  PasswordInputContainer,
} from './style';

type Step11FormikValues = {
  profilePicture: Blob;
};

export const Step11: FC = () => {
  const { values } = useFormikContext<Step11FormikValues>();

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
              name="old_password"
              label="Digite sua senha atual"
              placeholder="Digite uma senha"
            />
          </PasswordInputContainer>

          <PasswordInputContainer>
            <Input
              name="password"
              label="Escolha uma nova senha"
              placeholder="Digite uma senha"
            />
          </PasswordInputContainer>

          <PasswordInputContainer>
            <Input
              name="confirm_password"
              label="Confirme sua nova senha"
              placeholder="Digite novamente a senha"
            />
          </PasswordInputContainer>
        </Content>
      </div>
    </Container>
  );
};
