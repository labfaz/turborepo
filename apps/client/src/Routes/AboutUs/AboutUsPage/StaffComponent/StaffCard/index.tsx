import React, { FC } from 'react';
import { StaffObject } from 'Api/AboutUs';
import { Text } from 'Components/Typography/Text';

import { Card, CardBody, CardThumb, Circle, ImageCircle } from '../styles';

interface StaffCardProps {
  data: StaffObject;
}

export const StaffCard: FC<StaffCardProps> = ({ data }) => {
  const { name, tag, text, image } = data || null;

  return (
    <Card>
      <CardThumb>
        <ImageCircle image={image.url} />
        <Circle className="pink" />
        <Text> {name} </Text>
      </CardThumb>
      <CardBody>
        <Text> {tag} </Text>
        <Text> {text} </Text>
      </CardBody>
    </Card>
  );
};

export default StaffCard;
