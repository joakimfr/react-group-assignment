import image from '../assets/airbean-landing.svg';
import leftImage from '../assets/intro-graphic-left.svg';
import rightImage from '../assets/intro-graphic-right.svg';
import './Home.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

function Home () {

  return(
    <div>
      
    <section className='home'>
     
     
    <img className='home__left' src={ leftImage } alt="" />
    <Link to="/menu" >
    <img className='home__image' src={image} alt="" />
    </Link>
    <img className='home__right' src={ rightImage } alt="" />
   
    </section>
    </div>
  )
}

export default Home;