import React, { useRef, useEffect } from 'react';

function CameraPreview({ onCapture, cameraStream }) { // Receive cameraStream as prop
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (cameraStream && videoRef.current) { // Check if cameraStream is available
            videoRef.current.srcObject = cameraStream; // Use the passed stream
        }
    }, [cameraStream]); // Effect runs when cameraStream changes (though it shouldn't after initial load)


    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const base64Image = canvas.toDataURL('image/jpeg');

            onCapture(base64Image);
        }
    };

    return (
        <div>
            <video id="camera-preview" ref={videoRef} autoPlay playsInline className="w-full max-w-md rounded-md shadow-md border border-gray-300 bg-gray-100" style={{ height: 'auto', maxWidth: 'none' }}></video>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            <button
                id="captureButton"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md mt-2"
                onClick={captureImage}
            >
                Capture Photo & Identify
            </button>
        </div>
    );
}

export default CameraPreview;