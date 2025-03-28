import { plantData, findPlantByName } from './data'; // Import plantData and findPlantByName

class PetSafetyService {
  static getToxicityInfo(scientificName) { // Renamed to getToxicityInfo to return more data
    const plantInfo = findPlantByName(scientificName); // Use findPlantByName to find plant data

    if (plantInfo) {
      return {
        isToxic: plantInfo.isToxic,
        toxicityNotes: plantInfo.toxicityNotes || null // Provide notes, default to null if not present
      };
    } else {
      return {
        isToxic: null, // Indicate unknown toxicity
        toxicityNotes: null
      };
    }
  }

  static getToxicityLevel(scientificName) { // Keep getToxicityLevel for simpler status
    const toxicityInfo = PetSafetyService.getToxicityInfo(scientificName);
    if (toxicityInfo.isToxic === true) {
      return 'toxic';
    } else if (toxicityInfo.isToxic === false) {
      return 'non-toxic';
    } else {
      return 'unknown'; // isToxic is null, indicating unknown
    }
  }
}

export default PetSafetyService;