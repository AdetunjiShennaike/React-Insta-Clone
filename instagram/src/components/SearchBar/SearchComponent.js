import React from 'react'
import './Search.css'

let Search = (props) => {
  return (
    <div className='search-container'>
      <nav className='searchbar'>
        <img src='./logo.png' alt='logo' className='logo'></img>
      
        <input type='text'
          size={30} 
          onChange={props.searchCapture}
          className='search' 
          placeholder='Search'></input>
        
        <ul className='searchbar-imgs'>
          {/* <a href='#'><img src='./compass.jpg' alt='navigation'></img></a>
          <a href='#'><img src='./heart.jpg' alt='liked'></img></a>
          <a href='#'><img src='./user.jpg' alt='account'></img></a> */}
        </ul>
      </nav>

    </div>
  ) 
}

export default Search