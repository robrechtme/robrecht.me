declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATOCMS_API_TOKEN: string;
      DATOCMS_PREVIEW_SECRET: string;
      NEXT_PUBLIC_GA_TRACKING_ID: string;
      RECAPTCHA_SERVER_KEY: string;
      NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY: string;
      SMTP_USERNAME: string;
      SMTP_PASSWORD: string;
      SMTP_RECIPIENT: string;
      NEXT_PUBLIC_URL: string;
    }
  }
}

export {};
