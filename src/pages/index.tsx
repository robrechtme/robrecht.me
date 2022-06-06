import { GetStaticProps } from 'next';
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import Img from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Logo from 'components/atoms/icons/logo';
import Socials from 'components/molecules/Socials';
import ContactForm from 'components/organisms/ContactForm';
import Portfolio from 'components/organisms/Portfolio';
import StructuredText from 'components/organisms/StructuredText';
import { query } from 'lib/datocms';
import { HOME_PAGE_QUERY } from 'lib/queries';
import { HomePageQuery, ProjectRecord } from 'lib/types';

const Home = ({ projects = [], global, homePage }: HomePageQuery) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
  >
    <SocialProfileJsonLd
      type='Person'
      name='Robrecht Meersman'
      url={process.env.NEXT_PUBLIC_URL}
      sameAs={[
        'https://www.linkedin.com/in/robrechtme/',
        'https://github.com/robrechtme',
      ]}
    />
    <LogoJsonLd
      logo='https://www.datocms-assets.com/37631/1614892317-logocollapsed.png'
      url={process.env.NEXT_PUBLIC_URL}
    />
    <svg height='0' width='0' viewBox='0 0 1 1'>
      <defs>
        <clipPath id='svgPath' clipPathUnits='objectBoundingBox'>
          <path d='M0.1997961,0.575732C0.1488971,0.4330348,0,0.3945355,0,0.2747378 s0.0749986-0.1743966,0.1148978-0.1918963c0.0686987-0.0299994,0.1645968,0.0112998,0.2711948,0.0059999 c0.1151978-0.0056999,0.156697-0.1096979,0.3203938-0.0843984C0.878783,0.0309425,0.9289821,0.0872415,0.9289821,0.212139 c0,0.0866983-0.0652987,0.1172977-0.0652987,0.2466953c0,0.1126978,0.0795984,0.1710967,0.1289975,0.307294 C1.0165805,0.8320271,0.984881,0.9804242,0.8539835,0.9804242c-0.054199,0-0.0876983-0.0314994-0.1862964-0.0296994 c-0.0875983,0.0016-0.3285937,0.1152978-0.4538912-0.0099998C0.1398973,0.8588266,0.2506952,0.7185292,0.1997961,0.575732z' />
        </clipPath>
      </defs>
    </svg>
    <header className='header relative z-0 flex flex-col justify-between py-8'>
      <div
        className='absolute bottom-0 right-0 z-[-1] w-full min-w-[28rem] max-w-screen-lg translate-x-28 -translate-y-1/4 transform animate-fade bg-gray-800 animation-delay-500 sm:translate-y-0 sm:translate-x-1/3 md:translate-y-24 md:translate-x-1/3'
        style={{
          clipPath: 'url(#svgPath)',
        }}
      >
        <Img
          data={homePage.hero.responsiveImage}
          className='h-full w-full opacity-20'
        />
      </div>
      <div className='z-10 animate-fade-up animation-delay-800 motion-reduce:animate-fade'>
        <Logo className='mb-4 h-8' />
      </div>
      <h1 className='my-24 flex flex-col items-start space-y-4'>
        <div className='animate-fade-up animation-delay-400 motion-reduce:animate-fade'>
          <Text as='span' variant='heading1'>
            Web Developer.
          </Text>
        </div>
        <div className='animate-fade-up animation-delay-600 motion-reduce:animate-fade'>
          <Text as='span' variant='heading1'>
            Graphic Designer.
          </Text>
        </div>
        <div className='animate-fade-up animation-delay-800 motion-reduce:animate-fade'>
          <Socials
            className='mt-4 text-gray-100'
            size={2}
            socials={global.socials}
          />
        </div>
      </h1>
      <div className='prose relative min-h-[4rem] w-4/5 animate-fade-up text-gray-300 animation-delay-1000 motion-reduce:animate-fade sm:w-3/4 md:w-1/2 md:pb-10'>
        <StructuredText data={homePage.about} />
      </div>
    </header>
    <main>
      <Portfolio projects={projects as ProjectRecord[]} />
      <ContactForm />
    </main>
  </GoogleReCaptchaProvider>
);

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data = await query<HomePageQuery>(HOME_PAGE_QUERY, {
    preview,
  });
  return {
    props: {
      ...data,
      dark: true,
      preview: Boolean(preview),
    },
    revalidate: 1,
  };
};

export default Home;
