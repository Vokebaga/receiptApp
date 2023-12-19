import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/js/header";
import Sidebar from "./components/js/sidebar";
import {Home, RecipePage, Error, Category, Last, About, SavedRecipesPage} from "./templates/index";

function App() {
    return (
        <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path="/meal/:id" element={<RecipePage />} />
                    <Route path="/meal/category/:name" element={<Category />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/last" element={<Last />} />
                    <Route path="/saved" element={<SavedRecipesPage />} />
                    <Route path="*" element={<Error />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
