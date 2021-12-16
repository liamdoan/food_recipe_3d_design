import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ContentCard from './components/ContentCard';


function App() {
  const api = "https://www.themealdb.com/api/json/v1/1/search.php?s="

  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  const searchRecipes = async () => {
    
    const res = await fetch(api + query)
    const data = await res.json()
    console.log(data)
    setRecipes(data.meals)
    setLoading(false)
    // setQuery('')
  }

  useEffect(() => {  
    searchRecipes();

    // const timer = setTimeout(() => {
    //   searchRecipes();
    // }, 500);
    // return () => clearTimeout(timer);
  }, [query])


  return (
    <div className="container">
      <div className="title">
        <h1>Food Recipe</h1>
        <p>Just food with a pinch of magic</p>
      </div>
      <SearchBar
        getQuery={q => setQuery(q)}
        value={query}
      />
      <div className="recipes-container">
          <ContentCard 
            isLoading={loading}
            recipes={recipes}
          />
        
      </div>
    </div>
  );
}

export default App;
