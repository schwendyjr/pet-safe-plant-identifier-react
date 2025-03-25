import React, { useRef, useEffect } from 'react';

function CameraPreview() {
    const videoRef = useRef(null);

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

    return (
        <video id="camera-preview" ref={videoRef} autoPlay playsInline className="w-full max-w-md rounded-md shadow-md border border-gray-300 bg-gray-100" style={{height: 'auto', maxWidth: 'none'}}></video>
    );
}

export default CameraPreview;