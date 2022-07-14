import React from 'react'
import Image from 'next/image'
import { GrStatusGoodSmall } from 'react-icons/gr'
import Link from 'next/link'
import { useState } from 'react'
import Cardimg from '../assets/cardimg.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function AuctionCards() {

    // const [auctionstatus, setAuctionstatus] = useState(true);

    const auctioncards = [
        { id: "1", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: true },
        { id: "2", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: true },
        { id: "3", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: true },
        { id: "4", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: true },
        { id: "5", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: true },
        { id: "6", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: true },
        { id: "7", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: false },
        { id: "8", image: { Cardimg }, name: "Purple Greek", bid: "50", auctionstatus: false },
    ]


    return (

        <AnimatePresence>
            {/* 0.9 to match css */}
            <motion.div className='cardsarea' initial={{ opacity: 0, scale:0.87 }} animate={{ opacity: 1, scale: 0.9 }} transition={{ type: "spring", duration: 2 }}
                exit={{ opacity: 0 }}>
                {auctioncards.map((aucrd) => (

                    <div className={aucrd.auctionstatus == true ? "auctioncard" : "auctioncard cardoff"} key={aucrd.id}>
                        <Image src={Cardimg} className={aucrd.auctionstatus == true ? "cardimg" : "cardimg coff"} height="200px"
                            width="200px" alt="auctioncard" />
                        <div className={aucrd.auctionstatus == true ? "name mgb" : "name noff mgb"}>{aucrd.name}</div>

                        <div className={aucrd.auctionstatus == true ? "bid pp5" : "bid boff pp5"}>
                            Highest bid: {aucrd.bid} $SOL</div>

                        <div className={aucrd.auctionstatus == true ? "status pp5" : "status soff pp5"}><GrStatusGoodSmall />
                            {aucrd.auctionstatus == true ? "Open" : "Closed"}
                        </div>
                        <Link href={aucrd.auctionstatus == true ? "/auction/open" : "/auction/closed"}>
                            <div className={aucrd.auctionstatus == true ? "viewbtn pp5" : "viewbtn voff pp5"}>
                                view
                            </div>
                        </Link>
                    </div>))}

            </motion.div>
        </AnimatePresence>
    )
}
