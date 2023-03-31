import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';
import navimage from '../assets/close.svg'


function Nav()  {
     
    const navigate = useNavigate();
    

    return(
        <section className='nav__section'>

                <div onClick={()=> navigate(-1)} className='nav__button'>
                    <img className='nav__image' src={navimage} alt="" />
                </div>
                <aside className='nav__links'>
                    
                    <Link to="/menu" className='nav__text'> Menu</Link>
                    <div className='nav__line'></div>
                    <Link to="/about" className='nav__text'> About</Link>
                    <div className='nav__line'></div>
                    <Link to="/orderstatus" className='nav__text'>Orderstatus</Link>
                    <div className='nav__line'></div>
                    
                </aside>
        </section>

        
    )
}


export default Nav;