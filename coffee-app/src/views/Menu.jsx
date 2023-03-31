import './Menu.css'
import footerimage from '../assets/graphics-footer.svg'
import plusimage from '../assets/plus-sign.png'
import Header from '../components/Header/Header'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productsAction';


function Menu() {

  const [coffees, setCoffees] = useState([]);
  const dispatch = useDispatch();

  function handleClick(coffee) {
    dispatch(addProduct({
      id: coffee.id,
      title: coffee.title,
      price: coffee.price
    }));
  
  }

const coffeeComponent = coffees.map((coffee) => {
 return <div className='menu__section' key={coffee.id} >
 
          <div className='menu__circle' onClick={() => handleClick(coffee)}>
          
            <img src={plusimage} alt="" />
          </div>
          <section className='menu__container'>

          <article className='menu__top'>
            <h2 className='menu__title'>{coffee.title} </h2>
            <span className='menu__dots'></span>
            <p className='menu__price'>{coffee.price} Kr </p>
          </article>

          <article className='menu__desc'>
          <p>{coffee.desc} </p>
          </article>
          </section>
        </div>
 
})

//console.log(coffeeComponent)

useEffect(() => {
  async function getCoffee() {
    const response = await fetch('https://airbean.awesomo.dev/api/beans/');
    const data = await response.json();
    
    const coffeeItems = data.menu.filter(item => item.id.startsWith('coffee-'));
    setCoffees(coffeeItems);
  }
  
  getCoffee();

}, []);





  return (

   
    
          <section className="menu">
            <Header/>
            <h1 className="menu__header">Meny</h1>

            
            {coffeeComponent} 
                
            <img className='menu__image' src={footerimage} alt="" />
          </section>
 
    
  )

}

export default Menu;