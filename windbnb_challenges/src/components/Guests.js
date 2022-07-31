import React, {useReducer, useEffect, useRef} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}

function Guests({
    settambahkanTamu,
    tKategoriTamu,
    tKategoriUsia,
    tTombolKurang,
    tHasilTambahKurang,
    tTombolTambah,
}) {
    const [countAdult, dispatch1] = useReducer(reducer, initialState)
    const [countChildren, dispatch2] = useReducer(reducer, initialState)
    const tambahkanTamuRef = useRef()

    useEffect(() => {
        tambahkanTamuRef.current = settambahkanTamu(<div className='tLokasiDanTamu2'>{countAdult + countChildren} guests</div>)
    }, [settambahkanTamu, countAdult, countChildren])
    
return (
    <div>
        <div className='countainerTombolKategori'>
            <div className={tKategoriTamu}>Adults</div>
            <div className={tKategoriUsia}>Ages 13 or above</div>
            <div onClick={tambahkanTamuRef.current}>
                <button
                onClick={() => dispatch1('decrement')}
                className={tTombolKurang}
                >
                     -
                </button>
                <span className={tHasilTambahKurang}>{countAdult}</span>
                <button
                onClick={() => dispatch1('increment')}
                className={tTombolTambah}
                >
                     +
                </button>
            </div>
    </div>
    <div className='countainerTombolKategori'>
        <div className={tKategoriTamu}>Children</div>
        <div className={tKategoriUsia}>Ages 2 -12</div>
        <div onClick={tambahkanTamuRef.current}>
            <button
            onClick={() => dispatch2('decrement')}
            className={tTombolKurang}> - 
            </button>
            <span className={tHasilTambahKurang}>{countChildren}</span>
            <button
            onClick={() => dispatch2('increment')}
            className={tTombolTambah}> + 
            </button>
        </div>

        </div>
    </div>
)
}

export default Guests