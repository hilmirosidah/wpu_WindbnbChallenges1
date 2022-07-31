import React, {useState} from 'react'
import './style.css'
import {MdSearch, MdClear} from 'react-icons/md'
import Lokasi from './Lokasi'
import Guests from './Guests'
import stays from './stays.json'

const Pencarian = ({
    isOpen, 
    toggleIsOpen, 
    pembungkusLBox, 
    TLokasi, 
    tKategoriTamu, 
    tKategoriUsia, 
    tTombolKurang, 
    tHasilTambahKurang, 
    tTombolTambah, 
    handleTLokasi, 
    handleTTamu, 
    setApartments, 
    settLokasi, 
    settTamu
}) => {
    const [pilihLokasi, setPilihLokasi] = useState(<div className='tLokasiDanTamu'>Add location</div>)
    const [tambahkanTamu, settambahkanTamu] = useState(<div className='tLokasiDanTamu'>Add guests</div>)

    let filterLoc = pilihLokasi.props.children[0] !== 'A' ?
        (stays && stays.filter(stays => { return stays.city === pilihLokasi.props.children[0] }))
        : stays

    let filterGuest = tambahkanTamu.props.children[0] !== 'A' ?
        (filterLoc && filterLoc.filter(f => { return f.maxGuests >= tambahkanTamu.props.children[0] }))
        : filterLoc

    const handleClick5 = () => {
        setApartments(filterGuest)
        settLokasi(pilihLokasi)
        tambahkanTamu.props.children[0] !== 0 && settTamu(tambahkanTamu)
    }

    return (
        <div>
            {isOpen ?
                <div className={pembungkusLBox}>
                    <div className='containerTombolLBox'>
                        <div>
                            <span className='editSearch'>Edit your search</span>
                            <MdClear color='#333' className='close' onClick={toggleIsOpen} />
                        </div>
                        <span>
                            <button className='tombolLokasi' onClick={handleTLokasi}>
                                <div className='LokasiDanTamu'>LOCATION</div>
                                <div>{pilihLokasi}</div>
                            </button>
                        </span>
                        <span>
                            <button className='tombolTamu' onClick={handleTTamu}>
                                <div className='LokasiDanTamu'>GUESTS</div>
                                <div>{tambahkanTamu}</div>
                            </button>
                        </span>
                        <span>
                            <button onClick={() => { toggleIsOpen(); handleClick5() } } type='submit' className='tombolPencarian'>
                                <MdSearch size='1.5em' color='#f2f2f2' className='gbrPencarian' />
                                <span className='pencarian'>Search</span>
                            </button>
                        </span>

                        <div>
                            <Lokasi setPilihLokasi={setPilihLokasi} TLokasi={TLokasi} />
                            <Guests
                                settambahkanTamu={settambahkanTamu}
                                tKategoriTamu={tKategoriTamu}
                                tKategoriUsia={tKategoriUsia}
                                tTombolKurang={tTombolKurang}
                                tHasilTambahKurang={tHasilTambahKurang}
                                tTombolTambah={tTombolTambah} />

                        </div>

                    </div>
                </div>
                : null}
        </div>
    )
}

export default Pencarian