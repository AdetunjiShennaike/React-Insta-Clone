import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage'
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';

const PageSwitch = withAuthenticate(PostPage)(LoginPage);

function App() {
    return (
      <div className='container'>
        <PageSwitch />
      </div>
    );
}

export default App;
