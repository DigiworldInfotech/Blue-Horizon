
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VILLA_NAME, LOCATION, CONTACT_EMAIL, CONTACT_PHONE, PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon, ClockIcon } from '../constants';

const Footer: React.FC = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">{VILLA_NAME}</h3>
                        <p className="mt-4 text-gray-400">
                            Your exclusive sanctuary for luxury, comfort, and unforgettable memories.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    <FacebookIcon className="w-6 h-6" />
                                </a>
                                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    <InstagramIcon className="w-6 h-6" />
                                </a>
                                <a href="#" aria-label="Youtube" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    <YoutubeIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
                            <li><Link to="/amenities" className="hover:text-sky-400 transition-colors">Amenities</Link></li>
                            <li><Link to="/gallery" className="hover:text-sky-400 transition-colors">Gallery</Link></li>
                            <li><Link to="/booking" className="hover:text-sky-400 transition-colors">Booking</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                             <li className="flex items-start">
                                <MapPinIcon className="w-6 h-6 mr-3 mt-1 text-sky-500 flex-shrink-0" />
                                <span>{LOCATION}</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="w-6 h-6 mr-3 text-sky-500" />
                                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-sky-400 transition-colors">{CONTACT_PHONE}</a>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="w-6 h-6 mr-3 text-sky-500" />
                                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-sky-400 transition-colors">{CONTACT_EMAIL}</a>
                            </li>
                             <li className="flex items-center">
                                <ClockIcon className="w-6 h-6 mr-3 text-sky-500" />
                                <span>{currentDateTime.toLocaleDateString()} - {currentDateTime.toLocaleTimeString()}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {VILLA_NAME}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;