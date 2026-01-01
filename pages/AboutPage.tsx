
import React from 'react';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{title}</h1>
            <p className="text-lg text-gray-300">{subtitle}</p>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="About The Villa" subtitle="Discover your home away from home." />
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="prose lg:prose-lg max-w-none text-gray-700">
                            <h2 className="text-3xl font-serif font-bold text-gray-800">Your Luxurious Escape Awaits</h2>
                            <p>
                                Welcome to Blue Horizon 7BHK Villa, a premier 7 BHK property designed for those who seek luxury, comfort, and privacy. Spread across a vast, beautifully landscaped area, our villa is a testament to modern architecture blended with homely warmth.
                            </p>
                            <p>
                                From the moment you step in, you'll be greeted by spacious living areas, elegantly furnished interiors, and an ambiance of sheer tranquility. Every corner of the villa has been thoughtfully designed to cater to the needs of our guests, ensuring a stay that is both indulgent and relaxing.
                            </p>
                             <p>
                                Our mission is to provide an exclusive and unforgettable experience. Whether it's a family vacation, a get-together with friends, or a corporate offsite, Blue Horizon 7BHK Villa is the perfect backdrop for creating lasting memories.
                            </p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/hZ5yS0S/about-interior.jpg" alt="Villa Interior" className="rounded-lg shadow-2xl w-full"/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-gray-800 mb-10">Ideal For Every Occasion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {['Family Stays', 'Group Getaways', 'Celebrations & Parties', 'Corporate Retreats'].map(item => (
                            <div key={item} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                                <h3 className="text-xl font-semibold font-serif text-sky-700 mb-2">{item}</h3>
                                <p className="text-gray-600">Create cherished moments in a setting that feels just like home, but with a touch of luxury.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-10">Nearby Attractions</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <img src="https://i.ibb.co/C0c9GgT/attraction-1.jpg" alt="Nearby lake" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                                <h3 className="text-white text-xl font-bold">Scenic Lakes</h3>
                            </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <img src="https://i.ibb.co/MfZg4Yx/attraction-2.jpg" alt="Mountain viewpoint" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                                <h3 className="text-white text-xl font-bold">Breathtaking Viewpoints</h3>
                            </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <img src="https://i.ibb.co/PN4HqXv/attraction-3.jpg" alt="Historic Fort" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                                <h3 className="text-white text-xl font-bold">Historic Forts</h3>
                            </div>
                        </div>
                     </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;