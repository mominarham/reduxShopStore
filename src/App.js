import './App.css';
import Heade from './containers/Heade'
import ProductListings from './containers/ProductListings';
import ProductDetail from './containers/ProductDetail';

import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
<Route>

      <Heade/>
</Route>

<Route exact path = '/'>

    <ProductListings/>  
</Route>

<Route exact path ='/product/:productId'>

<ProductDetail/>
</Route>
    </BrowserRouter>

  );
}

export default App;
