import './OrderStatus.css';
import droneImage from '../assets/drone.svg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function OrderStatus() {
  
  const [orderData, setOrderData] = useState({ orderNr: null, eta: null, status: null });
console.log(orderData.eta)
  const orderNr = useSelector((state) => state.orderNumber);
  console.log(orderNr)

   useEffect(() => {

    if (orderNr) {
    async function fetchData() {
      const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderNr}`);
      const data = await response.json();
      console.log(data);
      setOrderData(data);
    }
    fetchData();
  } else {
    console.log('hej')
  }
  }, [orderNr]);  

  return (
    <div className='order'>
      { orderNr?  
        <article className='order__exists'> 
          <p className='order__nummer'>Ordernummer {orderNr}</p>
          <img className='order__image' src={droneImage} alt="" />
          <h2 className='order__title'>Din beställning är påväg!</h2>
          <p className='order__time'>{orderData.eta} minuter</p>
          <button className='order__button'>Ok, cool!</button>
        </article>
      : <article className='order__noexists'>
          <img className='order__image' src={droneImage} alt="" />
          <h2 className='order__title'>No active order exists</h2>
         </article> 
        }
    </div>
  );
}

export default OrderStatus;


