import '@/styles/globals.css'

import { AppProps } from 'next/app'
import { appWithTranslation, SSRConfig } from 'next-i18next'
import PlausibleProvider from 'next-plausible'

type DefaultPageProps = SSRConfig

function App(props: AppProps<DefaultPageProps> & { pageProps: DefaultPageProps }) {
  const { Component } = props
  const pageProps = props.pageProps

  return (
    <PlausibleProvider domain="example.com">
      <Component {...pageProps} />;
    </PlausibleProvider>
  )
}

export default appWithTranslation<AppProps & { pageProps: DefaultPageProps }>(App)
