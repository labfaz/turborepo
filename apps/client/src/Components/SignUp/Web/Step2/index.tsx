/* eslint-disable @cspell/spellchecker */
import React, { FC } from 'react';
import { RadioInput } from 'Components/Inputs/RadioInput';
import { useFormikContext } from 'formik';

import {
  Container,
  InformationText,
  InputRadioContainer,
  InputText,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
} from './style';

interface ErrorProps {
  artist: {
    gender: string;
    sexual_orientation: string;
    gender_specific: string;
    race: string;
  };
}

export const Step2: FC = () => {
  const { values, errors } = useFormikContext<ErrorProps>();

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <div className="raceContainer">
            <div>
              <label htmlFor="gender">
                Etnia <p className="required"> *</p>
                {errors.artist?.race && (
                  <span className="errorMessage"> Campo obrigatório</span>
                )}
              </label>
              <InputRadioContainer>
                <RadioInput name="artist.race" value="branca" label="Branca" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput name="artist.race" value="preta" label="Preta" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput name="artist.race" value="parda" label="Parda" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.race"
                  value="amarela"
                  label="Amarela"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.race"
                  value="indigena"
                  label="Indígena"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.race"
                  value="nenhuma"
                  label="Prefiro não responder"
                />
              </InputRadioContainer>
            </div>
            <div className="genderContainer">
              <label htmlFor="gender">
                Gênero <p className="required"> *</p>
                {errors.artist?.gender && (
                  <span className="errorMessage">Campo obrigatório</span>
                )}
              </label>
              <InputRadioContainer>
                <RadioInput
                  name="artist.gender"
                  value="masculino"
                  label="Masculino"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.gender"
                  value="feminino"
                  label="Feminino"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput name="artist.gender" value="outro" label="Outro" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.gender"
                  value="Prefiro não responder"
                  label="Prefiro não responder"
                />
              </InputRadioContainer>

              {values.artist.gender === 'outro' && (
                <div className="textInputContainer">
                  <InputText
                    label="Qual outro gênero?"
                    placeholder="Digite seu gênero"
                    name="artist.other_gender"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="genderIdentityContainer">
            <label htmlFor="gender_identity">
              Identidade de Genero <p className="required"> *</p>
              {errors.artist?.gender_specific && (
                <span className="errorMessage">Campo obrigatório</span>
              )}
            </label>
            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="cisgênero"
                label="Cisgênero(a)"
                information='Pessoa cisgênero consiste no/a indivíduo/a que se identifica com
                o seu "gênero de nascença". Por exemplo: um indivíduo que possui
                características biológicas típicas do gênero masculino e que se
                identifica (socialmente e psicologicamente) como um homem. Desta
                forma, pode-se dizer que trata-se de um homem cisgênero.'
              />
              <InformationText>
                Pessoa cisgênero consiste no/a indivíduo/a que se identifica com
                o seu &quot;gênero de nascença&quot;. Por exemplo: um indivíduo
                que possui características biológicas típicas do gênero
                masculino e que se identifica (socialmente e psicologicamente)
                como um homem. Desta forma, pode-se dizer que trata-se de um
                homem cisgênero.
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="transgênero"
                label="Transexual/Transgênero(a)"
                information="pessoa transexual/transgênero é o(a) indivíduo(a) que se
                identifica com um gênero diferente daquele que lhe foi atribuído
                biologicamente no nascimento. Por exemplo: uma pessoa que nasce
                com características masculinas (do ponto de vista biológico),
                mas que se sente do gênero feminino; ou o indivíduo que possui
                características físicas femininas, mas que se identifica como um
                homem."
              />
              <InformationText>
                pessoa transexual/transgênero é o(a) indivíduo(a) que se
                identifica com um gênero diferente daquele que lhe foi atribuído
                biologicamente no nascimento. Por exemplo: uma pessoa que nasce
                com características masculinas (do ponto de vista biológico),
                mas que se sente do gênero feminino; ou o indivíduo que possui
                características físicas femininas, mas que se identifica como um
                homem.
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="não-binário"
                label="Não-binárie"
                information="pessoa não binárie é quem não se identifica com 
                um gênero exclusivamente, podem não se reconhecer com a 
                identidade de gênero 'homem' ou 'mulher', ou podem
                se caracterizar como uma mistura entre os dois."
              />
              <InformationText>
                pessoa não binárie é quem não se identifica com um gênero
                exclusivamente, podem não se reconhecer com a identidade de
                gênero &quot;homem&quot; ou &quot;mulher&quot;, ou podem se
                caracterizar como uma mistura entre os dois.
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="prefiro não responder"
                label="Prefiro não responder"
              />
            </InputRadioContainer>
          </div>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <div className="sexual_orientation">
            <label htmlFor="artist.sexual_orientation">
              Qual a sua orientação sexual? <p className="required"> *</p>
              {errors.artist?.sexual_orientation && (
                <span className="errorMessage">Campo obrigatório</span>
              )}
            </label>
            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="assexual"
                label="Assexual"
                information="Assexualidade é a falta total, parcial ou condicional de atração sexual a qualquer pessoa, com pouco ou inexistente interesse nas atividades sexuais humanas. Pode ser considerada uma orientação sexual ou a falta de uma"
              />
              <InformationText>
                Assexualidade é a falta total, parcial ou condicional de atração
                sexual a qualquer pessoa, com pouco ou inexistente interesse nas
                atividades sexuais humanas. Pode ser considerada uma orientação
                sexual ou a falta de uma
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="bissexual"
                label="Bissexual"
                information="Orientação sexual bissexual é atração romântica, atração sexual ou comportamento sexual voltado tanto a homens e como a mulheres, ou por mais de um sexo ou gênero."
              />
              <InformationText>
                Orientação sexual bissexual é atração romântica, atração sexual
                ou comportamento sexual voltado tanto a homens e como a
                mulheres, ou por mais de um sexo ou gênero.
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="heterosexual"
                label="Heterossexual"
                information="Orientação sexual heterossexual é atração romântica e/ou sexual entre pessoas do gênero oposto ao seu"
              />
              <InformationText>
                Orientação sexual heterossexual é atração romântica e/ou sexual
                entre pessoas do gênero oposto ao seu
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="pansexual"
                label="Pansexual"
                information="Pansexual é a denominação que abarca quem sente atração física, desejo sexual e amor independentemente de sexo ou identidade de gênero. Confundido com a bissexualidade, que é definida como a atração por mais de um gênero, em geral homem ou mulher"
              />
              <InformationText>
                Pansexual é a denominação que abarca quem sente atração física,
                desejo sexual e amor independentemente de sexo ou identidade de
                gênero. Confundido com a bissexualidade, que é definida como a
                atração por mais de um gênero, em geral homem ou mulher
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="lésbica"
                label="Homossexualidade Lésbica"
                information="é a denominação em que uma mulher sente-se atraída afetiva e/ou sexualmente por outra mulher"
              />
              <InformationText>
                é a denominação em que uma mulher sente-se atraída afetiva e/ou
                sexualmente por outra mulher
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="gay"
                label="Homossexualidade Gay"
                information="é a denominação em que um homem sente-se atraído afetiva e/ou sexualmente por outro homem"
              />
              <InformationText>
                é a denominação em que um homem sente-se atraído afetiva e/ou
                sexualmente por outro homem
              </InformationText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="prefiro não dizer"
                label="Prefiro não dizer"
              />
            </InputRadioContainer>
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  );
};
