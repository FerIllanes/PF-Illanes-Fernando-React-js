/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const ItemDetail = ({ id, price, detail, img, title, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price, img
        }

        addItem(item, quantity)
    }

    return (
        <div className={style['card']}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{detail}</p>
            <div className={style['contador']}>
                {
                    quantityAdded > 0 ? (
                        <div className={style['finalizar-compra']}>
                            <Link className={style['card-btn']} to='/'>Continuar comprando</Link>
                            <Link className={style['card-btn']} to='/cart'>Finalizar compra</Link>
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )

                }
            </div>
        </div>
    )
}

export default ItemDetail