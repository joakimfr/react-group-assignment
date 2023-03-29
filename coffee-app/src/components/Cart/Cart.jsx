import './Cart.css';
import { useState } from 'react';
import { useSelector } from "react-redux";
import cartIcon from './bag.svg'

function Cart(){
    const [showCart, setShowCart] = useState(false);

    const cartItems = useSelector((state) => state.products);  //hämtar ett state med hjälp av useSelector som innehåller ett object som är sparat i products
    console.log(cartItems)


    return(
        <article className='cart'>
            <a href="#" className='cart__link' onClick={()=>{ setShowCart(!showCart) }}>
              <img src={cartIcon} alt="" />
              <p className='cart__number'>{cartItems.length}</p>
            </a>
            {showCart && (
            <section className='cart__items'>
                <h3>Din beställning</h3>
            {cartItems.map(product => (
            <div key={product.id}>
              <p>{product.title} - {product.price} Kr</p>
            </div>
          ))}
      <button className='cart__button'>Take my money</button>
    </section>
   )}
  </article>
    );
}

export default Cart;