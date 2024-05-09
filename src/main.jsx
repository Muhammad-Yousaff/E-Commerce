
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from "./Components/Context/ShopContext.jsx";


createRoot(document.getElementById('root')).render(

  <ShopContextProvider>
    <App />
  </ShopContextProvider>

);
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { ShopContextProvider } from './Components/Context/ShopContextProvider.jsx';

// // Correctly wrap everything in ShopContextProvider and StrictMode
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </StrictMode>
// );
