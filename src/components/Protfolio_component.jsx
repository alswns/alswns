import React from 'react'
import '../CSS/Protfolio_component.css'
import Portfolio_item from './Portfolio_item'
import net from '../assets/images/net.png'
import sos from '../assets/images/sos.png'
import self_introduce from '../assets/images/self_introduce.png'
function Protfolio_component(){

return(
    <>
    <div className='title'>
        Portfolio
    </div>
    <Portfolio_item img={net} main="Netflix copy" sub="This is netflix copy. he reason why I made this project is to improve my React skills and to understand me. By making this project, my React skill was improved and I was able to make a project."></Portfolio_item>
    <Portfolio_item img={sos} main="SoS Project" sub="This project was designed to deliver information for the disabled. I brought the map using Kakao map api and found the location of the subway. And it showed the location of low-phase buses using API of public data portal."></Portfolio_item>
    <Portfolio_item img={self_introduce} main="self_introduce Project" sub="This project is to introduce me.
In this project, there are an introduction about me age, date of birth, technology stack If you want to see a detailed self-introduction about me, you can check it out through this project."></Portfolio_item>
    
    
    </>
)
}
export default Protfolio_component