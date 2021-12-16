import React from 'react'
import Spinner from './Spinner'

const ContentCard = ({recipes, isLoading}) => {

    return isLoading 
        ? <Spinner />
        : ( 
            <>
            {recipes 
            ? recipes.map(recipe => (
                <div className="card">
                    <img className="card-img" 
                        src={recipe.strMealThumb} 
                        alt={recipe.strMeal} />
                    <div className="card-info">
                        <span className="card-category">
                            {recipe.strCategory}
                        </span>
                        <h3 className="card-title">
                            {recipe.strMeal}
                        </h3>
                         <a href={"https://www.themealdb.com/meal/" + recipe.idMeal}
                            target="_blank"
                            className='btn'>
                            Ingredients
                        </a>
                       
                    </div>
                </div>
            )) 
            : <p className="err-msg">No recipes found</p>
        }
      </>
    )
}

export default ContentCard
