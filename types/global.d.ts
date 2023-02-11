declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEFAULT_LOCALE: string
      NEXT_PUBLIC_SITE_URL: string
    }
  }
}
