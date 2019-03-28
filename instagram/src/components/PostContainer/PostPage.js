import React, { Component } from 'react';
import './Page.css';
import dummyData from '../../dummy-data'
import newData from '../../new-dummy'
import Search from '../SearchBar/SearchComponent'
import Post from './PostContainer'

//make a shorthand value for local storage
let stored = window.localStorage


class PostPage extends Component {
  constructor () {
    super()
    //set state for this class
    this.state = {
      data: []
    }
  }

  //call data from dummy text with the mount and set state
  componentDidMount() {

    this.setState({
       data: dummyData, newData
      // if (JSON.parse(stored.getItem('storedPost'))){
      //   data = JSON.parse(stored.getItem('storedPost'))
      // }
      // else{
      //   data = dummyData
      // }
    }) 
  }

  // //when a new event happens change the local storage
  // updateLocalData() {
  //   //set item that s


  //   // store the data into local storage
  //   stored.setItem('exchange', JSON.stringify(exchange))
  //   console.log(exchange)

  //   // change the data being used on the page to the data that is in local storage
  //   this.setState({
  //     data: JSON.parse(stored.getItem('exchange')),
  //   });
  // }

  // textCapture = event => {
  //   // capture the input from the target using the name
  //   // console.log('event : ', event.target.value)
    
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // searchCapture = event => {
  //   // capture the input from the target using the name and have it filter out usernames
  //   let input = event.target.value;
  //   let result = this.state.data.filter( target => {
  //     target.username === input
  //   });
  //   console.log(result)

  //   this.setState({
  //     data: result
  //   });
  // };
  

  //render the entire application
  render() {
    return (
      <div className="container">
        {/* add the search component to the top */}
        <Search 
          searchCapture={this.searchCapture}
          />  
        {/* {console.log(this.state.data)} */}

        {/* map through the data and use it to display all the post items, as well as putting inputs through to the component */}
        {this.state.data.map( item => 
          <Post key={item.id} 
            post={item} 
            likeButton={this.updateLikes}
            updateLocalData={this.updateLocalData}
            />
        )}
      </div>
    );
  }
}

export default PostPage;
