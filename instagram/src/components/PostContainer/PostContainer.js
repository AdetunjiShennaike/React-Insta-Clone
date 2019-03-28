import React from 'react'
import './PostContainer.css'

//import component and react functions
import CommentContainer from '../CommentSection/CommentContainer'
import PropTypes from 'prop-types'


//pass in props to call on the passed down properties from the app.js
class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      username: props.post.username,
      id: props.post.Id,
      thumbnailUrl: props.post.thumbnailUrl,
      imageUrl: props.post.imageUrl,
      like: props.post.likes,
      timestamp: props.post.timestamp,
      comments: props.post.comments,
      updateLocalData: props.post.updateLocalData,

    }
  
  }

  updateLikes = event => {
    event.preventDefault();

    this.setstate({
      
    })
  }


  return (){
    <div className='post-container'>
    {/* input all items from dummy data objects using props that were passed down from app */}
      <header className='top-bar'>
        <img src={props.post.thumbnailUrl} alt='user' className='profileimg'></img> 
        <h3>{props.post.username}</h3>       
      </header>

      <img src={props.post.imageUrl} alt='posted'></img>

      <div className='pngImgs'>
        <img src='./219-heart.png' alt='like' onClick={props.likeButton}></img>
        <img src='./111-bubble2.png' alt='comment'></img>
      </div>

      <h3>{props.post.likes} Likes</h3>
      <CommentContainer 
        comments={this.state.comments}
        timestamp={this.state.timestamp}
        updateLocalData={this.updateLocalData}
      />
     
      
    </div>
  } 
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