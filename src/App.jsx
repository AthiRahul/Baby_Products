import Header from "./components/Header"
import Banners from "./components/Banners"
import Registration from "./Pages/Registration"
import Login from "./Pages/Login"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { useState } from "react"

import Shop from "./components/Shop"
import AboutAs from "./components/AboutAs"
import ContactUs from "./components/ContactUs"
import Testinomial from "./components/Testinomial"
import Discription from "./components/Discription"
import Cart from "./components/Cart"
import { myContext } from "./Context/Context"
import Search from "./components/Search"
import Category from "./components/Category"

import AdminHome from "./Pages/AdminHome"


export default function App() {
  const [isSearch,setIsSearch]=useState([])
   
  return (
  <> 
  <myContext.Provider value={{isSearch,setIsSearch}}>

  
  <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="Registration" element={ <Registration/>}></Route>
     <Route path="Shop" element={<Shop/>}></Route>
     <Route path="AboutAs" element={<AboutAs/>}></Route>
     <Route path="ContactUs" element={<ContactUs/>}></Route>
     <Route path="Testinomial" element={<Testinomial/>}></Route>
     <Route path="Discription/:userId" element={<Discription/>}></Route>
     <Route path="Cart" element={<Cart/>}></Route>
     <Route path="Search" element={<Search/>}></Route>
     <Route path="Category" element={<Category/>}></Route>
     <Route path="AdminHome/*" element={<AdminHome/>}></Route>
  </Routes>
  </myContext.Provider>

    
  </>
    

  )
}