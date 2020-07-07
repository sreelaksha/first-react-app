import React, { Component } from 'react';
import { Browser Router } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
    <Browser Router>
          <div className="App">
            <Blog />
          </div>
     </Browser Router>
    );
  }
}

export default App;