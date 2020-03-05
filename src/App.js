import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';


function App(props) {
  const [ingredients, setIngredients] = useState([
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ])
  const [burgerpane, setBurgerpane] = useState([])

  const addIngredients = (e, movedIngredient) => {
    e.preventDefault();
    setBurgerpane([...burgerpane, movedIngredient])
  }

  const clearClick = () => setBurgerpane([])

 
  return (
    <div>
      <IngredientList ingredients={ingredients} onClick={addIngredients}/>
      <BurgerPane burgerpane={burgerpane} onClick={addIngredients} clearClick={clearClick}/>
    </div>
  )
}

export default App;
