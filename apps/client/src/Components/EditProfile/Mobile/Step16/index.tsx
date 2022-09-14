import React, { FC, useRef, useState } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { RadioInput } from 'Components/Inputs/RadioInput';
import { TextInput } from 'Components/Inputs/TextInput';
import { useFormikContext } from 'formik';
import { certificationOptionsMobile } from 'Utils/selectOptionsData';

import {
  CertificationOptionsContainer,
  CheckboxContainer,
  Container,
  Content,
  ContentContainer,
  InputCheckbox,
  InputRadioContainer,
  InputSelect,
  LabelText,
  SelectContainer,
  TechnicalContainer,
} from './style';

interface ErrorProps {
  artist: {
    technical: {
      is_drt: string;
      is_ceac: string;
    };
  };
}

export const Step16: FC = () => {
  const [isIdiomOptionsOpen, setIsIdiomOptionsOpen] = useState(false);
  const modalRef = useRef<HTMLInputElement | null>(null);

  const { values, errors } = useFormikContext<ErrorProps>();

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setIsIdiomOptionsOpen(false);
    }
  };

  return (
    <Container>
      <ContentContainer>
        <Content>
          <SelectContainer
            onClick={() => setIsIdiomOptionsOpen(!isIdiomOptionsOpen)}
          >
            <label>Voce possui certificações de treinamento?</label>
            <InputSelect>
              Selecione
              <IoMdArrowDropdownCircle />
            </InputSelect>
          </SelectContainer>

          <LabelText>
            Você possui Certificação/DRT? <p className="required"> *</p>
            <span className="errorMessage">
              {errors.artist?.technical?.is_drt &&
                errors.artist.technical.is_drt}
            </span>
          </LabelText>

          <TechnicalContainer>
            <InputRadioContainer>
              <RadioInput
                id="yes_is_drt"
                type="radio"
                name="artist.technical.is_drt"
                value="true"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_drt"
                type="radio"
                name="artist.technical.is_drt"
                value="false"
                label="Não"
              />
            </InputRadioContainer>

            {values.artist.technical.is_drt === 'true' && (
              <TextInput
                name="artist.technical.drt"
                placeholder="Número do drt"
              />
            )}
          </TechnicalContainer>

          <LabelText>
            Você possui CEAC? <p className="required"> *</p>
            <span className="errorMessage">
              {errors.artist?.technical?.is_ceac &&
                errors.artist.technical.is_ceac}
            </span>
          </LabelText>

          <TechnicalContainer>
            <InputRadioContainer>
              <RadioInput
                id="yes_is_ceac"
                type="radio"
                name="artist.technical.is_ceac"
                value="true"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_ceac"
                type="radio"
                name="artist.technical.is_ceac"
                value="false"
                label="Não"
              />

              {values.artist.technical.is_ceac === 'true' && (
                <TextInput
                  name="artist.technical.ceac"
                  placeholder="Número do ceac"
                />
              )}
            </InputRadioContainer>
          </TechnicalContainer>
        </Content>
      </ContentContainer>
      <CertificationOptionsContainer
        ref={modalRef}
        onClick={closeModal}
        isOpen={isIdiomOptionsOpen}
      >
        <CheckboxContainer>
          {certificationOptionsMobile.map((certification, index) => (
            <InputCheckbox
              key={index}
              type="checkbox"
              inputRightSide={true}
              name="artist.technical.areas.certificate"
              value={certification.value}
            >
              {certification.label || ' '}
            </InputCheckbox>
          ))}
        </CheckboxContainer>
      </CertificationOptionsContainer>
    </Container>
  );
};
