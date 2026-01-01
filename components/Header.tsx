
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VILLA_NAME, LOGO_URL } from '../constants';

const NavLinks: React.FC<{className?: string}> = ({className}) => {
    const linkClasses = "py-2 px-3 text-gray-600 hover:text-sky-600 transition-colors duration-300";
    const activeLinkClasses = "text-sky-600 font-semibold";
    
    return (
        <>
            <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>About Villa</NavLink>
            <NavLink to="/amenities" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>Rooms & Amenities</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>Gallery</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact</NavLink>
            <Link to="/booking" className="ml-4 bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-md">
                Book Now
            </Link>
        </>
    )
};


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src={LOGO_URL} alt={`${VILLA_NAME} logo`} className="h-10 w-10" />
                            <span className="text-xl font-bold tracking-tight text-gray-800 font-serif">{VILLA_NAME}</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav className="flex items-center space-x-4">
                            <NavLinks />
                        </nav>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <NavLinks />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;