import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe'

import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton'

import styles from './home.module.scss'

interface HomeProps {
  product: {
  priceId: string,
  amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  
  return (
    <>
    <Head>
    <title>Home | ig.news</title>
  </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏🏾 Seja Bem vindo!</span>
        <h1> Notícias sobre o universo <span>React</span></h1>
        <p>
          Tenha acesso a todos os posts <br/>
          <span>
            por {product.amount} / Mês
          </span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>
        <img src='/images/avatar.svg' alt='girl coding'/>

    </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async() =>{
  const price = await  stripe.prices.retrieve('price_1LfVHqElIAUNhZnO47ANA9gn',)

const product = {
  priceId: price.id,
  amount: new Intl.NumberFormat('pt-br',{
    style: 'currency',
    currency: 'BRL',
  }).format(price.unit_amount / 100),

}

  return {
    props: {
      product,
    }
  }
}