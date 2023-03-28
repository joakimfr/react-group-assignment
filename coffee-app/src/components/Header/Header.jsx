import './Header.css'
import headerImage from './graphics-header.svg'
import navIonc from './navicon.svg'
import cartIcon from './bag.svg'
import Cart from '../Cart/Cart'

function Header() {
  

return (
 <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
  <article className='header__nav'>
    <img src={navIonc} alt="" />
  </article>
  <article className='header__cart'>
    <img src={cartIcon} alt="" />
   
  </article>
  <Cart/>
 </header>
)

}

export default Header;