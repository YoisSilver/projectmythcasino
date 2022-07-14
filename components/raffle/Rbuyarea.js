import { React, useState } from 'react'
import { GiCloverSpiked, GiCrownedHeart, GiRupee, GiWallet } from 'react-icons/gi'
import { GiTicket, GiCrown } from 'react-icons/gi'

export default function Rbuyarea({ rafflestatus }) {
    const [amount, setAmount] = useState(1);
    return (
        <div className="rbuyarea ">
            <div className="endstats cardshad2">
                <div className="tick pp5"><GiTicket /> Tickets sold:<p> 20</p></div>
                <div className="wall pp5"><GiCrownedHeart />  Unique wallets: <p> 15</p></div>
                <div className="solspent pp5"><GiRupee /> Total SOL spent: <p> 20</p></div>

            </div>
            {rafflestatus ? 
                <div className="wrapper cardshad2">
                    <div className="congrats mgbi"> <GiCloverSpiked /> <p>1 SOL per ticket</p>  <GiCloverSpiked />
                    </div>
                    <div className="address pp5">

                        <div className='bidarea'>
                            <input type="button" className='bidbtn pp5' value="-"
                                onClick={() => { setAmount(Math.max(amount - 1, 1)) }} /><div className='amount pp5'>{amount}</div>
                            <input type="button" className='bidbtn pp5' value="+"
                                onClick={() => setAmount(Math.min(amount + 1, 100))} />
                        </div>


                    </div>

                    <div className="wonfor mgbi">

                        {amount == 1 ? <div className="buybtn"> Buy {amount} ticket </div> : <div className="buybtn"> Buy {amount} tickets </div>} </div>
                </div> 
                :
           

            <div className="listarearaf ">
                <div className="notifboxs ">
                    <div className="wrapper cardshad2">
                        <div className="area">
                            <p className="discl mgb">
                                Disclaimer
                            </p>
                            <p className="text pp5">
                                If you won a whitelist, please ensure that you claim your whitelist spot by entering your Discord ID here, 48 hours from the raffle end time.

                            </p>
                        </div>
                        <div className="area ">
                            {/* <p className="discl mgb">How to cancel</p> */}
                            <p className="text pp5">
                                Then join this discord and wait for WL role.If you won a whitelist, please ensure that you claim your whitelist spot by entering your Discord ID here, 48 hours from the raffle end time.
                                Then join this <a href="https://www.discord.com" className='discordjoin'>Discord</a>  and wait for WL role.

                            </p>
                        </div>
                    </div>

                </div>

                <div className="alladdress cardshad2">
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
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>
                        <p className="entry pp5">gHdp1vbPdQqHU6EDnZmWuvZBJAicZMgZRJCWiKfQqHY</p>

                    </div>
                    <div className="time bar">
                        <p className="header mgb">Entries</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">25</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>
                        <p className="entry pp5">8</p>


                    </div>
                    <div className="bid bar">
                        <p className="header mgb">Status</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5 unclaimed">Unclaimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5">Claimed</p>
                        <p className="entry pp5 unclaimed">Unclaimed</p>


                    </div>
                </div>
            </div>
 }

        </div>
    )
}
