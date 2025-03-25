import React, { useRef } from 'react';

function ImageUpload({ onIdentify, onImageUploaded }) { // Add onImageUploaded prop
    const imageUploadRef = useRef(null);

    const handleFileChange = async (event) => { // Handle file input change directly
        const imageFile = event.target.files[0];

        if (!imageFile) {
            return; // No file selected, do nothing
        }

        const reader = new FileReader();
        reader.onload = async (loadEvent) => {
            const base64Image = loadEvent.target.result; // Data URL of the image
            onImageUploaded(base64Image); // Call onImageUploaded prop to send data URL to parent
        };
        reader.readAsDataURL(imageFile);
    };

    const handleUploadClick = async () => {
        const imageFile = imageUploadRef.current.files[0];

        if (!imageFile) {
            alert("Please select an image to upload before identifying.");
            return;
        }

        const reader = new FileReader();
        reader.onload = async (event) => {
            const base64Image = event.target.result.split(',')[1];
            onIdentify(base64Image);
        };
        reader.readAsDataURL(imageFile);
    };

    return (
        <div className="mt-4">
            <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="show"
                ref={imageUploadRef}
                onChange={handleFileChange} // Call handleFileChange on input change
            />
            <button
                id="uploadButton"
                className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow-md mt-2"
                onClick={handleUploadClick}
            >
                Identify Plant
            </button>
        </div>
    );
}

export default ImageUpload;