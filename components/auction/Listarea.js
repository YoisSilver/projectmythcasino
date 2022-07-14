import React from 'react'
import SvgTower from '../../assets/Tower'

export default function Listarea({ auctionstatus }) {
    return (

        <div className="listarea">
            <div className="notifboxs">
                <div className="wrapper">
                    <div className="area">
                        <p className="discl mgb">
                            Disclaimer
                        </p>
                        <p className="text pp5">
                            Blahproject.io is a revenue sharing Launchpad for Solana NFT projects. Holders receive 50% revenue from the Launchpad and 50% off Launchpad fees when launching their own project.

                        </p>
                    </div>
                    <div className="area ">
                        <p className="discl mgb">How to cancel</p>
                        <p className="text pp5">
                            Every non-winning bid will be refunded after the auction has ended. However, you can cancel your bid at any time but you will be charged 0.033 SOL (PHBT).

                        </p>
                    </div>
                </div>

            </div>
            <div className="listareas">
                <div className="winner ">
                    <div className="wrapper cardshad2">
                        <div className="congrats mgbi"><p>{auctionstatus ? 'Place your bids here' : 'Congratulations to the winner'} </p></div>
                        <div className="address pp5">
                            <p>
                                {auctionstatus ? <div className='bidarea'>
                                    <input className='amount pp5' type="number" placeholder='min bid: 51'></input>
                                    <input type="submit" className='bidbtn pp5' value="Bid" />
                                </div>
                                    : 'gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY'}
                            </p> </div>

                        <div className="wonfor mgbi">
                            <p>{auctionstatus ? 'highest bid 50 SOL' : 'won for 50 SOL'}</p></div>
                    </div>


                </div>
                <div className="alladdress">
                    <div className="wallet bar">
                        <p className="header mgb">Wallet</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>

                    </div>
                    <div className="time bar">
                        <p className="header mgb">Time</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>
                        <p className="entry pp5">2 months ago</p>

                    </div>
                    <div className="bid bar">
                        <p className="header mgb">Bid</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>
                        <p className="entry pp5">50 SOL</p>


                    </div>
                </div>
            </div>
            <div className="svgtower">
                <SvgTower />
            </div>

        </div>
    )
}
