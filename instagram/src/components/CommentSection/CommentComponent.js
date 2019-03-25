import React, { Component } from 'react'
import './Comment.css'

function Comment(props) {
  return (
    <div className='comment-container'>
        <p><strong>{props.post.username}</strong> {props.post.text}</p> 
    </div>
  ) 
}

export default Comment