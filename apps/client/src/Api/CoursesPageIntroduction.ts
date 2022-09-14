import { strapi } from 'Api';
import useFetchApi from 'Hooks/useFetchApi';
import { Asset2Image, Image } from 'Utils/Image';
import StrapiAsset from 'Utils/StrapiAsset';

export interface CoursesPageIntroduction {
  title: string;
  description: string;
  image: Image;
}

export interface StrapiCoursesPageIntroduction {
  title: string;
  description: string;
  image: StrapiAsset;
}

export const fetchCoursesPageIntroduction: () => Promise<CoursesPageIntroduction> =
  () =>
    strapi
      .get<StrapiCoursesPageIntroduction>(`/courses-page-introduction`)
      .then(({ data }) => data)
      .then(({ title, description, image }) => ({
        title,
        description,
        image: Asset2Image(image),
      }));

export const useCoursesPageIntroduction = () =>
  useFetchApi<CoursesPageIntroduction>(
    `/courses-page-introduction`,
    fetchCoursesPageIntroduction
  );
