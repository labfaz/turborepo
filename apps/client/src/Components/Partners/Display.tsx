import React, { FC } from 'react';
import { HomePartners } from 'Api/HomePartners';

import { Container, Logos, StyledImage } from './styles';

export interface HomePartnersProps {
  data: HomePartners[];
}

type logo = [
  {
    url: string;
  }
];

export const Display: FC<HomePartnersProps> = ({ data }) => {
  return (
    <Container>
      {/* <Title> APOIO </Title> */}
      <Logos>
        {data.map((partner) => {
          return (
            <StyledImage
              key={partner.name}
              src={(partner.logo as unknown as logo)[0].url}
              alt={partner.name}
              layout="fill"
            />
          );
        })}
      </Logos>
    </Container>
  );
};

export default Display;
