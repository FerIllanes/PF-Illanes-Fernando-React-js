/* eslint-disable react/prop-types */

import Item from '../Item/item'

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </>
    )
}

export default ItemList