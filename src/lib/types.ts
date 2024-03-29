/* eslint-disable */
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents `true` or `false` values. */
  BooleanType: any;
  CustomData: any;
  /** A ISO 8601 compliant datetime value */
  DateTime: any;
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: any;
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
}

/** Specifies how to filter Boolean fields */
export interface BooleanFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['BooleanType']>;
}

export interface CollectionMetadata {
  __typename: 'CollectionMetadata';
  count: Scalars['IntType'];
}

export enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

export interface ColorField {
  __typename: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
}

/** Specifies how to filter by creation datetime */
export interface CreatedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
}

export enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

export interface FileField {
  __typename: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: Maybe<FocalPoint>;
  format: Scalars['String'];
  height: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes: Maybe<Scalars['String']>;
  responsiveImage: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: Maybe<UploadVideoField>;
  width: Maybe<Scalars['IntType']>;
}


export interface FileFieldAltArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


export interface FileFieldBlurUpThumbArgs {
  imgixParams: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}


export interface FileFieldCustomDataArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


export interface FileFieldFocalPointArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


export interface FileFieldResponsiveImageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  imgixParams: InputMaybe<ImgixParams>;
  locale: InputMaybe<SiteLocale>;
  sizes: InputMaybe<Scalars['String']>;
}


export interface FileFieldTitleArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


export interface FileFieldUrlArgs {
  imgixParams: InputMaybe<ImgixParams>;
}

/** Specifies how to filter Single-file/image fields */
export interface FileFilter {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
}

export interface GlobalModelLegalField {
  __typename: 'GlobalModelLegalField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

/** Record of type Global settings (global) */
export interface GlobalRecord {
  __typename: 'GlobalRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  legal: Maybe<GlobalModelLegalField>;
  socials: Maybe<Scalars['JsonField']>;
  updatedAt: Scalars['DateTime'];
}


/** Record of type Global settings (global) */
export interface GlobalRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface GlobalSeoField {
  __typename: 'GlobalSeoField';
  facebookPageUrl: Maybe<Scalars['String']>;
  fallbackSeo: Maybe<SeoField>;
  siteName: Maybe<Scalars['String']>;
  titleSuffix: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
}

export type HomePageModelAboutBlocksField = ImageColRecord | ImageRecord;

export interface HomePageModelAboutField {
  __typename: 'HomePageModelAboutField';
  blocks: Array<HomePageModelAboutBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

/** Record of type Home Page (home_page) */
export interface HomePageRecord {
  __typename: 'HomePageRecord';
  _allSeoLocales: Maybe<Array<Maybe<SeoFieldMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  about: Maybe<HomePageModelAboutField>;
  createdAt: Scalars['DateTime'];
  hero: Maybe<FileField>;
  id: Scalars['ItemId'];
  seo: Maybe<SeoField>;
  updatedAt: Scalars['DateTime'];
}


/** Record of type Home Page (home_page) */
export interface HomePageRecord_AllSeoLocalesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Home Page (home_page) */
export interface HomePageRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Home Page (home_page) */
export interface HomePageRecordSeoArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** Record of type Gallery side-by-side (image_col) */
export interface ImageColRecord {
  __typename: 'ImageColRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  images: Array<FileField>;
  updatedAt: Scalars['DateTime'];
}


/** Record of type Gallery side-by-side (image_col) */
export interface ImageColRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

/** Record of type Image (image) */
export interface ImageRecord {
  __typename: 'ImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
}


/** Record of type Image (image) */
export interface ImageRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}

export interface ImgixParams {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg: InputMaybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor: InputMaybe<Scalars['String']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ: InputMaybe<Scalars['FloatType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc: InputMaybe<ImgixParamsIptc>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect: InputMaybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp: InputMaybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead: InputMaybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w: InputMaybe<Scalars['FloatType']>;
}

export enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

export enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

export enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  blur = 'blur',
  solid = 'solid'
}

export enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

export enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

export enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

export enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

export enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsMarkTile {
  grid = 'grid'
}

export enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

export enum ImgixParamsTransparency {
  grid = 'grid'
}

export enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

export enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

export enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
export interface InUseFilter {
  /** Search uploads that are currently used by some record or not */
  eq: InputMaybe<Scalars['BooleanType']>;
}

/** Specifies how to filter by ID */
export interface ItemIdFilter {
  /** Search the record with the specified ID */
  eq: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

export enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

export interface JsonFieldMultiLocaleField {
  __typename: 'JsonFieldMultiLocaleField';
  locale: Maybe<SiteLocale>;
  value: Maybe<Scalars['JsonField']>;
}

/** Specifies how to filter JSON fields */
export interface JsonFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
}

/** Specifies how to filter Multiple-links fields */
export interface LinksFilter {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
}

/** Specifies how to filter by locale */
export interface LocalesFilter {
  /** Filter records that are localized in all the specified locales */
  allIn: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn: InputMaybe<Array<SiteLocale>>;
}

export enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

/** Specifies how to filter by image orientation */
export interface OrientationFilter {
  /** Search uploads with the specified orientation */
  eq: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq: InputMaybe<UploadOrientation>;
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export interface PositionFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['IntType']>;
}

export type ProjectModelContentBlocksField = ImageColRecord | ImageRecord;

export interface ProjectModelContentField {
  __typename: 'ProjectModelContentField';
  blocks: Array<ProjectModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ProjectModelContentFieldMultiLocaleField {
  __typename: 'ProjectModelContentFieldMultiLocaleField';
  locale: Maybe<SiteLocale>;
  value: Maybe<ProjectModelContentField>;
}

export interface ProjectModelDescriptionField {
  __typename: 'ProjectModelDescriptionField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface ProjectModelDescriptionFieldMultiLocaleField {
  __typename: 'ProjectModelDescriptionFieldMultiLocaleField';
  locale: Maybe<SiteLocale>;
  value: Maybe<ProjectModelDescriptionField>;
}

export interface ProjectModelFilter {
  OR: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _locales: InputMaybe<LocalesFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  content: InputMaybe<StructuredTextFilter>;
  createdAt: InputMaybe<CreatedAtFilter>;
  description: InputMaybe<StructuredTextFilter>;
  id: InputMaybe<ItemIdFilter>;
  keywords: InputMaybe<JsonFilter>;
  position: InputMaybe<PositionFilter>;
  relatedProjects: InputMaybe<LinksFilter>;
  seo: InputMaybe<SeoFilter>;
  slug: InputMaybe<SlugFilter>;
  thumbnail: InputMaybe<FileFilter>;
  title: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<UpdatedAtFilter>;
}

export enum ProjectModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Project (project) */
export interface ProjectRecord {
  __typename: 'ProjectRecord';
  _allContentLocales: Maybe<Array<Maybe<ProjectModelContentFieldMultiLocaleField>>>;
  _allDescriptionLocales: Maybe<Array<Maybe<ProjectModelDescriptionFieldMultiLocaleField>>>;
  _allKeywordsLocales: Maybe<Array<Maybe<JsonFieldMultiLocaleField>>>;
  _allSeoLocales: Maybe<Array<Maybe<SeoFieldMultiLocaleField>>>;
  _allTitleLocales: Maybe<Array<Maybe<StringMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: Maybe<ProjectModelContentField>;
  createdAt: Scalars['DateTime'];
  description: Maybe<ProjectModelDescriptionField>;
  id: Scalars['ItemId'];
  keywords: Maybe<Scalars['JsonField']>;
  position: Maybe<Scalars['IntType']>;
  relatedProjects: Array<ProjectRecord>;
  seo: Maybe<SeoField>;
  slug: Maybe<Scalars['String']>;
  thumbnail: Maybe<FileField>;
  title: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
}


/** Record of type Project (project) */
export interface ProjectRecord_AllContentLocalesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecord_AllDescriptionLocalesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecord_AllKeywordsLocalesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecord_AllSeoLocalesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecord_AllTitleLocalesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecordContentArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecordDescriptionArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecordKeywordsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecordSeoArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Project (project) */
export interface ProjectRecordTitleArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by publication datetime */
export interface PublishedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
}

/** The query root for this schema */
export interface Query {
  __typename: 'Query';
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: Maybe<CollectionMetadata>;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns the single instance record */
  global: Maybe<GlobalRecord>;
  /** Returns the single instance record */
  homePage: Maybe<HomePageRecord>;
  /** Returns a specific record */
  project: Maybe<ProjectRecord>;
  /** Returns the single instance record */
  termsConditionsPage: Maybe<TermsConditionsPageRecord>;
  /** Returns a specific asset */
  upload: Maybe<FileField>;
}


/** The query root for this schema */
export interface Query_AllProjectsMetaArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ProjectModelFilter>;
  locale: InputMaybe<SiteLocale>;
}


/** The query root for this schema */
export interface Query_AllUploadsMetaArgs {
  filter: InputMaybe<UploadFilter>;
  locale: InputMaybe<SiteLocale>;
}


/** The query root for this schema */
export interface Query_SiteArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** The query root for this schema */
export interface QueryAllProjectsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}


/** The query root for this schema */
export interface QueryAllUploadsArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
}


/** The query root for this schema */
export interface QueryGlobalArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** The query root for this schema */
export interface QueryHomePageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** The query root for this schema */
export interface QueryProjectArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ProjectModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
}


/** The query root for this schema */
export interface QueryTermsConditionsPageArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** The query root for this schema */
export interface QueryUploadArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<UploadFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
}

/** Specifies how to filter by upload type */
export interface ResolutionFilter {
  /** Search uploads with the specified resolution */
  eq: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn: InputMaybe<Array<InputMaybe<ResolutionType>>>;
}

export enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

export interface ResponsiveImage {
  __typename: 'ResponsiveImage';
  alt: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64: Maybe<Scalars['String']>;
  bgColor: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
}

export interface SeoField {
  __typename: 'SeoField';
  description: Maybe<Scalars['String']>;
  image: Maybe<FileField>;
  title: Maybe<Scalars['String']>;
  twitterCard: Maybe<Scalars['String']>;
}

export interface SeoFieldMultiLocaleField {
  __typename: 'SeoFieldMultiLocaleField';
  locale: Maybe<SiteLocale>;
  value: Maybe<SeoField>;
}

/** Specifies how to filter SEO meta tags fields */
export interface SeoFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
}

export interface Site {
  __typename: 'Site';
  favicon: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
}


export interface SiteFaviconMetaTagsArgs {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
}


export interface SiteGlobalSeoArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

export enum SiteLocale {
  nl = 'nl'
}

/** Specifies how to filter Slug fields */
export interface SlugFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

/** Specifies how to filter by status */
export interface StatusFilter {
  /** Search the record with the specified status */
  eq: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn: InputMaybe<Array<InputMaybe<ItemStatus>>>;
}

/** Specifies how to filter Single-line string fields */
export interface StringFilter {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export interface StringMatchesFilter {
  caseSensitive: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp: InputMaybe<Scalars['BooleanType']>;
}

export interface StringMultiLocaleField {
  __typename: 'StringMultiLocaleField';
  locale: Maybe<SiteLocale>;
  value: Maybe<Scalars['String']>;
}

/** Specifies how to filter Structured Text fields */
export interface StructuredTextFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export interface Tag {
  __typename: 'Tag';
  attributes: Maybe<Scalars['MetaTagAttributes']>;
  content: Maybe<Scalars['String']>;
  tag: Scalars['String'];
}

export type TermsConditionsPageModelContentBlocksField = ImageColRecord | ImageRecord;

export interface TermsConditionsPageModelContentField {
  __typename: 'TermsConditionsPageModelContentField';
  blocks: Array<TermsConditionsPageModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
}

export interface TermsConditionsPageModelContentFieldMultiLocaleField {
  __typename: 'TermsConditionsPageModelContentFieldMultiLocaleField';
  locale: Maybe<SiteLocale>;
  value: Maybe<TermsConditionsPageModelContentField>;
}

/** Record of type Algemene voorwaarden (terms_conditions_page) */
export interface TermsConditionsPageRecord {
  __typename: 'TermsConditionsPageRecord';
  _allContentLocales: Maybe<Array<Maybe<TermsConditionsPageModelContentFieldMultiLocaleField>>>;
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: Maybe<TermsConditionsPageModelContentField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
}


/** Record of type Algemene voorwaarden (terms_conditions_page) */
export interface TermsConditionsPageRecord_AllContentLocalesArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Algemene voorwaarden (terms_conditions_page) */
export interface TermsConditionsPageRecord_SeoMetaTagsArgs {
  locale: InputMaybe<SiteLocale>;
}


/** Record of type Algemene voorwaarden (terms_conditions_page) */
export interface TermsConditionsPageRecordContentArgs {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
}

/** Specifies how to filter by upload type */
export interface TypeFilter {
  /** Search uploads with the specified type */
  eq: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn: InputMaybe<Array<InputMaybe<UploadType>>>;
}

/** Specifies how to filter by update datetime */
export interface UpdatedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
}

/** Specifies how to filter by default alt */
export interface UploadAltFilter {
  /** Search the uploads with the specified alt */
  eq: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by auhtor */
export interface UploadAuthorFilter {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by basename */
export interface UploadBasenameFilter {
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by colors */
export interface UploadColorsFilter {
  /** Filter uploads that have all of the specified colors */
  allIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
}

/** Specifies how to filter by copyright */
export interface UploadCopyrightFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by creation datetime */
export interface UploadCreatedAtFilter {
  /** Search for uploads with an exact match */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq: InputMaybe<Scalars['DateTime']>;
}

/** Specifies how to filter by filename */
export interface UploadFilenameFilter {
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export interface UploadFilter {
  OR: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt: InputMaybe<UploadUpdatedAtFilter>;
  alt: InputMaybe<UploadAltFilter>;
  author: InputMaybe<UploadAuthorFilter>;
  basename: InputMaybe<UploadBasenameFilter>;
  colors: InputMaybe<UploadColorsFilter>;
  copyright: InputMaybe<UploadCopyrightFilter>;
  filename: InputMaybe<UploadFilenameFilter>;
  format: InputMaybe<UploadFormatFilter>;
  height: InputMaybe<UploadHeightFilter>;
  id: InputMaybe<UploadIdFilter>;
  inUse: InputMaybe<InUseFilter>;
  md5: InputMaybe<UploadMd5Filter>;
  mimeType: InputMaybe<UploadMimeTypeFilter>;
  notes: InputMaybe<UploadNotesFilter>;
  orientation: InputMaybe<OrientationFilter>;
  resolution: InputMaybe<ResolutionFilter>;
  size: InputMaybe<UploadSizeFilter>;
  smartTags: InputMaybe<UploadTagsFilter>;
  tags: InputMaybe<UploadTagsFilter>;
  title: InputMaybe<UploadTitleFilter>;
  type: InputMaybe<TypeFilter>;
  width: InputMaybe<UploadWidthFilter>;
}

/** Specifies how to filter by format */
export interface UploadFormatFilter {
  /** Search the asset with the specified format */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

/** Specifies how to filter by height */
export interface UploadHeightFilter {
  /** Search assets with the specified height */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq: InputMaybe<Scalars['IntType']>;
}

/** Specifies how to filter by ID */
export interface UploadIdFilter {
  /** Search the asset with the specified ID */
  eq: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
}

/** Specifies how to filter by MD5 */
export interface UploadMd5Filter {
  /** Search the asset with the specified MD5 */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

/** Specifies how to filter by mime type */
export interface UploadMimeTypeFilter {
  /** Search the asset with the specified mime type */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

/** Specifies how to filter by notes */
export interface UploadNotesFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

export enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
export interface UploadSizeFilter {
  /** Search assets with the specified size (in bytes) */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq: InputMaybe<Scalars['IntType']>;
}

/** Specifies how to filter by tags */
export interface UploadTagsFilter {
  /** Filter uploads linked to all of the specified tags */
  allIn: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn: InputMaybe<Array<Scalars['String']>>;
}

/** Specifies how to filter by default title */
export interface UploadTitleFilter {
  /** Search the asset with the specified title */
  eq: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
}

export enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
export interface UploadUpdatedAtFilter {
  /** Search for uploads with an exact match */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq: InputMaybe<Scalars['DateTime']>;
}

export interface UploadVideoField {
  __typename: 'UploadVideoField';
  duration: Scalars['Int'];
  framerate: Scalars['Int'];
  mp4Url: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
}


export interface UploadVideoFieldMp4UrlArgs {
  exactRes: InputMaybe<VideoMp4Res>;
  res: InputMaybe<VideoMp4Res>;
}


export interface UploadVideoFieldThumbnailUrlArgs {
  format?: InputMaybe<MuxThumbnailFormatType>;
}

/** Specifies how to filter by width */
export interface UploadWidthFilter {
  /** Search assets with the specified width */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq: InputMaybe<Scalars['IntType']>;
}

export enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

export interface FocalPoint {
  __typename: 'focalPoint';
  x: Maybe<Scalars['FloatType']>;
  y: Maybe<Scalars['FloatType']>;
}

export type ErrorPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ErrorPageQuery = { __typename: 'Query', global: { __typename: 'GlobalRecord', socials: any, legal: { __typename: 'GlobalModelLegalField', value: any } }, site: { __typename: 'Site', faviconMetaTags: Array<{ __typename: 'Tag', attributes: any, content: string, tag: string }>, globalSeo: { __typename: 'GlobalSeoField', facebookPageUrl: string, siteName: string, titleSuffix: string, twitterAccount: string, fallbackSeo: { __typename: 'SeoField', description: string, title: string, twitterCard: string, image: { __typename: 'FileField', alt: string, height: any, url: string, width: any, mimeType: string } } } } };

export type ResponsiveImageFieldsFragment = { __typename: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, alt: string, title: string, aspectRatio: any, base64: string };

export type GlobalFieldsFragment = { __typename: 'Query', global: { __typename: 'GlobalRecord', socials: any, legal: { __typename: 'GlobalModelLegalField', value: any } }, site: { __typename: 'Site', faviconMetaTags: Array<{ __typename: 'Tag', attributes: any, content: string, tag: string }>, globalSeo: { __typename: 'GlobalSeoField', facebookPageUrl: string, siteName: string, titleSuffix: string, twitterAccount: string, fallbackSeo: { __typename: 'SeoField', description: string, title: string, twitterCard: string, image: { __typename: 'FileField', alt: string, height: any, url: string, width: any, mimeType: string } } } } };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename: 'Query', homePage: { __typename: 'HomePageRecord', about: { __typename: 'HomePageModelAboutField', value: any }, hero: { __typename: 'FileField', responsiveImage: { __typename: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, alt: string, title: string, aspectRatio: any, base64: string } } }, projects: Array<{ __typename: 'ProjectRecord', id: any, keywords: any, slug: string, title: string, thumbnail: { __typename: 'FileField', responsiveImage: { __typename: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, alt: string, title: string, aspectRatio: any, base64: string } }, description: { __typename: 'ProjectModelDescriptionField', value: any } }>, global: { __typename: 'GlobalRecord', socials: any, legal: { __typename: 'GlobalModelLegalField', value: any } }, site: { __typename: 'Site', faviconMetaTags: Array<{ __typename: 'Tag', attributes: any, content: string, tag: string }>, globalSeo: { __typename: 'GlobalSeoField', facebookPageUrl: string, siteName: string, titleSuffix: string, twitterAccount: string, fallbackSeo: { __typename: 'SeoField', description: string, title: string, twitterCard: string, image: { __typename: 'FileField', alt: string, height: any, url: string, width: any, mimeType: string } } } } };

export type ProjectPageQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type ProjectPageQuery = { __typename: 'Query', project: { __typename: 'ProjectRecord', id: any, slug: string, title: string, keywords: any, updatedAt: any, publishedAt: any, content: { __typename: 'ProjectModelContentField', value: any, blocks: Array<{ __typename: 'ImageColRecord', id: any, images: Array<{ __typename: 'FileField', responsiveImage: { __typename: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, alt: string, title: string, aspectRatio: any, base64: string } }> } | { __typename: 'ImageRecord', id: any, image: { __typename: 'FileField', responsiveImage: { __typename: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, alt: string, title: string, aspectRatio: any, base64: string } } }> }, description: { __typename: 'ProjectModelDescriptionField', value: any }, seo: { __typename: 'SeoField', description: string, title: string, twitterCard: string, image: { __typename: 'FileField', url: string } }, relatedProjects: Array<{ __typename: 'ProjectRecord', id: any, keywords: any, slug: string, title: string, thumbnail: { __typename: 'FileField', responsiveImage: { __typename: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: any, height: any, alt: string, title: string, aspectRatio: any, base64: string } }, description: { __typename: 'ProjectModelDescriptionField', value: any } }> }, global: { __typename: 'GlobalRecord', socials: any, legal: { __typename: 'GlobalModelLegalField', value: any } }, site: { __typename: 'Site', faviconMetaTags: Array<{ __typename: 'Tag', attributes: any, content: string, tag: string }>, globalSeo: { __typename: 'GlobalSeoField', facebookPageUrl: string, siteName: string, titleSuffix: string, twitterAccount: string, fallbackSeo: { __typename: 'SeoField', description: string, title: string, twitterCard: string, image: { __typename: 'FileField', alt: string, height: any, url: string, width: any, mimeType: string } } } } };

export type ProjectSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectSlugsQuery = { __typename: 'Query', projects: Array<{ __typename: 'ProjectRecord', slug: string }> };

export type TermsAndConditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type TermsAndConditionsQuery = { __typename: 'Query', page: { __typename: 'TermsConditionsPageRecord', _updatedAt: any, content: { __typename: 'TermsConditionsPageModelContentField', value: any } }, global: { __typename: 'GlobalRecord', socials: any, legal: { __typename: 'GlobalModelLegalField', value: any } }, site: { __typename: 'Site', faviconMetaTags: Array<{ __typename: 'Tag', attributes: any, content: string, tag: string }>, globalSeo: { __typename: 'GlobalSeoField', facebookPageUrl: string, siteName: string, titleSuffix: string, twitterAccount: string, fallbackSeo: { __typename: 'SeoField', description: string, title: string, twitterCard: string, image: { __typename: 'FileField', alt: string, height: any, url: string, width: any, mimeType: string } } } } };
