import './Cart.css';
import { useState } from 'react';

function Cart(){
    const [showCart, setShowCart] = useState(false);

    return(
        <article className='cart'>
            <a href="#" className='cart__link' onClick={()=>{ setShowCart(!showCart) }}>Cart</a>
            {showCart && (
                <section className='cart__items'>
                    <h3>Din beställning</h3>

                    <button className='cart__button'>Take my money</button>
                </section>
            )}
        </article>
    );
}

export default Cart;