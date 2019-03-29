import React from 'react';
import styled, { css } from 'styled-components';

let Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  max-width: 500px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 20px 0;
  padding: 70px;
`

let Header = styled.header`
  margin-bottom: 10px;
`

let Title = styled.h1`
  font-family: 'Lobster Two', cursive;
  font-size: 4rem;
  text-align: center;
`
let TagLine = styled.p`
  font-size: 2rem;
  text-align: center;
  color: grey;

  ${props => 
    props.bold &&
    css`
    font-weight: bold;
    `
  }  
  ${props =>
    props.lined &&
    css`
    text-decoration: none;
    `
  }
`

let Button = styled.button`
  color: white;
  border-radius: 10px;
  background-color: #3897F0;
  border: 0;
  border-radius: 10px;
  padding: 15px;
  margin-top: 5px;
  width: 100%;
  font-weight: bolder;
  font-size: 1.5rem;
`

let LoginInput = styled.input`
  text-align: left;
  background-color: #FAFAFA;
  border: 1px solid lightgrey;
  width: 100%;
  height: 30px;
  margin-top: 5px;
`

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      item: '',
      username: '',
      password: '',
    };
  }

  handleChanges = event => {
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  login = event => {
    event.preventDefault();
    if (this.state.username === ''){
      this.state.username = 'john'
      localStorage.setItem('username',this.state.username);
      this.setState({ 
        password: '' 
      });
      window.location.reload();
    }
    else {
      localStorage.setItem('username',this.state.username);
      this.setState({ 
        password: '' 
      });
      window.location.reload();
    }
  }

  render() {
    return (
      <Container>
        <Header className="wrap-login-header">
          <Title>Instagram</Title>
          <TagLine bold>Sign up to see photos and videos from your friends.</TagLine>
          <Button type='submit' onClick={this.login}><img></img>Log in with Facebook</Button>
        </Header>

        <TagLine bold lined>OR</TagLine>

        <form
          className="login-form"
          onSubmit={this.login}
        >
          <LoginInput
            type="text"
            name='item'
            value={this.state.item}
            placeholder="Mobile Number or Email"
            bsSize="lg"
            onChange={this.handleChanges}
          />

          <LoginInput
            type="text"
            name='name'
            value={this.state.name}
            placeholder="Full Name"
            bsSize="lg"
            onChange={this.handleChanges}
          />

          <LoginInput
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
            bsSize="lg"
            onChange={this.handleChanges}
          />

          <LoginInput
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <Button type="submit">Sign Up</Button>
        </form>

        <TagLine>By signing up, you agree to our <strong>Terms , Data Policy</strong> and <strong>Cookies Policy .</strong></TagLine>
      </Container>
    )
  }
}

export default LoginPage;
