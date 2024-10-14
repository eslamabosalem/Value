import './App.css'

import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import Layout from './compoent/Layout/Layout'
import ContactUs from './compoent/ContactUs/ContactUs'
import About from './compoent/About/About'
import Home from './compoent/Home/Home'
import SpiritualReflections from './compoent/SpiritualReflections/SpiritualReflections'
import GuidingValues from './compoent/GuidingValues/GuidingValues'
import TheValuefBullying from './compoent/TheValuefBullying/TheValuefBullying'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
let createBrowser= createBrowserRouter([
{path: "" ,element:<Layout/> ,children:[
{index:true ,element:<Home/>},
{path:"contactUs", element:<ContactUs/>},
{path:"about", element:<About/>},
{path:"spiritualReflections", element:<SpiritualReflections/>},
{path:"guidingValues", element:<GuidingValues/>},
{path:"theValuefBullying", element:<TheValuefBullying/>},

]}
])




  return (

<>

<RouterProvider router={createBrowser}></RouterProvider>

</>
  )
}

export default App
