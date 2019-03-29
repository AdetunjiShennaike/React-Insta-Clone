import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      if(localStorage.getItem('username')) {
        this.setState({ loggedIn: true })
      }
      else {
        this.setState({ loggedIn: false })
      }
    }

    render() {
      return this.state.loggedIn
        ? <FirstComponent />
        : <SecondComponent />;
    }
  };

export default withAuthenticate;
