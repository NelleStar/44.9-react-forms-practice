const Item = ({ id, name, qty }) => {
    return (
        <ul>
            {/* <li>UUID: {id}</li> */}
            <li>Product Name: {name}</li>
            <li>Quantity: {qty}</li>
        </ul>
    )
}

export default Item;