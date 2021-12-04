import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="./kakao/kakao">카카오톡!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/MONO-ON"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>MONO-ON</strong>
        </a>
      </footer>
    </div>
  )
}

export default Home