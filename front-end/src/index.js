import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import store from './store';
import App from './components/app'
import * as actions from './actionTypes';

store.subscribe(() => {

})


store.dispatch({
  type: actions.ADD_USER,
  payload:{
    firstName:"Chris",
    lastName:"Bob"
  }
});

console.log(store.getState());



ReactDOM.render((
    <App />
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
