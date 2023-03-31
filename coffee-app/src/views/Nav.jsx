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
                    
                    <Link to="/menu"> Menu</Link>
                
                    <Link to="/about"> About</Link>
                         
                    <Link to="/orderstatus">Orderstatus</Link>
                    
                </aside>
        </section>

        
    )
}


export default Nav;