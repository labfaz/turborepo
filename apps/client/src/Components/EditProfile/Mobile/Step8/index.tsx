/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import { TextInput } from 'Components/Inputs/TextInput';

import {
  Container,
  Content,
  ContentContainer,
  InputTextContainer,
} from './style';

export const Step8: FC = () => {
  return (
    <Container>
      <ContentContainer>
        <Content>
          <InputTextContainer>
            <TextInput
              name="artist.contact.twitter"
              label="Twitter"
              placeholder="@seuTwitter"
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.linkedin"
              label="LinkedIn"
              placeholder="@seuLinkedIn"
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.tiktok"
              label="TikTok"
              placeholder="@seuTikTok"
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.youtube"
              label="YouTube"
              placeholder="@seuYouTube"
            />
          </InputTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};
