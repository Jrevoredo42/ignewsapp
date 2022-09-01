//Importação das propriedades que o componente app pode receber (pra tipagem do typescript)
import { AppProps } from 'next/app'

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
