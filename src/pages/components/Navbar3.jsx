import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar3.css'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navItems = (
        <>
            <li><Link to="/">होम</Link></li>
            <li><Link to="/team">टीम</Link></li>
            <li><Link to="/events">इवेंट्स</Link></li>
            <li><Link to="/gallery">गैलरी</Link></li>
            <li><Link to="/results">परिणाम</Link></li>
        </>
    );

    const navigate = useNavigate();

    const ClickHandle = (id) => {
        navigate(`/${id}`);
      };

    return (
        <div className={`navbar-container ${sticky ? 'sticky-navbar' : ''}`}>
            <div className="navbar">
                <div className="navbar-start">
                    {/* Replace the text with an image */}
                    <img src="/rajbhashalogo.jpeg" alt="Rajbhasha Logo" className="navbar-logo" style = {{borderRadius:'50%'}} onClick={() => ClickHandle('')}/>
                </div>
                <div className="navbar-center">
                    <ul className="nav-menu">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown" ref={dropdownRef}>
                        <div className="dropdown-button" onClick={toggleDropdown}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                            {navItems}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
