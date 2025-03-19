"use client";

import { useState } from 'react';
let apiKey = "d504274fe0c64388b3ad538dd11bb038";
let currentIngredients = [];
const IngredientInput = () => {
  const [ingredient, setIngredient] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 

  const fetchSuggestions = async (query) => {
    if (query.length > 1) {
      const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&apiKey=${apiKey}`);
      const data = await response.json();
      if (data.results) {
        setSuggestions(data.results);
      } else {
        setSuggestions([]);
      }
    }
    else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setIngredient(value);
    fetchSuggestions(value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Add ingredient..." 
        autoFocus 
        value={ingredient}
        onChange={handleInputChange} 
      />
      
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item) => (
            <li key={item.id} className='suggestion-box' onClick={() => {
                currentIngredients.push(item);
                setIngredient('');
                setSuggestions([]);
            }}>
                {item.name}
            </li>
          ))}
        </ul>
      )}
      <div>
        {currentIngredients.map((item) => (
          <div key={item.id} className='ingredient-box'>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientInput;