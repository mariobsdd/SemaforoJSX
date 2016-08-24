import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import '../styles/style.scss';

//NOTA: EL SCSS/CSS Y HTML QUE SE UTILIZO SE BASO EN EL EJERCICIO
//REALIZADO JUNTO A SAMUEL CHAVEZ EN CLASE UTILIZANDO SOLO JAVASCRIPT
//EL CUAL SE PUEDE ENCONTRAR EN EL SIGUIENTE ENLACE:
//https://github.com/samuelchvez/basic-javascript-trafficlight

/*
const Redux = require('redux');
//const createStore = Redux.createStore;
//const createStore 
const reducer = (state,action) => {
  if (state === undefined){
    state = 'initial state';
  }
  else{
    switch(action.type){
      case 'GO':
        state = 'GO'
        break;
      case 'STOP':
        state = 'STOP'
        break;
      case 'CAUTION':
        state = 'CAUTION'
        break;
    }
  }
  return state;
}


const cautionAction = {
  type: 'CAUTION'
};

const goAction = {
  type: 'GO'
};

const stopAction = {
  type: 'STOP'
};

store.dispatch(stopAction);
console.log('State: '+store.getState());

store.dispatch(cautionAction);
console.log('State: '+store.getState());

store.dispatch(goAction);
console.log('State: '+store.getState());*/

const Traffic = ({state}) => (
  <div>
  <h1>Traffic Light using Redux + React</h1>
    <div class="traffic-light">
        <div class={(state === 0 ? "red light": "red light off")}></div>
        <div class={(state === 1 ? "yellow light": "yellow light off")}></div>
        <div class={(state === 2 ? "green light": "green light off")}></div>
    </div>
    <button onClick={ () => store.dispatch({type:"change"})}>Change Light</button>
  </div>
);

//reducer
const light = (state = 0, action) => {
  if (action.type === "change"){
    switch(state){
      //switch the state of the traffic light
      case 0:
        return 2;
      case 1:
        return 0;
      case 2:
        return 1;
      default:
        return state;
    }
  }
  return state;
}

//reducer -> store
const store = createStore(light);

//render
const render = () => {
  ReactDOM.render(
        <Traffic state={store.getState()}/>,
        document.getElementById("root")
    );
}

store.subscribe(render);
render();
