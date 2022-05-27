import { DefaultSeo } from 'next-seo';

interface Props {
  globalSeo: {
    titleSuffix: string;
    siteName: string;
    twitterAccount: string;
    facebookPageUrl: string;
    fallbackSeo: {
      description: string;
      twitterCard: string;
      title: string;
      image: {
        url: string;
        width: number;
        height: number;
        alt: string;
      };
    };
  };
}

const DatoDefaultSeo = ({ globalSeo }: Props) => {
  if (!globalSeo) {
    return null;
  }

  return (
    <DefaultSeo
      titleTemplate={`%s${globalSeo.titleSuffix}`}
      defaultTitle={globalSeo.fallbackSeo.title}
      description={globalSeo.fallbackSeo.description}
      openGraph={{
        url: process.env.NEXT_PUBLIC_URL,
        title: globalSeo.fallbackSeo.title,
        description: globalSeo.fallbackSeo.description,
        images: [globalSeo.fallbackSeo.image],
        site_name: globalSeo.fallbackSeo.title,
      }}
      twitter={{
        handle: globalSeo.twitterAccount,
        cardType: globalSeo.fallbackSeo.twitterCard,
      }}
    />
  );
};

export default DatoDefaultSeo;
