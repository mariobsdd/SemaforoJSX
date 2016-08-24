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

const TrafficLight = ({state}) => (
  <div>
  <h4>Traffic Light using Redux + React + sass</h4>
    <div class="traffic-light">
        <div class={(state === 'red' ? "red light": "red light off")}></div>
        <div class={(state === 'yel' ? "yellow light": "yellow light off")}></div>
        <div class={(state === 'gre' ? "green light": "green light off")}></div>
    </div>
    <button onClick={ () => store.dispatch({type:"change"})}>Change Light</button>
  </div>
);

//reducer
const light = (state = 'red', action) => {
  if (action.type === "change"){
    switch(state){
      //switch the state of the traffic light
      case 'red':
        return 'gre';
      case 'yel':
        return 'red';
      case 'gre':
        return 'yel';
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
        <TrafficLight state={store.getState()}/>,
        document.getElementById("root")
    );
}

store.subscribe(render);
render();
