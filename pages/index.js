import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import LandingPage from '../components/LandingPage'
import Auction from '../components/Auction'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Toparea from '../components/Toparea'
import Footer from '../components/Footer'

export default function Home() {


  return (
    <div>
      {/* <LandingPage /> */}
      <Navbar />
      {/* <Landing /> */}
      <Toparea />
      {/* <Auction /> */}
      <Footer />
    </div>
  )
}
