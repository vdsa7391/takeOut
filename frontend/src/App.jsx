import React, { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/home/home.jsx'
import Footer from './components/Footer/footer.jsx'
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";
import { Route, Routes } from 'react-router-dom'





const App = () => {

  const [scroll, setsçScroll] = useState(true)
  

  
  return (
    <>
      
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
      <ScrollToTop smooth style={{backgroundColor:"transparent" , position:"fixed", right:"20px", bottom:"30px", border: " 2px solid grey", width:"40px"}} component={<IoIosArrowUp  style={{backgroundColor:"transparent", color:"grey"}} />}  />
      
      

      
    </>
  )
}

export default App