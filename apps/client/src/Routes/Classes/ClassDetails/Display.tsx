import React, { FC } from 'react';
import { Course } from 'Api/Courses';
import Wireframe from 'Components/Wireframe';
import useMobile from 'Hooks/useMobile';

import About from './About';
import Details from './Details';
import Introduction from './Introduction';
import MobileCoursePage from './Mobile';
import { Container, FirstRow, SecondRow } from './styles';

export interface Props {
  data: Course | null;
}

export const Display: FC<Props> = ({ data }) => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <>
          <MobileCoursePage course={data} />
        </>
      ) : (
        <>
          <Wireframe>
            <Container>
              <FirstRow>
                <Introduction
                  title={data?.name as string}
                  description={data?.short_description as string}
                  tags={data?.tags as string[]}
                />
                <About
                  about={data?.about as string}
                  requirements={data?.requirements as string}
                />
              </FirstRow>
              <SecondRow>
                <Details
                  id={data?.id as string}
                  teacher={data?.teacher as string[]}
                  details={data?.detail as string[]}
                  font={data?.fonte as string[]}
                  banner={data?.banner as string}
                  start_date={data?.subscription_start_date as string}
                  finish_date={data?.subscription_finish_date as string}
                  class_dates={data?.class_dates as string[]}
                  link={data?.link as string}
                  available={data?.available as boolean}
                  has_subscription={data?.has_subscription as boolean}
                />
              </SecondRow>
            </Container>
          </Wireframe>
        </>
      )}
    </>
  );
};

export default Display;
