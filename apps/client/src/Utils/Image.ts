// the object form of an image to use by visual components

import StrapiAsset from './StrapiAsset';

export type imageExtension = string;
export type imageMime = string;

export type Image = {
  url: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  ext?: imageExtension;
  name?: string;
};

// transform a strapi asset object into an image object (remove unnecessary info)
export const Asset2Image = ({
  url,
  alternativeText,
  caption,
  width,
  height,
  ext,
}: StrapiAsset): Image => ({
  url,
  alternativeText,
  caption,
  width,
  height,
  ext,
});

// utility function to mock image object
export const mockImage: (img: Partial<Image>) => Image = (img = {}) => ({
  url: '#',
  alternativeText: '',
  caption: '',
  width: 0,
  height: 0,
  ext: 'jpg',
  ...img,
});
