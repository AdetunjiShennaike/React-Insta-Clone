import React, { Component } from 'react'
import './PostContainer.css'
import Comment from '../CommentSection/CommentComponent'
import moment from 'moment'

let time

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

      <div className='comment'>
        { <h3>{props.post.likes} Likes</h3>}
        {/* <p><strong>{props.post.comments[0].username}</strong> {props.post.comments[0].text}</p> */}
        {props.post.comments.map( event =>
          <Comment key={event.id} post={event} />
        )}
        <p className='time'>{moment().startOf(moment(props.post.timestamp).format()).fromNow()}</p>
        {console.log(moment(Date.now).format('dddd'))}
        {console.log(moment(props.post.time).format())}
        {console.log(moment(JSON.stringify(Date.now)))}
        {console.log(moment(props.post.time, JSON.stringify(Date.now)).fromNow())}

      </div>

      <div className='newComment'>
        {/* <input type='text'>  */}
        <img src='./3bullets.png' alt='more'></img>
      </div>
     
      
    </div>
  ) 
}

export default Post