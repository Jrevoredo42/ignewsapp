import Head from 'next/head'


export default function Home(){
  return (
    <>
    <Head>
    <title>Home | ig.news</title>
  </Head>
    <main>
      <section>
        <span>👏🏾 Seja Bem vindo!</span>
        <h1> Notícias sobre o universo <span>React</span></h1>
        <p>
          Tenha acesso a todos os posts <br/>
          <span>
            por $9.90 /Mês
          </span>
        </p>
      </section>
        <img src='/images/avatar.svg' alt='girl coding'/>

    </main>
    </>
  )
}