import React from 'react'
import LandingPage from '../components/LandingPage'
import Head from 'next/head'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Project Myth</title>
        <meta name="description" content='~ Solana auction & raffle' />
        <link rel='/icon' href='/favicon' />
      </Head>
      <LandingPage />

    </div>
  )
}
