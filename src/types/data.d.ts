// DO NOT EDIT/ADD/DELETE THESE TYPES WITHOUT CONSULTING ME FIRST!!! SITE WILL NOT COMPILE WITH TYPE-ERRORS

export declare interface PublicationType {
  title: string;
  src: string | null;
  reviewed: boolean;
  year: number | null;
  publisher: string | null;
  type:
    | 'Journal'
    | 'Conference'
    | 'Abstract'
    | 'Review'
    | 'Work in Progress'
    | string;
  authors: string[];
  featured: boolean;
  abstract: string | null;
  image: string;
}
// src: url string format --> 'https://doi.12345.com'
// image: url string format --> '/assets/nameOfImage.jpg'
