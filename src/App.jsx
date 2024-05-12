// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Shop from './Components/Pages/Shop';
// import ShopCategory from './Components/Pages/ShopCategory';
// import Product from './Components/Pages/Product';
// import Cart from './Components/Pages/Cart';
// import LoginSignUp from './Components/Pages/LoginSignUp';
// import Footer from './Components/Footer/Footer';

// import banner_mens from './assets/banner_mens.png';
// import banner_women from './assets/banner_women.png';
// import banner_kids from './assets/banner_kids.png';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Shop />} />
//         <Route path="/mens" element={<ShopCategory banner={banner_mens} Category="men" />} />
//         <Route path="/women" element={<ShopCategory banner={banner_women} Category="women" />} />
//         <Route path="/kids" element={<ShopCategory banner={banner_kids} Category="kids" />} />
//         <Route path="/product" element={<Product Category="Product" />} />
//         <Route path="/productId" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<LoginSignUp />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';

// ✅ Correct image paths
import banner_mens from './assets/banner_mens.png';
import banner_women from './assets/banner_women.png';
import banner_kids from './assets/banner_kids.png';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={banner_women} category="women" />} />

        <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/product/:productId" element={<Product />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
