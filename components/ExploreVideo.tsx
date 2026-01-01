
import React, { useState } from 'react';
import { YOUTUBE_VIDEO_ID, PlayIcon } from '../constants';

const ExploreVideo: React.FC = () => {
    const [playVideo, setPlayVideo] = useState(false);
    // Fetches a high-quality thumbnail for the video
    const thumbnailUrl = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Explore The Villa</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Take a virtual tour of Blue Horizon 7BHK Villa and immerse yourself in the luxury and comfort that awaits. See our stunning interiors, lush gardens, and sparkling pool come to life.
                </p>

                <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                    {playVideo ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Villa Video Tour"
                            className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                    ) : (
                        <div className="relative w-full h-full cursor-pointer" onClick={() => setPlayVideo(true)}>
                            <img src={thumbnailUrl} alt="Villa tour thumbnail" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300">
                                <div className="bg-white/30 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center text-white hover:bg-white/50 transition-colors">
                                    <PlayIcon className="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ExploreVideo;