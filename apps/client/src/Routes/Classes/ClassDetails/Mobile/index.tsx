import React, { FC } from 'react';
import { Course } from 'Api/Courses';
import Footer from 'Components/Footer';
// import { Banner, CourseInfo, CourseResume, ResumeInfo } from './styles'
import FullPage from 'Components/FullPage';
import Header from 'Components/Header';

import Banner from './Components/Banner';
import CourseInfo from './Components/CourseInfo';
import CourseResume from './Components/Resume';

interface MobileProps {
  course: Course | null;
}

export const MobileCoursePage: FC<MobileProps> = ({ course }) => {
  return (
    <FullPage>
      <Header />
      <Banner img={course?.banner} />
      <CourseInfo course={course} />
      <CourseResume
        requirements={course?.requirements as string}
        about={course?.about as string}
      />
      <Footer />
    </FullPage>
  );
};

export default MobileCoursePage;
