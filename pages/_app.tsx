import { Provider } from 'react-redux'
import '../styles/global.css'
import { store } from '../store'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}