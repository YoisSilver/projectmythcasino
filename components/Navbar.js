import React from 'react'
import Image from 'next/image'
import redlogo from '../assets/logo1.png'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='navbar' >
            <Link href={"/"}>
                <p className="myth pp5 pointer">MYTH</p>
            </Link>
            <Image className="redlogo" height="55rem"
                width="59rem" src={redlogo} alt="redlogo" />
            <div className="connectbtn pp5 pointer">connect</div>
        </div>
    )
}
