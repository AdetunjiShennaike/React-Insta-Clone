import React from 'react'
// import './PostContainer.css'
import styled from 'styled-components';

//import component and react functions
import CommentContainer from '../CommentSection/CommentContainer'
import PropTypes from 'prop-types'

//styled components
let TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0 30px 20px 0;
`

let ProfileImg = styled.img`
  border-radius: 100%;
  height: 50px;
  widows: auto;
  margin-right: 20px;

`

let PngContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 30px;
  
`

let Likes = styled.h3`
  margin: 0 30px;
`

let PngImgs = styled.img `
  margin-right: 10px;
  width: auto;
  height: 30px;
`

//pass in props to call on the passed down properties from the app.js
function Post(props) {
  return( 
    <div className='post-container'>
    {/* input all items from dummy data objects using props that were passed down from app */}
      <TopBar>
        <ProfileImg src={props.post.thumbnailUrl} alt='user'></ProfileImg> 
        <h3>{props.post.username}</h3>       
      </TopBar>

      <img src={props.post.imageUrl} alt='posted'></img>

      <PngContainer>
        <PngImgs src='./219-heart.png' alt='like' onClick={props.likeButton}></PngImgs>
        <PngImgs src='./111-bubble2.png' alt='comment'></PngImgs>
      </PngContainer>

      <Likes>{props.post.likes} Likes</Likes>
      <CommentContainer 
        comments={props.post.comments}
        timestamp={props.post.timestamp}
        updateLocalData={props.post.updateLocalData}
      />        
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