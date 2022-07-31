import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import stays from './stays.json'

function Lokasi({setPilihLokasi, TLokasi}) {
    const location = []

    stays && stays.map(stay => {
        return (
            !location.includes(stay.city)? (location.push(stay.city)) : null
        )
    })

    return (
        <div>
            {location && location.map((i) => {
                return (
                    <div
                    key={i.charCodeAt(0)}
                    onClick={() => {setPilihLokasi(<div className='tLokasiDanTamu2'>{i}, Findland</div>)}}
                    className={TLokasi}
                    >
                        <MdLocationPin size='1.5em' color='#4f4f4f' className='pin'/>
                        <span>{i}, Findland</span>
                        </div>
                )
            })}
        </div>
    )
}

export default Lokasi
