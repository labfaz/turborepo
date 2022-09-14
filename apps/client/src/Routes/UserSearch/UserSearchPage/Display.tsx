import React, { FC, useState } from 'react';
import { UserSearchParams, useUserSearch } from 'Api/UserSearch';
import Loading from 'Components/Loading';
import { Pagination } from 'Components/Pagination/Static';
import { Text } from 'Components/Typography/Text';
import { Title } from 'Components/Typography/Title';
import Wireframe from 'Components/Wireframe';
import useTimeout from 'Hooks/useTimeout';
import { getUserName } from 'Utils/userUtils';

import Form from '../Form';
import OptionGender from '../Form/Options/OptionGender';
import OptionIsPcD from '../Form/Options/OptionIsPcd';
import OptionsExperience from '../Form/Options/OptionsExperience';
import SelectInput from '../Form/Select';
import UserCard from '../UserCard';

import { ContentDiv, FormDiv, Header, OptionsDiv } from './style';

export type Fields = 'areas' | 'serviços' | 'diversidade' | 'experiência';

interface UserSearchInterface {
  title?: string;
  description: string;
}

export const Display: FC<UserSearchInterface> = ({ title, description }) => {
  const [formData, setFormData] = useState<UserSearchParams>({
    nameOrProfession: '',
    city: '',
    area: '',
    nonMenOnly: false,
    LGBTQOnly: false,
    drtOnly: false,
    CNPJOnly: false,
    ceacOnly: false,
    meiOnly: false,
    pcdOnly: false,
    showNothing: true,
  });

  const { isLoading, users } = useUserSearch(formData);
  const { start, done } = useTimeout(250);

  return (
    <Wireframe>
      <Header>
        {title && <Title>{title}</Title>}
        {description && <Text>{description}</Text>}
      </Header>
      <FormDiv>
        <Form setFunction={setFormData} onInput={start}>
          <OptionsDiv>
            <SelectInput label="cidade" setInput={setFormData} />
            <SelectInput label="area" setInput={setFormData} />
            <OptionGender setFunction={setFormData} />
            <OptionsExperience setFunction={setFormData} />
            <OptionIsPcD setFunction={setFormData} />
          </OptionsDiv>
        </Form>
      </FormDiv>
      <ContentDiv>
        {users && !isLoading && done ? (
          <Pagination items={users}>
            {users.map((user, index) => {
              const { id, isVerified } = user;
              const name = getUserName(user);
              const area = user.artist.technical.area;
              const photo = user.artist.photo_url;
              const description = user.artist.technical.area[0]
                ?.describe as string;
              const data = {
                id,
                isVerified,
                name,
                area,
                photo,
                description,
              };
              return <UserCard data={data} key={index} />;
            })}
          </Pagination>
        ) : (
          <Loading />
        )}
      </ContentDiv>
    </Wireframe>
  );
};

export default Display;
