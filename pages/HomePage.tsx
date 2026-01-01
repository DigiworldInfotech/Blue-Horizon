
import React from 'react';
import { Link } from 'react-router-dom';
import { VILLA_NAME, LOCATION, BedDoubleIcon, WavesIcon, CarIcon, WindIcon, UsersIcon, SunIcon } from '../constants';
import ExploreVideo from '../components/ExploreVideo';

const Hero = () => (
    <div className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/6yJ2p0w/hero-background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4">Welcome to {VILLA_NAME}</h1>
            <p className="text-lg md:text-2xl max-w-3xl mb-8">Experience unparalleled luxury and tranquility at our magnificent 7 BHK villa in Kashyapnagar.</p>
            <Link 
                to="/booking"
                className="bg-sky-600 text-white font-semibold py-3 px-10 rounded-lg text-lg hover:bg-sky-700 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
                Book Your Stay
            </Link>
        </div>
    </div>
);

const highlights = [
    { icon: <BedDoubleIcon className="w-10 h-10 text-sky-700" />, title: '7 Luxury Bedrooms' },
    { icon: <WavesIcon className="w-10 h-10 text-sky-700" />, title: 'Private Pool' },
    { icon: <SunIcon className="w-10 h-10 text-sky-700" />, title: 'Spacious Garden' },
    { icon: <CarIcon className="w-10 h-10 text-sky-700" />, title: 'Ample Parking' },
    { icon: <WindIcon className="w-10 h-10 text-sky-700" />, title: 'Fully Air-Conditioned' },
    { icon: <UsersIcon className="w-10 h-10 text-sky-700" />, title: 'Perfect for Groups' },
];

const Highlights = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif text-center font-bold text-gray-800 mb-12">Villa Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                {highlights.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-4">
                        <div className="bg-sky-100 rounded-full p-4 mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = () => {
    const testimonialsData = [
        { name: 'The Sharma Family', quote: 'An absolutely breathtaking property! The amenities were top-notch and the staff was incredibly helpful. Our family had the most memorable vacation.' },
        { name: 'Rohan & Friends', quote: 'Perfect getaway for a large group. The pool and garden area were fantastic for relaxing. We will definitely be back!' },
        { name: 'Corporate Team, XYZ Inc.', quote: 'Our corporate retreat at Blue Horizon was a huge success. The spacious rooms and serene environment were ideal for both work and relaxation.' },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-serif text-center font-bold text-gray-800 mb-12">What Our Guests Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
                            <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                            <p className="text-right font-semibold text-sky-700">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LocationHighlight = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">Discover Our Serene Location</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">Nestled in the tranquil Devargoan village, Kashyapnagar, our villa offers a perfect blend of peaceful seclusion and convenient access to natural beauty. Enjoy the lush green landscapes, breathtaking viewpoints, and pleasant climate.</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">Whether you're looking for a quiet retreat from the city or a base to explore the scenic surroundings, our villa provides an idyllic setting for an unforgettable getaway.</p>
                    <Link to="/contact" className="text-sky-600 font-semibold hover:underline">Explore the Area &rarr;</Link>
                </div>
                <div>
                    <img src="https://i.ibb.co/StYQ5Kk/location-highlight.jpg" alt="Serene landscape of Kashyapnagar" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
                </div>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <Highlights />
            <LocationHighlight />
            <ExploreVideo />
            <Testimonials />
        </div>
    );
};

export default HomePage;