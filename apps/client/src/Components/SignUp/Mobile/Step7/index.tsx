/* eslint-disable @cspell/spellchecker */
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

export const Step7: FC = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <Container>
      <ContentContainer>
        <Content>
          <InputTextContainer>
            <TextInput
              name="email"
              label="Email"
              placeholder="Digite seu email"
              required
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.whatsapp"
              label="Celular com WhatsApp"
              inputMask="(99) 9 9999-9999"
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setFieldValue('whatsapp', OnlyNumbers(ev.target.value))
              }
              placeholder="Digite seu número"
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.facebook"
              label="Facebook"
              placeholder="@seuFacebook"
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.instagram"
              label="Instagram"
              placeholder="@seuInstagram"
            />
          </InputTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};
