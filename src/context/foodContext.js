import React, {createContext, useContext, useEffect, useReducer} from "react";
import { foodReducer } from "../reducers/foodReducer";
import { startFetchCategories } from "../actions/foodActions";

const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false
}

const FoodContext = createContext({});
export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(foodReducer, initialState);

    useEffect(() => {
        startFetchCategories(dispatch);
    }, []);

    return (
        <FoodContext.Provider value = {{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </FoodContext.Provider>
    )
}

export const useFoodContext = () => {
    return useContext(FoodContext);
}