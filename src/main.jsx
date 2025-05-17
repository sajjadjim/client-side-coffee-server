import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffe.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        loader: ()=> fetch('http://localhost:3000/coffees'),
        Component:Home
      },
      {
        path:'/addCoffee'
        ,Component:AddCoffee
      }
      ,
      {
        path:'/updateCoffeeee/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`)
        ,Component:UpdateCoffee
      },{
        path:`/coffeeDetails/:id`,
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:CoffeeDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
