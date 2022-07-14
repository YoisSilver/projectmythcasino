import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Tower from '../assets/Tower'
import Image from 'next/image'
import Stamp from '../assets/STAMP.png'


export default function Footer() {
  return (
    <div className='footer'>
      <div className="stamp">
        <Image src={Stamp} height="139px" width="111px" alt="stamp" />
      </div>
      <div className="centerareaf">
        <div className="mythtx pp5">MYTH</div>
        <div className="icons">
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <FaDiscord />
            <FaTwitter />
            <BsMedium />
          </IconContext.Provider>
        </div>
      </div>

      <Tower className="tower" />
    </div>
  )
}
