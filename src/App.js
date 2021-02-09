import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './numbers';

const number = 46;
const checkTrue = true;
const checkFalse = false;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p style = {{
            color: 'red'
          }}>
            Внесены изменения
          </p>

          <p>
            {checkTrue}
          </p>

          <p>
            {12+12}
          </p>

          <p>
            {checkTrue && 'flag is true'}
          </p>

          <p>
            {checkFalse && 'flag is true'}
          </p>

          <p>
            {checkTrue ? 'Тернарное условие истинно' : 'Тернарное условие истинно'}
          </p>

          <p>
            {true}
            {false}
            {null}
            {undefined}
          </p>

          <p>
            count * length ={count*length}
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
