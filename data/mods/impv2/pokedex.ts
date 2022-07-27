export const Pokedex: {[speciesid: string]: SpeciesData} = {
	throhinteleon: {
		num: 1,
		name: "Throh-Inteleon",
		types: ["Water", "Fighting"],
		gender: "M",
		baseStats: {hp: 137, atk: 114, def: 97, spa: 34, spd: 97, spe: 51},
		abilities: {0: "Torrent", H: "Sniper"},
		heightm: 1.3,
		weightkg: 63.2,
		color: "Red",
		eggGroups: ["Human-Like"],
	},
	dhelmiserillaboom: {
		num: 2,
		name: "Dhelmise-Rillaboom",
		types: ["Ghost", "Grass"],
		gender: "N",
		baseStats: {hp: 70, atk: 131, def: 100, spa: 86, spd: 90, spe: 40},
		abilities: {0: "Overgrow", H: "Grassy Surge"},
		heightm: 3.9,
		weightkg: 215.2,
		color: "Green",
		eggGroups: ["Mineral"],
	},
	starmiecinderace: {
		num: 3,
		name: "Starmie-Cinderace",
		types: ["Water", "Fire"],
		gender: "N",
		baseStats: {hp: 61, atk: 76, def: 87, spa: 102, spd: 87, spe: 117},
		abilities: {0: "Blaze", H: "Libero"},
		heightm: 1.1,
		weightkg: 80,
		color: "Purple",
		prevo: "Staryu",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 3"],
	},
	rioluperrserker: {
		num: 4,
		name: "Riolu-Perrserker",
		types: ["Steel", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 62, atk: 108, def: 62, spa: 53, spd: 62, spe: 93},
		abilities: {0: "Battle Armor", 1: "Tough Claws", H: "Steely Spirit"},
		heightm: 0.7,
		weightkg: 20.2,
		color: "Blue",
		evos: ["Lucario"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	heliolisksirfetchd: {
		num: 5,
		name: "Heliolisk-Sirfetchd",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 68, atk: 58, def: 55, spa: 115, spd: 99, spe: 115},
		abilities: {0: "Steadfast", H: "Scrappy"},
		heightm: 1,
		weightkg: 21,
		color: "Yellow",
		prevo: "Helioptile",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Monster", "Dragon"],
	},
	axewmrrime: {
		num: 6,
		name: "Axew-MrRime",
		types: ["Dragon"],
		baseStats: {hp: 76, atk: 145, def: 99, spa: 49, spd: 66, spe: 95},
		abilities: {0: "Tangled Feet", 1: "Screen Cleaner", H: "Ice Body"},
		heightm: 0.6,
		weightkg: 18,
		color: "Green",
		evos: ["Fraxure"],
		eggGroups: ["Monster", "Dragon"],
	},
	corviknightobstagoon: {
		num: 7,
		name: "Corviknight-Obstagoon",
		types: ["Flying", "Normal"],
		baseStats: {hp: 103, atk: 91, def: 110, spa: 56, spd: 89, spe: 71},
		abilities: {0: "Reckless", 1: "Guts", H: "Defiant"},
		heightm: 2.2,
		weightkg: 75,
		color: "Purple",
		prevo: "Corvisquire",
		evoLevel: 38,
		eggGroups: ["Flying"],
	},
	chesnaughtrunerigus: {
		num: 8,
		name: "Chesnaught-Runerigus",
		types: ["Ghost", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 98, def: 111, spa: 67, spd: 69, spe: 58},
		abilities: {0: "Wandering Spirit"},
		heightm: 1.6,
		weightkg: 90,
		color: "Green",
		prevo: "Quilladin",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	grimeralolacursola: {
		num: 9,
		name: "Grimer-Alola-Cursola",
		baseSpecies: "Grimer",
		forme: "Alola",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 126, atk: 126, def: 78, spa: 63, spd: 78, spe: 39},
		abilities: {0: "Weak Armor", H: "Perish Body"},
		heightm: 0.7,
		weightkg: 42,
		color: "Green",
		evos: ["Muk-Alola"],
		eggGroups: ["Amorphous"],
	},
	garchompvenusaur: {
		num: 10,
		name: "Garchomp-Venusaur",
		types: ["Ground", "Poison"],
		baseStats: {hp: 95, atk: 114, def: 83, spa: 70, spd: 74, spe: 89},
		abilities: {0: "Overgrow", H: "Chlorophyll"},
		heightm: 2,
		weightkg: 100,
		color: "Green",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
		otherFormes: ["Garchomp-Venusaur-Mega"],
		formeOrder: ["Garchomp-Venusaur", "Garchomp-Venusaur-Mega"],
	},
	garchompvenusaurmega: {
		num: 10,
		name: "Garchomp-Venusaur-Mega",
		baseSpecies: "Garchomp-Venusaur",
		forme: "Mega",
		types: ["Ground", "Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 132, def: 123, spa: 92, spd: 94, spe: 89},
		abilities: {0: "Thick Fat"},
		heightm: 2.4,
		weightkg: 155.5,
		color: "Green",
		eggGroups: ["Monster", "Grass"],
		requiredItem: "Venusaurite",
	},
	flygongardevoir: {
		num: 11,
		name: "Flygon-Gardevoir",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 80, atk: 99, def: 80, spa: 80, spd: 80, spe: 99},
		abilities: {0: "Synchronize", 1: "Trace", H: "Telepathy"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "White",
		evoLevel: 30,
		eggGroups: ["Human-Like", "Amorphous"],
		otherFormes: ["Flygon-Gardevoir-Mega"],
		formeOrder: ["Flygon-Gardevoir", "Flygon-Gardevoir-Mega"],
	},
	flygongardevoirmega: {
		num: 11,
		name: "Flygon-Gardevoir-Mega",
		baseSpecies: "Flygon-Gardevoir",
		forme: "Mega",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 80, atk: 119, def: 80, spa: 120, spd: 100, spe: 119},
		abilities: {0: "Pixilate"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "White",
		eggGroups: ["Amorphous"],
		requiredItem: "Gardevoirite",
	},
	hitmontopscizor: {
		num: 12,
		name: "Hitmontop-Scizor",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 55, atk: 104, def: 104, spa: 39, spd: 121, spe: 77},
		abilities: {0: "Swarm", 1: "Technician", H: "Light Metal"},
		heightm: 1.8,
		weightkg: 118,
		color: "Red",
		evoType: "trade",
		evoItem: "Metal Coat",
		eggGroups: ["Bug"],
		otherFormes: ["Hitmontop-Scizor-Mega"],
		formeOrder: ["Hitmontop-Scizor", "Hitmontop-Scizor-Mega"],
	},
	hitmontopscizormega: {
		num: 12,
		name: "Hitmontop-Scizor-Mega",
		baseSpecies: "Scizor",
		forme: "Mega",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 55, atk: 124, def: 144, spa: 49, spd: 141, spe: 87},
		abilities: {0: "Technician"},
		heightm: 2,
		weightkg: 125,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Scizorite",
	},
	gloomdiancie: {
		num: 13,
		name: "Gloom-Diancie",
		types: ["Grass", "Fairy"],
		gender: "N",
		baseStats: {hp: 91, atk: 99, def: 106, spa: 129, spd: 114, spe: 61},
		abilities: {0: "Clear Body"},
		heightm: 0.7,
		weightkg: 8.8,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		tags: ["Mythical"],
		otherFormes: ["Gloom-Diancie-Mega"],
		formeOrder: ["Gloom-Diancie", "Gloom-Diancie-Mega"],
	},
	gloomdianciemega: {
		num: 13,
		name: "Gloom-Diancie-Mega",
		baseSpecies: "Gloom-Diancie",
		forme: "Mega",
		types: ["Grass", "Fairy"],
		gender: "N",
		baseStats: {hp: 91, atk: 159, def: 66, spa: 189, spd: 74, spe: 121},
		abilities: {0: "Magic Bounce"},
		heightm: 1.1,
		weightkg: 27.8,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		requiredItem: "Diancite",
	},
	tapukokoslowbro: {
		num: 14,
		name: "Tapu Koko-Slowbro",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 60, atk: 99, def: 73, spa: 82, spd: 64, spe: 112},
		abilities: {0: "Oblivious", 1: "Own Tempo", H: "Regenerator"},
		heightm: 1.6,
		weightkg: 78.5,
		color: "Pink",
		evoLevel: 37,
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["Tapu Koko-Slowbro-Mega"],
		formeOrder: ["Tapu Koko-Slowbro", "Tapu Koko-Slowbro-Mega"],
	},
	tapukokoslowbromega: {
		num: 14,
		name: "Tapu Koko-Slowbro-Mega",
		baseSpecies: "Tapu Koko-Slowbro",
		forme: "Mega",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 60, atk: 99, def: 143, spa: 112, spd: 64, spe: 112},
		abilities: {0: "Shell Armor"},
		heightm: 2,
		weightkg: 120,
		color: "Pink",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Slowbronite",
	},
	tentacruelvolcanion: {
		num: 15,
		name: "Tentacruel-Volcanion",
		types: ["Fire", "Poison"],
		gender: "N",
		baseStats: {hp: 93, atk: 81, def: 76, spa: 93, spd: 140, spe: 117},
		abilities: {0: "Water Absorb"},
		heightm: 1.7,
		weightkg: 195,
		color: "Brown",
		tags: ["Mythical"],
		eggGroups: ["Undiscovered"],
	},
	sandslashalolazygarde: {
		num: 16,
		name: "Sandslash-Alola-Zygarde",
		baseForme: "50%",
		types: ["Ice", "Ground"],
		gender: "N",
		baseStats: {hp: 100, atk: 133, def: 160, spa: 33, spd: 87, spe: 87},
		abilities: {0: "Aura Break"},
		heightm: 5,
		weightkg: 305,
		color: "Green",
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	glaceondragapult: {
		num: 17,
		name: "Glaceon-Dragapult",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 74, atk: 68, def: 126, spa: 149, spd: 109, spe: 74},
		abilities: {0: "Clear Body", 1: "Infiltrator", H: "Cursed Body"},
		heightm: 3,
		weightkg: 50,
		color: "Green",
		evoLevel: 60,
		eggGroups: ["Amorphous", "Dragon"],
	},
	swinubglastrier: {
		num: 18,
		name: "Swinub-Glastrier",
		types: ["Ice", "Ground"],
		gender: "N",
		baseStats: {hp: 116, atk: 116, def: 92, spa: 70, spd: 70, spe: 116},
		abilities: {0: "Chilling Squeal"},
		heightm: 2.2,
		weightkg: 800,
		color: "White",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	slowbrogalarnecrozma: {
		num: 19,
		name: "Slowbro-Galar-Necrozma",
		types: ["Psychic", "Poison"],
		gender: "N",
		baseStats: {hp: 117, atk: 122, def: 116, spa: 122, spd: 86, spe: 37},
		abilities: {0: "Prism Armor"},
		heightm: 2.4,
		weightkg: 230,
		color: "Black",
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	corviknightzarude: {
		num: 20,
		name: "Corviknight-Zarude",
		types: ["Dark", "Flying"],
		gender: "N",
		baseStats: {hp: 119, atk: 106, def: 127, spa: 64, spd: 103, spe: 81},
		abilities: {0: "Leaf Guard"},
		heightm: 1.8,
		weightkg: 70,
		color: "Black",
		eggGroups: ["Undiscovered"],
		tags: ["Mythical"],
	},
	centiskorchhydreigon: {
		num: 21,
		name: "Centiskorch-Hydreigon",
		types: ["Dark", "Fire"],
		baseStats: {hp: 114, atk: 131, def: 75, spa: 103, spd: 103, spe: 74},
		abilities: {0: "Levitate"},
		heightm: 1.8,
		weightkg: 160,
		color: "Blue",
		evoLevel: 64,
		eggGroups: ["Dragon"],
	},
	zarudetyranitar: {
		num: 22,
		name: "Zarude-Tyranitar",
		types: ["Rock", "Grass"],
		baseStats: {hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105},
		abilities: {0: "Sand Stream", H: "Unnerve"},
		heightm: 2,
		weightkg: 202,
		color: "Green",
		evoLevel: 55,
		eggGroups: ["Monster"],
		otherFormes: ["Zarude-Tyranitar-Mega"],
		formeOrder: ["Zarude-Tyranitar", "Zarude-Tyranitar-Mega"],
	},
	zarudetyranitarmega: {
		num: 26,
		name: "Zarude-Tyranitar-Mega",
		baseSpecies: "Zarude-Tyranitar",
		forme: "Mega",
		types: ["Rock", "Grass"],
		baseStats: {hp: 100, atk: 150, def: 145, spa: 70, spd: 115, spe: 115},
		abilities: {0: "Sand Stream"},
		heightm: 2.5,
		weightkg: 255,
		color: "Green",
		eggGroups: ["Monster"],
		requiredItem: "Tyranitarite",
	},
	slowpokegliscor: {
		num: 23,
		name: "Slowpoke-Gliscor",
		types: ["Water", "Flying"],
		baseStats: {hp: 145, atk: 105, def: 105, spa: 65, spd: 65, spe: 25},
		abilities: {0: "Hyper Cutter", 1: "Sand Veil", H: "Poison Heal"},
		heightm: 2,
		weightkg: 42.5,
		color: "Purple",
		evoType: "levelHold",
		evoItem: "Razor Fang",
		evoCondition: "at night",
		eggGroups: ["Bug"],
	},
	torkoalchesnaught: {
		num: 24,
		name: "Torkoal-Chesnaught",
		types: ["Fire", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 79, atk: 96, def: 158, spa: 96, spd: 78, spe: 23},
		abilities: {0: "Overgrow", H: "Bulletproof"},
		heightm: 1.6,
		weightkg: 90,
		color: "Green",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	bibarelpolitoed: {
		num: 186,
		name: "Bibarel-Politoed",
		types: ["Water", "Normal"],
		baseStats: {hp: 96, atk: 104, def: 73, spa: 67, spd: 73, spe: 87},
		abilities: {0: "Water Absorb", 1: "Damp", H: "Drizzle"},
		heightm: 1.1,
		weightkg: 33.9,
		color: "Green",
		evoType: "trade",
		evoItem: "King's Rock",
		eggGroups: ["Water 1"],
	},
	fraxurevespiquen: {
		num: 611,
		name: "Fraxure-Vespiquen",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 76, atk: 135, def: 81, spa: 46, spd: 58, spe: 77},
		abilities: {0: "Pressure", H: "Unnerve"},
		heightm: 1,
		weightkg: 36,
		color: "Green",
		prevo: "Axew",
		eggGroups: ["Monster", "Dragon"],
	},
	qwilfishkomala: {
		num: 211,
		name: "Qwilfish-Komala",
		types: ["Water", "Normal"],
		baseStats: {hp: 71, atk: 103, def: 93, spa: 60, spd: 60, spe: 93},
		abilities: {0: "Autoimmune"},
		heightm: 0.5,
		weightkg: 3.9,
		color: "Gray",
		eggGroups: ["Water 2"],
	},
	galladegogoat: {
		num: 475,
		name: "Gallade-Gogoat",
		types: ["Grass", "Fighting"],
		gender: "M",
		baseStats: {hp: 69, atk: 128, def: 67, spa: 67, spd: 118, spe: 82},
		abilities: {0: "Sap Sipper", H: "Grass Pelt"},
		heightm: 1.6,
		weightkg: 52,
		color: "White",
	},
};
