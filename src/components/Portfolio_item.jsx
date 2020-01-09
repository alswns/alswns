import React from 'react'
import '../CSS/Portfolio_item.css'

function Portfolio_item(props){

return(
    

    <div className='item'>
        
    <img src={props.img} alt="주소 ㅌ" className='inImg'/>
    <h3 className='portfolio_main_text'>{props.main}</h3>
    <span className='portfolio_sub'>{props.sub}</span>

    </div>
    
)
}
export default Portfolio_item