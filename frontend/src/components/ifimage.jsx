import React from 'react'

function ifimage(props){
    const image= props.item.image
    if(image){
        return <img src={props.item.image} alt="" style={{width:"150px", height:"auto"}} />  
    }else{
        return;

    }
 
}

export default ifimage