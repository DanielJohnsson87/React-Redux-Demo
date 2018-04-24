import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
// import store from './store/index'
import configureStore from './store/configureStore';
import Loop from './components/Loop'
import Stage from './components/Stage'
import Ball from './components/Ball'
import Elements from './components/Elements'



// import store from "./store/index";
import { moveBall } from "./actions/index";

const store = configureStore({
    elements: [
        {
            id: 1,
            // elementType: 'ball',
            pos: {
                x: 1,
                y: 3
            }
        },
        {
            id: 2,
            // elementType: 'ball',
            pos: {
                x: 50,
                y: 3
            }
        }
    ],
    ball: {
        x: 1,
        y: 3
    },
});

window.store = store;
window.moveBall = moveBall;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <Provider store={store}>
              <Loop>
                  <Stage>
                      <Ball />
                      <Elements/>

                  </Stage>
              </Loop>
          </Provider>


      </div>
    );
  }
}

export default App;