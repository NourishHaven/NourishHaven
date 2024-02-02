import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Account from './Pages/Account';
import CreateUsers from './Pages/CreateUsers';
import UpdateUsers from './Pages/UpdateUsers';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/create' element={<CreateUsers/>}></Route>
          <Route path='/update' element={<UpdateUsers/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
