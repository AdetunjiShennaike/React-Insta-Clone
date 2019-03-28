import React from 'react'
import Comment from './Comment'

//import moment to change the timestamp apperance
import moment from 'moment'


class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      comment: '',
      updateLocalData: props.updateLocalData,
    }
  }

  //text capture of comment box
  commentCapture = event => {
    // capture the input from the target using the name
    console.log('event : ', event.target.value)
    
    return({
      [event.target.name]: event.target.value
    })
    
  };

  //new comment function
  updateComments =  event => { 
    //prevent normal action from submitting a new comment
    event.preventDefault();

    //make a new object to add to the array
    let newCmt = {
      id: Date.now,
      username: 'new champion',
      text: commentData.texts     
    };

    //grab the current array to input the new comments into
    let exchange = commentData.slice();
    console.log(exchange)
    exchange.push(newCmt);

    // store the data into local storage
    stored.setItem('exchange', JSON.stringify(exchange))
    console.log(exchange)
    this.setState({
      data: JSON.parse(stored.getItem('exchange')),
      task:''
    });
    
  }


  return (){
    <div className='comment'>
        
        {/* <p><strong>{props.post.comments[0].username}</strong> {props.post.comments[0].text}</p> */}
        {/* map each comment object into a single comment */}
        {this.state.comments.map( event =>
          <Comment key={event.id} post={event} />
        )}
        {/*time stamp using past tense words created through moment and fornow */}
        <p className="post-time" title={moment(this.state.timestamp,'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>{moment(this.state.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
        {/* <p className='time'>{moment().startOf(moment(props.post.timestamp).format()).fromNow()}</p> */}

      </div>

      <div className='newComment'>{console.log(this.state.comment.text)}
          <form onSubmit={updateComments}>
            <input 
              type='text' 
              size={75}
              className='commentbox' 
              name='text'
              value={this.state.comment.text}
              placeholder='Add A Comment...' 
              onChange={commentCapture}>
            </input>
          </form>
        
        <img src='./dots.png' alt='more'></img>
      </div>
  } 
  
}

export default CommentContainer