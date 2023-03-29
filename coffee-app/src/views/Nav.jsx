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
                    
                    <Link to="/menu"> <a href="">Meny</a></Link>
                
                    <a href="">Vårt kaffe</a>
                         
                    <a href="">Orderstatus</a>
                    
                </aside>
        </section>

        
    )
}


export default Nav;