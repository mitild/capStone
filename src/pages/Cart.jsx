import React, {useContext, useState} from "react"
import {Context} from "../AppContext"
import CartItem from "../components/CartItem"

function Cart() {
    const [ buttonText, setButtonText ] = useState('Place Order')
    const { cartItems, emptyCart } = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalPrice = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    const placeOrder = ()=> {
        setButtonText('Placing Order...')
        setTimeout(() => {
            console.log('Order Placed!')
            setButtonText('Place Order')
            emptyCart()
        }, 3000);
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: { totalPrice }</p>
            <div className="order-button">
                {
                    cartItems.length > 0 && <button onClick={ placeOrder }> { buttonText } </button>
                }
                
            </div>
        </main>
    )
}

export default Cart