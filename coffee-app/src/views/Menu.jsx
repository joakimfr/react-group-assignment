import './Menu.css'
import footerimage from '../assets/graphics-footer.svg'
import plusimage from '../assets/plus-sign.png'


function Menu() {

  return (
    <section className="menu">
      <h1 className="menu__header">Meny</h1>

       <section className='menu__section'>
          <aside className='menu__items'>
            <div className='menu__circle'>
            <img src={plusimage} alt="" />
            </div>
            <h2>Bryggkaffe..... 49kr</h2>
          </aside>
        

          <aside className='menu__items'>
            <div className='menu__circle'>
            <img src={plusimage} alt="" />
            </div>
            <h2>Caffe Doppio..... 49kr</h2>
          </aside>

          <aside className='menu__items'>
            <div className='menu__circle'>
            <img src={plusimage} alt="" />
            </div>
            <h2>Cappucchino..... 49kr</h2>
          </aside>

          <aside className='menu__items'>
            <div className='menu__circle'>
            <img src={plusimage} alt="" />
            </div>
            <h2>Latte Macchiato... 49kr</h2>
          </aside>

          <aside className='menu__items'>
            <div className='menu__circle'>
            <img src={plusimage} alt="" />
            </div>
            <h2>Kaffe Latte..... 49kr</h2>
          </aside>

          <aside className='menu__items'>
            <div className='menu__circle'>
            <img src={plusimage} alt="" />
            </div>
            <h2>Cortado..... 49kr</h2>
          </aside>
        </section>

      <img className='menu__image' src={footerimage} alt="" />
    </section>

    
  )

}

export default Menu;