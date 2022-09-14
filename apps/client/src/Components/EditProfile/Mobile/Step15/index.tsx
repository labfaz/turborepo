import React, { FC } from 'react';
import { FileInput } from 'Components/Inputs/FileInput';
import { useFormikContext } from 'formik';

import {
  Container,
  Content,
  ContentContainer,
  FileContainer,
  InputText,
  TextLabel,
} from './style';

interface ErrorProps {
  artist: {
    technical: {
      areas: {
        describe: string;
      };
    };
  };
}

export const Step15: FC = () => {
  const { errors } = useFormikContext<ErrorProps>();

  return (
    <Container>
      <ContentContainer>
        <Content>
          <TextLabel>
            Descreva quais são as atividades e serviços oferecidos por você{' '}
            <p className="required"> *</p>:
            <span className="errorMessage">
              {errors.artist?.technical?.areas?.describe &&
                errors.artist.technical.areas.describe}
            </span>
          </TextLabel>

          <InputText
            component="textarea"
            name="artist.technical.areas.describe"
          />

          <FileContainer>
            <FileInput
              name="curriculum"
              value="curriculum"
              label="Clique para enviar currículo"
              accept="application/pdf"
            />
          </FileContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};
