import React, { FC, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Course } from 'Api/Courses';
import useMobile from 'Hooks/useMobile';

import Card from '../Card';

import {
  CardWrapper,
  ClassesWrapper,
  Divisor,
  IconContainer,
  MainTitle,
  Subtitle,
  Wrapper,
} from './styles';

export interface Props {
  title: string;
  subtitle: string;
  classes: Course[];
  color: string;
  fontColor: string;
}

export const CardRowComponent: FC<Props> = ({
  title,
  subtitle,
  classes,
  color,
  fontColor,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleNav = (direction: string) => {
    if (direction === 'left') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return cardRef ? (cardRef.current!.scrollLeft -= 250) : null;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return cardRef ? (cardRef.current!.scrollLeft += 250) : null;
    }
  };

  const isMobile = useMobile();

  return (
    <Wrapper color={color}>
      <MainTitle fontColor={fontColor}>{title}</MainTitle>
      {isMobile ? (
        <Divisor fontColor={fontColor} />
      ) : (
        <Subtitle>{subtitle}</Subtitle>
      )}
      <IconContainer>
        {isMobile ? (
          <></>
        ) : (
          <FaChevronLeft
            color="#FFFFFF"
            size="30px"
            onClick={() => handleNav('left')}
            cursor="pointer"
          />
        )}
        <ClassesWrapper ref={cardRef}>
          <CardWrapper>
            {classes.map((item) => (
              <Card
                {...item}
                key={item.id}
                id={item.id}
                name={item.name}
                tag={item.tags[0] as string}
                short_description={item.short_description}
                available={item.available}
                banner={item.banner}
                has_subscription={item.has_subscription}
                subscription_finish_date={item.subscription_finish_date}
                subscription_start_date={item.subscription_start_date}
              />
            ))}
          </CardWrapper>
        </ClassesWrapper>
        {isMobile ? (
          <></>
        ) : (
          <FaChevronRight
            color="#FFFFFF"
            size="30px"
            onClick={() => handleNav('right')}
            cursor="pointer"
          />
        )}
        {isMobile ? <Subtitle>{subtitle}</Subtitle> : <></>}
      </IconContainer>
    </Wrapper>
  );
};

export default CardRowComponent;
