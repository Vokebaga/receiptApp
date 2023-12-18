import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { useSidebarContext } from '../../context/sidebarContext';
const Navbar = () =>{

    const {openSidebar} = useSidebarContext();
    const [scrolled, setScrolled] = useState(false);

const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
        setScrolled(true);
    } else {
        setScrolled(false);
    }
}

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
})
    return (
        <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled' : ""}`}>
            <div className='container w-100'>
                <div className='navbar-content text-white'>
                    <div className='brand-and-toggler flex align-center justify-between'>
                        <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>
                            <span className='navbar-brand-text fw-8 '>receiptsApp</span>

                            <Link to="/last" className='navbar-brand mx-5 fw-4 fs-12 flex align-center'>
                                <span className='navbar-brand-text '>Last Receipt</span>
                            </Link>
                        </Link>



                        <div className='navbar-btns flex align-center '>
                            <Link to="/about" className='navbar-brand mx-5 fw-4 fs-12 flex align-center'>
                                <span className='navbar-brand-text '>About us</span>
                            </Link>
                            <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                     className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;