import React from 'react';
import './App.css';

import axios from 'axios';
import Hooks from './hooks'


class App extends React.Component {
  
  state = {
    hello: null
  }

  componentDidMount() {
    axios.get('/hello')
    .then(res => this.setState({hello: res.data}))
    .catch(error => console.log(error))
  }

  render() {
    
    return (
      <div>
        {this.state.hello ? <div>{this.state.hello}</div> : null}
        <Hooks/>
      </div>
    );
  }
}

export default App;
