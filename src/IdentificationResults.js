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
        return (
            <div id="identificationResults" className="mt-8 bg-white p-6 rounded-md shadow-md border border-gray-200">
                <h3>Identification Results:</h3>
                <ul>
                    {results.result.classification.suggestions.map((suggestion, index) => (
                        <SuggestionItem key={index} suggestion={suggestion} />
                    ))}
                </ul>
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