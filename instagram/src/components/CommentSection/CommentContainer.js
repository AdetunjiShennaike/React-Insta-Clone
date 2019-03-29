import React from 'react'
import Comment from './Comment'
import styled from 'styled-components';

//import moment to change the timestamp apperance
import moment from 'moment'

//used a shorthand instead of typing locastorage everytime
let stored = window.localStorage

//styled components
let CommentBox =  styled.div`
  margin-left: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgrey;
`

let Time = styled.p`
  color: lightgray;
`

let NewComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  padding: 40px 0;

`

//make an if statement for the comments so that the stored data is used instead of the props
// let comments = []

// if (JSON.parse(stored.getItem('exchange'))){
//   comments = JSON.parse(stored.getItem('exchange'))
// }
// else
// {
//   comments = this.state.content
// }

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      text: '',
      updateLocalData: props.updateLocalData,
    }
  }

  

  //text capture of comment box
  commentCapture = event => {
    // capture the input from the target using the name
    // console.log('event : ', event.target.value)
    
   this.setState({
      [event.target.name]: event.target.value
    })
    
  };

  //new comment function
  updateComments =  event => { 
    //prevent normal action from submitting a new comment
    event.preventDefault();

    //make a new object to add to the array
    let newCmt = {
      id: Date.now(),
      username: 'new champion',
      text: this.state.text   
    };

    //grab the current array to input the new comments into
    let exchange = this.state.comments.slice();
    // console.log(exchange)
    exchange.push(newCmt);

    // store the data into local storage
    stored.setItem('comments', JSON.stringify(exchange))
    // console.log(exchange)
    this.setState({
      comments: JSON.parse(stored.getItem('comments')),
      text:''
    });
    
  }

  render() {
    return (
      <div>
        <CommentBox>        
          {/* <p><strong>{props.post.comments[0].username}</strong> {props.post.comments[0].text}</p> */}
          {/* map each comment object into a single comment */}
          {this.state.comments.map( event =>
            <Comment key={event.id} post={event} />
          )}
          {/*time stamp using past tense words created through moment and fornow */}
          <Time title={moment(this.state.timestamp,'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>{moment(this.state.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()}</Time>
          {/* <p className='time'>{moment().startOf(moment(props.post.timestamp).format()).fromNow()}</p> */}

        </CommentBox>

        <NewComment>{/*console.log(this.state.text)*/}
          <form onSubmit={this.updateComments}>
            <input 
              type='text' 
              size={75} 
              name='text'
              value={this.state.text}
              placeholder='Add A Comment...' 
              onChange={this.commentCapture}>
            </input>
          </form>
        
          <img src='./dots.png' alt='more'></img>
        </NewComment>
      </div> 
    ) 
  } 
  
}

export default CommentContainer