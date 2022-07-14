import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Rafflecontainerclosed from '../../components/raffle/Rafflecontainerclosed'

export default function buy() {

    return (
        <div>
            <Navbar />
            <Rafflecontainerclosed />
            <Footer />
        </div>
    )
}
