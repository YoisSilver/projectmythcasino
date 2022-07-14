import React from 'react'
import Cards from '../assets/cards4.js'
import Image from 'next/image'
import Cardimg from '../assets/cardimg.png'
import Arrow from '../assets/Arrow.js'
import { GrStatusGoodSmall } from 'react-icons/gr'
import Link from 'next/link'

export default function Toparea() {
    return (
        <div className='topareatop'>
            <Cards className="cards" />
            <div className="auctionorraffle">
                <div className="selectbar mgbi">
                    <p className='active'>AUCTION</p>
                    <p className='inactive'>RAFFLE</p>
                </div>
                <div className="cardarea">
                    <p className='cardareaheader mgb'>AUCTION</p>
                    <div className="cardsareabg">
                        <div className="arrowbtn arrleft"><Arrow /> </div>
                        <div className="arrowbtn arright"><Arrow /> </div>
                        <div className="cardsarea">







                            <div className="auctioncard">
                                <Image src={Cardimg} className="cardimg" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name  mgb">Purple Greek</div>
                                <div className="bid pp5">Highest bid: 650 $SOL</div>
                                <div className="status pp5"><GrStatusGoodSmall /> Open</div>
                                <div className="viewbtn  pp5">
                                    <Link href={"/auction"}>view</Link>
                                </div>
                            </div>


                            <div className="auctioncard">
                                <Image src={Cardimg} className="cardimg" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name  mgb">Purple Greek</div>
                                <div className="bid pp5">Highest bid: 650 $SOL</div>
                                <div className="status pp5"><GrStatusGoodSmall /> Open</div>
                                <div className="viewbtn  pp5">view</div>
                            </div>
                            <div className="auctioncard">
                                <Image src={Cardimg} className="cardimg" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name  mgb">Purple Greek</div>
                                <div className="bid pp5">Highest bid: 650 $SOL</div>
                                <div className="status pp5"><GrStatusGoodSmall /> Open</div>
                                <div className="viewbtn  pp5">view</div>
                            </div>           <div className="auctioncard">
                                <Image src={Cardimg} className="cardimg" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name  mgb">Purple Greek</div>
                                <div className="bid pp5">Highest bid: 650 $SOL</div>
                                <div className="status pp5"><GrStatusGoodSmall /> Open</div>
                                <div className="viewbtn  pp5">view</div>
                            </div>           <div className="auctioncard">
                                <Image src={Cardimg} className="cardimg" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name  mgb">Purple Greek</div>
                                <div className="bid pp5">Highest bid: 650 $SOL</div>
                                <div className="status pp5"><GrStatusGoodSmall /> Open</div>
                                <div className="viewbtn  pp5">view</div>
                            </div>           <div className="auctioncard">
                                <Image src={Cardimg} className="cardimg" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name  mgb">Purple Greek</div>
                                <div className="bid pp5">Highest bid: 650 $SOL</div>
                                <div className="status pp5"><GrStatusGoodSmall /> Open</div>
                                <div className="viewbtn  pp5">view</div>
                            </div>           <div className="auctioncard">
                                <Image src={Cardimg} className="cardimg" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name  mgb">Purple Greek</div>
                                <div className="bid pp5">Highest bid: 650 $SOL</div>
                                <div className="status pp5"><GrStatusGoodSmall /> Open</div>
                                <div className="viewbtn  pp5">view</div>
                            </div>

                            <div className="auctioncard cardoff">
                                <Image src={Cardimg} className="cardimg coff" height="200px"
                                    width="200px" alt="auctioncard" />
                                <div className="name noff  mgb">Purple Greek</div>
                                <div className="bid boff pp5">Winning bid: 650 $SOL</div>
                                <div className="status soff pp5"><GrStatusGoodSmall />Closed</div>
                                <div className="viewbtn voff pp5">view</div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="cardarea">
                    <p className='cardareaheader mgb'>RAFFLE</p>
                    <div className="rafflecards"></div>
                </div> */}
            </div>
        </div>
    )
}
