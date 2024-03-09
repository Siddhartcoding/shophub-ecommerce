
import SignIn from './pages/account/SignIn';
import NaveBar from './header/NaveBar';
import SignUp from './pages/account/SignUp';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/cart/Cart';
import "slick-carousel/slick/slick.css";
import './input.css';
import { ProductContext } from './productContext/ProductContext';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from './footer/Footer';
import FooterBottom from './footer/FooterBottom';
import Offer from './pages/Offer';
import HeaderBottom from './header/HeaderBottom';
import SpecialCase from './pages/pageProps/SpecialCase';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import { AuthContext } from './productContext/authContext';
import Myprofile from './pages/myOrders/Myprofile';
import OfferTwo from './pages/OfferTwo';
import Offline from './pages/offlinePage/Offline';
import useOfflineStatus from './pages/offlinePage/useOfflineStatus';

const Layout = () => {


  return (

    <div>
      <NaveBar />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />

    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/offerTwo" element={<OfferTwo />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/profile" element={<Myprofile />}></Route>
      </Route>
      <Route path='login' element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
      {/* <Route path='/offline' element={<Offline/>}/> */}
    </Route>


  )
);
function App() {
  const onlineStatus = useOfflineStatus();
if(!onlineStatus){
  return <Offline/>;
};
  return (

    <div className="font-bodyFont">
      <AuthContext>
        <ProductContext>
         <RouterProvider router={router} /> 
          
        </ProductContext>
      </AuthContext>
    </div>

  );
}

export default App;
