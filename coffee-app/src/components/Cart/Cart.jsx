import './Cart.css';
import { useState } from 'react';
import { useSelector } from "react-redux";
import cartIcon from './bag.svg'
import { useDispatch } from 'react-redux';
import { resetProducts, saveOrderNumber } from '../../actions/productsAction';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Cart(){
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);

    const cartItems = useSelector((state) => state.products);  //hämtar ett state med hjälp av useSelector som innehåller ett object som är sparat i products
    //console.log(cartItems)

    const navigate = useNavigate();

    function calculateTotalPrice(cartItems) {
        let totalPrice = 0;
        for (let i = 0; i < cartItems.length; i++) {
          totalPrice += cartItems[i].price;
        }
        return totalPrice;
    }
    
    async function handleClick(cartItems) {
        const orderItems = cartItems.map((item) => {
            return { name: item.title, price: item.price, };
        });
      
        const requestBody = {
            details: {
              order: orderItems,
            },
        };
      
        const response = await fetch("https://airbean.awesomo.dev/api/beans/order/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });
        const data = await response.json();

        console.log(data);

        dispatch(saveOrderNumber(data.orderNr)); 
        dispatch(resetProducts());
        navigate(`/orderstatus`);
    }

    const totalPrice = calculateTotalPrice(cartItems);

    return(
        <article className='cart'>
            <a href="#" className='cart__link' onClick={()=>{ setShowCart(!showCart) }}>
              <img src={cartIcon} alt="" />
              <p className='cart__number'>{cartItems.length}</p>
            </a>
            {showCart && (
            <section className='cart__items'>
              <article className='cart__container'>
                <h3 className='cart__headline'>Din beställning</h3>
                {cartItems.map(product => (
                    <div key={product.id}>
          <div className='cart__title-container'>
            <p className='cart__title'>{product.title}</p>
            <span className='cart__dots'></span>
        </div>  
          <p className='cart__price'>{product.price} Kr</p>
        </div>
                ))}
                <div className='cart__title-container'>
                <p className='cart__total'>Totalt pris:</p>
                <span className='cart__dots'></span>
                <p className='cart__kr'>{totalPrice} Kr</p>
                </div>
                <button className='cart__button' onClick={() => handleClick(cartItems)}>Take my money</button>
                
                </article>
            </section>
            )}
           
        </article>
    );
}

export default Cart;