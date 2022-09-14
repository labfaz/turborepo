import React, { FC } from 'react';
import { CheckboxInput } from 'Components/Inputs/CheckboxInput';
import { RadioInput } from 'Components/Inputs/RadioInput';
import { TextInput } from 'Components/Inputs/TextInput';
import { useFormikContext } from 'formik';
import { formationOptions, idiomOptions } from 'Utils/selectOptionsData';

import {
  Container,
  InputCheckBoxContainer,
  InputRadioContainer,
  LabelText,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  TextInputContainer,
} from './style';

interface ErrorProps {
  artist: {
    technical: {
      formation: string;
      idiom: string[];
    };
  };
}

export const Step6: FC = () => {
  const { values, errors } = useFormikContext<ErrorProps>();

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <LabelText>
            Você domina outro idioma além do português?
            <p className="required"> *</p>
            {errors.artist?.technical?.idiom && (
              <span className="errorMessage">Campo obrigatório</span>
            )}
          </LabelText>
          {idiomOptions.map((idiomOption, index) => (
            <InputCheckBoxContainer key={index}>
              <CheckboxInput
                type="checkbox"
                name="artist.technical.idiom"
                value={idiomOption.value}
                label={idiomOption.label}
              />
            </InputCheckBoxContainer>
          ))}
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <LabelText>
            Formação escolar
            <p className="required"> *</p>
            {errors.artist?.technical?.formation && (
              <span className="errorMessage">Campo obrigatório</span>
            )}
          </LabelText>

          {formationOptions.map((formationOption, index) => (
            <InputRadioContainer key={index}>
              <RadioInput
                type="radio"
                name="artist.technical.formation"
                value={formationOption.value}
                label={formationOption.label}
              />
            </InputRadioContainer>
          ))}

          {values.artist.technical.idiom.find(
            (value: string) => value === 'Outro'
          ) && (
            <TextInputContainer>
              <label>Qual outro idioma você domina?</label>
              <TextInput name="other_idiom" placeholder="Digite outro idioma" />
            </TextInputContainer>
          )}
        </RightSideContent>
      </RightSide>
    </Container>
  );
};
