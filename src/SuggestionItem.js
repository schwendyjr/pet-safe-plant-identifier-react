import React from 'react';
import PetSafetyService from './PetSafetyService';

function SuggestionItem({ suggestion }) {
    const scientificName = suggestion.name;
    const probabilityPercentage = (suggestion.probability * 100).toFixed(2);
    const toxicityInfo = PetSafetyService.getToxicityInfo(scientificName);
    const toxicityLevel = PetSafetyService.getToxicityLevel(scientificName);
    const commonName = suggestion.plant_details?.common_names?.[0]; // Extract common name if available

    let toxicityIndicator = '';
    let toxicityIcon = null;
    let toxicityTooltip = null;

    switch (toxicityLevel) {
        case 'toxic':
            toxicityIndicator = 'Toxic to Pets';
            toxicityIcon = '⚠️';
            toxicityTooltip = toxicityInfo.toxicityNotes;
            break;
        case 'non-toxic':
            toxicityIndicator = 'Non-Toxic to Pets';
            toxicityIcon = '✅';
            toxicityTooltip = "Generally considered non-toxic to pets.";
            break;
        case 'unknown':
        default:
            toxicityIndicator = 'Toxicity Unknown';
            toxicityIcon = '?';
            toxicityTooltip = "Pet toxicity information for this plant is currently unknown.";
            break;
    }

    const displayName = commonName || scientificName; // Use common name if available, else scientific

    return (
        <li className="suggestion-item">
            <div className="suggestion-text">
                <strong>{displayName}</strong> ({probabilityPercentage}%) {/* Display displayName */}
                {toxicityIcon && <span style={{ marginLeft: '5px' }} title={toxicityTooltip}>{toxicityIcon}</span>}
                {toxicityIndicator && <span style={{ marginLeft: '5px', fontStyle: 'italic', color: 'grey' }}>({toxicityIndicator})</span>}
            </div>
            {suggestion.similar_images && suggestion.similar_images.length > 0 && (
                <div className="similar-images-inline">
                    {suggestion.similar_images.slice(0, 3).map((similarImage, index) => (
                        <img
                            key={index}
                            src={similarImage.url_small}
                            alt={`Similar image of ${scientificName}`} // Keep scientific name for alt text
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