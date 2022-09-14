import React, { FC } from 'react';
import { format } from 'date-fns';

import { Button } from '../../SubscriptionButton';

import {
  ActivityContainer,
  ActivityItem,
  ActivityTitle,
  Container,
  ImageContainer,
  ListsList,
  StyledImage,
  SubscribeText,
  TextBackground,
  TextContainer,
  TextSubContainer,
} from './styles';

export interface Props {
  id: string;
  teacher: string[];
  details: string[];
  font: string[];
  banner: string;
  start_date: string;
  finish_date: string;
  class_dates: string[];
  link: string;
  available: boolean;
  has_subscription: boolean;
}

export const Details: FC<Props> = ({
  id,
  teacher,
  details,
  font,
  banner,
  // start_date,
  finish_date,
  // class_dates,
  link,
  available,
  has_subscription,
}) => {
  const now = new Date().getTime();
  const finish = new Date(finish_date).getTime();
  const passedFinish = finish < now;
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={banner} alt="Imagem do banner" />
      </ImageContainer>
      <TextContainer>
        <TextSubContainer>
          <TextBackground>
            {finish_date && (
              <SubscribeText>
                {passedFinish ? 'Inscrições encerraram em' : 'Inscrições até'}{' '}
                {format(finish_date, 'DD-MM-YYYY')
                  .replace('-', '/')
                  .replace('-', '/')}
              </SubscribeText>
            )}
            <Button
              courseId={id}
              isAvailable={available}
              link={link}
              hasSubscription={has_subscription}
            >
              {' '}
              INSCREVA-SE{' '}
            </Button>

            <ListsList>
              <ActivityContainer>
                <ActivityTitle>Detalhes da atividade:</ActivityTitle>
                {details?.map((item) => (
                  <ActivityItem>{item}</ActivityItem>
                ))}
              </ActivityContainer>
              <ActivityContainer>
                <ActivityTitle>Professores:</ActivityTitle>
                {teacher?.map((item) => (
                  <ActivityItem>{item}</ActivityItem>
                ))}
              </ActivityContainer>
              <ActivityContainer>
                <ActivityTitle>Quem está oferecendo esse curso?</ActivityTitle>
                {font?.map((item) => (
                  <ActivityItem>{item}</ActivityItem>
                ))}
              </ActivityContainer>
            </ListsList>
          </TextBackground>
        </TextSubContainer>
      </TextContainer>
    </Container>
  );
};

export default Details;
