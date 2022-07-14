import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
//Actions
const increments = ()=>{
  return{
    type:'INCREMENT'
  }
}

const decrements = ()=>{
  return {
    type:"DECREMENT"
  }
}

//Reducer
const counter = (state=0,action)=>{
  switch(action.type){
    case'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
  }
}

let store = createStore(counter,applyMiddleware(thunk));

//Display it in log
store.subscribe(()=>console.log(store.getState()))

store.dispatch(increments())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


