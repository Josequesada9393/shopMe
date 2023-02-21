import './App.css';
import './categories.styles.scss'
import Home from './Routes/Home/Home';
import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation from './Routes/Home/navigation/Navigation';
import SignInComponent from './components/SignInComponent/SignInComponent.jsx'

const Shop = () => {
  return (<h1>I am the shop page</h1>)
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />} />
        <Route path="SignIn" element={<SignInComponent />} />
       </Route>
    </Routes>
  );
}

export default App;
