/* eslint-disable react/prop-types */
import style from './style.module.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../Firebase/client'
import Loader from '../Loader/Loader'
import OrderForm from '../OrderForm/OrderForm'
import Swal from 'sweetalert2'



const Order = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, totalItems, clearCart } = useContext(CartContext)

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                totalItems: totalItems,
                totalPrecio: total,
                date: Timestamp.fromDate(new Date())
            }

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
        }

        catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <Loader />
    }

    if (orderId) {

        Swal.fire({
            title: `Pedido confirmado ID: ${orderId}`,
            text: '¡Gracias por tu compra!',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            window.location.href = '/'
        })
    }

    return (
        <div className={style['contenedor']}>
            <h1>Finalizar compra</h1>
            <OrderForm onConfirm={createOrder} />
        </div>
    )
}

export default Order