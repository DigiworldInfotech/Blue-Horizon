
import React, { useState, useEffect } from 'react';

const images = [
    { id: 1, src: 'https://i.ibb.co/z5Y0N5F/gallery-1.jpg', alt: 'Villa view 1' },
    { id: 2, src: 'https://i.ibb.co/QkL7H7t/gallery-2.jpg', alt: 'Villa view 2' },
    { id: 3, src: 'https://i.ibb.co/yY1SgCg/gallery-3.jpg', alt: 'Villa view 3' },
    { id: 4, src: 'https://i.ibb.co/d2XfC3Z/gallery-4.jpg', alt: 'Villa view 4' },
    { id: 5, src: 'https://i.ibb.co/yQjK1zZ/gallery-5.jpg', alt: 'Villa view 5' },
    { id: 6, src: 'https://i.ibb.co/zX9Z7B1/gallery-6.jpg', alt: 'Villa view 6' },
    { id: 7, src: 'https://i.ibb.co/jGGxW3G/gallery-7.jpg', alt: 'Villa view 7' },
    { id: 8, src: 'https://i.ibb.co/B2vQxV8/gallery-8.jpg', alt: 'Villa view 8' },
    { id: 9, src: 'https://i.ibb.co/WcQ7v1V/gallery-9.jpg', alt: 'Villa view 9' },
    { id: 10, src: 'https://i.ibb.co/gDFsC7t/gallery-10.jpg', alt: 'Villa view 10' },
    { id: 11, src: 'https://i.ibb.co/WvG4h1m/gallery-11.jpg', alt: 'Villa view 11' },
    { id: 12, src: 'https://i.ibb.co/z7Hn7Yj/gallery-12.jpg', alt: 'Villa view 12' },
    { id: 13, src: 'https://i.ibb.co/6Pqj4f4/gallery-13.jpg', alt: 'Villa view 13' },
    { id: 14, src: 'https://i.ibb.co/tZ5H5X1/gallery-14.jpg', alt: 'Villa view 14' },
    { id: 15, src: 'https://i.ibb.co/4Tq7h0Q/gallery-15.jpg', alt: 'Villa view 15' },
    { id: 16, src: 'https://i.ibb.co/9V0Z4M2/gallery-16.jpg', alt: 'Villa view 16' },
    { id: 17, src: 'https://i.ibb.co/tXbC7B6/gallery-17.jpg', alt: 'Villa view 17' },
    { id: 18, src: 'https://i.ibb.co/5Kq3nKj/gallery-18.jpg', alt: 'Villa view 18' },
];

const Lightbox: React.FC<{
    images: { id: number; src: string; alt: string }[];
    currentIndex: number | null;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrev, onNext]);

    if (currentIndex === null) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={onClose}>
            <button className="absolute top-4 right-4 text-white text-4xl" onClick={onClose}>&times;</button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&#8249;</button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl" onClick={(e) => { e.stopPropagation(); onNext(); }}>&#8250;</button>
            <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-full object-contain" />
            </div>
        </div>
    );
};

const PageHeader = ({ title, subtitle }: { title: string; subtitle:string }) => (
    <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{title}</h1>
            <p className="text-lg text-gray-300">{subtitle}</p>
        </div>
    </div>
);


const GalleryPage: React.FC = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const showPrev = () => setLightboxIndex((prev) => (prev !== null ? (prev + images.length - 1) % images.length : null));
    const showNext = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));

    return (
        <div>
            <PageHeader title="Gallery" subtitle="A glimpse into the luxury that awaits you." />

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div key={image.id} className="group cursor-pointer overflow-hidden rounded-lg shadow-md" onClick={() => openLightbox(index)}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Lightbox 
                images={images}
                currentIndex={lightboxIndex}
                onClose={closeLightbox}
                onPrev={showPrev}
                onNext={showNext}
            />
        </div>
    );
};

export default GalleryPage;