// import React from 'react'
// // import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import Home from './components/Home.jsx';
// import About from './components/About.jsx';
// import AddToCart from './components/AddToCart.jsx';
// import Contact from './components/Contact.jsx';


// const router=createBrowserRouter([

//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"/",
//         element:<Home coindata={list} />,
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"cart",
//         element:<AddToCart/>
//       },
//     ]
//   }

// ])
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
