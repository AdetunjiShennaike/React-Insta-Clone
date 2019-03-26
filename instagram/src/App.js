import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import newData from './new-dummy'
import Search from './components/SearchBar/SearchComponent'
import Post from './components/PostContainer/PostContainer'



class App extends Component {
  constructor () {
    super()
    this.state = {
      data: dummyData
    }
  }

  componentDidMount() {

    this.state = {
      data: [...dummyData, newData]
    }
    
  }

  render() {
    return (
      <div className="container">
        <Search />  
        {console.log(this.state.data)}
        {this.state.data.map( item => 
          <Post key={item.id} post={item} />
        )}
      </div>
    );
  }
}

export default App;
