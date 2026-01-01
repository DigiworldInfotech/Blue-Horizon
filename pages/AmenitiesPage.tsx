
import React from 'react';

const PageHeader = ({ title, subtitle }: { title: string; subtitle:string }) => (
    <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{title}</h1>
            <p className="text-lg text-gray-300">{subtitle}</p>
        </div>
    </div>
);

const AmenityCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover"/>
        <div className="p-6">
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const GeneralAmenities: React.FC = () => {
    const amenities = [
        "High-Speed Wi-Fi", "Full Air-Conditioning", "24/7 Power Backup", "Daily Housekeeping", "Private Security", "Music System"
    ];

    return (
        <div className="bg-sky-50 p-8 rounded-lg">
             <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">General Comforts</h3>
             <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                {amenities.map(amenity => <li key={amenity} className="flex items-center"><svg className="w-5 h-5 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{amenity}</li>)}
             </ul>
        </div>
    )
}

const AmenitiesPage: React.FC = () => {
    const mainAmenities = [
        { title: '7 Spacious Bedrooms', description: 'Each of our seven bedrooms is a private haven of comfort, featuring plush king-sized beds, premium linens, elegant decor, and ample storage space. All rooms come with attached modern bathrooms.', imageUrl: 'https://i.ibb.co/3Yw1D5M/amenity-bedroom.jpg' },
        { title: 'Attached Modern Bathrooms', description: 'Enjoy the convenience and luxury of pristine, well-equipped bathrooms attached to every bedroom, complete with premium toiletries and hot water supply.', imageUrl: 'https://i.ibb.co/9vQfHqy/amenity-bathroom.jpg' },
        { title: 'Private Swimming Pool', description: 'Dive into relaxation in our crystal-clear private swimming pool. It\'s the perfect spot to cool off, lounge with a book, or enjoy a fun-filled day with family and friends.', imageUrl: 'https://i.ibb.co/RSC5XgN/amenity-pool.jpg' },
        { title: 'Fully-Equipped Kitchen', description: 'Our modern kitchen comes fully equipped with a refrigerator, microwave, stove, water purifier, and all necessary cookware and tableware for your culinary needs.', imageUrl: 'https://i.ibb.co/M2x0V5z/amenity-kitchen.jpg' },
        { title: 'Lush Garden & Lawn', description: 'Step outside into our beautifully manicured garden and lawn. It’s an ideal space for morning yoga, evening strolls, or for children to play freely in a safe environment.', imageUrl: 'https://i.ibb.co/8Y7JgY5/amenity-garden.jpg' },
        { title: 'Secure On-site Parking', description: 'We offer ample and secure private parking space within the villa premises for your vehicles, ensuring peace of mind throughout your stay.', imageUrl: 'https://i.ibb.co/JqjW5hH/amenity-parking.jpg' },
    ];

    return (
        <div>
            <PageHeader title="Rooms & Amenities" subtitle="Luxury facilities for an unforgettable stay."/>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainAmenities.map(amenity => (
                            <AmenityCard key={amenity.title} {...amenity} />
                        ))}
                    </div>
                    <div className="mt-12">
                        <GeneralAmenities />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AmenitiesPage;