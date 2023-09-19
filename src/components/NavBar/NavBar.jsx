import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import style from './style.module.css'
import logo from '../../assets/img/logo.png'
import { useState } from 'react'

const NavBar = () => {
    const [menu, setMenu] = useState(false)

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className={style['contenedor-navbar']}>
            <div className={style['contenedor-logo']}>
                <Link to='/'>
                    <img src={logo} alt='logo de la empresa' />
                </Link>
            </div>
            <div className={style['contenedor-menu']}>
                <button onClick={toogleMenu} className={style['menu-btn']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </button>
                <div className={`${style.menu} ${menu ? style.isActive : ''}`}>
                    <ul className={style['menu-ul']}>
                        <li><Link className={style['categoria']} to='categoria/Pizza'>Pizzas</Link></li>
                        <li><Link className={style['categoria']} to='categoria/Empanada'>Empanadas</Link></li>
                        <li><Link className={style['categoria']} to='categoria/Minuta'>Minutas</Link></li>
                        <li><Link className={style['categoria']} to='categoria/Sandwich'>Sandwiches</Link></li>
                    </ul>
                </div>
            </div>
            <div className={style['contenedor-carrito']}>
                <CartWidget />
            </div>
        </div>
    )
}


export default NavBar