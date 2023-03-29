import './Header.css'
import headerImage from './graphics-header.svg'
import navIonc from './navicon.svg'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom';

function Header() {
  

return (
 <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
  <article className='header__nav'>
  <Link to="/nav">
    <img src={navIonc} alt="" />
  </Link>

  </article>
   <Cart/>
 </header>
)

}

export default Header;