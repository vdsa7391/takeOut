import React from 'react'
import './footer.css'
import { payment } from '../../assets/asset'




const footer = () => {
  return (
    <div className="footer">
        <div className="copyright"><p>Copyright 2024 <span style={{fontWeight:"bold"}}>© C.M. SRL Via G.G. Mora 9 - P.iva 04956060968</span> Powered by NSAi Srl</p></div>
        <div className="container">
            {payment.map((i,index)=>{
                return(
                    <div className="payment_container" key={index}><img src={i.img} alt="" style={{width:"auto", height:"20px"}} /></div>
                )
            })}
        </div>
        
    </div>
  )
}

export default footer