
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import About from "./components/about"
import Counter from "./components/counter"
import Navbar from "./components/navbar"
import Service from "./components/service"
import Layout from "./components/layout";
import Home from "./components/home";
import Contact from "./components/contact";



const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>     
      },
      {
        path:"/service",
        element: <Service/>
      },
      {
        path:"/counter",
        element:<Counter/>

      },
      
    ]
  },
  {
    path:"/about",
    element:<About/>
  }
])





function App() {
 

  return (
    <div>
      <Contact/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
