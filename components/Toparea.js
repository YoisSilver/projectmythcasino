import React from 'react'
// import SvgCard1 from '../assets/card1.js'
// import SvgCard2 from '../assets/card2.js'
import Tower from '../assets/Tower'
import Image from 'next/image'
import Cardimg from '../assets/cardimg.png'
import Arrow from '../assets/Arrow.js'
import { GrStatusGoodSmall } from 'react-icons/gr'
import Link from 'next/link'
import { useState } from 'react'
import AuctionCards from './AuctionCards.js'
import RaffleCards from './RaffleCards.js'


export default function Toparea() {
    const [category, setCategory] = useState("auction");

    return (
        <div className='topareatop'>
            <div className="cards">
                <Tower className="tower" />
                <Tower className="tower" />

            </div>

            <div className="auctionorraffle">
                <div className="selectbar mgbi">
                    <p className={category == "auction" ? 'active' : "inactive"} onClick={() => setCategory("auction")}>AUCTION</p>
                    <p className={category == "raffle" ? 'active' : "inactive"} onClick={() => setCategory("raffle")}>RAFFLE</p>
                </div>
                <div className="cardarea">
                    <p className='cardareaheader mgb'>{category == "auction" ? "AUCTION" : "RAFFLE"}</p>
                    <div className="cardsareabg">
                        <div className="arrowbtn arrleft"><Arrow /> </div>
                        <div className="arrowbtn arright"><Arrow /> </div>



                        {
                            category == "auction" ? <AuctionCards /> : <RaffleCards />
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}
