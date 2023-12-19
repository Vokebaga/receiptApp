import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSavedRecipes, removeRecipe } from '../sercives/utils/localStorageUtils';
const SavedRecipesPage = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        setSavedRecipes(getSavedRecipes());
    }, []);

    const handleRemoveRecipe = (recipeId) => {
        removeRecipe(recipeId);
        setSavedRecipes(getSavedRecipes());
    };

    return (
        <div className='section-wrapper'>
            <div className='container'>
                <div className='sc-title'>Saved Recipes</div>
                <section className='sc-meal grid'>
                    {savedRecipes.length > 0 ? (
                        savedRecipes.map((savedRecipe) => (
                            <div className='meal-itm align-center justify-center' key={savedRecipe.id}>

                                <div className='meal-itm-body'>

                                    <div className='meal-itm-body-info flex flex-column'>
                                        <Link to={`/meal/${savedRecipe.id}`} className='meal-itm-img'>
                                            <img src={savedRecipe.thumbnail} alt={savedRecipe.meal} />
                                            <div className='meal-itm-cat bg-orange text-orange fw-6'>{savedRecipe.category}</div>
                                        </Link>
                                        <div className='area fs-14 ls-1 fw-5'>{savedRecipe.area}</div>
                                        <div className='meal fw-15 fw-7 op-09'>{savedRecipe.meal}</div>
                                        <button className='remove-button' onClick={() => handleRemoveRecipe(savedRecipe.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No saved recipes yet.</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default SavedRecipesPage;
