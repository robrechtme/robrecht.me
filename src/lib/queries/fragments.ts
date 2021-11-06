export const IMAGE_PART = `
src
width
height
alt
title
base64
`;

export const GLOBAL_PART = `
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
    responsiveImage(
      imgixParams: { ar: "1:1", fit: crop }
    ) {
      ${IMAGE_PART}
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
`;
