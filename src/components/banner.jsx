import React from 'react'
import '../CSS/banner.css'
import Headroom from 'react-headroom'
import view from '../assets/images/view_headline-24px.svg'
import views from '../assets/images/view.png'

const click=(clicked,setTest)=>{
    console.log(clicked)
    setTest(!clicked)
    if(clicked==true){
        document.getElementsByClassName('hidden')[0].style.display='flex'
    }else{
        document.getElementsByClassName('hidden')[0].style.display='none'
    }
}


function Banner(){
    const [test,setTest]=React.useState(true)
    return(
        
        <span className='wapper'>
        <div className='left'>박민준</div>
        <div className='center'></div>
        <div className='right'>
            <ul>
                <li>Github</li>
                <li>Profile</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>

        <div className='list'>
           
            <img src={views} alt="" onClick={()=>click(test,setTest)}  />
            <ul className='hidden' >
            <li>Github</li>
                <li>Profile</li>
                <li>Portfolio</li>
                <li>Contact</li>

            </ul>

        </div>

        </div>
        </span>
        
    )
      
    

}

export default Banner