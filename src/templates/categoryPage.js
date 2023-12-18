import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useFoodContext} from "../context/foodContext";
import {startFetchMealByCategory} from "../actions/foodActions";
import * as PropTypes from "prop-types";
import FoodList from "../components/js/foodList";

function MealList(props) {
    return null;
}

MealList.propTypes = {meals: PropTypes.any};
const CategoryPage = () => {
    const {name} = useParams();
    const { categoryMeals, dispatch, categories } = useFoodContext();
    let catDescription = "";

    if(categories){
        categories.forEach(category => {
            if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
        })
    }

    useEffect(() => {
        startFetchMealByCategory(dispatch, name);
    }, [name, dispatch]);

    return (
        <main className='main-content py-5'>
            <div className='container'>
                <div className='cat-description px-4 py-4'>
                    <h2 className='text-orange fw-8'>{name}</h2>
                    <p className='fs-18 op-07'>{catDescription}</p>
                </div>
            </div>
            {
                (categoryMeals?.length) ? <FoodList meals = { categoryMeals } /> : null
            }
        </main>
    )
}

export default CategoryPage
