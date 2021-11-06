import { getPreferences, init, onPreferencesChanged } from 'cookie-though';
import { Config, CookiePreference, CookiePreferences } from 'cookie-though/dist/types/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const isCookieEnabled = (preferences: CookiePreferences, id: CookiePreference['id']) => {
  const cookie = preferences.cookieOptions.find((c) => c.id === id);
  return cookie?.isEnabled;
};

type Props = {
  cookieConfig: Config;
  cookieId?: string;
  trackingId: string;
};

const Analytics: React.FC<Props> = ({ cookieConfig, cookieId = 'statistics', trackingId }) => {
  const router = useRouter();

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    init(cookieConfig);
    setEnabled(isCookieEnabled(getPreferences(), cookieId));
    onPreferencesChanged((preferences) => {
      setEnabled(isCookieEnabled(preferences, cookieId));
    });
  }, [cookieConfig, cookieId]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window[`ga-disable-${trackingId}`] = !enabled;
    }
  }, [enabled, trackingId]);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      window?.gtag?.('config', trackingId, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, trackingId]);

  if (!enabled || !trackingId) {
    return null;
  }
  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');`,
        }}
      />
    </Head>
  );
};

export default Analytics;
