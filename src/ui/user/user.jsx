import React,{ useMemo } from 'react';
import "./user.css"

export default function Profile({name,activityStatus}) {
  const text = useMemo(()=>{
    return name.split(" ").map((item) => item[0]).join("");
  },[name])
  console.log(activityStatus);
  
  return (
    <div className='usericon-container' style={{backgroundColor:'#F26A02FF'}}>
        <div className='usericon'>
            {text}
        </div>
        <div className={`user-status ${activityStatus && "available"}`}></div>
    </div>
  )
}