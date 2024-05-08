
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'
// import { BrowserRouter ,Routes , Route } from 'react-router-dom'
// import Shop from './Components/Pages/Shop'
// import ShopCategory from './Components/Pages/ShopCategory'
// import Product from './Components/Pages/Product'
// import Cart from './Components/Pages/Cart'
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Shop/>}/>
//         <Route path='/mens' element={<ShopCategory Category="men"/>}/>
//         <Route path='/women' element={<ShopCategory Category="women"/>}/>
//         <Route path='/product' element={<Product Category="Product"/>}/>
//         <Route path='/productId' element={<Product/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/login' element={<LoginSignUp/>}/>
//       </Routes>

//       </BrowserRouter>
//     </div>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp'; // Ensure this import exists
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory Category="men" />} />
        <Route path="/women" element={<ShopCategory Category="women" />} />
        <Route path="/product" element={<Product Category="Product" />} />
        <Route path="/productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
     <Footer/>
    </Router>
  );
};

export default App;
