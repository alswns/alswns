import React from 'react'
import '../CSS/Main.css'
import kakao from '../assets/images/kakao.png'
import github from '../assets/images/github.png'
import mail from '../assets/images/mail.png'
import facebook from '../assets/images/facebook.png'
function Main(){

    return(
        <div className='all'>



<div className='text'>
    <div className='main_text'>
        박민준
        </div>
        <div className='sub_text'>
        Self-introduction about developers
        </div>
</div>
<li className='link'>
<ul>
        <a href="https://open.kakao.com/o/sZ5PKoSb">
            <img src={kakao} alt=""/>
        </a>
    </ul>
    <ul>
        <a href="https://github.com/alswns">
            <img src={github} alt=""/>
        </a>
    </ul>
    <ul>
        <a href="https://www.facebook.com/profile.php?id=100003381943684">
            <img src={facebook} alt=""/>
        </a>
    </ul>
    <ul>
        <a href="">
            <img src={mail} alt=""/>
        </a>
    </ul>
    
        
            
</li>
</div>

    )
}
export default Main