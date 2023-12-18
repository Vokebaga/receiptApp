import React from 'react';
import Navbar from "./navbar";
import Search from "./search";
import "../css/header.scss";
const Header = () => {
    return (
        <header className='header'>
            <Navbar/>
            <div className='header-content flex align-center justify-end flex-column text-center'>
                <Search/>
                <h1 className='text-white header-title ls-2'>Please, enter meal name</h1>
            </div>
        </header>
    );
};

export default Header;