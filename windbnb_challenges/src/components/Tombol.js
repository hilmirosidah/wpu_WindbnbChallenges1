import React, {useState} from 'react'
import {MdSearch} from 'react-icons/md'
import imgBnb from './img/logo.png'
import './style.css'
import Pencarian from './Pencarian'
import stays from './stays.json'

function Tombol({tLokasi, settLokasi, tTamu, settTamu, setApartments}) {
    const [isOpen, setIsOpen] = useState(false)
    const [pembungkusLBox, setPembungkusLBox] = useState('none')
    const [TLokasi, setTLokasi] = useState('none')
    const [tKategoriTamu, setTKategoriTamu] = useState('none')
    const [tKategoriUsia, setTKategoriUsia] = useState('none')
    const [tTombolKurang, setTTombolKurang] = useState('none')
    const [tHasilTambahKurang, setTHasilTambahKurang] = useState('none')
    const [tTombolTambah, setTTombolTambah] = useState('none')

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
        setPembungkusLBox('box')
    }
    
    const handleTLokasi = () => {
        setTLokasi('pilihLokasi')
        setTKategoriTamu('none')
        setTKategoriUsia('none')
        setTTombolKurang('none')
        setTHasilTambahKurang('none')
        setTTombolTambah('none')
    }

    const handleTTamu = () => {
        setTKategoriTamu('tKategoriTamu')
        setTKategoriUsia('tKategoriUsiaTamu')
        setTTombolKurang('tombolKurang')
        setTHasilTambahKurang('hasilTambahKurang')
        setTTombolTambah('tombolTambah')
        setTLokasi('none')
    }

    return (
        <div>
            <Pencarian
                isOpen={isOpen}
                toggleIsOpen={toggleIsOpen}
                pembungkusLBox={pembungkusLBox}
                TLokasi={TLokasi}
                tKategoriTamu={tKategoriTamu}
                tKategoriUsia={tKategoriUsia}
                tTombolKurang={tTombolKurang}
                tHasilTambahKurang={tHasilTambahKurang}
                tTombolTambah={tTombolTambah}
                handleTLokasi={handleTLokasi}
                handleTTamu={handleTTamu}
                setApartments={setApartments}
                settLokasi={settLokasi}
                settTamu={settTamu}
                />
                <span>
                    <img src={imgBnb} alt="logo"
                    className='bnb'
                    onClick={() => {
                        setApartments(stays);
                        setTLokasi(<div>Add location</div>);
                        settTamu(<div>Add guests</div>)
                    }}/>
                </span>
                <span className='containerTombol'>
                    <button
                     onClick={() => {toggleIsOpen(); handleTLokasi()}}
                     className='kotak1'
                     >
                        {tLokasi}
                     </button>
                     <button
                     onClick={() => {toggleIsOpen(); handleTTamu()}}
                     className='kotak2'
                     >
                        {tTamu}
                     </button>
                     <button type='submit'className='kotak3'>
                        <MdSearch size='1.5em' color='#eb5757'/>
                     </button>
                </span>


        </div>

    )
}


export default Tombol