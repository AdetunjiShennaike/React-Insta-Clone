import React from 'react'
import styled, { css } from 'styled-components'
// import './Search.css'


let SearchBar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`
let Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`
let UlImgs = styled.img`
  width: auto;
  height: 50px;

  ${props =>
  props.logo &&
  css`
    margin-right: 10px;
  `
}
`

let Search = (props) => {
  return (
    <div className='search-container'>
      <SearchBar>
        <UlImgs logo src='./logo.png' alt='logo' className='logo'></UlImgs>
      
        {/* have the form make the search happen and the input collect the type data for the search */}
        {/* <form onChange={props.searchResult}> */}
        <form>
          <input type='text'
            size={30} 
            onChange={props.searchResult}
            placeholder='Search'>
          </input>
        </form>
        
        <Ul>
          <a href='#'><UlImgs src='./compass.jpg' alt='navigation'></UlImgs></a>
          <a href='#'><UlImgs src='./heart.jpg' alt='liked'></UlImgs></a>
          <a href='#'><UlImgs src='./user.jpg' alt='account'></UlImgs></a>
        </Ul>
      </SearchBar>

    </div>
  ) 
}

export default Search