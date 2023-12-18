import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SidebarProvider} from "./context/sidebarContext";
import {MealProvider} from "./context/foodContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SidebarProvider>
        <MealProvider>
            <App />
        </MealProvider>
    </SidebarProvider>
);
reportWebVitals();
