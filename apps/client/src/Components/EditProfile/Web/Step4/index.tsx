import React, { FC } from 'react';
import { CheckboxInput } from 'Components/Inputs/CheckboxInput';
import { FileInput } from 'Components/Inputs/FileInput';
import { RadioInput } from 'Components/Inputs/RadioInput';
import { TextInput } from 'Components/Inputs/TextInput';
import { useFormikContext } from 'formik';
import { deficiencyOptions } from 'Utils/selectOptionsData';

import {
  Box,
  BoxContent,
  Container,
  DeficiencyContainer,
  FileContainer,
  InputCheckBoxContainer,
  InputRadioContainer,
  LabelText,
  PCDOptions,
  TextInputContainer,
} from './style';

type Step4FormikValues = {
  deficiencies?: string[];
  isPcd?: string;
};

export const Step4: FC = () => {
  const { values } = useFormikContext<Step4FormikValues>();

  return (
    <Container>
      <Box>
        <LabelText>Você é uma pessoa com deficiência?</LabelText>
        <PCDOptions>
          <InputRadioContainer>
            <RadioInput name="isPcd" value="true" label="Sim" />
          </InputRadioContainer>
          <InputRadioContainer>
            <RadioInput name="isPcd" value="false" label="Não" />
          </InputRadioContainer>
        </PCDOptions>
        {values.isPcd === 'true' && (
          <BoxContent>
            <TextInputContainer>
              <label>Qual sua deficiência?</label>
            </TextInputContainer>
            <DeficiencyContainer>
              {deficiencyOptions.map((deficiencyOption, index) => (
                <InputCheckBoxContainer key={index}>
                  <CheckboxInput
                    type="checkbox"
                    name="deficiencies"
                    value={deficiencyOption.value}
                    label={deficiencyOption.label}
                  />
                </InputCheckBoxContainer>
              ))}
            </DeficiencyContainer>

            <FileContainer>
              <label htmlFor="medicalReport" className="fileLabel">
                Laudo médico
              </label>

              <FileInput
                name="medicalReport"
                value="medicalReport"
                label="Enviar laudo"
                accept="application/pdf"
              />
            </FileContainer>
          </BoxContent>
        )}
        {values.deficiencies?.find((value: string) => value === 'Outro') && (
          <TextInputContainer>
            <label>Qual outra deficiência você possui?</label>
            <TextInput
              name="other_deficiency"
              placeholder="Digite sua condição"
            />
          </TextInputContainer>
        )}
      </Box>
    </Container>
  );
};
