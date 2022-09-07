import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton'
import styles from './home.module.scss'

export default function Home(){
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
            por $9.90 /Mês
          </span>
        </p>
        <SubscribeButton />
      </section>
        <img src='/images/avatar.svg' alt='girl coding'/>

    </main>
    </>
  )
}