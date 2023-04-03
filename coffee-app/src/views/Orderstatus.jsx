import './OrderStatus.css';
import droneImage from '../assets/drone.svg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function OrderStatus() {
  
  const [orderData, setOrderData] = useState({ orderNr: null, eta: null, status: null });

  const orderNr = useSelector((state) => state.orderNumber);
  

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
    console.log('inget orderNR')
  }
  }, [orderNr]);  

  return (
    <div className='order'>
      { orderNr?  
        <article className='order__exists'> 
          <p className='order__number'>Ordernummer #{orderNr}</p>
          <img className='order__image' src={droneImage} alt="" />
          <h2 className='order__title'>Din beställning är påväg!</h2>
          <p className='order__time'><span className='order__time--bold'>{orderData.eta}</span> minuter</p>
          <Link to="/menu">
            <button className='order__button'>Ok, cool!</button>
          </Link>
        </article>
      : <article className='order__noexists'>
          <img className='order__image' src={droneImage} alt="" />
          <h2 className='order__title'>No active order exists</h2>
          <Link to="/menu">
            <button className='order__button'>Back to menu!</button>
          </Link>
         </article> 
        }
    </div>
  );
}

export default OrderStatus;


