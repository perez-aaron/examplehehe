import { useEffect, useState } from 'react';
import '../App.css';

function ShoppingCart({ cart }) {
//initialization
    const [shoppingcart, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

//returning the shopping cart
    return (
        <div className ='text1'>
                    SHOPPING CART
                    <div>
                        In cart: {shoppingcart.quantity}
                    </div>
            {
                shoppingcart?.map((cartItem, cartindex) => {
                    return (
                        <div className='item-container'>
                            <img alt='Alternative' src={cartItem.url} width={40} />
                            <span> {cartItem.name} </span>
                            

                            <button
                                onClick={() => {
                                    const _shoppingcart = shoppingcart.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_shoppingcart)
                                }}
                            >-</button>


                            <span> Quantity: {cartItem.quantity} </span>


                            <button
                                onClick={() => {
                                    const _shoppingcart = shoppingcart.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_shoppingcart)
                                }}
                            >+</button>

                            
                            <button
                                onClick={() => {
                                    setCART((shoppingcart) => {
                                        let newyes = [...shoppingcart];
                                        newyes.splice(cartindex, 1)
                                        return newyes;
                                      })
                                }
                                }
                            >Delete</button>


                            <span> Php {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }
            <br></br>
            <p> Total: Php <span></span>
                {
                    shoppingcart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div >
//The part above is for the total computation and the quantity in the cart
    )
}

export default ShoppingCart