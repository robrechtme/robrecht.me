import { gql } from 'graphql-tag';

export const RESPONSIVE_IMAGE_FIELDS = gql`
  fragment responsiveImageFields on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    alt
    title
    aspectRatio
    base64
  }
`;

export const GLOBAL_FIELDS = gql`
  fragment globalFields on Query {
    global {
      socials
      legal {
        value
      }
    }
    site: _site {
      faviconMetaTags {
        attributes
        content
        tag
      }
      globalSeo {
        facebookPageUrl
        siteName
        titleSuffix
        twitterAccount
        fallbackSeo {
          description
          title
          twitterCard
          image {
            alt
            height
            url
            width
            mimeType
          }
        }
      }
    }
  }
`;
