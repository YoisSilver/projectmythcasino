import React from 'react'
import Image from 'next/image'
import { GrStatusGoodSmall } from 'react-icons/gr'
import Link from 'next/link'
import { useState } from 'react'
import Cardimg from '../assets/cardimg.png'
import { GiTicket, GiCrown } from 'react-icons/gi'
import { motion, AnimatePresence } from 'framer-motion'

export default function RaffleCards() {

  // const [rafflestatus, setrafflestatus] = useState(true);

  const rafflecards = [
    { id: "1", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: true },
    { id: "2", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: true },
    { id: "3", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: true },
    { id: "4", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: false },
    { id: "5", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: false },
    { id: "6", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: false },
    { id: "7", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: false },
    { id: "8", image: { Cardimg }, name: "Purple Greek", spots: "5", sold: "25", rafflestatus: false },
  ]


  return (


    <motion.div className='cardsarea' initial={{ opacity: 0, scale:0.87 }} animate={{ opacity: 1, scale: 0.9 }} transition={{ type: "spring", duration: 2 }}
    exit={{ opacity: 0 }}>      {rafflecards.map((rafcrd) => (

        <div className={rafcrd.rafflestatus == true ? "auctioncard" : "auctioncard cardoff"} key={rafcrd.id}>
          <Image src={Cardimg} className={rafcrd.rafflestatus == true ? "cardimg" : "cardimg coff"} height="200px"
            width="200px" alt="auctioncard" />
          <div className={rafcrd.rafflestatus == true ? "name mgb" : "name noff mgb"}>{rafcrd.name}</div>

          <div className={rafcrd.rafflestatus == true ? "bid pp5" : "bid boff pp5"}>
            <div className="sold" >{rafcrd.sold} sold <GiTicket className='ticket' /> {rafcrd.spots} spots</div>
          </div>

          <div className={rafcrd.rafflestatus == true ? "status pp5" : "status soff pp5"}><GrStatusGoodSmall />
            {rafcrd.rafflestatus == true ? "Open" : "Closed"}
          </div>
          <Link href={rafcrd.rafflestatus == true ? "/raffle/open" : "/raffle/closed"}>
            <div className={rafcrd.auctionstatus == true ? "viewbtn pp5" : "viewbtn voff pp5"}>
              view
            </div>
          </Link>
        </div>))}

    </motion.div>
  )
}
