/* eslint-disable react/prop-types */
import style from './style.module.css'

const CartItem = ({ title, price, quantity, subtotal, remove, img }) => {
    return (
        <div className={style['card']}>
            <div className={style['btn-x']}>
                <button onClick={remove}>X</button>
            </div>
            <div>
                <img className={style['img']} src={img} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${subtotal}</p>
            </div>
        </div>
    )
}

export default CartItem