
import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
    return (
        <div className="bg-cover bg-center py-20" style={{ backgroundImage: "url('https://i.ibb.co/55G0zK2/booking-background.jpg')" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-3xl">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;