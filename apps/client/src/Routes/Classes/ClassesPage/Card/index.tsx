import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Course } from 'Api/Courses';
import Label from 'Components/Label';
import { format } from 'date-fns';

import {
  CardDescription,
  DateText,
} from '../../../../Components/CoursesPresentation/Card/styles';

import {
  Button,
  ButtonLayer,
  ButtonText,
  ButtonWrapper,
  CardTitle,
  Container,
  DateContainer,
  DescriptionWrapper,
  LabelWrapper,
  StyledImage,
  SubscribeWrapper,
  TextWrapper,
} from './styles';

export interface CardProps extends Course {
  tag: string;
}

const formatDate = (dateStr: string) =>
  format(dateStr, 'DD-MM-YYYY').replace(/-/g, '/');

// eslint-disable-next-line abcsize/abcsize
export const Card: FC<CardProps> = ({
  id,
  name,
  tag,
  short_description,
  available,
  banner,
  has_subscription,
  subscription_finish_date,
  subscription_start_date,
  class_dates,
}) => {
  const firstClassDateStr = class_dates?.length > 0 && class_dates[0];
  const lastClassDate =
    class_dates?.length > 0
      ? new Date(class_dates[class_dates.length - 1] as string).getTime()
      : -Infinity;
  const now = new Date().getTime();
  const subscriptionStart = new Date(subscription_start_date).getTime();
  const subscriptionFinish = new Date(subscription_finish_date).getTime();

  const isAvailable =
    available &&
    ((!has_subscription && lastClassDate > now) ||
      (has_subscription &&
        subscriptionStart < now &&
        now < subscriptionFinish));
  const willStart = has_subscription && subscriptionStart > now;
  // const notAvailable = !isAvailable && !willStart

  const path = 'classes';
  const route = `/${path}/${id}`;

  return (
    <Container>
      <Link to={route}>
        <StyledImage src={banner} alt="Imagem do banner" />
      </Link>
      <TextWrapper>
        <CardTitle>{name}</CardTitle>
        <DescriptionWrapper>
          <CardDescription>{short_description}</CardDescription>
        </DescriptionWrapper>
        <LabelWrapper>
          <Label name={tag} alt={name} image={undefined} />
        </LabelWrapper>
        <SubscribeWrapper>
          {/* {!!date && */}
          <DateContainer>
            <DateText>
              {willStart
                ? 'Iniciará em'
                : isAvailable
                ? 'Inscreva-se até'
                : 'Encerrado em'}
            </DateText>
            <DateText>
              {isAvailable
                ? has_subscription
                  ? formatDate(subscription_finish_date)
                  : firstClassDateStr && formatDate(firstClassDateStr)
                : willStart
                ? formatDate(subscription_start_date)
                : firstClassDateStr && formatDate(firstClassDateStr)}
            </DateText>
          </DateContainer>
          {/* } */}
          <ButtonWrapper>
            <ButtonLayer />
            <Button href={route}>
              <ButtonText>
                {!isAvailable
                  ? 'encerrado'
                  : has_subscription
                  ? 'inscreva-se'
                  : 'aberto'}
              </ButtonText>
            </Button>
          </ButtonWrapper>
        </SubscribeWrapper>
      </TextWrapper>
    </Container>
  );
};

export default Card;
