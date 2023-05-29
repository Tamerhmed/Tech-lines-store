import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import Home from './components/Home';
import CartScreen from './screens/CartScreen';

function App() {
  return (
   <ChakraProvider>
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductsScreen />}/>
          <Route path='/cart' element={<CartScreen />}/>
        </Routes>
      </main>
    </Router>
   </ChakraProvider>
  );
}

export default App;
