import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Rbuyarea from './Rbuyarea';
import Rtoparea from './Rtoparea';


export default function Rafflecontainerclosed() {
    const [rafflestatus, setRafflestatus] = useState(false);

    return (
        <div className='rafflecontainer'>
            <Rtoparea rafflestatus={rafflestatus} />
            <Rbuyarea rafflestatus={rafflestatus} />
        </div>
    )
}
