declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Server-side secrets
      DATOCMS_API_TOKEN: string;
      DATOCMS_PREVIEW_SECRET: string;
      RECAPTCHA_SERVER_KEY: string;
      SMTP_PASSWORD: string;
      SMTP_RECIPIENT: string;
      SMTP_SERVER: string;
      SMTP_USERNAME: string;

      // Client-side variables
      NEXT_PUBLIC_GA_TRACKING_ID: string;
      NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY: string;
      NEXT_PUBLIC_URL: string;
    }
  }
}

export {};
