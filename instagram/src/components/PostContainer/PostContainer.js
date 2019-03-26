import React, { Component } from 'react'
import './PostContainer.css'
import Comment from '../CommentSection/CommentComponent'
import moment from 'moment'
import PropTypes from 'prop-types'

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

        
        {console.log(props.post.timestamp)}
        {console.log(moment(props.post.timestamp).isValid())}
        {console.log(moment(props.post.timestamp).format('MMMM Do YYYY, h:mm:ss a'))}
        {console.log(moment(props.post.timestamp, (moment(JSON.stringify(Date.now)).format('MMMM Do YYYY, h:mm:ss a'))).fromNow())}
        {console.log(moment(JSON.stringify(Date.now)))}
        {console.log(moment(props.post.timestamp, JSON.stringify(Date.now)).fromNow())}

      </div>

      <div className='newComment'>
        <input type='text' className='commentbox' placeholder='Comment'></input>
        <img src='./dots.png' alt='more'></img>
      </div>
     
      
    </div>
  ) 
}

Post.propTypes = {
  post: PropTypes.arrayOf (
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      timestamp: PropTypes.string,
      likes: PropTypes.number,
      id: PropTypes.number,
      comments: PropTypes.objectOf ({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    })
  )
  
}

export default Post