import React from 'react';
import NotFound from "../components/js/notFound";
import {useFoodContext} from "../context/foodContext";
import FoodList from "../components/js/foodList";

const Home = () => {
    const {meals} = useFoodContext();

    return (
        <main className='main-content'>
            {(meals === null) ? <NotFound/> : (meals?.length) ? <FoodList meals={meals}/> : ""}
        </main>
    );
};

export default Home;
