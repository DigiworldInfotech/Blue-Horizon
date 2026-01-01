
import React from 'react';
import { WHATSAPP_NUMBER, WhatsAppIcon, CONTACT_PHONE, PhoneIcon } from '../constants';

const WhatsAppButton: React.FC = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    const callUrl = `tel:${CONTACT_PHONE}`;

    return (
        <div className="fixed bottom-4 right-4 z-40 flex flex-col space-y-2">
             <a
                href={callUrl}
                className="bg-sky-600 text-white rounded-full w-12 h-12 shadow-lg hover:bg-sky-700 transition-transform transform hover:scale-110 flex items-center justify-center"
                aria-label="Call us"
            >
                <PhoneIcon className="w-6 h-6" />
            </a>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white rounded-full w-12 h-12 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 flex items-center justify-center"
                aria-label="Contact us on WhatsApp"
            >
                <WhatsAppIcon className="w-6 h-6" />
            </a>
        </div>
    );
};

export default WhatsAppButton;