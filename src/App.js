import './App.css';
import './categories.styles.scss'
import Home from './Routes/Home/Home';
import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation from './Routes/Home/navigation/Navigation';
import Authentication from './components/Authentication/Authentication'
import Shop from '../src/Routes/shop/Shop'
import CheckoutItems from './components/CheckoutItems/CheckoutItems';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutItems/>}/>
       </Route>
    </Routes>
  );
}

export default App;
