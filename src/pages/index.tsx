import { motion, useReducedMotion } from 'framer-motion';
import parse from 'html-react-parser';
import { GetStaticProps } from 'next';
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo';
import React from 'react';
import Logo from '../assets/logo.svg';
import Img from '../components/atoms/Image';
import H1 from '../components/atoms/H1';
import PageTransition from '../components/atoms/PageTransition';
import ContactForm from '../components/organisms/ContactForm';
import Portfolio from '../components/organisms/Portfolio';
import Socials from '../components/molecules/Socials';
import query from '../lib/datocms';
import { HOME_PAGE, HomePage } from '../lib/queries/homePage';
import { useFadeIn } from '../styles/animations';

const Home: React.FC<HomePage> = ({ projects = [], global }) => {
  const fadeIn = useFadeIn();
  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name="Robrecht Meersman"
        url={process.env.NEXT_PUBLIC_URL}
        sameAs={['https://www.linkedin.com/in/robrechtme/', 'https://github.com/robrechtme']}
      />
      <LogoJsonLd
        logo="https://www.datocms-assets.com/37631/1614892317-logocollapsed.png"
        url={process.env.NEXT_PUBLIC_URL}
      />
      <PageTransition />
      <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
        <defs>
          <clipPath id="svgPath" clipPathUnits="objectBoundingBox">
            <path d="M0.1997961,0.575732C0.1488971,0.4330348,0,0.3945355,0,0.2747378 s0.0749986-0.1743966,0.1148978-0.1918963c0.0686987-0.0299994,0.1645968,0.0112998,0.2711948,0.0059999 c0.1151978-0.0056999,0.156697-0.1096979,0.3203938-0.0843984C0.878783,0.0309425,0.9289821,0.0872415,0.9289821,0.212139 c0,0.0866983-0.0652987,0.1172977-0.0652987,0.2466953c0,0.1126978,0.0795984,0.1710967,0.1289975,0.307294 C1.0165805,0.8320271,0.984881,0.9804242,0.8539835,0.9804242c-0.054199,0-0.0876983-0.0314994-0.1862964-0.0296994 c-0.0875983,0.0016-0.3285937,0.1152978-0.4538912-0.0099998C0.1398973,0.8588266,0.2506952,0.7185292,0.1997961,0.575732z" />
          </clipPath>
        </defs>
      </svg>
      <header className="header flex flex-col justify-between py-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-full min-w-96 max-w-screen-lg bg-gray-800 transform translate-x-28 -translate-y-1/4 sm:translate-y-0 sm:translate-x-1/3 md:translate-y-24 md:translate-x-1/3"
          style={{
            clipPath: 'url(#svgPath)',
          }}
        >
          <Img data={global.hero.responsiveImage} className="w-full h-full" />
        </motion.div>
        <motion.div {...fadeIn({ delay: 0.8 })}>
          <Logo className="h-8 mb-4" />
        </motion.div>
        <div className="my-24 flex flex-col items-start space-y-4">
          <motion.div {...fadeIn({ delay: 0.4 })}>
            <H1>Web Developer.</H1>
          </motion.div>
          <motion.div {...fadeIn({ delay: 0.6 })}>
            <H1>Graphic Designer.</H1>
          </motion.div>
          <motion.div {...fadeIn({ delay: 0.8 })}>
            <Socials className="mt-4 text-gray-100" size={2} socials={global.socials} />
          </motion.div>
        </div>
        <motion.div
          {...fadeIn({ delay: 1 })}
          className="prose text-gray-300 md:pb-10 min-h-16 w-4/5 sm:w-3/4 md:w-1/2 relative"
        >
          {global.about && parse(global.about)}
        </motion.div>
      </header>
      <Portfolio projects={projects} />
      <ContactForm />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data = await query<HomePage>({
    query: HOME_PAGE,
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
