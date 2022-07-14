import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Toparea from '../../components/auction/Toparea'
import Auctioncontainer from '../../components/auction/Auctioncontainer'
import Listarea from '../../components/auction/Listarea'

export default function buy() {

    return (
        <div>
            <Navbar />
            <Auctioncontainer />

        </div>
    )
}
