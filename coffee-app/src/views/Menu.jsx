import './Menu.css'
import footerimage from '../assets/graphics-footer.svg'
import plusimage from '../assets/plus-sign.png'
import { useEffect, useState } from 'react'


function Menu() {

  const [coffees, setCoffees] = useState([]);
  console.log(coffees)

const coffeeComponent = coffees.map((coffee) => {
 return <div className='menu__section' key={coffee.id} >
          <div className='menu__circle' onClick={handleClick}>
            <img src={plusimage} alt="" />
          </div>
          <article>
            <h2>{coffee.title} </h2>
            <p>{coffee.desc} </p>
          </article>
          <p>{coffee.price} Kr </p>
        </div>
 
})

console.log(coffeeComponent)

useEffect(() => {
  async function getCoffee() {
    const response = await fetch('https://airbean.awesomo.dev/api/beans/');
    const data = await response.json();
    
    const coffeeItems = data.menu.filter(item => item.id.startsWith('coffee-'));
    setCoffees(coffeeItems);
  }
  
  getCoffee();

}, []);

function handleClick() {
  console.log('klick')
}



  return (
    <section className="menu">
      <h1 className="menu__header">Meny</h1>

       
      {coffeeComponent} 
          
         
      </section>

    
  )

}

export default Menu;