import React, { useRef } from 'react';

function ImageUpload({ onIdentify }) {
    const imageUploadRef = useRef(null);

    const handleUploadClick = async () => {
        const imageFile = imageUploadRef.current.files[0];

        if (!imageFile) {
            alert("Please select an image to upload.");
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
            <input type="file" id="imageUpload" accept="image/*" className="show" ref={imageUploadRef} />
            <button id="uploadButton"
                    className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow-md mt-2"
                    onClick={handleUploadClick}
            >
                Identify Plant
            </button>
        </div>
    );
}

export default ImageUpload;