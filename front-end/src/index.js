import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from './reducers/reducer';
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import astronautsReducer from "./reducers/astronautsReducer";
import catsReducer from "./reducers/catsReducer"
import accountsReducer from "./reducers/accountsReducer"
import thunk from "redux-thunk";
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
//import { fetchAstronauts } from 'actions/fetchAstronauts'

import App from './components/app'

import { addUser } from './actions'


//import rootReducer from './reducers/rootReducer'
 

//const persistedState = loadState();

const rootReducer = combineReducers({
  counter: counterReducer,
  astronauts: astronautsReducer,
  cats: catsReducer,
  accounts: accountsReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));

//store.dispatch(addUser("312312321331", "Carter"))

console.log(store.getState());

store.subscribe(() => {
  
  console.log("subscription")
});


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('container')
  )
  //,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
