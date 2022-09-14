import React, { Dispatch, FC, SetStateAction } from 'react';
import { UserSearchParams } from 'Api/UserSearch';
import { Title } from 'Components/Typography/Title';
// import { Text } from "Components/Typography/Text"
import { Experience } from 'Utils/selectOptionsData';

import {
  BadgeDiv,
  BadgeInput,
  OptionDiv,
  OptionWrapper,
} from '../../UserSearchPage/style';

interface OptionsProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>;
}

type SearchKeys = 'drtOnly' | 'CNPJOnly' | 'ceacOnly' | 'meiOnly';

export const OptionsExperience: FC<OptionsProps> = ({ setFunction }) => {
  return (
    <OptionDiv>
      <Title level={4}> EXPERIÊNCIA </Title>
      <OptionWrapper>
        {Experience.map((option, index) => (
          <BadgeDiv key={index}>
            <label> {option.label} </label>
            <BadgeInput
              type="checkbox"
              name="experience"
              value={option.value}
              onChange={() => {
                setFunction((formData) => {
                  const key = option.value as SearchKeys;
                  const updateFormData = { ...formData };
                  updateFormData[key] = !formData[key];
                  updateFormData['showNothing'] = false;
                  return updateFormData;
                });
              }}
            />
          </BadgeDiv>
        ))}
      </OptionWrapper>
    </OptionDiv>
  );
};

export default OptionsExperience;
