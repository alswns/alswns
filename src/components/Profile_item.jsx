import React from'react'
import '../CSS/Profile_item.css'
function Profile_item(props){

    return(
        <div className='Profile'>
            <div className='main_text'>
                {props.main}
            </div>
            <div className='sub'>
                {
                props.sub.split('\\').map((value)=>{
                    return (<span>{value}<br/></span>)
                })
                }
            </div>
        </div>

    )
}
export default Profile_item