import React from 'react'
import './Comment.css'


function Comment(props) {
  return (
    <div className='comment-container'>
      <div className='completed'>
        <p><strong>{props.post.username}</strong> {props.post.text}</p> 

      </div>
    </div>
  ) 
  
}

export default Comment