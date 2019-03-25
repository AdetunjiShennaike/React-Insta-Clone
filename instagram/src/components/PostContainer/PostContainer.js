import React, { Component } from 'react'
import './PostContainer.css'
import Comment from '../CommentSection/CommentComponent'

function Post(props) {
  return (
    <div className='post-container'>
      <header className='top-bar'>
        <img src={props.post.thumbnailUrl} alt='user image' className='profileimg'></img> 
        <h3>{props.post.username}</h3>       
      </header>

      <img src={props.post.imageUrl} alt='posted image'></img>

      <div className='pngImgs'>
        <img src='./219-heart.png' alt='like'></img>
        <img src='./111-bubble2.png' alt='comment'></img>
      </div>

      <div className='picture-comment'>
        { <h3>{props.post.likes} Likes</h3>}
        {/* <p><strong>{props.post.comments[0].username}</strong> {props.post.comments[0].text}</p> */}
        {props.post.comments.map( event =>
          <Comment key={event.id} post={event} />
        )}
      </div>
     
      
    </div>
  ) 
}

export default Post