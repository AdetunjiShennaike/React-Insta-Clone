import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import Search from './components/SearchBar/SearchComponent'
import Post from './components/PostContainer/PostContainer'



class App extends Component {
  constructor () {
    super()
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <Search />
        </header>
        {console.log(this.state.data)}
        {this.state.data.map( item => 
          <Post key={item.id} post={item} />
        )}
      </div>
    );
  }
}

export default App;
