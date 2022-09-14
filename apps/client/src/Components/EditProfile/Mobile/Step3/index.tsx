import type { ChangeEvent } from 'react';
import React, { FC } from 'react';
import { TextInput } from 'Components/Inputs/TextInput';
import { useFormikContext } from 'formik';
import { OnlyNumbers } from 'Utils/inputRegex';

import {
  Container,
  Content,
  ContentContainer,
  InputTextContainer,
} from './style';

export const Step3: FC = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <Container>
      <ContentContainer>
        <Content>
          <InputTextContainer>
            <TextInput
              name="artist.cpf"
              label="CPF"
              placeholder="Digite seu cpf"
              inputMask="999.999.999-99"
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setFieldValue('artist.cpf', ev.target.value)
              }
              // required
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.birthday"
              label="Data de nascimento"
              inputMask="99/99/9999"
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setFieldValue('artist.birthday', OnlyNumbers(ev.target.value))
              }
              placeholder="Digite sua data de nascimento"
              required
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.rg"
              label="RG"
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setFieldValue('artist.rg', OnlyNumbers(ev.target.value))
              }
              placeholder="Digite seu rg"
              // required
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.expedition_department"
              label="Órgão expedidor"
              placeholder="Digite o órgão expedidor"
              // required
            />
          </InputTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};
