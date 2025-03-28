import React from 'react';
import SuggestionItem from './SuggestionItem';

function IdentificationResults({ results }) {

    if (results && results.loading) {
        return (
            <div id="identificationResults" className="mt-8 bg-white p-6 rounded-md shadow-md border border-gray-200">
                <p className="text-gray-700">Identifying plant...</p>
            </div>
        );
    }

    if (!results) {
        return (
            <div id="identificationResults" className="mt-8 bg-white p-6 rounded-md shadow-md border border-gray-200">
                <p className="text-gray-500 italic">Plant identification results will appear here.</p>
            </div>
        );
    }

    if (results.error) {
        return (
            <div id="identificationResults" className="mt-8 bg-white p-6 rounded-md shadow-md border border-gray-200">
                <p className="text-red-500">{results.error}</p>
            </div>
        );
    }

    if (results && results.result && results.result.classification && results.result.classification.suggestions && results.result.classification.suggestions.length > 0) {
        // Filter suggestions to only include those with probability > 20%
        const filteredSuggestions = results.result.classification.suggestions.filter(
            suggestion => suggestion.probability > 0.20
        );

        return (
            <div id="identificationResults" className="mt-8 bg-white p-6 rounded-md shadow-md border border-gray-200">
                <h3>Identification Results:</h3>
                {filteredSuggestions.length > 0 ? ( // Check if there are any suggestions after filtering
                    <ul>
                        {filteredSuggestions.map((suggestion, index) => (
                            <SuggestionItem key={index} suggestion={suggestion} />
                        ))}
                    </ul>
                ) : (
                    <p>No plant suggestions found with high confidence (over 20%).</p> // Message if no suggestions after filtering
                )}
            </div>
        );
    } else {
        return (
            <div id="identificationResults" className="mt-8 bg-white p-6 rounded-md shadow-md border border-gray-200">
                <p>No suggestions found for this image.</p>
            </div>
        );
    }
}

export default IdentificationResults;