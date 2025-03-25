import React, { useState } from 'react';
import './App.css';
import CameraPreview from './CameraPreview';
import ImageUpload from './ImageUpload';
import IdentificationResults from './IdentificationResults';

function App() {
    const [identificationResult, setIdentificationResult] = useState(null);
    const [uploadedImageURL, setUploadedImageURL] = useState(null); // New state for uploaded image URL

    const handleIdentification = async (base64Image) => {
        const API_KEY = process.env.REACT_APP_API_KEY;

        if (!API_KEY) {
            alert("API Key is missing. Please set REACT_APP_API_KEY in your .env.local file.");
            setIdentificationResult({ error: "API Key missing." });
            return;
        }

        var myHeaders = new Headers();
        myHeaders.append("Api-Key", API_KEY);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "images": [
                base64Image
            ],
            "latitude": 49.207,
            "longitude": 16.608,
            "similar_images": true
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        setIdentificationResult({ loading: true });

        try {
            const response = await fetch("https://plant.id/api/v3/identification", requestOptions);
            const result = await response.json();
            console.log(result);
            setIdentificationResult(result);
        } catch (error) {
            console.error('Error identifying plant:', error);
            setIdentificationResult({ error: "Error identifying plant. Please try again." });
        }
    };

    const handleImageUploaded = (dataURL) => { // Handler for image upload
        setUploadedImageURL(dataURL); // Update state with the uploaded image data URL
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 mt-5 justify-self-center text-gray-800">Pet-Safe Plant Identifier</h1>
            <div id="camera-preview" className="w-full max-w-md rounded-md shadow-md border border-gray-300 bg-gray-100" style={{height: 'auto', maxWidth: 'none'}}>
                {uploadedImageURL ? ( // Conditional rendering
                    <img src={uploadedImageURL} alt="Uploaded Plant Image" style={{width: '100%', height: 'auto', display: 'block'}} /> // Display uploaded image
                ) : (
                    <CameraPreview /> // Display camera preview if no image uploaded
                )}
            </div>
            <ImageUpload onIdentify={handleIdentification} onImageUploaded={handleImageUploaded} /> {/* Pass onImageUploaded prop */}
            <IdentificationResults results={identificationResult} />
        </div>
    );
}

export default App;