import React, { useRef, useEffect } from 'react';

function CameraPreview({ onCapture }) { // Add onCapture prop
    const videoRef = useRef(null);
    const canvasRef = useRef(null); // Add canvas ref

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing camera:", error);
                alert("Error accessing camera. Please make sure you have a camera and allow camera access.");
            }
        };

        startCamera();
    }, []);

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const base64Image = canvas.toDataURL('image/jpeg'); // Get base64 data URL

            onCapture(base64Image); // Call onCapture prop with base64 image
        }
    };

    return (
        <div> {/* Wrap video and button in a div */}
            <video id="camera-preview" ref={videoRef} autoPlay playsInline className="w-full max-w-md rounded-md shadow-md border border-gray-300 bg-gray-100" style={{ height: 'auto', maxWidth: 'none' }}></video>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas> {/* Hidden canvas */}
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