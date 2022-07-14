import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Toparea from '../../components/auction/Toparea'
import { Auctioncontainerclosed } from '../../components/auction/Auctioncontainerclosed'
import Listarea from '../../components/auction/Listarea'

export default function Closed() {
    const [auctionstatus, setAuctionstatus] = useState(false);
    return (
        <div>
            <Navbar />
            <Auctioncontainerclosed auctionstatus={auctionstatus} />

        </div>
    )
}
