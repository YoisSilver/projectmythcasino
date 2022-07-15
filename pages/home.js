import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Toparea from '../components/Toparea'
import Footer from '../components/Footer'

export default function Home() {


    return (
        <div>
            <Head>
                <title>Project Myth</title>
                <meta name="description" content='~ Solana auction & raffle' />
                <link rel='/icon' href='/favicon' />
            </Head>
            <Navbar />
            <Toparea />
            <Footer />
        </div>
    )
}
