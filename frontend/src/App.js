import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/HomePage/headers/header';
import './App.css';
import ContactUs from './pages/ContactPage/ContactUs';
import ShopPage from './pages/ShopPages/ShopPage' ;
import Blog from './pages/Blogpage/Blog';
import HomePage from "./pages/Home/HomePage";
import Footer from "./Components/HomePage/Footers/Footer";
import TermCondition from './pages/Term_Condition/TermCondition'

import ShoppingCart from './pages/Shopcartbill/components/ShoppingCart';
import Checkout from "./pages/Checkoutpage/Checkout";
import Aboutus from "./pages/AboutUs/Aboutus";
import Wish from "./pages/Wishlist/Wish";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/termcondition' element={< TermCondition/>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/cart' element={<ShoppingCart/>} />
          <Route path='/wishlist' element={<Wish/>} />
        </Routes>
      <Footer />

      </BrowserRouter>

      </div>

  );
}

export default App;
