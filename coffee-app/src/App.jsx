import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct } from './actions/productsAction';
import Home from './views/Home';
import About from './views/About';
import OrderStatus from './views/Orderstatus';
import Menu from './views/Menu';

function App() {
 
  const dispatch = useDispatch();

  function handleUpdateStore() {
 
    dispatch(addProduct(product));
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/about',
      element: <About />
    },

    {
      path: '/orderstatus',
      element: <OrderStatus />
    },

    {
      path: '/menu',
      element: <Menu />
    },



  ]);

  

  return (
    <div className="App">
     <RouterProvider router={ router } />
    </div>
  )
}

export default App
