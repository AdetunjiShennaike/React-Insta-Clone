import React, { Component } from 'react';
import './Page.css';
import dummyData from '../../dummy-data'
import newData from '../../new-dummy'
import Search from '../SearchBar/SearchComponent'
import Post from './PostContainer'
import Loader from 'react-loader-spinner'
import styled from 'styled-components';

//make a shorthand value for local storage
let stored = window.localStorage


class PostPage extends Component {
  constructor () {
    super()
    //set state for this class
    this.state = {
      data: [],
      search: '',
      query: ''
    }
  }

  //call data from dummy text with the mount and set state
  componentDidMount() {

    // add a timeput so that the screen loader works
    setTimeout(() => {
      this.setState({
       data: dummyData, newData
      })
    }, 3000);
    
    // if (JSON.parse(stored.getItem('storedPost'))){
    //   data = JSON.parse(stored.getItem('storedPost'))
    // }
    // else{
    //   data = dummyData
    // }
    
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

  //text capture of search box
  searchCapture = event => {
    // capture the input from the target using the name
   this.setState({
      search : event.target.value
    })
    
  };

  // searchResult = event => {
  //   //prevent default behavior
  //   event.preventDefault();

  //   // capture the input from the event target value and have it filter out usernames
  //   this.state.search = event.target.value;
  //   console.log('event: ',this.state.search)
  //   let result = []

  //   result = this.state.data.filter( target => {
  //     target.username.includes(this.state.search)      
  //   });
  //   console.log(target.username)
  //   console.log(result)

  //   result.unshift('your search results')

  //   this.setState({
  //     data: result
  //   });    
  // };
  
  updateLikes() {

  }

  //render the entire application
  render() {
    return (
      <div className="container">
         
        {/* add the search component to the top */}
        <Search 
          searchCapture={this.searchCapture}
          searchResult={this.searchResult}
          />  
        {/* {console.log(this.state.data)} */}

        {/* add load screen icon with a ternary condition to have the loader show while we wait */}
        {this.state.data.length === 0 
        ? 
          <Loader 
            type="CradleLoader"
            color="#00BFFF"
            height="100"	
            width="100"
          />
        //make a else if statement for the search bar 
        : !this.state.search && !this.state.data.filter(target => target.username.includes(this.state.search))
        //display a sorry for there being no results by adding 1 item to the array by default
        //changed how it should work to a not empty plus no data state
        ?
          <h2> 
            Sorry we could not find what you were looking for.
          </h2>
        
        //  map through the data and use it to display all the post items, as well as putting inputs through to the component 
        :
          this.state.data
            .filter(target =>
            target.username.includes(this.state.search))
            
            .map(item => 
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
