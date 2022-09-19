import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import Image from 'next/image';

import {
  AvatarInput,
  Button,
  Container,
  Content,
  ContentContainer,
  Input,
  InputTextContainer,
} from './style';

type TStep18Values = {
  profilePicture?: Blob;
  buttonDisabled?: boolean;
};

export const Step18: FC<TStep18Values> = () => {
  const { values } = useFormikContext<TStep18Values>();

  return (
    <Container>
      <ContentContainer>
        <Content>
          <AvatarInput>
            <Image
              layout="fill"
              src={
                values.profilePicture
                  ? URL.createObjectURL(values.profilePicture)
                  : (undefined as never)
              }
              alt={values.profilePicture ? 'User avatar' : ''}
            />
          </AvatarInput>

          <InputTextContainer>
            <Input
              name="old_password"
              label="Digite sua senha atual"
              placeholder="Digite uma senha"
            />
          </InputTextContainer>

          <InputTextContainer>
            <Input
              name="password"
              label="Escolha uma nova senha"
              placeholder="Digite uma senha"
            />
          </InputTextContainer>
          <InputTextContainer>
            <Input
              name="confirm_password"
              label="Confirme sua nova senha"
              placeholder="Digite novamente a senha"
            />
          </InputTextContainer>

          <Button disabled={values.buttonDisabled} type="submit">
            FINALIZAR EDIÇÃO
          </Button>
        </Content>
      </ContentContainer>
    </Container>
  );
};
