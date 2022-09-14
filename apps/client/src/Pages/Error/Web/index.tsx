import React, { FC } from 'react';

import Image from '../Image';

import {
  Content,
  Rectangle2,
  SubtitleText,
  TextWrapper,
  TitleText,
} from './style';

export interface Props {
  status: number | undefined;
  message: string | undefined;
}

export const Web: FC<Props> = ({ status, message }) => {
  return (
    <Content>
      <Rectangle2>
        <Image alt="Imagem de erro" />
        <TextWrapper>
          <TitleText level={2}>
            Ops...
            <br />
            Parece que algo deu errado
          </TitleText>
          <SubtitleText>
            Error {status ?? 401}:
            <br />{' '}
            {message ?? 'Acesso negado devido a credenciais não válidas.'}
          </SubtitleText>
        </TextWrapper>
      </Rectangle2>
    </Content>
  );
};

export default Web;
