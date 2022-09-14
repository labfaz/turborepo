import React, { FC } from 'react';
import { RadioInput } from 'Components/Inputs/RadioInput';
import { SelectInput } from 'Components/Inputs/SelectInput';
import { TextInput } from 'Components/Inputs/TextInput';
import { useFormikContext } from 'formik';
import { CidadesDF, CidadesEntorno, Estados } from 'Utils/selectOptionsData';

import {
  Container,
  Content,
  ContentContainer,
  InputRadioContainer,
  InputTextContainer,
  SelectContainer,
} from './style';

type Step9FormikValues = {
  artist: {
    address: {
      residency: string;
    };
  };
};

export const Step9: FC = () => {
  const { values } = useFormikContext<Step9FormikValues>();

  return (
    <Container>
      <ContentContainer>
        <Content>
          <label htmlFor="gender" className="radioLabel">
            Você reside no Distrito Federal ou Entorno?
          </label>

          <InputRadioContainer>
            <RadioInput
              name="artist.address.residency"
              value="df"
              label="Distrito Federal"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.address.residency"
              value="entorno"
              label="Entorno"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.address.residency"
              value="fora df"
              label="Resido fora do DF  e do Entorno"
            />
          </InputRadioContainer>

          {values.artist.address.residency === 'fora df' && (
            <SelectContainer htmlFor="state">
              <SelectInput
                name="artist.address.state"
                label="Qual seu estado?"
                options={Estados}
                required
              />
            </SelectContainer>
          )}

          {values.artist.address.residency === 'df' && (
            <SelectContainer htmlFor="state">
              <SelectInput
                name="artist.address.city"
                label="Cidade"
                options={CidadesDF}
                required
              />
            </SelectContainer>
          )}

          {values.artist.address.residency === 'entorno' && (
            <SelectContainer htmlFor="state">
              <SelectInput
                name="artist.address.city"
                label="Cidade"
                options={CidadesEntorno}
                required
              />
            </SelectContainer>
          )}

          {values.artist.address.residency === 'fora df' && (
            <InputTextContainer>
              <TextInput
                name="artist.address.city"
                label="Cidade"
                placeholder="Digite o nome de sua cidade"
                required
              />
            </InputTextContainer>
          )}
        </Content>
      </ContentContainer>
    </Container>
  );
};
