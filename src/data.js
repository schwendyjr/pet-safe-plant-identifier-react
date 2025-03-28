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
      toxicityNotes: "Highly toxic, can cause liver failure and death. All parts of the plant are poisonous, but the seeds contain the highest concentration of cycasin."
    },
    {
      commonNames: ["Spider Plant", "Ribbon Plant"],
      scientificName: "Chlorophytum comosum",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Non-toxic, safe for pets."
    },
    {
      commonNames: ["Lily", "Easter Lily", "Tiger Lily", "Stargazer Lily", "Japanese Show Lily", "Rubrum Lily", "Casa Blanca Lily"],
      scientificName: "Lilium spp. (True Lilies)",
      isToxic: true,
      affectedAnimals: ["cats"],
      toxicityNotes: "Extremely toxic to cats, can cause kidney failure. Even small amounts of the plant, including pollen, can be fatal. Not considered toxic to dogs, but best to avoid ingestion."
    },
    {
      commonNames: ["Azalea", "Rhododendron"],
      scientificName: "Rhododendron spp.",
      isToxic: true,
      affectedAnimals: ["dogs", "cats", "horses"],
      toxicityNotes: "Can cause vomiting, diarrhea, weakness, and cardiovascular issues. Contains grayanotoxins which affect sodium channels."
    },
    {
      commonNames: ["Boston Fern", "Sword Fern"],
      scientificName: "Nephrolepis exaltata",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Non-toxic, safe for pets."
    },
    {
      commonNames: ["English Ivy", "Sweetheart Ivy", "Branching Ivy", "European Ivy", "Glacier Ivy", "Needlepoint Ivy"],
      scientificName: "Hedera helix",
      isToxic: true,
      affectedAnimals: ["dogs", "cats", "horses"],
      toxicityNotes: "Can cause vomiting, abdominal pain, hypersalivation, and skin irritation. Berries are more toxic than foliage."
    },
    {
      commonNames: ["Pothos", "Devil's Ivy", "Golden Pothos", "Taro Vine", "Ivy Arum"],
      scientificName: "Epipremnum aureum",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Contains calcium oxalates. Can cause oral irritation, excessive drooling, vomiting, and difficulty swallowing."
    },
    {
      commonNames: ["Snake Plant", "Mother-in-Law's Tongue"],
      scientificName: "Sansevieria trifasciata (now Dracaena trifasciata)", // Note: Scientific name update
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Mildly toxic. Can cause nausea, vomiting, and diarrhea if ingested. More toxic to cats than dogs."
    },
    {
      commonNames: ["ZZ Plant", "Zanzibar Gem", "Eternity Plant"],
      scientificName: "Zamioculcas zamiifolia",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Contains calcium oxalates. Can cause oral irritation, vomiting, and diarrhea. Toxicity is considered mild."
    },
    {
      commonNames: ["Monstera", "Swiss Cheese Plant", "Split-Leaf Philodendron"], //Note: While commonly called Split-Leaf Philodendron, it's actually Monstera
      scientificName: "Monstera deliciosa",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Contains calcium oxalates. Can cause oral irritation, excessive drooling, and vomiting."
    },
    {
      commonNames: ["Orchid (most types)", "Moth Orchid", "Phalaenopsis Orchid"], // Generalizing for common pet-safe orchids
      scientificName: "Orchidaceae family (various genera, e.g., Phalaenopsis)",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Generally non-toxic to dogs and cats. Some orchids may cause mild stomach upset if ingested in large amounts."
    },
    {
      commonNames: ["Calathea (various types)", "Prayer Plant", "Zebra Plant", "Peacock Plant"], // Generalizing for common pet-safe Calatheas
      scientificName: "Calathea spp.",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Considered non-toxic to dogs and cats. May cause mild gastrointestinal upset if ingested in large quantities in sensitive animals."
    },
    {
      commonNames: ["Parlor Palm", "Bamboo Palm", "Good Luck Palm"], // Generalizing for common pet-safe small palms
      scientificName: "Chamaedorea elegans",
      isToxic: false,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Non-toxic to dogs and cats."
    },
    {
      commonNames: ["Dieffenbachia", "Dumb Cane"],
      scientificName: "Dieffenbachia spp.",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Contains calcium oxalates. Can cause intense oral irritation, pain and swelling of mouth, tongue and throat, excessive drooling, and difficulty swallowing."
    },
    {
      commonNames: ["Tulip"],
      scientificName: "Tulipa spp.",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Toxic, especially the bulbs. Can cause intense gastrointestinal irritation, drooling, loss of appetite, central nervous system depression, convulsions, and cardiac abnormalities."
    },
    {
      commonNames: ["Daffodil", "Jonquil", "Narcissus"],
      scientificName: "Narcissus spp.",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Toxic, especially the bulbs. Can cause vomiting, diarrhea, abdominal pain, convulsions, tremors, cardiac arrhythmias, and increased blood pressure."
    },
    {
      commonNames: ["Chrysanthemum", "Mum"],
      scientificName: "Chrysanthemum spp.",
      isToxic: true,
      affectedAnimals: ["dogs", "cats", "horses"],
      toxicityNotes: "Contain sesquiterpene lactones and pyrethrins. Can cause vomiting, diarrhea, hypersalivation, incoordination, and dermatitis."
    },
    {
      commonNames: ["Peace Lily", "Mauna Loa Peace Lily"],
      scientificName: "Spathiphyllum spp.",
      isToxic: true,
      affectedAnimals: ["dogs", "cats"],
      toxicityNotes: "Contain calcium oxalates, causing oral irritation, excessive drooling, vomiting, difficulty swallowing and decreased appetite."
    },
    {
      commonNames: ["Geranium"],
      scientificName: "Pelargonium spp.",
      isToxic: false,
      affectedAnimals: ["dogs", "cats", "horses"],
      toxicityNotes: "Generally non-toxic. Some varieties may cause mild skin irritation or stomach upset in sensitive animals."
    },
    {
        commonNames: ["Wandering Jew", "Inchplant", "Purple Heart"],
        scientificName: "Tradescantia zebrina", // Or Tradescantia pallida for Purple Heart
        isToxic: true, // Mildly toxic, more irritant
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Can cause skin irritation (contact dermatitis) with redness and itching. May also cause mild gastrointestinal upset if ingested."
    },
    {
        commonNames: ["Christmas Cactus", "Thanksgiving Cactus", "Holiday Cactus"],
        scientificName: "Schlumbergera spp.",
        isToxic: false,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Non-toxic, safe for pets."
    },
    {
        commonNames: ["Coleus"],
        scientificName: "Plectranthus scutellarioides (formerly Coleus blumei)", // Scientific name update
        isToxic: true, // Mildly toxic
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Can cause mild vomiting and diarrhea."
    },
    {
        commonNames: ["Philodendron (various types)", "Heartleaf Philodendron"], // Generalizing for common toxic Philodendrons
        scientificName: "Philodendron spp.",
        isToxic: true,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Contain calcium oxalates. Can cause oral irritation, pain and swelling of mouth, tongue and throat, excessive drooling, vomiting, and difficulty swallowing."
    },
    {
        commonNames: ["Prayer Plant", "Rabbit's Foot", "Maranta"],
        scientificName: "Maranta leuconeura",
        isToxic: false,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Non-toxic, safe for pets."
    },
    {
        commonNames: ["Swedish Ivy", "Creeping Charlie"], // Note: "Swedish Ivy" can be used for Plectranthus verticillatus, not true ivy
        scientificName: "Plectranthus verticillatus",
        isToxic: false, // Generally considered non-toxic
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Generally considered non-toxic to dogs and cats. May cause mild stomach upset if ingested in large quantities in sensitive animals."
    },
    {
        commonNames: ["Ficus", "Weeping Fig", "Rubber Plant", "Fiddle Leaf Fig"], // Generalizing for common Ficus types
        scientificName: "Ficus spp.",
        isToxic: true, // Mildly to moderately toxic
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Can cause oral irritation, excessive drooling, vomiting, diarrhea, and skin irritation (dermatitis). Severity varies by Ficus species and amount ingested."
    },
    {
        commonNames: ["Succulents (most types)", "Echeveria", "Sedum", "Sempervivum"], // Generalizing for many non-toxic succulents
        scientificName: "Various succulent genera (e.g., Echeveria, Sedum, Sempervivum)",
        isToxic: false, // Generally non-toxic, exceptions exist
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Most common succulents are considered non-toxic to dogs and cats. However, some species (like Kalanchoe) can be toxic. Always identify specific succulent species for accurate toxicity information."
    },
    {
        commonNames: ["Cactus (most types)", "Prickly Pear", "Saguaro", "Christmas Cactus (non-toxic)"], // Generalizing for many non-toxic cacti
        scientificName: "Various cactus genera (e.g., Opuntia, Cereus, EXCEPT Schlumbergera - Christmas Cactus)",
        isToxic: false, // Generally non-toxic, physical injury risk from spines
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Most cacti are non-toxic, but spines can cause physical injury and irritation. Avoid ingestion due to spines. Christmas Cactus (Schlumbergera) is specifically non-toxic."
    },
      {
        commonNames: ["Bird of Paradise"],
        scientificName: "Strelitzia reginae",
        isToxic: true,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Mildly toxic. Seeds and fruit can cause nausea, vomiting, and mild gastrointestinal upset."
    },
    {
        commonNames: ["Begonia"],
        scientificName: "Begonia spp.",
        isToxic: true,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Toxic, particularly the tubers (roots). Can cause oral irritation, vomiting, and in rare cases, kidney failure. Symptoms are usually mild."
    },
    {
        commonNames: ["Carnation", "Sweet William", "Pinks"],
        scientificName: "Dianthus caryophyllus",
        isToxic: false,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Non-toxic, safe for pets. May cause mild gastrointestinal upset if ingested in large amounts."
    },
    {
        commonNames: ["Snapdragon"],
        scientificName: "Antirrhinum majus",
        isToxic: false,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Non-toxic, safe for pets."
    },
    {
        commonNames: ["Sunflower"],
        scientificName: "Helianthus annuus",
        isToxic: false,
        affectedAnimals: ["dogs", "cats", "horses"],
        toxicityNotes: "Non-toxic, safe for pets and horses. Seeds and stalks are generally considered safe."
    },
    {
        commonNames: ["Bromeliad (most types)"], // Generalizing for many non-toxic Bromeliads
        scientificName: "Bromeliaceae family (various genera, e.g., Aechmea, Vriesea)",
        isToxic: false,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Most Bromeliads are considered non-toxic to dogs and cats. May cause mild stomach upset if ingested in large quantities in sensitive animals."
    },
    {
        commonNames: ["Peperomia (most types)", "Radiator Plant"], // Generalizing for many non-toxic Peperomias
        scientificName: "Peperomia spp.",
        isToxic: false,
        affectedAnimals: ["dogs", "cats"],
        toxicityNotes: "Most Peperomias are considered non-toxic to dogs and cats. May cause mild stomach upset if ingested in large quantities in sensitive animals."
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