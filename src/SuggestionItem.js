import React from 'react';

function SuggestionItem({ suggestion }) {
    const scientificName = suggestion.name;
    const probabilityPercentage = (suggestion.probability * 100).toFixed(2);

    return (
        <li className="suggestion-item">
            <div className="suggestion-text">
                <strong>{scientificName}</strong> ({probabilityPercentage}%)
            </div>
            {suggestion.similar_images && suggestion.similar_images.length > 0 && (
                <div className="similar-images-inline">
                    {suggestion.similar_images.slice(0, 3).map((similarImage, index) => (
                        <img
                            key={index}
                            src={similarImage.url_small}
                            alt={`Similar image of ${scientificName}`}
                            title={`Similar image (Source: ${similarImage.citation}, License: ${similarImage.license_name})`}
                            style={{ width: '50px', marginRight: '5px', border: '1px solid #eee' }}
                        />
                    ))}
                </div>
            )}
        </li>
    );
}

export default SuggestionItem;