import './Nav.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import navimage from '../assets/close.svg'


function Nav()  {
     

  

    return(
        <section className='nav__section'>

                <div className='nav__button'>
                    <img className='nav__image' src={navimage} alt="" />
                </div>
                <aside className='nav__links'>
                    
                    <Link to="/menu"> Menu</Link>
                
                    <a href="">Vårt kaffe</a>
                         
                    <Link to="/orderstatus">Orderstatus</Link>
                    
                </aside>
        </section>

        
    )
}


export default Nav;