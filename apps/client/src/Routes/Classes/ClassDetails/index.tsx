import React, { FC } from 'react';
import { useCourse } from 'Api/Courses';
import LoadingFullPage from 'Components/LoadingFullPage';

import Display from './Display';

interface RouteParams {
  id: string;
}

export const ClassDetails: FC<RouteParams> = ({ id }) => {
  const course = useCourse(id);

  if (course.isLoading) return <LoadingFullPage />;

  return <Display data={course.data?.data || null} />;
};

export default ClassDetails;
