import type { ChangeEvent } from 'react';
import React, { FC } from 'react';
import { RadioInput } from 'Components/Inputs/RadioInput';
import { SelectInput } from 'Components/Inputs/SelectInput';
import { TextInput } from 'Components/Inputs/TextInput';
import { Text } from 'Components/Typography/Text';
import { useFormikContext } from 'formik';
import { OnlyNumbers } from 'Utils/inputRegex';
import { CidadesDF, CidadesEntorno, Estados } from 'Utils/selectOptionsData';

import {
  Container,
  InputRadioContainer,
  InputText,
  InputTextContainer,
  LeftSelectContainer,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  SelectContainer,
} from './style';

type Step1FormikValues = {
  artist: {
    address: {
      residency: string;
    };
  };
};

export const Step1: FC = () => {
  const { values, setFieldValue } = useFormikContext<Step1FormikValues>();
  const checkCEP = (cep: string) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('artist.address.address', data.logradouro);
        setFieldValue('artist.address.neighborhood', data.bairro);
        setFieldValue('artist.address.city', data.localidade);
        setFieldValue('artist.address.state', data.uf);
        setFieldValue('artist.address.complement', data.complemento);
      });
  };
  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <InputTextContainer>
            <InputText
              name="artist.name"
              label="Nome"
              placeholder="Digite seu nome"
              required
            />
          </InputTextContainer>

          <InputTextContainer>
            <InputText
              name="artist.social_name"
              label="Nome Social"
              placeholder="Digite seu nome social"
            >
              <Text>
                Nome social não é o apelido, é o nome pelo qual pessoas
                transexuais, travestis e não binárias desejam ser chamadas ou
                socialmente reconhecidas e tem a ver com o respeito às
                identidades de gênero.
              </Text>
            </InputText>
          </InputTextContainer>

          <InputTextContainer>
            <InputText
              name="artist.artistic_name"
              label="Nome Artístico"
              placeholder="Digite seu nome artístico"
            />
          </InputTextContainer>

          <div>
            <InputTextContainer>
              <TextInput
                name="artist.cpf"
                label="CPF"
                placeholder="Digite seu cpf"
                inputMask="999.999.999-99"
                onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue('artist.cpf', ev.target.value)
                }
                // required
              />
            </InputTextContainer>

            <InputTextContainer>
              <TextInput
                name="artist.birthday"
                label="Data de nascimento"
                inputMask="99/99/9999"
                onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue('artist.birthday', OnlyNumbers(ev.target.value))
                }
                placeholder="Digite sua data de nascimento"
                required
              />
            </InputTextContainer>
          </div>

          <div>
            <InputTextContainer>
              <TextInput
                name="artist.rg"
                label="RG"
                onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue('artist.rg', OnlyNumbers(ev.target.value))
                }
                placeholder="Digite seu rg"
                // required
              />
            </InputTextContainer>

            <InputTextContainer>
              <TextInput
                name="artist.expedition_department"
                label="Órgão expedidor"
                placeholder="Digite o órgão expedidor"
                // required
              />
            </InputTextContainer>
          </div>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <div className="genderContainer">
            <label htmlFor="residency" className="radioLabel">
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
              <LeftSelectContainer htmlFor="state">
                <SelectInput
                  name="artist.address.state"
                  label="Qual seu estado?"
                  options={Estados}
                  required
                />
              </LeftSelectContainer>
            )}
          </div>

          <div className="residencyContainer">
            {values.artist.address.residency === 'df' && (
              <SelectContainer htmlFor="main_name">
                <SelectInput
                  name="artist.address.city"
                  label="Qual sua cidade do DF?"
                  options={CidadesDF}
                  required
                />
              </SelectContainer>
            )}

            {values.artist.address.residency === 'entorno' && (
              <SelectContainer htmlFor="residency">
                <SelectInput
                  name="artist.address.city"
                  label="Qual cidade do Entorno?"
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

            <InputTextContainer>
              <TextInput
                name="artist.address.cep"
                label="CEP"
                placeholder="Digite seu cep"
                inputMask="99999-999"
                // required
                onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                  if (OnlyNumbers(ev.target.value).length === 8) {
                    checkCEP(OnlyNumbers(ev.target.value));
                  }
                  setFieldValue('cep', OnlyNumbers(ev.target.value));
                }}
              />
            </InputTextContainer>
          </div>

          <div className="residencyContainer">
            <InputTextContainer>
              <TextInput
                name="artist.address.address"
                label="Endereço"
                placeholder="Digite seu logradouro"
                // required
              />
            </InputTextContainer>

            <InputTextContainer>
              <TextInput
                name="artist.address.neighborhood"
                label="Bairro"
                placeholder="Digite seu bairro"
                // required
              />
            </InputTextContainer>
          </div>

          <div className="residencyContainer">
            <InputTextContainer>
              <TextInput
                name="artist.address.number"
                label="Numero"
                placeholder="Digite seu número"
                onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue(
                    'artist.address.number',
                    OnlyNumbers(ev.target.value)
                  )
                }
                // required
              />
            </InputTextContainer>

            <InputTextContainer>
              <TextInput
                name="artist.address.complement"
                label="Complemento"
                placeholder="Digite seu complemento"
              />
            </InputTextContainer>
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  );
};
