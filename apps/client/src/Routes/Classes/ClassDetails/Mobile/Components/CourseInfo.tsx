import React, { FC, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Course } from 'Api/Courses';
import Label from 'Components/Label';
import { Text } from 'Components/Typography/Text';
import { Title } from 'Components/Typography/Title';
import { format } from 'date-fns';
import Button from 'Routes/Classes/SubscriptionButton';

import { CourseInfoDiv, DrawerButton, TagContainer } from '../styles';

import Details from './Details';

interface CourseResumeProps {
  course: Course | null;
}

export const CourseInfo: FC<CourseResumeProps> = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  const finish_date = course?.subscription_finish_date;
  const now = new Date().getTime();
  const finish = new Date(finish_date as string).getTime();
  const passedFinish = finish < now;

  return (
    <CourseInfoDiv background_color={'rgba(12, 116, 255, 1)'}>
      <Title> {course?.name} </Title>
      <Text> {course?.short_description} </Text>
      <TagContainer>
        {course?.tags.map((tag, index) => {
          return (
            <Label name={tag} alt={course.name} image={undefined} key={index} />
          );
        })}
      </TagContainer>
      <Button
        courseId={course?.id as string}
        isAvailable={course?.available}
        link={course?.link as string}
        hasSubscription={course?.has_subscription}
      >
        {' '}
        INSCREVA-SE{' '}
      </Button>

      {!!finish_date && (
        <Text>
          {passedFinish ? 'Inscrições encerraram em' : 'Inscrições até'}{' '}
          {format(course?.subscription_finish_date, 'DD-MM-YYYY').replace(
            /-/g,
            '/'
          )}{' '}
        </Text>
      )}

      <Details
        isOpen={isOpen}
        details={course?.detail as string[]}
        teachers={course?.teacher as string[]}
        fonte={course?.fonte as string[]}
      />

      <DrawerButton onClick={() => setIsOpen(!isOpen)}>
        {' '}
        {isOpen ? 'Minimizar resumo' : 'Abrir resumo'}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </DrawerButton>
    </CourseInfoDiv>
  );
};

export default CourseInfo;
