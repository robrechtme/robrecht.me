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
  ${RESPONSIVE_IMAGE_FIELDS}
  fragment globalFields on Query {
    global {
      socials
      hq(markdown: true)
      copyright
      vat
      seo {
        image {
          url
        }
      }
      hero {
        responsiveImage(imgixParams: { ar: "1:1", fit: crop }) {
          ...responsiveImageFields
        }
      }
      about(markdown: true)
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
          }
        }
      }
    }
  }
`;
