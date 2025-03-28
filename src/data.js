// src/data.js
export const plantData = [
    {
      commonNames: ["Aloe", "True Aloe", "Barbados Aloe"],
      scientificName: "Aloe vera",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Can cause vomiting, lethargy, and diarrhea."
    },
    {
      commonNames: ["African Violet"],
      scientificName: "Saintpaulia spp.",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Generally safe, may cause mild GI upset if consumed in large quantities."
    },
    {
      commonNames: ["Sago Palm", "Coontie Palm", "Cardboard Palm"],
      scientificName: "Cycas revoluta",
      isToxic: true,
      affectedAnimals: ["dogs", "cats", "horses"],
      toxicityNotes: "Highly toxic, can cause liver failure and death."
    },
    {
      commonNames: ["Spider Plant", "Ribbon Plant"],
      scientificName: "Chlorophytum comosum",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Non-toxic, safe for pets."
    },
    {
      commonNames: ["Lily", "Easter Lily", "Tiger Lily"],
      scientificName: "Lilium spp.",
      isToxic: true,
      affectedAnimals: ["cats"],
      toxicityNotes: "Extremely toxic to cats, can cause kidney failure."
    },
    {
      commonNames: ["Azalea", "Rhododendron"],
      scientificName: "Rhododendron spp.",
      isToxic: true,
      affectedAnimals: ["dogs", "cats", "horses"],
      toxicityNotes: "Can cause vomiting, diarrhea, and cardiovascular issues."
    },
    {
      commonNames: ["Boston Fern", "Sword Fern"],
      scientificName: "Nephrolepis exaltata",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Non-toxic, safe for pets."
    },
    {
      commonNames: ["English Ivy", "Sweetheart Ivy"],
      scientificName: "Hedera helix",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Can cause vomiting, abdominal pain, and hypersalivation."
    }
  ];
  
  // Function to find plant by name (case-insensitive)
  export function findPlantByName(name) {
    const lowerName = name.toLowerCase();
    return plantData.find(plant =>
      plant.commonNames.some(common => common.toLowerCase() === lowerName) ||
      plant.scientificName.toLowerCase() === lowerName
    );
  }
  
  // Function to filter plants by toxicity
  export function filterPlantsByToxicity(isToxic) {
    return plantData.filter(plant => plant.isToxic === isToxic);
  }
  
  // Function to filter plants by affected animal
  export function filterPlantsByAnimal(animal) {
    return plantData.filter(plant => plant.affectedAnimals.includes(animal.toLowerCase()));
  }