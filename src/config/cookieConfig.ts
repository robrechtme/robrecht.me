import { Config } from 'cookie-though/dist/types/types';

const cookieConfig: Config = {
  essentialLabel: 'Altijd aan',
  policies: [
    {
      id: 'essential',
      label: 'Functionele cookies',
      description: 'Zonder deze cookies kan de website niet functioneren.',
      category: 'essential',
    },
    {
      id: 'statistics',
      label: 'Statistische cookies',
      category: 'statistics',
      description:
        'Deze website maakt gebruik van Google Analytics om, volledig anoniem, het gebruik van de website in kaart te brengen.',
    },
  ],
  permissionLabels: {
    accept: 'Opslaan',
    acceptAll: 'Alle cookies toestaan',
    decline: 'Afwijzen',
  },
  cookiePreferenceKey: 'cookie-preferences',
  header: {
    title: 'Cookie though?',
    subTitle: null,
    description: 'Er worden cookies gebruikt om u een betere ervaring te garanderen.',
  },
  cookiePolicy: null,
  customizeLabel: 'Meer opties',
};

export default cookieConfig;
