import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct, resetProducts, saveOrderNumber } from './actions/productsAction';
import Home from './views/Home';
import About from './views/About';
import OrderStatus from './views/Orderstatus';
import Menu from './views/Menu';
import Nav from './views/Nav';


function App() {
 
  const dispatch = useDispatch();

  function handleUpdateStore() {
  
    dispatch(addProduct(product));
  }

  function handleResetStore() {
    dispatch(resetProducts(product));
  }

  function handleOrderNumber() {
    dispatch(saveOrderNumber(orderNumber));
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

    {
      path: '/nav',
      element: <Nav />
    },


   
  ]);

  

  return (
    <div className="App">
     <RouterProvider router={ router } />
    </div>
  )
}

export default App
