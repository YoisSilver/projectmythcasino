import React from 'react'
import Image from 'next/image'
import redlogo from '../assets/logo1.png'

export default function Navbar() {
    return (
        <div className='navbar' >
            <p className="myth pp5">MYTH</p>
            <Image className="redlogo" height="55rem"
                width="59rem" src={redlogo} alt="redlogo" />
            <div className="connectbtn pp5 pointer">connect</div>
        </div>
    )
}
