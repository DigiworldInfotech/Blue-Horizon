
import React, { useState, useRef } from 'react';
import { GOOGLE_FORM_ACTION_URL } from '../constants';

const BookingForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef<HTMLFormElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // This check ensures the user has replaced the placeholder URL.
        if (GOOGLE_FORM_ACTION_URL === "YOUR_GOOGLE_FORM_ACTION_URL_HERE" || GOOGLE_FORM_ACTION_URL.includes("spreadsheets/d/")) {
            setError("Form is not configured correctly. Please replace the placeholder URL in 'constants.tsx' with your actual Google Form action URL.");
            return;
        }
        
        setIsSubmitting(true);
        setError('');

        const form = formRef.current;
        if (form) {
            form.submit();
        }

        // The 'load' event on the iframe will confirm submission
    };
    
    const handleIframeLoad = () => {
        if(isSubmitting) {
            setIsSubmitting(false);
            setSubmitted(true);
            formRef.current?.reset();
        }
    };

    if (submitted) {
        return (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-serif font-semibold mb-2">Thank You!</h3>
                <p>Your enquiry has been sent successfully. We will get back to you shortly.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                    Send another enquiry
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-full max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-2">Enquiry Form</h2>
            <p className="text-center text-gray-500 mb-8">Fill out the form below and we'll get back to you soon.</p>
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            )}
            
            <iframe name="hidden_iframe" ref={iframeRef} style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
            
            <form ref={formRef} onSubmit={handleSubmit} action={GOOGLE_FORM_ACTION_URL} method="POST" target="hidden_iframe">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*
                    IMPORTANT: The 'name' attributes below (e.g., "entry.123456789") MUST EXACTLY MATCH
                    the field entry IDs from YOUR Google Form.

                    HOW TO GET THE ENTRY IDs:
                    1. After creating your Google Form, click the 'Preview' eye icon to open the live form.
                    2. Right-click on the first input field (e.g., Full Name) and choose "Inspect".
                    3. Look for the <input> element. You will find its 'name' attribute, which looks like "entry.123456789".
                    4. Copy that full "entry.xxxxxx" value.
                    5. Paste it as the 'name' for the corresponding input field in this file.
                    6. Repeat for all other fields (Mobile Number, Email, etc.).
                    */}
                    <div className="md:col-span-2">
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" name="entry.2005620554" id="full-name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div>
                        <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                        <input type="tel" name="entry.1045781291" id="mobile-number" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="entry.1065046570" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div>
                        <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                        <input type="date" name="entry.1000000" id="check-in" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div>
                        <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                        <input type="date" name="entry.1000001" id="check-out" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                        <input type="number" name="entry.1000002" id="guests" min="1" max="20" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Special Request</label>
                        <textarea name="entry.1000003" id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"></textarea>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-sky-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-lg text-lg disabled:bg-gray-400">
                        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;