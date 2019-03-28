import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage'

class App extends Component {
  constructor () {
    super()
    //set state for this class
    this.state = {
      
    }
  }

  componentDidMount() {

  }

  //render the entire application
  render() {
    return (
      <div className="container">
        <PostPage/>
      </div>
    );
  }
}

export default App;
