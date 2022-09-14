import React, { FC } from 'react';
import { FileInput } from 'Components/Inputs/FileInput';
import { SelectInput } from 'Components/Inputs/SelectInput';
import { useFormikContext } from 'formik';
import Image from 'next/image';

import {
  AvatarInput,
  Container,
  Content,
  ContentContainer,
  FileInputContainer,
  SelectContainer,
} from './style';

interface FileProps {
  name: string;
  size: number;
  type: string;
}

interface Step2Props {
  profilePicture: Blob;
  artist: {
    name: string;
    social_name: string;
    artistic_name: string;
    photo_url: FileProps;
  };
}

export const Step2: FC = () => {
  const { values } = useFormikContext<Step2Props>();

  const options = [
    { value: 'nome', label: values.artist?.name },
    { value: 'nome social', label: values.artist?.social_name },
    // eslint-disable-next-line @cspell/spellchecker
    { value: 'nome artistico', label: values.artist?.artistic_name },
  ];

  return (
    <Container>
      <ContentContainer>
        <Content>
          <AvatarInput>
            <Image
              src={
                values.profilePicture
                  ? URL.createObjectURL(values.profilePicture)
                  : (undefined as never)
              }
              alt={values.profilePicture ? 'User avatar' : ''}
            />
          </AvatarInput>

          <FileInputContainer>
            <FileInput
              name="profilePicture"
              value="profilePicture"
              label="Clique para enviar foto"
            />
          </FileInputContainer>

          <SelectContainer htmlFor="main_name">
            <SelectInput
              label="Nome principal"
              name="artist.show_name"
              options={options}
              required
            />
          </SelectContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};
