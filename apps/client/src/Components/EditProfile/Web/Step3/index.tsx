/* eslint-disable @cspell/spellchecker */
import type { ChangeEvent } from 'react';
import React, { FC } from 'react';
import { FileInput } from 'Components/Inputs/FileInput';
import { SelectInput } from 'Components/Inputs/SelectInput';
import { useFormikContext } from 'formik';
import Image from 'next/image';
import { OnlyNumbers } from 'Utils/inputRegex';

import {
  AvatarInput,
  Container,
  FormInputText,
  InputTextContainer,
  LeftSide,
  LeftSideContent,
  PrivacyText,
  RightSide,
  RightSideContent,
  SelectContainer,
} from './style';

type Step3Values = {
  artist: {
    name: string;
    social_name: string;
    artistic_name: string;
  };
  profilePicture: Blob;
};

export const Step3: FC = () => {
  const { values, setFieldValue } = useFormikContext<Step3Values>();

  const options = [
    { value: 'nome', label: values.artist.name },
    { value: 'nome social', label: values.artist.social_name },
    { value: 'nome artistico', label: values.artist.artistic_name },
  ];

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
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

          <FileInput
            name="profilePicture"
            value="profilePicture"
            label="Clique para enviar foto"
          />

          <SelectContainer htmlFor="main_name">
            <SelectInput
              name="artist.show_name"
              label="Nome principal"
              options={options}
              required
            />
          </SelectContainer>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <div>
            <InputTextContainer>
              <FormInputText
                name="email"
                label="Email"
                placeholder="email@seuemail.com"
                disabled
                required
              />

              <FormInputText
                name="artist.contact.whatsapp"
                label="Celular com WhatsApp"
                placeholder="(61) 9 9999-9999"
                inputMask="(99) 9 9999-9999"
                onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue('whatsapp', OnlyNumbers(ev.target.value))
                }
              />
            </InputTextContainer>
          </div>

          <div>
            <InputTextContainer>
              <FormInputText
                name="artist.contact.facebook"
                label="Facebook"
                placeholder="@seuFacebook"
              />

              <FormInputText
                name="artist.contact.instagram"
                label="Instagram"
                placeholder="@seuInstagram"
              />
            </InputTextContainer>
          </div>

          <div>
            <InputTextContainer>
              <FormInputText
                name="artist.contact.twitter"
                label="Twitter"
                placeholder="@seuTwitter"
              />

              <FormInputText
                name="artist.contact.linkedin"
                label="LinkedIn"
                placeholder="@seuLinkedIn"
              />
            </InputTextContainer>
          </div>

          <div>
            <FormInputText
              name="artist.contact.tiktok"
              label="TikTok"
              placeholder="@seuTikTok"
            />

            <FormInputText
              name="artist.contact.youtube"
              label="YouTube"
              placeholder="@seuYouTube"
            />
          </div>

          <div>
            <PrivacyText>
              Paragrafo informando sobre a privacidade dos dados inseridos nessa
              etapa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor,dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor.
            </PrivacyText>
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  );
};
