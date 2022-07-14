import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Toparea from '../../components/auction/Toparea'
import Buyarea from '../../components/auction/Buyarea'
import Listarea from '../../components/auction/Listarea'


export function Auctioncontainerclosed({auctionstatus}) {

    return (
        <div>
            <Toparea auctionstatus={auctionstatus} />
            <Listarea auctionstatus={auctionstatus} />
        </div>
    )
}