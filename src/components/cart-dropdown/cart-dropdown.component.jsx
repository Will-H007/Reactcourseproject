import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <div className='cart-items'> 
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
                </div>
            <Button className='button'>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;