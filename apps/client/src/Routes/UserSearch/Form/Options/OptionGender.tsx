import React, { Dispatch, FC, SetStateAction } from 'react';
import {
  OptionDiv,
  BadgeInput,
  BadgeDiv,
  OptionWrapper,
} from '../../UserSearchPage/style';

import { Title } from 'Components/Typography/Title';
// import { Text } from "Components/Typography/Text"

import { UserSearchParams } from 'Api/UserSearch';
interface OptionsProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>;
}

export const OptionGender: FC<OptionsProps> = ({ setFunction }) => {
  return (
    <OptionDiv>
      <Title level={4}> GÊNERO </Title>
      <OptionWrapper>
        <BadgeDiv>
          <BadgeInput
            type="radio"
            name="gender"
            value={'Todes'}
            key="todes"
            defaultChecked
            onChange={() =>
              setFunction((formData) => {
                const updateFormData = { ...formData };
                updateFormData['nonMenOnly'] = false;
                updateFormData['showNothing'] = false;
                return updateFormData;
              })
            }
          />
          <label> Todes </label>
        </BadgeDiv>

        <BadgeDiv>
          <BadgeInput
            type="radio"
            name="gender"
            value={'Nao-homem'}
            key="nao_homem"
            onChange={() =>
              setFunction((formData) => {
                const updateFormData = { ...formData };
                updateFormData['nonMenOnly'] = true;
                updateFormData['showNothing'] = false;
                return updateFormData;
              })
            }
          />
          <label> Não-homem </label>
        </BadgeDiv>

        <BadgeDiv>
          <BadgeInput
            type="checkbox"
            onChange={({ target }) => {
              const value = target.checked;
              setFunction((formData) => {
                const updateFormData = { ...formData };
                updateFormData['LBTQOnly'] = value;
                updateFormData['showNothing'] = false;
                return updateFormData;
              });
            }}
          />
          <label> LGBTQ+ </label>
        </BadgeDiv>
      </OptionWrapper>
    </OptionDiv>
  );
};

export default OptionGender;
