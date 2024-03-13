import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import AddToCart from './components/AddToCart.jsx';
import Contact from './components/Contact.jsx';


const router=createBrowserRouter([

  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"home",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"cart",
        element:<AddToCart/>
      },
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router ={router}/>

  
)