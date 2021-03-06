import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const router = useRouter()

  function onClickKakao() {
    router.push('./kakao/kakao')
  }

  function onClickFacebook() {
    router.push('./facebook/facebook')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Button onClick={onClickKakao} className={styles.title}>카카오톡!</Button>
        </h1>
        <br/>
        <h1 className={styles.title}>
          Welcome to <Button onClick={onClickFacebook} className={styles.title}>페이스북!</Button>
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

function stateRouter() {
  throw new Error('Function not implemented.')
}
