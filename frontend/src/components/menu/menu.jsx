import React from 'react'
import { drink_list, menu_list } from '../../assets/asset.js'
import './menu.css'

import Ifimage from '../ifimage.jsx'
import Details from '../details.jsx'







const menu = () => {
    

    
  return (
    <>
    <div className='menu-whole'>
        {menu_list.map((item,index)=>{
            return(
            <>
            <div key={index} className="menu_category">
                <h1 className='category_heading'>{item.heading}</h1>
                <div className="category_options">
                    {item.options.map((i,index)=>{
                        return(
                        <div key={index} className="option">
                            <Ifimage item={i}/>
                            <Details item={i}/>
                             
                        </div>)
                    })}
                </div>
            </div>
            </>
            )
        })}
    </div>
    
    <div className='menu-whole'>
       
        {drink_list.map((item,index)=>{
            return(
                <>
                <div key={index} className="menu_category">
                    <h1 className='category_heading'>{item.heading}</h1>
                    <div className="category_options">
                        {item.options.map((i,index)=>{
                            return(
                            <div key={index} className="d">
                                <Details item={i}/> 
                            </div>)
                        })}
                    </div>
                </div>
                </>
                )

        })}

    </div> 
    </>
  )
}

export default menu