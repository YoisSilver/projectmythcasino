import React from 'react'
import Image from 'next/image'
import { GiCardJackSpades, GiCloverSpiked } from 'react-icons/gi'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import brandlogo from '../assets/logo1.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LandingPage() {
    return (
        <div className='landingpage blkpaperbg'>
            <div className="sidearea">
                <div className="card">
                    <IconContext.Provider value={{ size: "4.5rem" }}>
                        <GiCardJackSpades />
                    </IconContext.Provider>
                </div>
                <div className="socialmedialinkslandingpage">
                    <IconContext.Provider value={{ size: "2.5rem" }}>
                        <FaDiscord />
                        <FaTwitter />
                        <BsMedium />
                    </IconContext.Provider>

                </div>
            </div>

            <div className="mainarealandingcenter">
                <div className="centertext">
                    <Image className='brandlogo' height="120rem"
                        width="120rem" src={brandlogo} alt="brandlogo" />
                    <div className="projmythtext">
                        <p className='mythtxt pp6'>PROJECT MYTH</p>
                        <p className='notjustxt mgbi'>~ it’s not just art</p>
                    </div>

                    <Link href={"/home"}>
                        <div className="enterbtnlanding mgbi">
                            enter
                        </div>
                    </Link>

                </div>
            </div>

            <div className="rollingtext pp5"   >
                <motion.div className="text" initial={{ x: 70 }} animate={{ x: -400 }} transition={{ repeat: Infinity, repeatType: "mirror", duration: 10, type: "tween" }}>

                    <GiCloverSpiked /> &nbsp;&nbsp; Welcome to our auction and raffle services. &nbsp;&nbsp; <GiCloverSpiked /> &nbsp;&nbsp; We are glad to have you here &nbsp;&nbsp;


                </motion.div>

            </div>

            <p className='allrights pp5'>
                © 2022 <br />
                all rights reserved
            </p>

            <div className="border">

            </div>
        </div>
    )
}
