import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Toparea from '../../components/auction/Toparea'
import Listarea from '../../components/auction/Listarea'

export default function Home() {


    return (
        <div>
            <Navbar />
            <Toparea />
            <Listarea />
        </div>
    )
}
