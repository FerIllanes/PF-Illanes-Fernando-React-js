/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import style from './style.module.css'

const Item = ({ img, title, price, id }) => {

    return (

        <div className={style['card']}>
            <Link to={`/item/${id}`}><img src={img} alt={title} /></Link>
            <h2>{title}</h2>
            <h3>${price}</h3>
            <Link className={style['card-btn']} to={`/item/${id}`}>Ver más</Link>
        </div>
    )
}

export default Item