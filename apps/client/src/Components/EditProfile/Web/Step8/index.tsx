import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import { Container, Content, InputText, TextLabel } from './style';

interface ErrorProps {
  artist: {
    technical: {
      areas: {
        describe: string;
      };
    };
  };
}

export const Step8: FC = () => {
  const { errors } = useFormikContext<ErrorProps>();

  return (
    <Container>
      <div className="centralContent">
        <Content>
          <TextLabel>
            Sobre o meu trabalho: Descreva quais são as atividades e serviços
            oferecidos por você.<p className="required"> *</p>
          </TextLabel>

          {errors.artist?.technical?.areas?.describe && (
            <span className="errorMessage">
              {errors.artist.technical.areas.describe}
            </span>
          )}

          <InputText
            component="textarea"
            name="artist.technical.areas.describe"
          />
        </Content>
      </div>
    </Container>
  );
};
