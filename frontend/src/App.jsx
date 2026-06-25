import "./App.css";
import Layout from "./components/Layout";
export default function App() {
  return (
    <>
      <Layout />
    </>
  );
}

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Parent route using the layout */}
//         <Route path="/" element={<Layout />}>
//           {/* Child routes that render inside the <Outlet /> */}
//           <Route index element={<Home />} /> {/* Renders at / */}
//           <Route path="about" element={<About />} /> {/* Renders at /about */}
//           <Route path="contact" element={<Contact />} /> {/* Renders at /contact */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
