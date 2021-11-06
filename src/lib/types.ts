import { ResponsiveImageType, SeoMetaTagType } from 'react-datocms';

export type Socials = Record<'mail' | 'github' | 'linkedin', string>;

export type Global = {
  global: {
    socials: Socials;
    hq: string;
    copyright: string;
    vat: string;
    hero: {
      responsiveImage: ResponsiveImageType;
    };
    about: string;
    seo: { image: { url: string } };
  };
  site: {
    favicon: SeoMetaTagType;
    globalSeo: {
      fallbackSeo: {
        description: string;
        title: string;
      };
    };
  };
};

export type Project = {
  publishedAt: string;
  updatedAt: string;
  id: string;
  slug: string;
  thumbnail: {
    responsiveImage: ResponsiveImageType;
  };
  content: ContentBlock[];
  title: string;
  keywords: string[];
  description: string;
  seo: {
    description: string;
    title: string;
    twitterCard: string;
    image: {
      url: string;
    };
  };
};

// Blocks
type ImageBlock = {
  _modelApiKey: 'image';
  id: string;
  image: {
    responsiveImage: ResponsiveImageType;
  };
};

type TextBlock = {
  _modelApiKey: 'text';
  id: string;
  text: string;
};

export type ContentBlock = ImageBlock | TextBlock;
