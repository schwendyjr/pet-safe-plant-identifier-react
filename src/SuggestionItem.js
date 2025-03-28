// src/SuggestionItem.js
import React from 'react';
import PetSafetyService from './PetSafetyService'; // Import the PetSafetyService

function SuggestionItem({ suggestion }) {
    const scientificName = suggestion.name;
    const probabilityPercentage = (suggestion.probability * 100).toFixed(2);
    const toxicityInfo = PetSafetyService.getToxicityInfo(scientificName); // Get full toxicity info
    const toxicityLevel = PetSafetyService.getToxicityLevel(scientificName); // Keep level for icon/status

    let toxicityIndicator = '';
    let toxicityIcon = null;
    let toxicityTooltip = null; // For tooltip to display notes

    switch (toxicityLevel) {
        case 'toxic':
            toxicityIndicator = 'Toxic to Pets';
            toxicityIcon = '⚠️';
            toxicityTooltip = toxicityInfo.toxicityNotes; // Use toxicityNotes for tooltip
            break;
        case 'mildly-toxic': // You might not have 'mildly-toxic' in your new data, adjust if needed
            toxicityIndicator = 'Mildly Toxic to Pets';
            toxicityIcon = '🐾';
            toxicityTooltip = toxicityInfo.toxicityNotes;
            break;
        case 'non-toxic':
            toxicityIndicator = 'Non-Toxic to Pets';
            toxicityIcon = '✅';
            toxicityTooltip = "Generally considered non-toxic to pets."; // Default non-toxic tooltip
            break;
        case 'unknown':
        default:
            toxicityIndicator = 'Toxicity Unknown';
            toxicityIcon = '?';
            toxicityTooltip = "Pet toxicity information for this plant is currently unknown."; // Default unknown tooltip
            break;
    }

    return (
        <li className="suggestion-item">
            <div className="suggestion-text">
                <strong>{scientificName}</strong> ({probabilityPercentage}%)
                {toxicityIcon && <span style={{ marginLeft: '5px' }} title={toxicityTooltip}>{toxicityIcon}</span>} {/* Add tooltip */}
                {toxicityIndicator && <span style={{ marginLeft: '5px', fontStyle: 'italic', color: 'grey' }}>({toxicityIndicator})</span>}
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