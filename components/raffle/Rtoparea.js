import React from 'react'
import Line from '../../assets/Line'
import Solana from '../../assets/Solana'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { GiRibbonMedal } from 'react-icons/gi'
import Image from 'next/image'
import Cardimg from '../../assets/cardimg.png'
import { IconContext } from 'react-icons'

export default function Rtoparea({ rafflestatus }) {
    return (

        <div className='rtoparea'>
            <div className="img cardshad2">
                <Image src={Cardimg} className="cardimg" height="200px"
                    width="200px" alt="auctioncard" />
            </div>

            <div className="infoholder">
                <div className="details">
                    <div className="detailbox cardshad2">
                        <p className="a pp5">Project</p>
                        <p className="b mgb">Purple Greek</p>
                    </div>
                    <div className="detailbox cardshad2">
                        <p className="a pp5">Collection</p>
                        <p className="b mgb">2000</p>
                    </div>
                    <div className="detailbox cardshad2">
                        <p className="a pp5">{rafflestatus ? 'Time Left' : 'Winners'}</p>
                        <p className="b mgb">24d 12h 3m</p>
                    </div>
                    <div className="detailbox cardshad2">
                        <p className="a pp5">Whitelist Spots</p>
                        <p className="b mgb">5</p>
                    </div>
                    <div className="detailbox cardshad2">
                        <p className="a pp5">Status</p>
                        <p className="b mgb">{rafflestatus ? 'Open' : 'Closed'}</p>
                    </div>
                </div>
                <div className="line2">
                    <div className="bigtitle cardshad2">
                        <p className='title mgb'>Purple Greek</p>
                        <Line className="line" />

                        <div className="icons">
                            <IconContext.Provider value={{ size: "1.3rem" }}>
                                <FaDiscord />
                                <FaTwitter />
                            </IconContext.Provider>
                        </div>
                        <Line className="line" />

                        <Solana className="solana" />
                    </div>
                    <IconContext.Provider value={{ size: "4rem" }}>
                        <GiRibbonMedal className='badge' />
                    </IconContext.Provider>

                </div>
            </div>
        </div>



    )
}
