import React, { FC } from 'react';
import { CoursePresentation } from 'Api/CoursePresentation';
import { Homepage } from 'Api/Homepage';

import Display from './Display';

export interface CoursesPresentationProps {
  texts: Homepage;
  courses: CoursePresentation[];
}

export const CoursesPresentation: FC<CoursesPresentationProps> = ({
  courses,
  texts,
}) => {
  return <Display texts={texts} courses={courses} />;
};

export default CoursesPresentation;
