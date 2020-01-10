import React from 'react'
import '../CSS/Profile.css'
import Profile_item from './Profile_item'
function Profile(){

return(
    <>
    <div className='title'>
        <a id='Profile'>
        Profile
        </a>
    </div>

    <Profile_item main="Name" sub="Minjoon Park"></Profile_item>
    <Profile_item main="Birth" sub="Feb 21,2003.18Years old.16 in General Age counting"></Profile_item>
    <Profile_item main="Education" sub="Graduated Seoul Sunil Elementary School.\Graduated Seoul myongji Middle School.\Currently attending Sunrin Internet High School Software Division.\Year 2019, Joined EMOTION, Artificial intelligence Research Club."></Profile_item>
    <Profile_item main="Tech Ability" sub="React, Javascript, MongoDB, Python.\
    HTML, CSS, Django"></Profile_item>
    
    </>
    

)
}

export default Profile