import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsScreen from './components/ProductsScreen';

function App() {
  return (
   <ChakraProvider>
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/products' element={<ProductsScreen />}/>
        </Routes>
      </main>
    </Router>
   </ChakraProvider>
  );
}

export default App;
