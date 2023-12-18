// LastPage.js

import React, { useEffect } from 'react';
import { useFoodContext } from '../context/foodContext';
import { startFetchLastMeal } from '../actions/foodActions';
import Food from '../components/js/food';

const LastPage = () => {
    const { dispatch, meal } = useFoodContext();

    useEffect(() => {
        startFetchLastMeal(dispatch);
    }, [dispatch]);

    let ingredientsArr = [],
        measuresArr = [],
        singleMeal = {};
    if (meal && meal?.length > 0) {
        for (let props in meal[0]) {
            if (props.includes('strIngredient')) {
                if (meal[0][props]) ingredientsArr.push(meal[0][props]);
            }

            if (props.includes('strMeasure')) {
                if (meal[0][props]) {
                    if (meal[0][props].length > 1) {
                        measuresArr.push(meal[0][props]);
                    }
                }
            }
        }
        console.log('Response from API:', singleMeal);
        console.log('Fetched meals:', meal);

        singleMeal = {
            id: meal[0]?.idMeal,
            title: meal[0]?.strMeal,
            category: meal[0]?.strCategory,
            area: meal[0]?.strArea,
            thumbnail: meal[0]?.strMealThumb,
            instructions: meal[0]?.strInstructions,
            source: meal[0]?.strSource,
            tags: meal[0]?.strTags,
            youtube: meal[0]?.strYoutube,
            ingredients: ingredientsArr,
            measures: measuresArr,
        };
    }

    return (
        <main className="main-content bg-whitesmoke">
            {<Food meal={singleMeal} />}
        </main>
    );
};

export default LastPage;
