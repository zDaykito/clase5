import React from 'react'
import { useState } from 'react'

const ItemCount = () => {

    const stock = 20

    const[estado, setEstado] = useState(0)

    const handleSumar = () => {
        if(estado < stock) {
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado > 1) {
            setEstado(estado - 1)
        }
    }

    return (
        <div id='containerCart'>
        <h1>MI CARRITO</h1>
        <h2>Polera Hombre</h2>
        <div className='cantidad'>
            <button className='botonSuma' onClick={handleRestar}>-</button>
            <p>{estado} Producto/s</p>
            <button className='botonResta' onClick={handleSumar}>+</button>
        </div>
    </div>
    )
}

export default ItemCount