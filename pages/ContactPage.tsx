
import React from 'react';
import BookingForm from '../components/BookingForm';
import { VILLA_NAME, LOCATION, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_NUMBER, GOOGLE_MAP_EMBED_URL, GOOGLE_360_VIEW_EMBED_URL, PhoneIcon, MailIcon, WhatsAppIcon } from '../constants';

const PageHeader = ({ title, subtitle }: { title: string; subtitle:string }) => (
    <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{title}</h1>
            <p className="text-lg text-gray-300">{subtitle}</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Contact Us" subtitle="We'd love to hear from you." />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Get in Touch</h3>
                                <p className="text-gray-600">
                                    Have questions or ready to book? Reach out to us through any of the methods below.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Address</h4>
                                        <p className="text-gray-600">{VILLA_NAME}<br/>{LOCATION}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MailIcon className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Email</h4>
                                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 hover:text-sky-700">{CONTACT_EMAIL}</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <PhoneIcon className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Phone</h4>
                                        <a href={`tel:${CONTACT_PHONE}`} className="text-gray-600 hover:text-sky-700">{CONTACT_PHONE}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <a href={`tel:${CONTACT_PHONE}`} className="flex-1 text-center bg-sky-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-md flex items-center justify-center space-x-2">
                                    <PhoneIcon className="w-5 h-5"/><span>Call Us</span>
                                </a>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md flex items-center justify-center space-x-2">
                                    <WhatsAppIcon className="w-5 h-5"/><span>WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Map and 360 View Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-12">Find Us & Look Inside</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Google Map */}
                        <div>
                             <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 text-center">Our Location</h3>
                            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-white" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    src={GOOGLE_MAP_EMBED_URL}
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Villa Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Google 360 View */}
                        <div>
                            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 text-center">360° Virtual Tour</h3>
                            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-white" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    src={GOOGLE_360_VIEW_EMBED_URL}
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Villa 360 View"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactPage;