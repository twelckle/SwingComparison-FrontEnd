import React from 'react';

const VideoShowcase = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <iframe
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/yr-VDNwg0ss?si=JBaBhwg0jNJODGFY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="mt-12 p-4 bg-white border border-gray-300 rounded-md shadow-md max-w-xl text-center">
                    <p className="text-gray-800">
                        Because of server cost and MediaPipe requiring substantial memory requirements, currently this site is not functioning as needed. If you do want it to work you can download the source code from <a href="https://github.com/twelckle/SwingComparison-BackEnd" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a> or <a href="mailto:twelckle@gmail.com" className="text-blue-600 underline">reach out to me directly</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoShowcase;
