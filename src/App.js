import React, {useEffect, useState} from 'react';
import './App.css';

import Form from "./components/Form";

const App = () => {

  const APP_ID = "04bb07a1";
  const APP_KEY = "7e9b99cbf0a9dd7d2240a32a42f9bc6f";
  

  useEffect(() => {
    
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }


  return (
    <div className="App">
      <form>
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
