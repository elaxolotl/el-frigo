"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
let apiKey = "d504274fe0c64388b3ad538dd11bb038";
const IngredientInput = ({ setShowRecipes, setRecipes }) => {
  const [ingredient, setIngredient] = useState(''); 
  const [suggestions, setSuggestions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const router = useRouter();
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

  const handleRemoveIngredient = (id) => {
    const updatedIngredients = ingredients.filter(item => item.id !== id);
    setIngredients(updatedIngredients);
  };

  const fetchRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.map(item => item.name).join(',+')}&apiKey=${apiKey}`);
    const data = await response.json();
    if (data) {
        setRecipes(data)
        setShowRecipes(true);
    }
}
  return (
    <div>
      <input 
        type="text" 
        placeholder="Add ingredient..." 
        autoFocus 
        value={ingredient}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item) => (
            <li key={item.id} className='suggestion-box' onClick={() => {
                ingredients.push(item);
                setIngredient('');
                setSuggestions([]);
            }}>
                {item.name}
            </li>
          ))}
        </ul>
      )}
      <div className='ingredient-box'>
        {ingredients.map((item) => (
          <div key={item.id}>
            <div className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                {item.name}
                <button className="hover:cursor-pointer" onClick={() => handleRemoveIngredient(item.id)}>⨯</button>
            </div>
          </div>
        ))}
      </div>

        <button type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {fetchRecipes()}}>
            Get recipes
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>  
        </button>
    </div>
  );
};

export default IngredientInput;