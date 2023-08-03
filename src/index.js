import React, { Component } from 'react';
import { render } from 'react-dom';
import AddList from './Task';
import './style.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import "bootstrap/dist/css/bootstrap.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <AddList />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
