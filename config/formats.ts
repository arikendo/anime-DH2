// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	///////////////////////////////////////////////////////////////
	///////////////////// Gen 9 Pet Mods //////////////////////////
	///////////////////////////////////////////////////////////////
	
	{
		section: "Gen 9 Pet Mods",
		column: 1,
		// name: "gen9petmods",
	},
	{
		name: "[Gen 9] Anime",
		threads: [],
		desc: `Anime`,
		mod: 'anime',
		banlist: ['All Pokemon', 'Baton Pass'],
		unbanlist: [
				'Dio',
				'Killua',
				'Luffy',
				'Chopper',
				'Robin',
				'Zoro',
				'Nami'
		]
	},
	///////////////////////////////////////////////////////////////
	///////////////////// Gen 8 Pet Mods //////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Gen 8 Pet Mods",
		column: 1,
		// name: "gen8petmods",
	},
	{
		name: "[Gen 8] Abilitypos",
		desc: `<b>Abilitypos</b>: In this Pet Mod, your goal is to take an ability and change a few letters in its name to make it brand new. `,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/abilitypos-slate-3-keen-eye-clear-body-and-inner-focus.3703365/">Abilitypos on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1B2LTJv_UnAG_vDGlmyyA00qL6KcY2aFkZ6NCixbdpmU/edit#gid=1595974891">Spreadsheet</a>`,
		],
		ruleset: ['Standard NatDex'],
		banlist: ['All Pokemon'],
		unbanlist: ['Sceptile', 'Charizard', 'Inteleon', 'Lanturn', 'Larvesta', 'Aggron', 'Sableye', 'Carbink', 'Entei', 'Hatterene', 'Raticate-Alola', 'Lapras'],
		mod: "abilitypos",
	},
	{
		name: "[Gen 8] Alternatium",
		desc: `<b>Alternatium</b>: A metagame made up of only Pokemon with alternate forms exist, with all of them being seperate and unique Pokemon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/alternatium-slate-7-slow-twins-slate-also-vote-in-poll.3683767/">Alternatium on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1bvvkPg1CrUBJFJJeuwkts8elfJcEcahGOoHm-vGBXOI/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'alternatium',
		ruleset: ['Standard NatDex', 'Data Mod', 'Z-Move Clause', 'Dynamax Clause'],
		banlist: ['All Pokemon', 'Slowbronite', 'Red Orb', 'Blue Orb'],
		unbanlist: [
					'Silvally', 'Silvally-Bug', 'Silvally-Dark', 'Silvally-Dragon', 'Silvally-Electric', 'Silvally-Fairy', 'Silvally-Fighting', 'Silvally-Fire', 'Silvally-Flying', 'Silvally-Ghost',
					'Silvally-Grass', 'Silvally-Ground', 'Silvally-Ice', 'Silvally-Poison', 'Silvally-Psychic', 'Silvally-Rock', 'Silvally-Steel', 'Silvally-Water', 'Pikachu', 'Pikachu-Rock-Star',
					'Pikachu-Belle', 'Pikachu-Idol', 'Pikachu-PhD', 'Pikachu-Libre', 'Pikachu-Partner', 'Pikachu-Starter', 'Darmanitan', 'Darmanitan-Zen', 'Darmanitan-Galar', 'Darmanitan-Galar-Zen',
					'Aegishield', 'Aegislash', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Rotom', 'Rotom-Heat', 'Rotom-Wash', 'Rotom-Frost', 'Rotom-Fan', 'Rotom-Mow', 'Dugtrio',
					'Dugtrio-Alola', 'Muk', 'Muk-Oilslick', 'Slowbro', 'Slowbro-Galar', 'Slowking', 'Slowking-Galar', 'Tornadus', 'Cummulus', 'Thundurus', 'Thundurus-Therian', 'Landorus', 'Landorus-Bengal',
					'Vivillon-Fancy', 'Vivillon-Spirit', 'Vivillon-Combat', 'Genesect', 'Genesect-Douse', 'Genesect-Molten', 'Genesect-Freezer', 'Genesect-Type-Delta', 'Groudon', 'Groudon-Primal', 'Kyogre',
					'Kyogre-Primal', 'Deoxys-Wood', 'Deoxys-Gem', 'Deoxys-Tank', 'Deoxys-Speed', 'Sandslash-Lustrous', 'Sandslash-Alola', 'Ninetales-Steamwork', 'Ninetales-Alola', 'Giratina', 'Giratina-Shadow',
					'Eternatus', 'Manustorm', 'Exeggutor', 'Exeggutor-Lighthouse', 'Weezing', 'Weezing-King', 'Raticate', 'Raticate-Alola', 'Linoone', 'Linoone-Punk', 'Castform', 'Castform-Firestorm',
					'Castform-Thunderstorm', 'Castform-Snowy', 'Wormadam', 'Wormadam-Sandy', 'Fibormadam', 'Farfetch\u2019d', 'Farfetch\u2019d-Galar', 'Corsola', 'Corsoul', 'Shaymin', 'Shaymin-Sky', 'Keldeo',
					'Swordeo', 'Meloetta', 'Meloetta-Fighter', 'Lycanday', 'Lycanroc-Spectre', 'Lycanroc-Dusk', 'Gourgeist', 'Gourgeist-Fae', 'Gourgeist-Pulpy', 'Supergeist', 'Cramorant', 'Cramorant-Swimmer',
					'Cramorant-Gorging', 'Eiscue', 'Eiscue-Noice', 'Mimikyu', 'Mimikyu-Sparkstone', 'Morpeko-Marsh', 'Morvilant', 'Zygarde-Wyrm', 'Zygarde-Canid', 'Zygarde-Goliath',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (speciesTable[template.id]) {
					return ["You are limited to one of each Pokémon by Species Clause (except for different formes). ", "You have more than one " + template.id + "."];
				}
				speciesTable[template.id] = true;
			}
		},
	},
	{
		name: "[Gen 8] Black Market",
		mod: "blackmarket",
		desc: [
			`<b>Black Market</b>: A Pet Mod where users build Fakemon over the span of a tournament.`
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/tournament-black-market-starting-phase.3704607/">Black Market on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/10BkMc61hCnfEc6XpjozDrQ20zMVAt5rArlvjsCENR7I/edit#gid=0">Spreadsheet</a>`,
		],
		ruleset: ['Standard NatDex'],
		unbanlist: ['Dragapult', 'Tornadus-Therian', 'Blaziken', 'Greninja-Ash', 'Kyurem'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
			'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z'
		],
	},
	{
		name: "[Gen 8] Bust A Move",
		desc: [
			"<b>Bust A Move</b>: A Pet Mod where previously competitively useless moves are given much needed makeovers.",
		  ],
		threads: [
		  `&bullet; <a href="https://www.smogon.com/forums/threads/bust-a-move-slate-5-sing-synchronoise-and-sparkling-aria.3681338/">Bust A Move on Smogon Forums</a>`,
		  `&bullet; <a href="https://docs.google.com/spreadsheets/d/149hYZMn1N92ofxiBdJEQ78g1EaQdBmex2wHCK3Fyais/edit?usp=sharing">Spreadsheet</a>`,
		  ],
		mod: 'bustamove',
		ruleset: ['Standard NatDex'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed',
			'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base',
			'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Magearna', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		teambuilderFormat: "OU",
	},
	{
		name: "[Gen 8] CCaPM 2022",
		desc: `<b>ccapm</b>: ccapm `,
		mod: "ccapm2022",
		ruleset: ['Standard', 'Data Mod', 'Godly Gift Mod'],
		banlist: ['AG', 'Uber',
				  'Blissey', 'Chansey', 'Dragapult', 'Hawlucha', 'Marowak-Alola', 'Melmetal', 'Nidoking', 'Nidoqueen', 'Pikachu', 'Toxapex',
				  'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
				  'Huge Power', 'Moody', 'Arena Trap', 'Pure Power', 'Shadow Tag',
				  'Baton Pass'],
		restricted: ['Unicorn', 'Platypus', 'Power Plant', 'Druddigod', 'Snek', 'Ghost Car', 'Trapjaw Fireant', 'Duck', 'groundpoison', 'groundpoison-Crystallized', 'Metal Snek', 'Roc With Ram Horns', 'ghostnormal', 'Cartesian Plane Dragon', 'better than cinderace as soccer', 'Statue'],
	},
	{
		name: "[Gen 2] Crystal: Sevii Islands",
		desc: ["<b>Crystal: Sevii Islands</b>- A Gen 2 pet mod that aims to create new Pokemon, items, and moves for the GSC OU Metagame."],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/crystal-sevii-islands.3695569/">Crystal: Sevii Islands on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1QL_789vTzxG8An43itUxPonK9ee7ezxH6GCR9dD_JyQ/edit?usp=sharing">Crystal: Sevii Islands spreadsheet</a>`,
		      ],
		mod: 'gen2crystalseviiislands',
		ruleset: ['Standard', 'Data Mod', 'Crystal: Sevii Islands Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 8] Extreme Reboot",
		desc: `A metagame where the types, statuses, moves, abilities, and pokemon are rebooted.`,
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3695749/">Extreme Reboot</a>`,
		],

		mod: 'extremereboot',
		ruleset: ['Standard', 'Dynamax Clause', 'Data Mod',],
		banlist: ['All Pokemon', 'All Items'],
		unbanlist: [
			'Extreme Ribbit', 'Baobloss', 'Tenquarrel', 'Tradituki', 'Hibarrage', 'Pumking', 'Carboneichus', 'Calmengo', 'Paciphal', 'Hullacane', 'Cylindrake',
			'Efflor', 'Rantler', 'Zeploom', 'Terraphi', 'Stratophi', 'Pelaphi', 'Sunmola', 'Phantahawk', 'Memilifyy', 'Plantadiomicrisa', 'Terrahephas', 'Parvualias',
			'Rancicoon', 'Meditoid', 'Yukinooh', 'Misausmia', 'Pavronin', 'Kraklone', 'Crustair', 'Yulisse', 'Totodem', 'Persebloom', 'Persebloom-Frost', 'Hawkmorph',
			'Gallurise', 'Hensomnia', 'Protectonic', 'Crowbotic', 'Sponjourner', 'Emajanaja', 'Zenphin', 'Technophin', 'Beavair', 'Gyozumo', 'Gyozumo-Summer',
			'Onlaxy', 'Infinistar', 'Guareye', 'Curuprowl', 'Fertiri', 'Ruinne', 'Tantton', 'Crimsoil', 'Stakstok', 'Lychy', 'Onigashiba', 'Lunsura', 'Galactagon',
			'Axolacred', 'Dimetrogem', 'Anhaflara', 'Stormanos', 'Alchemeel', 'Alchemeel-Offense', 'Rasteal', 'Nailberg', 'Hoolican', 'Anchorage', 'Nosferanguis',
			'Pontiac', 'Sclam', 'Cicaguren', /*'Bozunami', 'Cryptice',*/ 'Mekangiras', 'Mononokero', 'Surfright', 'Potsworth', 'Cloudim', 'Salamoon', 'Salamoon-Allegro',
			'Gokaeru', 'Himekuji', 'Guroteserp', 'Galaxea', 'Galaxea-Complete', 'Pegathemum', 'Pegathemum-Complete', 'Cyrome-Book', 'Cyrome-Scribe', 'Cyrome-Author',
			'Darkira', 'Darkira-Ancient', 'Lakera', 'Lakera-Ancient', 'Mew 3.0', 'Solamateru', 'Jirachi-Extreme',
			'Blood Vial', 'Calming Salt', 'Cursed Orb', 'Emblematic Scarf', 'Enigmatic Shield', 'Fell Scythe', 'Gospel Notes', 'Life Gem', 'Maid Dress', 'Metalmorph',
			'Pokemon Standard', 'Power Stone', 'Seasons Gem', 'Tricky Hourglass', 'Platinum Orb', 'Iridescent Orb', 'Frosted Seed',
		],
		onModifySpeciesPriority: 2,
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (species.id !== 'extremeribbit') return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.moves.get(move.id).type))];
			return {...species, types: types};
		},
		onSwitchIn(pokemon) {
			if (pokemon.species.id === 'extremeribbit') return;
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 8] Fusion Evolution UU",
		mod: "gen8feuu",
		desc: [
			`<b>Fusion Evolution Under Used</b>: A micrometa Pet Mod aiming to create more-balanced-than-usual "Pokemon Fusions" with unique abilities.`
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/fusion-evolution-under-used-submission-slate-3.3674163/">Fusion Evolution Under Used on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1zFk1_DBIoXFFn_7JpvYbVBrW-f1oFFh80Wn0CJNnbVo/edit#gid=0">Spreadsheet</a>`,
		],
		ruleset: ['Standard NatDex', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'All Pokemon', 'Red Orb', 'Baton Pass', 'Ninjacross + Heracronite', 'Kokovoir + Gardevoirite', 'Salamencite', 'Charizardite Y', 'Blue Orb', 'Wishirupti + Cameruptite', 'Mawilite', 'Gastrocham + Medichamite', 'Manectite', 'Herasir + Heracronite', 'Herasir + Pinsirite', 'Light Ball', 'Gengarite', 'Sablemime + Sablenite',
		],
		unbanlist: [
			'Volquag', 'Toxalure', 'Kingtsar', 'Tanette', 'Slowton',
			'Flaant', 'Umbat', 'Chomplim', 'Chomplim-Mega', 'Xotalion', 'Miemie', 'Dusking', 'Jelliswine',
			'Pigapult', 'Lycanserker-Dusk', 'Tapu Lop', 'Tapu Lop-Mega', 'Dragontler', 'Eternabat',
			'Grimmlurk', 'Manicuno-Galar', 'Yacian-Crowned', 'Cryogolem', 'Stoudrago',
			'Grousle', 'Dongoro', 'Slurpum',
			'Corveot', 'Corveot-Mega', 'Igglyzenta-Crowned', 'Arctres-Galar', 'Garborude', 'Noicity', 'Ferros',
			'Landmaldo-Therian', 'Tentoxys-Defense', 'Strikados-Galar', 'Hooporant',
			'Brontun', 'Mesflame', 'Thornbro-Galar', 'Glidol', 'Pincurchitar', 'Pincurchitar-Mega', 'Snortine', 'Flygalge',
			'Absable', 'Absable-Mega-X', 'Absable-Mega-Y', 'Scolisharp', 'Ninjacross', 'Gossephalon', 'Dracodoom',
			'Dracodoom-Mega', 'Toucosta', 'Weezlord-Galar', 'Sableior', 'Sableior-Mega', 'Sableior-Meteor', 'Sableior-Meteor-Mega',
			'Eeluk', 'Maroligatr-Alola', 'Frozerade',
			'Hattaka', 'Glasnow', 'Glasnow-Mega', 'Kokovoir', 'Kyottler', 'Clawliwrath',
			'Meloslash', 'Meloslash-Melee', 'Tornachamp', 'Cofazor', 'Cofazor-Mega', 'Talonsyl', 'Heatki',
			'Sirsola', 'Noze-Dawn-Wings', 'Noze-Ultra', 'Bruxray', 'Kingdeedee', 'Tapu Koma', 'Hawlazzle',
			'Whimsilotic', 'Vullacham', 'Vullacham-Mega', 'Dracolix', 'Dracolix-Mega', 'Serpanadel', 'Accelest', 'Buzzeggutor-Alola',
			'Roaramp', 'Roaramp-Mega', 'Glakiss', 'Glakiss-Mega', 'Leafdon',
			'Crustboar', 'Paracoal', 'Arctovic', 'Altarizard', 'Altarizard-Mega-X', 'Altarizard-Mega', 'Sandamar-Alola',
			'Jirachonator', 'Dredvul', 'Druddifini', 'Swannamence', 'Tyranette-Eternal',
			'Lurodactyl', 'Lurodactyl-Mega', 'Ninelands-Alola', 'Aurorona', 'Monferpa-Unbound', 'Gigacrab', 'Rosenaught', 'Keclyrex-Shadow',
			'Regibee', 'Regibee-Mega', 'Sigileye', 'Darmearna', 'Mr. Ace', 'Deciduskorch', 'Hypnakart', 'Zerclef',
			'Exeggutor-Prime', 'Porygrigus', 'Golisotops',
			'Avarupt', 'Avarupt-Mega', 'Goatitar', 'Goatitar-Mega', 'Fraxshadow', 'Pherogonga', 'Crawmise', 'Wishirupti',

			'Torranadus-Therian', 'Togetops', 'Toxicargo', 'Claylamar', 'Vishitomb', 'Swampflora', 'Swampflora-Mega', 'Swalurchin', 'Serpeblim',
			'Azekrow', 'Trapeino', 'Goodevoir', 'Goodevoir-Mega', 'Duramaw', 'Rhybite', 'Oricolyph-Sensu',
			'Grapplor', 'Masquerajah', 'Litleesect', 'Bearyx', 'Fetchey', 'Audiyem', 'Audiyem-Mega',
			'Eelektoad', 'Dialgast', 'Galsola', 'Galsola-Mega', 'Genebro-Galar', 'Hatterune',
			'Deodon-Attack', 'Sharpiskorch', "Sharpiskorch-Mega", "Gourninja", "Cleracross", "Cleracross-Mega", "Aromarel", "Lycansian",
			'Landowak-Alola', 'Emolggron', 'Emolggron-Mega', 'Metagon', 'Hoopagigas-Unbound', 'Nashifu', 'Cramotricity', 'Raibat', 'Darmanitan-Prime',
			'Zarapex', 'Pingar', 'Pingar-Mega', 'Kommo-tot', 'Rotokyu', 'Krookogatr', 'Venuroar', 'Venuroar-Mega', 'Klefilego', 'Rhychomp-Mega', 'Rhychomp',
			'Mr. Basc', 'Gastrocham', 'Manditop', 'Mienpa', 'Vikadrill',
			'Venoqueen', 'Arcalie', 'Yangarde',
			'Xurkirat', 'Golneton', 'Alakannon', 'Alakannon-Mega', 'Kingfezant', 'Googersby',
			'Dhelarina', 'Flychu-Alola', 'Haxel', 'Frossharp', 'Tyrantricity-Low-Key',
			'Champlume', 'Pyraskewda', 'Rotofable', 'Harisect', 'Tapu Pilo', 'Appletom-Wash', 'Phancrozma-Dawn-Wings', 'Phancrozma-Ultra',
			'Toxislash-Alola', 'Tentaterra', 'Minimie', 'Tsarant', 'Golevish-Alola',
			'Manecpig', 'Herasir', 'Magmovire', 'Giga Fini',
			'Impert-Female', 'Impert-Female-Mega', 'Koalicuno-Galar', 'Weezking-Galar', 'Ferrocario', 'Ferrocario-Mega', 'Mukremie', 'Acceldrill',

			'Silvino-Bug', 'Silvino-Dark', 'Silvino-Dragon', 'Silvino-Electric', 'Silvino-Fairy', 'Silvino-Fighting',
			'Silvino-Fire', 'Silvino-Flying', 'Silvino-Ghost', 'Silvino-Grass', 'Silvino-Ground', 'Silvino-Ice',
			'Silvino-Poison', 'Silvino-Psychic', 'Silvino-Rock', 'Silvino-Steel', 'Silvino-Water', 'Silvino',

			/*'Silvino-Bug-Mega', 'Silvino-Dark-Mega', 'Silvino-Dragon-Mega',
			'Silvino-Electric-Mega', 'Silvino-Fairy-Mega', 'Silvino-Fighting-Mega',
			'Silvino-Fire-Mega', 'Silvino-Flying-Mega', 'Silvino-Ghost-Mega',
			'Silvino-Grass-Mega', 'Silvino-Ground-Mega', 'Silvino-Ice-Mega',
			'Silvino-Poison-Mega', 'Silvino-Psychic-Mega', 'Silvino-Rock-Mega',
			'Silvino-Steel-Mega', 'Silvino-Water-Mega',*/ 'Silvino-Mega',

			'Litleesect-Douse', 'Litleesect-Shock', 'Litleesect-Burn', 'Litleesect-Chill',
			'Genebro-Galar-Douse', 'Genebro-Galar-Shock', 'Genebro-Galar-Burn', 'Genebro-Galar-Chill',


			'Appledam', 'Regidurr', 'Duskoma', 'Fraxblade', 'Igglycian-Crowned',
			'Eiscudile', 'Carcannon', 'Lapfisk', 'Whisdur', 'Emposerker', 'Salasian-Alola', 'Salasian-Alola-Mega',
			"Pelilicky", "Zaponaw-Galar", "Yandos", "Mudscash", "Woopquaza-Mega", "Woopquaza", "Qwilsimian", "Buzzvine", "Solabat",
			"Jellopod", "Jellopod-F", "Espetops", "Regigoss", "Nihitrio",
			"Ferropion", "Scytic", "Dragancie", "Dragancie-Mega", "Yanturne", "Emberajah",
			"Tornett-Alola", "Togelot", "Aegix", "Dugflame", "Mr. Gar", "Spewtwo", "Spewtwo-Mega-X", "Spewtwo-Mega-Y",
			"Krowtom", "Sablemime", "Lycaking-Dusk",
			"Victreegeist-Small", "Dragerigus", "Drudlinks", "Oricroak", "Deciduvolt",

			'Corveotto', 'Torraaffy', 'Rosadin', 'Mr. Boot-Galar', 'Palpitrik', 'Pikabat', 'Krokocroco', 'Ivycat', 'Tranquorino', 'Kadabeak', 'Vibrachu', 'Chokloom', 'Magmabuzz', 'Mr. Haunt-Galar', "Dartbug",
			'Mariwick', 'Krabsweet', 'Slowmite', 'Eebat', 'Gibloon', 'Mieyu', 'Duspoke', 'Frillnub', 'Dreepig', 'Meowruff-Galar', 'Golidimp', 'Panchanpy', 'Shroolix', 'Noixel', 'Pidgeidee', 'Bronlin', 'Seedpoke-Galar', 'Glitoy', 'Munchyke', 'Venipawn', 'Krelpinch', 'Tirtipek', 'Grinamo', 'Cubodile', 'Snodew', 'Claunchiwag', 'Scymask', 'Fletchee', 'Farsola-Galar', 'Cottonas', 'Snipole', 'Maritten', 'Snogepi', 'Hippee', 'Dwepig', 'Parycoly', 'Charblu', 'Inkshrew-Alola', 'Chewkit', 'Duckgon', 'Larvaura', 'Crabrola', 'Chespew', 'Rowlipede', 'Scor Jr.', 'Porymask', 'Wimbuto', 'Larkiddo', 'Bergmel',
			'Croagma', 'Inktoy', 'Sunkip', 'Sniloon', 'Rhyble', 'Goolts', 'Clobbgar', 'Sursfant', 'Hatamask-Galar', 'Tynapole', "Meowruff", "Carvipede", "Froakaboo", "Spritdoof", "Beldino", "Pibat", "Darumaka-Prime", "Totosand", "Bulbalit", 'Vullarogue', 'Grubbur', 'Purrlithe', 'Venoran-F', 'Zubnemite', 'Abripek', 'Nidove-M', 'Gooby', 'Pinchu', 'Buixew', 'Pawnrunt', 'Tyrunxel', 'Shellitite', 'Oddchop', 'Makuras', 'Litlokuda', 'Croagshrew-Alola', 'Tentatwig', 'Magkid', 'Elecoink', 'Ferrolu', 'Koffipoke-Galar', 'Shelbur', 'Grimcery',
			'Burmlin', 'Axedge', 'Rolypek', 'Piplouth-Galar', 'Bagouth-Alola', "Mudboach", "Lickigull", "Frillopod", "Frillopod-F", "Eevuto", "Yannea", "Cupig", "Digling", "Gas Jr.", "Rockoran-M", "Rowbbin", "Maskrelp", "Bellaboo-Small",
			'Exeggcute',
		],
	},
	{
		name: "[Gen 8] Fusion Evolution RU",
		mod: "gen8feuu",
		desc: [
			`<b>Fusion Evolution Rarely Used</b>: A micrometa Pet Mod aiming to create even-more-balanced-than-usual "Pokemon Fusions" with unique abilities.`
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/fusion-evolution-rarely-used-slate-1-results-discussion-not-open-for-submissions.3691700/">Fusion Evolution Rarely Used on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1oelJdiPECm0guZWA9lIHG0w8xQV2nReGZu5lh2d0qcI/edit#gid=0">Spreadsheet</a>`,
		],
		ruleset: ['Standard NatDex', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'All Pokemon', 'Baton Pass', 'Gardevoirite', 'Mawilite', 'Cameruptite', 'Scizorite', 'Glalitite', 'Sablenite', 'Lopunnite', 'Garchompite', 'Venusaurite', 'Pinsirite', 'Medichamite', 'Alakazite', 'Beedrillite', 'Manectite', 'Herasir + Heracronite', 'Charizardite Y', 'Charizardite X', 'Lucarionite', 'Swannamence + Salamencite', 'Diancite', 'Gengarite', 'Sablemime + Sablenite',
		],
		unbanlist: [
			'Torranadus-Therian', 'Togetops', 'Toxicargo', 'Claylamar', 'Vishitomb', 'Swampflora', 'Swampflora-Mega', 'Swalurchin', 'Serpeblim',
			'Azekrow', 'Trapeino', 'Goodevoir', 'Duramaw', 'Rhybite', 'Oricolyph-Sensu',
			'Grapplor', 'Masquerajah', 'Litleesect', 'Bearyx', 'Fetchey', 'Audiyem', 'Audiyem-Mega',
			'Eelektoad', 'Dialgast', 'Galsola', 'Galsola-Mega', 'Hatterune',
			'Deodon-Attack', 'Sharpiskorch', "Sharpiskorch-Mega", "Gourninja", "Cleracross", "Cleracross-Mega", "Aromarel", "Lycansian",
			'Landowak-Alola', 'Emolggron', 'Emolggron-Mega', 'Metagon', 'Hoopagigas-Unbound', 'Nashifu', 'Cramotricity', 'Raibat', 'Darmanitan-Prime',
			'Zarapex', 'Pingar', 'Kommo-tot', 'Rotokyu', 'Krookogatr', 'Venuroar', 'Klefilego', 'Rhychomp',
			'Mr. Basc', 'Gastrocham', 'Manditop', 'Mienpa', 'Vikadrill',
			'Venoqueen', 'Arcalie', 'Yangarde',
			'Xurkirat', 'Golneton', 'Alakannon', 'Kingfezant', 'Googersby',
			'Dhelarina', 'Flychu-Alola', 'Haxel', 'Frossharp', 'Tyrantricity-Low-Key',
			'Champlume', 'Pyraskewda', 'Rotofable', 'Harisect', 'Tapu Pilo', 'Appletom-Wash', 'Phancrozma-Dawn-Wings', 'Phancrozma-Ultra',
			'Toxislash-Alola', 'Tentaterra', 'Minimie', 'Tsarant', 'Golevish-Alola',
			'Manecpig', 'Herasir', 'Magmovire', 'Giga Fini',
			'Impert-Female', 'Impert-Female-Mega', 'Koalicuno-Galar', 'Weezking-Galar', 'Ferrocario', 'Mukremie', 'Acceldrill',

			'Tapu Lop', 'Absable', 'Absable-Mega-X', 'Cofazor', 'Lurodactyl', 'Lurodactyl-Mega', 'Wishirupti', 'Hypnakart', 'Talonsyl', 'Paracoal', 'Avarupt', 'Pherogonga',
			'Hawlazzle', 'Glakiss', 'Glasnow', 'Glasnow-Mega', 'Dusking', 'Strikados-Galar', 'Regibee',
			'Toxalure', 'Pigapult', 'Eternabat', 'Goatitar', 'Goatitar-Mega', 'Altarizard', 'Serpanadel', 'Crustboar', 'Flaant', 'Keclyrex-Shadow', 'Frozerade', 'Sirsola', 'Snortine',
			'Swannamence', 'Vullacham',

			'Silvino-Bug', 'Silvino-Dark', 'Silvino-Dragon', 'Silvino-Electric', 'Silvino-Fairy', 'Silvino-Fighting',
			'Silvino-Fire', 'Silvino-Flying', 'Silvino-Ghost', 'Silvino-Grass', 'Silvino-Ground', 'Silvino-Ice',
			'Silvino-Poison', 'Silvino-Psychic', 'Silvino-Rock', 'Silvino-Steel', 'Silvino-Water', 'Silvino', 'Silvino-Mega',
			'Litleesect-Douse', 'Litleesect-Shock', 'Litleesect-Burn', 'Litleesect-Chill',

			'Appledam', 'Regidurr', 'Duskoma', 'Fraxblade', 'Igglycian-Crowned',
			'Eiscudile', 'Carcannon', 'Lapfisk', 'Whisdur', 'Emposerker', 'Salasian-Alola', 'Salasian-Alola-Mega',
			"Pelilicky", "Zaponaw-Galar", "Yandos", "Mudscash", "Woopquaza-Mega", "Woopquaza", "Qwilsimian", "Buzzvine", "Solabat",
			"Jellopod", "Jellopod-F", "Espetops", "Regigoss", "Nihitrio",
			"Ferropion", "Scytic", "Dragancie", "Yanturne", "Emberajah",
			"Tornett-Alola", "Togelot", "Aegix", "Dugflame", "Mr. Gar", "Spewtwo", "Spewtwo-Mega-X", "Spewtwo-Mega-Y",
			"Krowtom", "Sablemime", "Lycaking-Dusk",
			"Victreegeist-Small", "Dragerigus", "Drudlinks", "Oricroak", "Deciduvolt",

			'Corveotto', 'Torraaffy', 'Rosadin', 'Mr. Boot-Galar', 'Palpitrik', 'Pikabat', 'Krokocroco', 'Ivycat', 'Tranquorino', 'Kadabeak', 'Vibrachu', 'Chokloom', 'Magmabuzz', 'Mr. Haunt-Galar', "Dartbug",
			'Mariwick', 'Krabsweet', 'Slowmite', 'Eebat', 'Gibloon', 'Mieyu', 'Duspoke', 'Frillnub', 'Dreepig', 'Meowruff-Galar', 'Golidimp', 'Panchanpy', 'Shroolix', 'Noixel', 'Pidgeidee', 'Bronlin', 'Seedpoke-Galar', 'Glitoy', 'Munchyke', 'Venipawn', 'Krelpinch', 'Tirtipek', 'Grinamo', 'Cubodile', 'Snodew', 'Claunchiwag', 'Scymask', 'Fletchee', 'Farsola-Galar', 'Cottonas', 'Snipole', 'Maritten', 'Snogepi', 'Hippee', 'Dwepig', 'Parycoly', 'Charblu', 'Inkshrew-Alola', 'Chewkit', 'Duckgon', 'Larvaura', 'Crabrola', 'Chespew', 'Rowlipede', 'Scor Jr.', 'Porymask', 'Wimbuto', 'Larkiddo', 'Bergmel',
			'Croagma', 'Inktoy', 'Sunkip', 'Sniloon', 'Rhyble', 'Goolts', 'Clobbgar', 'Sursfant', 'Hatamask-Galar', 'Tynapole', "Meowruff", "Carvipede", "Froakaboo", "Spritdoof", "Beldino", "Pibat", "Darumaka-Prime", "Totosand", "Bulbalit", 'Vullarogue', 'Grubbur', 'Purrlithe', 'Venoran-F', 'Zubnemite', 'Abripek', 'Nidove-M', 'Gooby', 'Pinchu', 'Buixew', 'Pawnrunt', 'Tyrunxel', 'Shellitite', 'Oddchop', 'Makuras', 'Litlokuda', 'Croagshrew-Alola', 'Tentatwig', 'Magkid', 'Elecoink', 'Ferrolu', 'Koffipoke-Galar', 'Shelbur', 'Grimcery',
			'Burmlin', 'Axedge', 'Rolypek', 'Piplouth-Galar', 'Bagouth-Alola', "Mudboach", "Lickigull", "Frillopod", "Frillopod-F", "Eevuto", "Yannea", "Cupig", "Digling", "Gas Jr.", "Rockoran-M", "Rowbbin", "Maskrelp", "Bellaboo-Small",
			'Exeggcute',
		],
	},
	{
		name: "[Gen 8] Fusion Evolution NU",
		mod: "gen8feuu",
		desc: [
			`<b>Fusion Evolution Never Used</b>: A micrometa Pet Mod aiming to create excessively-more-balanced-than-usual "Pokemon Fusions" with unique abilities.`
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/fusion-evolution-never-used-slate-1-results-not-open-for-submissions.3701949/">Fusion Evolution Never Used on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1PGYIFPSfjMtA0cGQgjyxnngJ2WODLWIH9v46_upPSOA/edit#gid=0">Spreadsheet</a>`,
		],
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'All Pokemon', 'Baton Pass', 'Salamencite', 'Abomasite', 'Absolite', 'Medichamite', 'Lopunnite', 'Diancite', 'Gengarite', 'Sablemime + Sablenite',
		],
		unbanlist: [
	 		'Rhybite',
			'Appledam', 'Regidurr', 'Duskoma', 'Fraxblade', 'Igglycian-Crowned',
			'Eiscudile', 'Carcannon', 'Lapfisk', 'Whisdur', 'Emposerker', 'Salasian-Alola',
			"Pelilicky", "Zaponaw-Galar", "Yandos", "Mudscash", "Woopquaza-Mega", "Woopquaza", "Qwilsimian", "Buzzvine", "Solabat",
			"Jellopod", "Jellopod-F", "Espetops", "Regigoss", "Nihitrio",
			"Ferropion", "Scytic", "Dragancie", "Yanturne", "Emberajah",
			"Tornett-Alola", "Togelot", "Aegix", "Dugflame", "Mr. Gar", "Spewtwo", "Spewtwo-Mega-X", "Spewtwo-Mega-Y",
			"Victreegeist-Small", "Dragerigus", "Drudlinks", "Oricroak", "Deciduvolt",

			'Claylamar', 'Vishitomb', 'Swampflora', 'Swampflora-Mega', 'Azekrow', 'Trapeino', 'Bearyx', 'Fetchey', "Aromarel", 'Googersby', 'Harisect',
			'Absable', 'Tapu Lop', 'Hypnakart', 'Hawlazzle', 'Glasnow', 'Paracoal',
			'Swannamence', 'Vullacham',
			"Krowtom", "Sablemime", "Lycaking-Dusk",

			'Silvino-Bug', 'Silvino-Electric', 'Silvino-Fighting',
			'Silvino-Fire', 'Silvino-Flying', 'Silvino-Grass', 'Silvino-Ice',
			'Silvino-Poison', 'Silvino-Psychic', 'Silvino-Rock', 'Silvino', 'Silvino-Mega',

			'Corveotto', 'Torraaffy', 'Rosadin', 'Mr. Boot-Galar', 'Palpitrik', 'Pikabat', 'Krokocroco', 'Ivycat', 'Tranquorino', 'Kadabeak', 'Vibrachu', 'Chokloom', 'Magmabuzz', 'Mr. Haunt-Galar', "Dartbug",
			'Mariwick', 'Krabsweet', 'Slowmite', 'Eebat', 'Gibloon', 'Mieyu', 'Duspoke', 'Frillnub', 'Dreepig', 'Meowruff-Galar', 'Golidimp', 'Panchanpy', 'Shroolix', 'Noixel', 'Pidgeidee', 'Bronlin', 'Seedpoke-Galar', 'Glitoy', 'Munchyke', 'Venipawn', 'Krelpinch', 'Tirtipek', 'Grinamo', 'Cubodile', 'Snodew', 'Claunchiwag', 'Scymask', 'Fletchee', 'Farsola-Galar', 'Cottonas', 'Snipole', 'Maritten', 'Snogepi', 'Hippee', 'Dwepig', 'Parycoly', 'Charblu', 'Inkshrew-Alola', 'Chewkit', 'Duckgon', 'Larvaura', 'Crabrola', 'Chespew', 'Rowlipede', 'Scor Jr.', 'Porymask', 'Wimbuto', 'Larkiddo', 'Bergmel',
			'Croagma', 'Inktoy', 'Sunkip', 'Sniloon', 'Rhyble', 'Goolts', 'Clobbgar', 'Sursfant', 'Hatamask-Galar', 'Tynapole', "Meowruff", "Carvipede", "Froakaboo", "Spritdoof", "Beldino", "Pibat", "Darumaka-Prime", "Totosand", "Bulbalit", 'Vullarogue', 'Grubbur', 'Purrlithe', 'Venoran-F', 'Zubnemite', 'Abripek', 'Nidove-M', 'Gooby', 'Pinchu', 'Buixew', 'Pawnrunt', 'Tyrunxel', 'Shellitite', 'Oddchop', 'Makuras', 'Litlokuda', 'Croagshrew-Alola', 'Tentatwig', 'Magkid', 'Elecoink', 'Ferrolu', 'Koffipoke-Galar', 'Shelbur', 'Grimcery',
			'Burmlin', 'Axedge', 'Rolypek', 'Piplouth-Galar', 'Bagouth-Alola', "Mudboach", "Lickigull", "Frillopod", "Frillopod-F", "Eevuto", "Yannea", "Cupig", "Digling", "Gas Jr.", "Rockoran-M", "Rowbbin", "Maskrelp", "Bellaboo-Small",
			'Exeggcute',
		],
	},
	{
	name: "[Gen 1] FutureProofing",
	   desc: `<b>[Gen 1] FutureProofing</b>: Adapting Dark, Steel, and Fairy-type moves and Pokemon to the Gen 1 OU metagame.`,
	   threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-1-futureproofing-slate-1-discussion.3703375/">FutureProofing on Smogon Forums</a>`,
	   ],
      mod: 'gen1futureproofing',
      ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber'],
		unbanlist: ['Tyranitar', 'Gardevoir', 'Escavalier', 'Karrablast', 'Ralts', 'Kirlia', 'Pupitar', 'Larvitar',
					   'Snarl', 'Steel Wing', 'Strange Steam',
					   'Deino', 'Zweilous', 'Hydreigon', 'Scizor', 'Cottonee', 'Whimsicott',
						'Nature\'s Madness', 'Fake Tears', 'Gear Up',
						'Steelix', 'Spiritomb', 'Swablu', 'Altaria',
						'Fleur Cannon', 'Taunt', 'Heavy Slam',
						'Yveltal', 'Skarmory', 'Tapu Koko',
						'Lash Out', 'Crafty Shield', 'Sunsteel Strike',
						'Cacnea', 'Cacturne', 'Duraludon', 'Milcery', 'Alcremie',
						'Zigzagoon-Galar', 'Linoone-Galar', 'Obstagoon', 'Stunfisk-Galar', 'Mimikyu', 'Mimikyu-Busted',
						'Oshawott', 'Dewott', 'Samurott-Hisui', 'Riolu', 'Lucario', 'Popplio', 'Brionne', 'Primarina',
						'Grimmsnarl', 'Impidimp', 'Morgrem', 'Sylveon', 'Diglett-Alola', 'Dugtrio-Alola',
						'Magnezone', 'Houndour', 'Houndoom', 'Cutiefly', 'Ribombee',
						'Zarude', 'Zarude-Dada', 'Vulpix-Alola', 'Ninetales-Alola', 'Piplup', 'Prinplup', 'Empoleon',
					  ],
    },
	{
		name: "[Gen 8] JolteMons",
		desc: [
			"<b>JolteMons</b>: A sequel to SylveMons where Pokemon, items, abilities and moves are redesigned for OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-slate-1-distribution-phase.3694234/">Thread on the Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/149ZlQY0bJIAqfWB_233Dvbpqs3pVSHYpIoAQQkwquls/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'joltemons',
		teambuilderFormat: 'OU',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod'],
		unbanlist: ['Dragapult', 'Tornadus-Therian', 'Blaziken', 'Greninja-Ash', 'Moody', 'Shaymin-Sky', 'Kangaskhan-Mega', 'Darmanitan-Galar', 'Metagross-Mega'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Arceus', 'Blazikenite', 'Blastoisinite', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Gengarite', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamencite', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Berserk Gene', 'Eevee-Starter', 'Pikachu-Starter', 'Moody', 'Magearna', 'Spectrier', 'Dracovish', 'Urshifu-Base',
					'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Decidium Z', 'Kommonium Z',
					'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang'],
	},
	{
		name: "[Gen 8] JolteMons UU",
		desc: [
			"<b>JolteMons</b>: A sequel to SylveMons where Pokemon, items, abilities and moves are redesigned for OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-slate-1-distribution-phase.3694234/">Thread on the Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/149ZlQY0bJIAqfWB_233Dvbpqs3pVSHYpIoAQQkwquls/edit?usp=sharing">Spreadsheet</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-playtesting-phase-uu.3694234/post-9143011">Banlist</a>`,
		],
		mod: 'joltemons',
		teambuilderFormat: 'UU',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod'],
		unbanlist: ['Moody', 'Kangaskhan-Mega', 'Darmanitan-Galar'],
		banlist: ['OU', 'UUBL', 'Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Arceus', 'Blazikenite', 'Blastoisinite', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Gengarite', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucarionite', 'Lugia', 'Lunala', 'Marshadow', 'Metagrossite', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamencite', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Berserk Gene', 'Eevee-Starter', 'Pikachu-Starter', 'Moody', 'Magearna', 'Spectrier', 'Dracovish', 'Urshifu-Base',
					'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Decidium Z', 'Kommonium Z',
					'Chill Pill G', 'Lopunnite', 'Scizorite', 'Gyaradosite', 'Charizardite Y', 'Charizardite X', 'Pinsirite', 'Heracronite', 'Aerodactylite', 'Alakazite', 'Galladite', 'Gardevoirite', 'Medichamite', 'Diancite', 'Mawilite', 'Beedrillite', 'Swampertite', 'Latiasite', 'Latiosite', 'Tyranitarite', 'Venusaurite', 'Graduation Scale', 'Sablenite',
					'Light Clay', 'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang'],
	},
	{
		name: "[Gen 8] JolteMons RU",
		desc: [
			"<b>JolteMons</b>: A sequel to SylveMons where Pokemon, items, abilities and moves are redesigned for OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-slate-1-distribution-phase.3694234/">Thread on the Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/149ZlQY0bJIAqfWB_233Dvbpqs3pVSHYpIoAQQkwquls/edit?usp=sharing">Spreadsheet</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-playtesting-phase-uu.3694234/post-9143011">Banlist</a>`,
		],
		mod: 'joltemons',
		teambuilderFormat: 'RU',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod'],
		unbanlist: ['Moody', 'Kangaskhan-Mega'],
		banlist: ['OU', 'UUBL', 'RUBL', 'UU', 'Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Arceus', 'Blazikenite', 'Blastoisinite', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Gengarite', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucarionite', 'Lugia', 'Lunala', 'Marshadow', 'Metagrossite', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamencite', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Berserk Gene', 'Eevee-Starter', 'Pikachu-Starter', 'Moody', 'Magearna', 'Spectrier', 'Dracovish', 'Urshifu-Base',
					'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Decidium Z', 'Kommonium Z',
					'Chill Pill G', 'Lopunnite', 'Scizorite', 'Gyaradosite', 'Charizardite Y', 'Charizardite X', 'Pinsirite', 'Heracronite', 'Aerodactylite', 'Alakazite', 'Galladite', 'Gardevoirite', 'Medichamite', 'Diancite', 'Mawilite', 'Beedrillite', 'Swampertite', 'Latiasite', 'Latiosite', 'Tyranitarite', 'Venusaurite', 'Graduation Scale', 'Sablenite',
					'Altarianite', 'Chill Pill', 'Relic Charm', 'Drizzle', 'Ampharosite', 'Manectite', 'Pidgeotite', 'Steelixite', 'Aggronite', 'Banettite', 'Sharpedonite',
					'Light Clay', 'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang'],
	},
	{
		name: "[Gen 8] JolteMons NU",
		desc: [
			"<b>JolteMons</b>: A sequel to SylveMons where Pokemon, items, abilities and moves are redesigned for OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-slate-1-distribution-phase.3694234/">Thread on the Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/149ZlQY0bJIAqfWB_233Dvbpqs3pVSHYpIoAQQkwquls/edit?usp=sharing">Spreadsheet</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-playtesting-phase-uu.3694234/post-9143011">Banlist</a>`,
		],
		mod: 'joltemons',
		teambuilderFormat: 'NU',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod'],
		unbanlist: ['Moody'],
		banlist: ['OU', 'UUBL', 'RUBL', 'UU', 'Uber', 'RU', 'NUBL', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Arceus', 'Blazikenite', 'Blastoisinite', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Gengarite', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucarionite', 'Lugia', 'Lunala', 'Marshadow', 'Metagrossite', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamencite', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base', 'Berserk Gene', 'Eevee-Starter', 'Pikachu-Starter', 'Moody', 'Magearna', 'Spectrier', 'Dracovish', 'Urshifu-Base',
					'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Decidium Z', 'Kommonium Z',
					'Chill Pill G', 'Lopunnite', 'Scizorite', 'Gyaradosite', 'Charizardite Y', 'Charizardite X', 'Pinsirite', 'Heracronite', 'Aerodactylite', 'Alakazite', 'Galladite', 'Gardevoirite', 'Medichamite', 'Diancite', 'Mawilite', 'Beedrillite', 'Swampertite', 'Latiasite', 'Latiosite', 'Tyranitarite', 'Venusaurite', 'Graduation Scale', 'Sablenite',
					'Altarianite', 'Chill Pill', 'Relic Charm', 'Drizzle', 'Ampharosite', 'Manectite', 'Pidgeotite', 'Steelixite', 'Aggronite', 'Banettite', 'Sharpedonite',
					'Absolite', 'Audinite', 'Kangaskhanite', 'Sceptilite', 'Cameruptite', 'Ghost Memory',
					'Light Clay', 'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang'],
	},
	{
		name: "[Gen 8] M4A VGC",
		desc: ["Megas for All v7 but it's a VGC format",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Picked Team Size = 4', 'Adjust Level = 50', 'VGC Timer', 'Dynamax Clause', 'Mega Data Mod'],
		banlist: [
			'Mewtwo', 'Mew',
			'Lugia', 'Ho-Oh', 'Celebi',
			'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys',
			'Dialga', 'Palkia', 'Giratina', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
			'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion',
			'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zeraora',
			'Zacian', 'Zamazenta', 'Eternatus', 'Zarude', 'Calyrex',
		],
		mod: 'm4av6',
		onValidateSet(set) {
			// These Pokemon are still unobtainable
			const unobtainables = [
				'Eevee-Starter', 'Floette-Eternal', 'Pichu-Spiky-eared', 'Pikachu-Belle', 'Pikachu-Cosplay', 'Pikachu-Libre',
				'Pikachu-PhD', 'Pikachu-Pop-Star', 'Pikachu-Rock-Star', 'Pikachu-Starter', 'Eternatus-Eternamax',
			];
			const species = this.dex.species.get(set.species);
			if (unobtainables.includes(species.name)) {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			if (species.tier === "Unreleased") {
				const basePokemon = this.toID(species.baseSpecies);
				if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`)) {
					return;
				}
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
		},
	},
	// Added Bo3 Formats for both M4A VGC formats, but commented them out for now in case M4A's leaders decide that they don't want them
	/*
	{
		name: "[Gen 8] M4A VGC (Bo3)",
		desc: ["Megas for All v7 but it's a VGC format",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Picked Team Size = 4', 'Adjust Level = 50', 'VGC Timer', 'Dynamax Clause', 'Mega Data Mod', 'Best of = 3'],
		banlist: [
			'Mewtwo', 'Mew',
			'Lugia', 'Ho-Oh', 'Celebi',
			'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys',
			'Dialga', 'Palkia', 'Giratina', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
			'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion',
			'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zeraora',
			'Zacian', 'Zamazenta', 'Eternatus', 'Zarude', 'Calyrex',
		],
		mod: 'm4av6',
		onValidateSet(set) {
			// These Pokemon are still unobtainable
			const unobtainables = [
				'Eevee-Starter', 'Floette-Eternal', 'Pichu-Spiky-eared', 'Pikachu-Belle', 'Pikachu-Cosplay', 'Pikachu-Libre',
				'Pikachu-PhD', 'Pikachu-Pop-Star', 'Pikachu-Rock-Star', 'Pikachu-Starter', 'Eternatus-Eternamax',
			];
			const species = this.dex.species.get(set.species);
			if (unobtainables.includes(species.name)) {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			if (species.tier === "Unreleased") {
				const basePokemon = this.toID(species.baseSpecies);
				if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`)) {
					return;
				}
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
		},
	},
 */
	{
		name: "[Gen 8] M4A Kalos VGC",
		desc: ["<b>Megas for All</b>: A Pet Mod that aims to create unique Mega Evolutions for every fully evolved Pokémon. Current season is focused on the Kalos dex!",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Picked Team Size = 4', 'Adjust Level = 50', 'VGC Timer', 'Z-Move Clause', 'Dynamax Clause', 'Terastal Clause', 'Mega Data Mod'],
		banlist: [
			'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa-Unbound', 'Volcanion',
			// legalizes Hoopa-Confined, and only Hoopa-Confined, because it has a Mega specific to this season! (confirmed by Blue)
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Mega' && template.tier !== 'Kalos' && template.tier !== 'Kalos (NFE)') {
					return [set.species + ' is not a part of the Kalos Pokédex.'];
				}
			}
		},
		onValidateSet(set) {
			const problems: string[] = [];
			const setHas: {[k: string]: true} = {};
			let species = this.dex.species.get(set.species);
			let item = this.dex.items.get(set.item);
			let tierSpecies = species;

			if (item.megaEvolves === species.name) {
				if (item.megaStone && this.dex.species.get(item.megaStone).tier !== 'Mega') return [item.name + ' is not a legal Mega Stone.'];
			}
		},
		mod: 'm4akalos',
	},
	/*
	{
		name: "[Gen 8] M4A Kalos VGC (Bo3)",
		desc: ["<b>Megas for All</b>: A Pet Mod that aims to create unique Mega Evolutions for every fully evolved Pokémon. Current season is focused on the Kalos dex!",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Picked Team Size = 4', 'Adjust Level = 50', 'VGC Timer', 'Z-Move Clause', 'Dynamax Clause', 'Terastal Clause', 'Mega Data Mod', 'Best of = 3'],
		banlist: [
			'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa-Unbound', 'Volcanion',
			// legalizes Hoopa-Confined, and only Hoopa-Confined, because it has a Mega specific to this season! (confirmed by Blue)
		],
		onValidateTeam(team, format) {
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Mega' && template.tier !== 'Kalos' && template.tier !== 'Kalos (NFE)') {
					return [set.species + ' is not a part of the Kalos Pokédex.'];
				}
			}
		},
		onValidateSet(set) {
			const problems: string[] = [];
			const setHas: {[k: string]: true} = {};
			let species = this.dex.species.get(set.species);
			let item = this.dex.items.get(set.item);
			let tierSpecies = species;

			if (item.megaEvolves === species.name) {
				if (item.megaStone && this.dex.species.get(item.megaStone).tier !== 'Mega') return [item.name + ' is not a legal Mega Stone.'];
			}
		},
		mod: 'm4akalos',
	},
	*/
	{
		name: "[Gen 8] M4A Sandbox",
		desc: ["Megas for All v7 but it's Custom Game. Add custom typings and stats via Sandbox Mod!",
		      ],
		threads: [
				`&bullet; <a href="https://docs.google.com/document/d/1hhF49OIQKot72C30mCzSwxYgb3Ephhm9KCL_nMPrCW0/edit">Sandbox Mod Usage Guide</a>`,
				`&bullet; <a href="https://www.smogon.com/forums/threads/megas-for-all-v7-slate-33-electrode-golurk-and-silvally-please-read-the-first-post-fully-playable-through-slate-32.3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		searchShow: false,
		// now intended as a custom game-esque format with more freedom for testing
		ruleset: ['Team Preview', 'Cancel Mod', 'HP Percentage Mod', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Data Mod', 'Mega Data Mod', 'Sandbox Mod', 'Overflow Stat Mod'],
		mod: 'm4asandbox',
	},
	// {
		// name: "[Gen 8] National Dex Balanced Hackmons v3",
		// desc: `<b>More Balanced Hackmons</b>: A National Dex mod of Balanced Hackmons with new pokemon, moves, and abilities, as well as some additional bans.`,
		// threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/national-dex-bh-v3.3690179/">More Balanced Hackmons on Smogon Forums</a>`,
		// ],

		// mod: 'nationaldexbalancedhackmons',
		// ruleset: ['Standard NatDex', '+Nonexistent', '!Obtainable Abilities', '!Obtainable Moves', '!Obtainable Formes', /*'Forme Clause', '2 Ability Clause', 'Arceus Clause'*/], // these clauses were not recognized after gen 9 update
		// banlist: [
				// 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Cramorant-Gorging', 'Calyrex-Shadow', 'Eternatus-Eternamax',
				// 'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull',
				// 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
				// 'Gengarite',
				// 'Chatter', 'Octolock', 'Double Iron Bash', 'Shell Smash', 'Bolt Beak', 'Belly Drum', 'Electrify',
				// 'Comatose + Sleep Talk', 'Imprison + Transform',
		// ],
		// onChangeSet(set) {
			// const item = this.dex.toID(set.item);
			// if (set.species === 'Zacian' && item === 'rustedsword') {
				// set.species = 'Zacian-Crowned';
				// set.ability = 'Intrepid Sword';
				// const ironHead = set.moves.indexOf('ironhead');
				// if (ironHead >= 0) {
					// set.moves[ironHead] = 'behemothblade';
				// }
			// }
			// if (set.species === 'Zamazenta' && item === 'rustedshield') {
				// set.species = 'Zamazenta-Crowned';
				// set.ability = 'Dauntless Shield';
				// const ironHead = set.moves.indexOf('ironhead');
				// if (ironHead >= 0) {
					// set.moves[ironHead] = 'behemothbash';
				// }
			// }
		// },
		// onValidateTeam(team, format){
			// /**@type {{[k: string]: true}} */
			// for (const set of team) {
				// if (set.species == 'Zacian-Crowned' && set.ability !== 'Intrepid Sword')
					 // return ["Zacian-Crowned can only have Intrepid Sword as its ability."]
				// if (set.species == 'Zacian-Crowned' && set.item !== 'Rusted Sword')
					 // return ["Zacian-Crowned can only have Rusted Sword as its item."]
				// if ((set.species !== 'Zacian-Crowned' && set.species !== 'Zacian') && set.ability === 'Intrepid Sword')
					 // return ["Only Zacian-Crowned can have Intrepid Sword as its ability."]
			// }
		// },
	// },
  //	{
   	//	name: "[Gen 8] OU Theorymon",
   	// desc: [
	   	// "<b>OU Theorymon</b>: A Sword and Shield OU metagame where low-ranked Pokemon are improved to become more viable.",
		// ],
		// threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/ss-ou-theorymon.3695574/">OU Theorymon on Smogon Forums</a>`,
		// ],

		// mod: 'outheorymons',
      // ruleset: ['Standard', 'Dynamax Clause', 'Data Mod'],
		// banlist: ['Uber', 'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass'],
	// },
	// {
		// name: "[Gen 8] Paleomons",
		// desc: [
			// "<b>Paleomons</b>: A Sword and Shield metagame that aims to create a micrometa full of ancient Pokemon."
		// ],
		// threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/paleomons-slate-3-non-dino-stars-dimetrodon-dodo-sea-scorpion-submission-phase.3695565/">Paleomons on Smogon Forums`,
		// ],

		// mod: 'paleomons',
		// ruleset: ['Standard NatDex', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		// banlist: [
			// 'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		// ],
		// onValidateTeam(team, format) {
			// /**@type {{[k: string]: true}} */
			// let speciesTable = {};
			// let allowedTiers = ['Paleomons', 'Paleomons NFE', 'Paleomons LC'];
			// for (const set of team) {
				// let template = this.dex.species.get(set.species);
				// if (template.tier !== 'Paleomons' && template.tier !== 'Paleomons NFE' && template.tier !== 'Paleomons LC') {
					// return [set.species + ' is not legal in the Paleomons format.'];
				// }
			// }
		// },
	// },
	{
		name: "[Gen 8] Restrictions",
		desc: `<b>Restrictions</b>: A metagame made up of brand new Pok&eacute;mon that are made according to various random and non-random restrictions.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673824/">Restrictions on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1XsplBqN8njHZJT9cTP_3i3YSFITB9WaVfNOYAbNY75M/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'restrictions',
		ruleset: ['Standard', 'Dynamax Clause', 'Data Mod'],
		banlist: ['uber', 'ou', 'uubl', 'uu', 'rubl', 'ru', 'nubl', 'nu', 'publ', 'pu', 'zu', 'nfe', /*'lcuber',*/ 'lc', 'cap', 'caplc', 'capnfe', 'ag','past', 'future', 'lgpe'],
		teambuilderBans: ['unreleased'],
	},
	{
		name: "[Gen 8] Signature Restrictions",
		desc: `<b>Singature Restrictions</b>: A metagame made up of brand new Pok&eacute;mon that are made according to various restrictions provided by Pet Mod Users.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673824/">Singature Restrictions on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1nUaGjuy4ZHWa7x-f1hpw7jc6ecNUZtT7QChAidv5CvY/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'signaturerestrictions',
		ruleset: ['Standard', 'Dynamax Clause', 'Data Mod'],
		banlist: ['uber', 'ou', 'uubl', 'uu', 'rubl', 'ru', 'nubl', 'nu', 'publ', 'pu', 'zu', 'nfe', 'lc', 'cap', 'caplc', 'capnfe', 'ag','past', 'future', 'lgpe'],
		teambuilderBans: ['unreleased'],
	},
	{
		name: "[Gen 8] Stereotypes",
		mod: "stereotypes",
		desc: [
			"<b>Stereotypes</b>: A project that aims to create a micrometa containing a unique new Pokemon for all 171 possible types, with the hope that each mon will use its typing and the options that typing affords well, while still being balanced and interesting.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/stereotypes-slate-1-fire-grass-water.3681312/">Stereotypes on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/19CbVWEkREchf_88VNfyEpcYEIdH_aJe20VMQyc8i-8Y/edit?usp=sharing">Spreadsheet</a>`,
		],
		ruleset: ['Standard', 'Dynamax Clause', 'Data Mod'],
		banlist: ['Conversion', 'Conversion2', 'Libero', 'Protean', 'Transistor', 'Dragon\'s Maw', 'Steelworker', 'Steely Spirit', 'Color Change', 'Arena Trap', 'Shadow Tag', 'Moody'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['ST', 'ST NFE', 'ST LC'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if ( !allowedTiers.includes(template.tier) ) {
					return [set.species + ' is not useable in Stereotypes.'];
				}
			}
		},
	},
	///////////////////////////////////////////////////////////////
	//////////////////////// Solomods /////////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Solomods",
		column: 2,
	},
	{
		name: "[Gen 9] A Golden Experience",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		threads: [
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1YJXE8wUNJijWSfNKIUqgObN5uEVgTliewTluGe0w4Y4/edit?usp=sharing">Spreadsheet for the mod</a>`,
		],
		mod: 'agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		banlist: ['Uber', 'Power Construct', 'Berserk Gene', 'Moody',
					'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Pikanium Z', 'Aloraichium Z', 'Eevium Z', 'Snorlium Z', 'Mewnium Z', 'Ultranecrozium Z', 'Pikashunium Z', 'Decidium Z', 'Incinium Z', 'Primarium Z', 'Lycanium Z', 'Mimikium Z', 'Kommonium Z', 'Tapunium Z', 'Solganium Z', 'Lunalium Z', 'Marshadium Z',
					'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang', 'Shed Tail', 'Light Clay', 'Damp Rock', 'Heat Rock', 'Icy Rock', 'Smooth Rock',
				'Rusted Sword', 'Rusted Shield', 'Booster Energy'],
		unbanlist: ['Battle Bond', 'Greninja-Bond', 'Greninja-Ash'],
		teambuilderFormat: 'National Dex',
		onChangeSet(set) {
			const item = this.toID(set.item);
			if (set.species === 'Zacian' || set.species === 'Zacian-Crowned') {
				if (item === 'rustedsword') {
					set.species = 'Zacian-Crowned';
					set.ability = 'Intrepid Sword';
					let ironHead = set.moves.indexOf('ironhead');
					if (ironHead >= 0) {
						set.moves[ironHead] = 'behemothblade';
					}
				} else {
					set.species = 'Zacian';
				}
			}
			else if (set.species === 'Zamazenta' || set.species === 'Zamazenta-Crowned') {
				if (item === 'rustedshield') {
					set.species = 'Zamazenta-Crowned';
					set.ability = 'Dauntless Shield';
					let ironHead = set.moves.indexOf('ironhead');
					if (ironHead >= 0) {
						set.moves[ironHead] = 'behemothbash';
					}
				} else {
					set.species = 'Zamazenta';
				}
			}
		},
		onValidateTeam(team, format){
			/**@type {{[k: string]: true}} */
			for (const set of team) {
				if (set.species == 'Zacian-Crowned' && set.ability !== 'Intrepid Sword')
					 return ["Zacian-Crowned can only have Intrepid Sword as its ability."]
				if ((set.species !== 'Zacian-Crowned' && set.species !== 'Zacian') && set.ability === 'Intrepid Sword')
					 return ["Only Zacian-Crowned can have Intrepid Sword as its ability."]
			}
		},
	},
	{
		name: "[Gen 9] A Golden Experience UU",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		threads: [
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1YJXE8wUNJijWSfNKIUqgObN5uEVgTliewTluGe0w4Y4/edit?usp=sharing">Spreadsheet for the mod</a>`,
		],
		mod: 'agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause','OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		banlist: ['Uber', 'OU', 'UUBL', 'Battle Bond', 'Power Construct', 'Berserk Gene', 'Moody',
					'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Pikanium Z', 'Aloraichium Z', 'Eevium Z', 'Snorlium Z', 'Mewnium Z', 'Ultranecrozium Z', 'Pikashunium Z', 'Decidium Z', 'Incinium Z', 'Primarium Z', 'Lycanium Z', 'Mimikium Z', 'Kommonium Z', 'Tapunium Z', 'Solganium Z', 'Lunalium Z', 'Marshadium Z',
					'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang', 'Light Clay', 'Damp Rock', 'Heat Rock', 'Icy Rock', 'Smooth Rock', 'Booster Energy'],
		unbanlist: ['Battle Bond', 'Greninja-Bond', 'Greninja-Ash'],
		teambuilderFormat: 'National Dex UU',
		onChangeSet(set) {
			const item = this.toID(set.item);
			if (set.species === 'Zacian' || set.species === 'Zacian-Crowned') {
				if (item === 'rustedsword') {
					set.species = 'Zacian-Crowned';
					set.ability = 'Intrepid Sword';
					let ironHead = set.moves.indexOf('ironhead');
					if (ironHead >= 0) {
						set.moves[ironHead] = 'behemothblade';
					}
				} else {
					set.species = 'Zacian';
				}
			}
			else if (set.species === 'Zamazenta' || set.species === 'Zamazenta-Crowned') {
				if (item === 'rustedshield') {
					set.species = 'Zamazenta-Crowned';
					set.ability = 'Dauntless Shield';
					let ironHead = set.moves.indexOf('ironhead');
					if (ironHead >= 0) {
						set.moves[ironHead] = 'behemothbash';
					}
				} else {
					set.species = 'Zamazenta';
				}
			}
		},
		onValidateTeam(team, format){
			/**@type {{[k: string]: true}} */
			for (const set of team) {
				if (set.species == 'Zacian-Crowned' && set.ability !== 'Intrepid Sword')
					 return ["Zacian-Crowned can only have Intrepid Sword as its ability."]
				if ((set.species !== 'Zacian-Crowned' && set.species !== 'Zacian') && set.ability === 'Intrepid Sword')
					 return ["Only Zacian-Crowned can have Intrepid Sword as its ability."]
			}
		},
	},
	{
		name: "[Gen 9] A Golden Experience RU",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		threads: [
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1YJXE8wUNJijWSfNKIUqgObN5uEVgTliewTluGe0w4Y4/edit?usp=sharing">Spreadsheet for the mod</a>`,
		],
		mod: 'agoldenexperience',
		ruleset: ['Standard NatDex', 'Terastal Clause','OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL','Battle Bond', 'Power Construct', 'Berserk Gene', 'Moody',
					'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Pikanium Z', 'Aloraichium Z', 'Eevium Z', 'Snorlium Z', 'Mewnium Z', 'Ultranecrozium Z', 'Pikashunium Z', 'Decidium Z', 'Incinium Z', 'Primarium Z', 'Lycanium Z', 'Mimikium Z', 'Kommonium Z', 'Tapunium Z', 'Solganium Z', 'Lunalium Z', 'Marshadium Z',
					'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang', 'Zen Mode', 'Light Clay', 'Damp Rock', 'Heat Rock', 'Icy Rock', 'Smooth Rock', 'Booster Energy'],
		unbanlist: ['Battle Bond', 'Greninja-Bond', 'Greninja-Ash'],
		teambuilderFormat: 'National Dex RU',
		onChangeSet(set) {
			const item = this.toID(set.item);
			if (set.species === 'Zacian' || set.species === 'Zacian-Crowned') {
				if (item === 'rustedsword') {
					set.species = 'Zacian-Crowned';
					set.ability = 'Intrepid Sword';
					let ironHead = set.moves.indexOf('ironhead');
					if (ironHead >= 0) {
						set.moves[ironHead] = 'behemothblade';
					}
				} else {
					set.species = 'Zacian';
				}
			}
			else if (set.species === 'Zamazenta' || set.species === 'Zamazenta-Crowned') {
				if (item === 'rustedshield') {
					set.species = 'Zamazenta-Crowned';
					set.ability = 'Dauntless Shield';
					let ironHead = set.moves.indexOf('ironhead');
					if (ironHead >= 0) {
						set.moves[ironHead] = 'behemothbash';
					}
				} else {
					set.species = 'Zamazenta';
				}
			}
		},
		onValidateTeam(team, format){
			/**@type {{[k: string]: true}} */
			for (const set of team) {
				if (set.species == 'Zacian-Crowned' && set.ability !== 'Intrepid Sword')
					 return ["Zacian-Crowned can only have Intrepid Sword as its ability."]
				if ((set.species !== 'Zacian-Crowned' && set.species !== 'Zacian') && set.ability === 'Intrepid Sword')
					 return ["Only Zacian-Crowned can have Intrepid Sword as its ability."]
			}
		},
	},
	{
		name: "[Gen 9] A Golden Experience VGC",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		threads: [
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1YJXE8wUNJijWSfNKIUqgObN5uEVgTliewTluGe0w4Y4/edit?usp=sharing">Spreadsheet for the mod</a>`,
		],
		mod: 'agoldenexperience',
		gameType: 'doubles',
		teambuilderFormat: 'National Dex Doubles',
		ruleset: [/*'Flat Rules', */'Terastal Clause', 'Adjust Level = 50', 'VGC Timer', 'Dynamax Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'Mewtwo', 'Mew',
			'Lugia', 'Ho-Oh', 'Celebi',
			'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys',
			'Dialga', 'Palkia', 'Giratina', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
			'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion',
			'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zeraora',
			'Zacian', 'Zamazenta', 'Eternatus', 'Zarude', 'Calyrex',
			'Koraidon', 'Miraidon',
		],
		unbanlist: ['Battle Bond', 'Greninja-Bond', 'Greninja-Ash'],
	},
	{
		name: "[Gen 9] Balls",
		mod: 'balls',
		desc: `A hilarious metagame filled with nothing but balls.`,
		ruleset: ['Standard', 'Data Mod'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Balls'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return ['Balls ' + set.species + ' doesnt exist.'];
				}
			}
		},
	},
	{
        name: "[Gen 9] Climate Change",
        desc: [
            "weather war",
        ],
        threads: [
            `&bullet; <a href="https://www.youtube.com/shorts/bbZCltuyZlM">Climate Change on Smogon Forums</a>`,
              ],
        ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
        banlist: ['Sunny Day', 'Rain Dance', 'Sandstorm', 'Hail', 'Snowscape', 'Chilly Reception', 'Charizardite X'],
		teambuilderFormat: "National Dex",
        onValidateTeam(team, format) {
            /**@type {{[k: string]: true}} */
            let speciesTable = {};
            for (const set of team) {
                let template = this.dex.species.get(set.species);
                if (template.tier !== 'CC') {
                    return [set.species + ' is not usable in Climate Change.'];
                }
            }
        },
        mod: 'weatherwar',
    },
	{
		name: "[Gen 9] Clubmons: Requiem",
		mod: 'clubmonsrequiem',
		desc: `A micrometagame focused on accessibility and teambuilder diversity.`,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod', 'Terastal Clause'],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/page-8#post-10124271">Clubmons on Smogon Forums</a>`,
		],
		banlist: ['Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Quick Claw', 'Baton Pass', 'Last Respects', 'Hidden Power', 'Absolite', 'Sablenite'],
		teambuilderFormat: 'National Dex',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['CM', 'CM (NFE)'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Clubmons.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] CommunityUsed 2: Regional Dex",
		mod: 'communityused2',
		desc: `A micrometa that combines secret santa with Generation X.`,
		ruleset: ['Standard NatDex', 'Data Mod', 'Terastal Clause', 'Z-Move Clause', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		teambuilderFormat: 'National Dex',
		banlist: ['Baton Pass'],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-10093481">CU2 on Smogon Forums</a>`,
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['CU2 OU', 'CU2 NFE'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in CommunityUsed 2.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Conquest Dex",
		mod: 'conquestdex',
		desc: `A metagame based on the pokemon side game pokemon conquest`,
		ruleset: ['Standard NatDex', 'Data Mod', 'Terastal Clause', 'Z-Move Clause', 'Mega Stone Clause'],
		banlist: ['Arceus', 'Dialga', 'Rayquaza', 'Zekrom', 'Reshiram', 'Mewtwo', 'Groudon'],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-9883990">Conquest Dex on Smogon Forums</a>`,
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Conq'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Conquest Dex.'];
        }
      }
    },
	},
	{
		name: "[Gen 2] Crystal Legacy",
		mod: 'gen2crystallegacy',
		desc: `A Solomod centered around Crystal Legacy.`,
		ruleset: ['Standard', 'Data Mod', 'VGC Timer'],
	},
	{
		name: "[Gen 9] Dex Reversal",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-10062853">Dex Reversal</a>`,
		],
		teambuilderFormat: "National Dex",
		mod: 'dexreversal',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Moves Clause', 'Mega Data Mod', 'Data Mod', 'Terastal Clause', 'Z-Move Clause'],
		banlist: ['Baton Pass', 'King\'s Rock', 'Razor Fang', 'Moody', 'Smeargle', 'Shell Smash', 'Shadow Tag', 'Calyrex-Ice', 'Eternatus-Eternamax', 'Medichamite'],
	},
	{
		name: "[Gen 9] Do Not Use",
		desc: [
			"<b>Do Not Use</b>: A National Dex metagame where only Pokemon with 280 BST or less are allowed."
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-do-not-use.3734326/">Do Not Use</a>`,
		],
		mod: 'donotuse',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Terastal Clause', 'Z-Move Clause'],
		teambuilderFormat: 'National Dex',
		banlist: ['Huge Power', 'Pure Power', 'Shadow Tag', 'Arena Trap', 'Baton Pass', 'Moody'],
		unbanlist: ['Assist'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['DoNU', 'DoNU UUBL', 'DoNU UU', 'DoNU RUBL', 'DoNU RU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in [Gen 9] Do Not Use.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Do Not Use UU",
		desc: [
			"<b>Do Not Use</b>: A National Dex metagame where only Pokemon with 280 BST or less are allowed."
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-do-not-use.3734326/">Do Not Use</a>`,
		],
		mod: 'donotuse',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Terastal Clause', 'Z-Move Clause'],
		teambuilderFormat: 'National Dex',
		banlist: ['Huge Power', 'Pure Power', 'Shadow Tag', 'Arena Trap', 'Baton Pass', 'Moody'],
		unbanlist: ['Assist'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['DoNU UU', 'DoNU RUBL', 'DoNU RU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in [Gen 9] Do Not Use UU.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] DNU Randbats",
		desc: `<b>Do Not Use</b>: A National Dex metagame where only Pokemon with 280 BST or less are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-do-not-use.3734326/">Do Not Use</a>`,
		],
		mod: 'donotuse',
		team: 'random',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Sleep Clause Mod', 'Terastal Clause', 'Cancel Mod'],
	},
	{
		name: "[Gen 9] Dream World Theorymons",
		desc: '<b>[Gen 8] Gen 9 Dream World Theorymons</b>: A testing ground for the Gen 9 OU Theorymons metagame.',
		mod: 'outheorymons',
		ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass', 'Last Respects'],
	},
    {
 		name: "[Gen 9] Earth & Sky Horizons OU",
 		desc: `The metagame based on Pok&eacute;mon Earth & Sky, a set of theoretical games created by En Passant, with the Horizons Expansion for Gen 9.`,
 		threads: [
 			`&bullet; <a href="https:docs.google.com/spreadsheets/d/1zLXacuxUs05muhn3fTty_UW2ww3KSZCmnzdsUzVR-x8/edit?usp=sharing">Competitive Cheat Sheet</a>`,
 		],
 		mod: 'earthsky',
 		ruleset: [ 'Earth & Sky', 'Restricted Rules'],
 		banlist: [
 			'Alakazam-Mega', 'Arceus', 'Blaziken-Mega', 'Blastoise-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
 			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed',	'Dialga', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon',
 			'Ho-Oh', 'Kartana', 'Koraidon', 'Kyogre', 'Kyurem', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Miraidon',
 			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Robo Bundle',
 			'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
 			'Oceides', 'Hatar', 'Zuros', 'Norphaval', 'Khatrophys', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Stellar Tera Shard'
 		],
 	},
	 {
	 	name: "[Gen 9] Earth & Sky Horizons Triples",
	 	threads: [
	 		`&bullet; <a href="https:docs.google.com/spreadsheets/d/1zLXacuxUs05muhn3fTty_UW2ww3KSZCmnzdsUzVR-x8/edit?usp=sharing">Competitive Cheat Sheet</a>`,
	 	],
	 	mod: 'earthsky',
	 	gameType: 'triples',
	 	ruleset: [ 'Earth & Sky', 'Restricted Rules', 'Gravity Sleep Clause'],
	 	banlist: [
	 		'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed',
	 		'Dialga', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem', 'Landorus-Base',
	 		'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa',
	 		'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
	 		'Oceides', 'Hatar', 'Zuros', 'Norphaval', 'Khatrophys', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Stellar Tera Shard'
	 	],
	 },
	 {
	 	name: "[Gen 9] Earth & Sky Horizons Dex",
	 	threads: [
	 		`&bullet; <a href="https:docs.google.com/spreadsheets/d/1zLXacuxUs05muhn3fTty_UW2ww3KSZCmnzdsUzVR-x8/edit?usp=sharing">Competitive Cheat Sheet</a>`,
	 	],
	 	mod: 'earthsky',
	 	ruleset: [ '[Gen 9] Earth & Sky Horizons OU', 'Horizons Pokedex',],
		banlist: [
			'Manaphy', 'Meloetta-Pirouette', 'Diancie-Mega', 'Melmetal', 'Enamorus-Base', 'Latias-Mega', 'Latios-Mega', 'Zygarde-Base', 'Hoopa-Unbound',
			'Spectrier', 'Roaring Moon', 'Valiant Droid', 'Terapagos-Terastal'],
	 },
	 {
	 	name: "[Gen 9] Earth & Sky Horizons Ubers",
	 	threads: [
	 		`&bullet; <a href="https:docs.google.com/spreadsheets/d/1zLXacuxUs05muhn3fTty_UW2ww3KSZCmnzdsUzVR-x8/edit?usp=sharing">Competitive Cheat Sheet</a>`,
	 	],
	 	mod: 'earthsky',
	 	ruleset: [ 'Earth & Sky',],
	 	banlist: ['Baton Pass'],
	 },
	 {
		name: "[Gen 8] Evolution Project",
		desc: [
			`<b>Evolution Project</b>: A small group's creative exercise being given a test run. More details when we go public!`,
		],
		ruleset: ['Standard NatDex', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod', 'Terastal Clause'],
		banlist: [
			'Alakazam', 'Excadrill-Base', 'Exploud', 'Lycanroc-Dusk', 'Naganadel-Base', 'Reuniclus-Base', 'Scizor', 'Scolipede-Base', 'Starmie-Base', 'Polteageist-Base',
			'Polteageist-Antique', 'Volcarona', 'Aegislash-Base', 'Gyarados', 'Moody', 'Baton Pass'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Evo!' && template.tier !== 'Evo (NFE)' && template.tier !== "Evo NFE!") {
					return [set.species + ' is not legal in the Evolution Project format.'];
				}
			}
		},
		onValidateSet(set) {
			const item = this.dex.items.get(set.item);
			if (item.megaStone) return [`${set.name || set.species} is not currently allowed to Mega Evolve.`];
		},
		mod: 'evolutionproject',
		searchShow: false,
	},
	{
		name: "[Gen 8] Evolution Project VGC",
		desc: [
			`<b>Evolution Project</b>: A small group's creative exercise being given a test run. More details when we go public!`,
		],
		gameType: 'doubles',
		banlist: ['Aegislash-Base', 'Scizor'],
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer', '+Unobtainable', '+Past', 'Dynamax Clause', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod', 'Terastal Clause'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Evo!' && template.tier !== 'Evo (NFE)' && template.tier !== "Evo NFE!") {
					return [set.species + ' is not legal in the Evolution Project format.'];
				}
			}
		},
		onValidateSet(set) {
			const unobtainables = [
				'Eevee-Starter', 'Floette-Eternal', 'Pichu-Spiky-eared', 'Pikachu-Belle', 'Pikachu-Cosplay', 'Pikachu-Libre',
				'Pikachu-PhD', 'Pikachu-Pop-Star', 'Pikachu-Rock-Star', 'Pikachu-Starter', 'Eternatus-Eternamax',
			];
			const species = this.dex.species.get(set.species);
			if (unobtainables.includes(species.name)) {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			if (species.tier === "Unreleased") {
				const basePokemon = this.toID(species.baseSpecies);
				if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`)) {
					return;
				}
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			// Items other than Z-Crystals and Pokémon-specific items should be illegal
			if (!set.item) return;
			const item = this.dex.items.get(set.item);
			if (item.megaStone) return [`${set.name || set.species} is not currently allowed to Mega Evolve.`];
			if (!item.isNonstandard) return;
			if (['Past', 'Unobtainable'].includes(item.isNonstandard) && !item.zMove && !item.itemUser && !item.forcedForme) {
				if (this.ruleTable.has(`+item:${item.id}`)) return;
				return [`${set.name}'s item ${item.name} does not exist in Gen ${this.dex.gen}.`];
			}
		},
		mod: 'evolutionproject',
		searchShow: false,
	},
	{
		name: "[Gen 9] Fakemon Kitchen",
		desc: `A Metagame consisting of Fakemon created in a Flash-CAP styled process, revolving around flavor first.`,
		threads: [
			`None`,
		],
		mod: 'kitchen',
		ruleset: ['Standard'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
		unbanlist: ['Athleetah'],
	},
	{
		name: "[Gen 9] Fusion Evolution Corrupt Council",
		mod: 'fecc',
		team: 'random',
		desc: `fecc`,
		ruleset: ['Data Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9] Fusion Evolution Dondozo",
		mod: 'dondozo',
		desc: `dondozo`,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod', 'Z-Move Clause', /* 'Mega Data Mod' */],
		banlist: ['Shed Tail'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Dondozo','FEDD'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Fusion Evolution.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Fusion Evolution VGC",
		desc: ["Fusion Evolution but it's a VGC format, and a solomod run by AquaticPanic",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-9929461">FEVGC on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1DoV2Vk9B2mYxwVQt9ebA2CvygBLk29az3iszycMAh2k/edit#gid=0">Spreadsheet</a>`,
		      ],
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Data Mod'],
		mod: 'gen9fevgc',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['FEOU', 'FENFE', 'FELC'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Fusion Evolution.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Fusion Evolution VGC (Bo3)",
		desc: ["Fusion Evolution but it's a VGC format, and a solomod run by AquaticPanic",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-9929461">FEVGC on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1DoV2Vk9B2mYxwVQt9ebA2CvygBLk29az3iszycMAh2k/edit#gid=0">Spreadsheet</a>`,
		      ],
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Data Mod', 'Force Open Team Sheets', 'Best of = 3'],
		mod: 'gen9fevgc',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['FEOU', 'FENFE', 'FELC'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Fusion Evolution.'];
				}
			}
		},
	},
	{
		name: "[Gen 1] Glitch OU",
		mod: 'gen1glitch',
		ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber', 'Agility + Wrap', 'Agility + Fire Spin', 'Agility + Bind', 'Agility + Clamp', 'Amnesia', 'Sleep Powder', 'Self-Destruct', 'Explosion'],
	},
	{
		name: "[Gen 2] GSC Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3660004/post-9132049">Post in Solomods Megathread</a>`,
		],

		mod: 'gen2doubles',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 9] i forgor OU",
		mod: 'iforgor',
		desc: `i forgor`,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod', 'Mega Data Mod'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['IDK'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return ['you forgor ' + set.species + ' doesnt exist.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] i forgor Ubers",
		mod: 'iforgor',
		desc: `i forgor`,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod', 'Mega Data Mod'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['EF', 'IDK'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return ['you forgor ' + set.species + ' doesnt exist.'];
				}
			}
		},
	},
	{
		name: "[Gen 1] JohtoMons",
		desc: '<b>[Gen 1] JohtoMons</b>: Adding the Johto mons to RBY',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-1-futureproofing-slate-1-discussion.3703375/">FutureProofing on Smogon Forums</a>`,
		],
		mod: 'gen1johtomons',
		ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber'],
		unbanlist: ['Aeroblast', 'Sacred Fire', 'Sketch', 'Present', 'Megahorn', 'Steel Wing', 'Milk Drink', 'Metal Claw', 'Spider Web', 'Hidden Power', 'Octazooka', 'Triple Kick', 'Vital Throw', 'Extreme Speed', 'Mach Punch', 'Outrage', 'Morning Sun',
			'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic',
			'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking',
			'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub',
			'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank',
			'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi',
		],
    },
	{
		name: "[Gen 2] Johto Expansion Pak (Alpha) OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/page-6#post-9880873">Post in Solomods Megathread</a>`,
      	`&bullet; <a href="https://docs.google.com/spreadsheets/d/1t54hCQrMGj102ck9L7mW47GJxrHMmJy5Ygum6ldWVX0/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen2expansionpack',
		ruleset: ['Standard', 'Data Mod', 'Welcome Message'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Johto Expansion Pak Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/page-6#post-9880873">Post in Solomods Megathread</a>`,
      	`&bullet; <a href="https://docs.google.com/spreadsheets/d/1t54hCQrMGj102ck9L7mW47GJxrHMmJy5Ygum6ldWVX0/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen2expansionpack',
		ruleset: ['Standard', 'Data Mod', 'Welcome Message'],
	},
	{
		name: "[Gen 1] Kanto Expansion Pak OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3660004/post-9233581">Post in Solomods Megathread</a>`,
      	`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TpTH9ksUWOOJJQK69RIcvnot_mH_JvfGfM4zra6V3Ec/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen1expansionpack',
		ruleset: ['Standard', 'Data Mod', 'Welcome Message', 'Allow Tradeback'],
		banlist: ['Uber'],
	},
		{
		name: "[Gen 1] Kanto Expansion Pak Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3660004/post-9233581">Post in Solomods Megathread</a>`,
      	`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TpTH9ksUWOOJJQK69RIcvnot_mH_JvfGfM4zra6V3Ec/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen1expansionpack',
		ruleset: ['Standard', 'Data Mod', 'Welcome Message', 'Allow Tradeback'],
	},
	{
		name: "[Gen 8] Kaen's Dex",
		mod: "kaensdex",
		ruleset: ['Standard NatDex', 'Z-Move Clause', 'Data Mod'],
		banlist: ['All Pokemon'],
		unbanlist: ['Luvdisc', 'Hypno','Arbok','Shuckle','Woodite','Manteaf','Fasmiwood','Smice','Ratevil','Burstrat',		'Doplash','Makid','Merdolph','Princeguin',
			'Kinguin','Ekidna','Porcusquill','Mop','Mopper','Puppessum','Grimssum','Spiball','Scopiball','Navird','Peckbeard','Bask','Peayes','Weaworm',
			'Lilfly','Koafly','Puptwin','Duog','Bureep','Parllama','Debi','Deecrust','Pickynest','Vulcdor','Buroach','Bugler','Roamai','Rack','Mountse',
			'Lacorn','Antney','Hairpu','Sockorm','Kibaion','Kibasol','Gnodog','Dressog','Tigle','Biitora','Psyguana','Forguana','Timk','Dynabite','Positt',
			'Frogassin','Jaklove','Wospark','Ravesp','Cabbitt','Haresprout','Seerd','Evialden','Ostranch','Pasuragu','Grussgu','Orvenom','Nerdium','Smartish',
			'Higarden','Unimount','Birnal','Yeagle','Flysh','Seaplane','Airpier','Likaba','Sucabra','Mousse','Donter','Melops','Harvetops','Pentamelop',
			'Scarferret','Lovefume','Smolle','Molvel','Toxtaur','Venotauro','Helmdillo','Rescurer','Crimske','Snagant','Zhulong','Yufo','Spavader','Grichick',
			'Grileo','Sbusho','Pangearth','Ankylonite','Champkylo','Slomoss','Milomoss','Rampeck','Terroccer','Tifrost','Smilofrost','Vizcachu','Paramer',
			'Toolsaur','Neuro','Brancell','Freezegon','Snoak','Coldrake','Capowt','Capoedar','Warcon','Istrebitel','Voltcro','Wirechomp','Thungator',
			'Scalpick','Roostlax','Eagatrice','Theri','Theriscyno','Ghoca','Moclaw','Jawlusk','Tumbna','Plesioskul','Laveel','Thermaque','Thermandril',
			'Tamantula','Spideth','Abomigo','Chillma','Wintber','Evergrowl','Stontler','Balatone','Coayena','Pherosmoke','Octovase','Cthulhurn','Shahood',
			'Karakasa','Grag','Kimokus','Toknight','Cowpy','Cowork','Barbecow','Hoorel','Baishark','Luviu','Shucklony','Dreamer','Nohtyp']
	},
	{
		name: "[Gen 9] Mega Mania",
		mod: "megamania",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: ['ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Kings Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Single Typed - OU",

		mod: 'monotyped',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'Zen Mode', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects'],
		teambuilderFormat: 'National Dex',
	},
	{
		name: "[Gen 9] Single Typed - Uber",

		mod: 'monotyped',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: ['AG', 'Moody', 'Zen Mode', 'Baton Pass'],
		teambuilderFormat: 'National Dex Uber',
	},
	{
		name: "[Gen 9] Single Typed - LC",

		mod: 'monotyped',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', 'Little Cup'],
		banlist: ['NFE', 'Moody', 'Baton Pass'],
		teambuilderFormat: 'National Dex LC',
	},
	{
		name: "[Gen 9] Single Typed - Monotype",

		mod: 'monotyped',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
				'Arena Trap', 'Moody', 'Zen Mode', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
				'Baton Pass', 'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Espathra', 'Groudon',
				'Kyogre', 'Palafin', 'Spectrier', 'Xerneas', 'Zacian', 'Zamazenta',
		],
		teambuilderFormat: 'National Dex',
	},
	{
		name: "[Gen 9] Monster Hunter AG",
		threads: [],
		mod: 'monsterhunter',
		ruleset: ['Standard', 'Data Mod'],
		banlist: [],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MOU', 'MEGAOU', 'MEGAAG'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter AG.'];
				}
			}
		},
	 },
	 {
		name: "[Gen 9] Monster Hunter OU",
		threads: [],
		mod: 'monsterhunter',
		ruleset: ['Standard', 'Data Mod'],
		banlist: [
			'Narwanite', 'Astalite', 'Bazelnite', 'Magnamalite', 'Malzenite',
			'Mizutsunite', 'Rajanite', 'Rathalosite', 'Rathianite', 'Valstraxite', 'Zinogrite'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MOU', 'MEGAOU', 'MEGAAG'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter OU.'];
				}
			}
		},
	},
	{
		name: "[Gen 1] Moonside",
		desc: `<b>[Gen 1] Moonside</b>: Welcome to the otherside of RBY.`,
		threads: [
			 `&bullet; Fuzzy Pickles!`,
		],
		mod: 'gen1moonside',
		ruleset: ['Data Mod'],
		banlist: [],
		unbanlist: ['Mewtwo', 'Mew'],
  },
	{
		name: "[Gen 9] Patratdex",
		desc: `<b>Patratdex</b>: Galvantic's Solomod, containing a new regional dex with a bunch of new stuff, notably 151 Fakemon.`,
		mod: 'patratdex',
		ruleset: ['Standard NatDex', 'Dynamax Clause', 'Sleep Clause Mod', 'Species Clause', 'Moody Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Baton Pass Clause', 'OHKO Clause', 'Realmon Clause'],
		banlist: ['Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z',],
		onSwitchIn(pokemon) {
      	this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 9] National Dex Strongest State",
		threads: [
		],

		mod: 'gen9strong',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Moves Clause'/*, 'Para Moves Clause'*/],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass',
				'Blizzard', 'Explosion', 'Self-Destruct', 'Drizzle', 'Drought', 'Sand Stream', 'Aguav Berry', 'Figy Berry', 'Iapapa Berry', 'Mago Berry', 'Soul Dew', 'Wiki Berry', 'Last Respects',
		],
		teambuilderFormat: 'National Dex',
	},
	{
		name: "[Gen 9] National Dex Strongest State Ubers",
		threads: [
		],

		mod: 'gen9strong',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Moves Clause'],
		banlist: ['AG', 'Baton Pass', 'Blizzard', 'Moody'],
		teambuilderFormat: 'National Dex Uber',
	},
	{
		name: "[Gen 9] Patratdex Doubles",
		desc: `<b>Patratdex</b>: Galvantic's Solomod, containing a new regional dex with a bunch of new stuff, notably 151 Fakemon.`,
		mod: 'patratdex',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Dynamax Clause', 'Sleep Clause Mod', 'Species Clause', 'Moody Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Baton Pass Clause', 'OHKO Clause', 'Realmon Clause'],
		banlist: ['Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z',],
		onSwitchIn(pokemon) {
      	this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 9] PokeMorty",
		desc: `<b>PokeMorty</b>: A Gen 9 Mod made by SDM_0 heavily inspired by the video-game "Pocket Morty".`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-9880923">Post in Solomods Megathread</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1NwWodcuBmT4fFpgK0PNlr9MslCWm97J3_2YrYP6OZVQ/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'pokemorty',
		ruleset: ['Standard', 'Max Team Size = 5', '!Obtainable Abilities', 'Terastal Clause', '-All Items', 'Data Mod'],
		banlist: ['Implode', 'Negative Space', 'Time Dilation', 'Grill Season', 'Use The Light',
		'Unspoken Bond', 'Bird Lover', 'Apex Genius', 'Training Complete', 'Abstracted Form',
		'Higher Education', 'Cell Division', 'Infiltrate', 'Mirror Image', 'Fast Charging',
		'Death Crystal', 'Magic Door', 'Strip Dance', 'Squid Costume', 'Cut the Chut', 'Bold And Daring',
		'Attention', 'Wedgie-Proof', 'Anthocyanin', 'Grade A', 'Always Fresh', 'Present Portal', 'Impersonate',
		'Flavor Combo', 'Apology Video', 'Espionage', 'Entitlement', 'Hypnotize', 'Mouth Off', 'Doze',
		'Traumatize', 'Mind-Numbing Hello', 'Love Bug', 'Stare Down'],
		onValidateTeam(team) {
			let speciesTable = {};
			let allowedTiers = ['PM OU', 'PM NFE', 'PM LC'];
			let problems = [];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					problems.push(`${set.species} is not a Morty.`);
				}
				if (this.dex.abilities.get(set.ability).id !== "noability") {
					problems.push(`${set.species} can't have ${set.ability}.`);
				}
				if (!['bashful', 'docile', 'hardy', 'quirky', 'serious', ''].includes(this.toID(set.nature))) {
					problems.push(`${set.species} can't have a non-neutral nature.`);
				}
			}
			return problems;
		},
	},
	{
		name: "[Gen 1] RBY Recolored",
		threads: [
      	`&bullet; <a href="https://docs.google.com/document/d/1KqmnxRzM_v8FOWBM98axtIwA-LWeFEs1CUu2NFIdXwY/edit?usp=sharing">Document</a>`,
		],
		mod: 'gen1recolored',
		ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 9] Rock Bottom",
		desc: [
			"<b>Rock Bottom</b>: A micrometa with an extremely low powerlevel and typically common strong tools being thinly distributed.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-10151175">Post in the Solomods Megathread</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1BySngRBKJhUiq0-hynrDp2HVNqzWjL-8RaL8mQIyCqA/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'rockbottom',
		ruleset: ['Standard', 'Terastal Clause', 'Data Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['RB'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in [Gen 9] Rock Bottom.'];
				}
			}
		},
	},
	/*{
		name: "[Gen 8] Roulettemons The Solomod",
		desc: `<b>Roulettemons The Solomod</b>: literally roulettemons but a solomod + clean slate micro`,
		mod: 'roulettemonsthesolomod',
		ruleset: ['Standard NatDex', 'Data Mod'],
		banlist: ['All Pokemon'],
		unbanlist: [
			'Spinmadillo', 'Coyoctric', 'Spizelle', 'Fierhog', 'Elatuff', 'Glasyte', 'Bisong', 'Megalo', 'Oysteat', 'Ponymph', 'Hypepion', 'Chickola', 'Skelehawk', 'Catetar', 'Blastquito', 'Hawkward', 'Pandaid', 'Autoad', 'Skelephin', 'Doomossum', 'Llamagic', 'Venoroach', 'Salamados', 'Steelboon', 'Jaguaplume',
		],
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
		},
	},*/
	{
		name: "[Gen 3] Sample Team Randbats",
		team: 'random',
		mod: 'gen3sampleteamrandbats',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				var side = pokemon.side;
				this.hint(side.team[0].sampleTeamName, true, pokemon.side);
			}
		},
	},
	{
		name: "[Gen 9] Scootopia",
		desc: "A solomod consisting of Scoopapa's first 30 sprited fakemons!",
		threads: [
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1khgnzqe3xldhLw1LbfjyYDcsltZrgyo8by4Y8EDE4vQ/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: "scootopia",
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Z-Move Clause', 'Data Mod', 'Super Type Moves Rule',],
		banlist: ['All Pokemon', 'Crystal Heart', 'Wild Heart', 'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Double Team', 'Snow Cloak', 'Sand Veil'],
		unbanlist: ["Arbrella", "Krachiten", "Scalaron", "Rantler", "Woolora", "Albatrygon", "Orchile",
		"Embuck", "Cindoe", "Cobracotta", "Minillow", "Crossont", "Torgeist", "Platypad", "Lumoth",
		"Aurorowl", "Carapex", "Dojodo", "Nunopod", "Zeploom", "Brawnkey", "Salamalix", "Cinnastar",
		"MuabBoa", "Volvolpa", "Harzodia", "Cyllindrake", "Kodokai", "Electangle", "Dolphena", "Soleron",
		"Soleron-Awakened", "Jaegorm", "Jaegorm-Collective", "Elemadillo", "Axolacred", "Roscenti",
		"Blunderbusk", "Barracoth", "Jamborai", "Dracoil", "Celespirit", "Noxtrice", "Avastar",
		"Faerenheit", "Cellsius", "Kelven", "Salaos", "Morndos", "Pythos", "Corundell", "Quadringo",
		"Saphor", "Fenreil", "Efflor", "Flocura", "Flocura-Nexus"],
	},
	{
		name: "[Gen 9] Scootopia Ubers",
		desc: "A test meta for proposed changes to the hit solomod Scootopia!",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/scootopia.3742131/post-10103602">Thread</a>`,
		],
		mod: "scootopia",
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Z-Move Clause', 'Data Mod', 'Super Type Moves Rule',],
		banlist: ['All Pokemon', 'Bright Powder', 'Lax Incense', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Double Team', 'Snow Cloak', 'Sand Veil'],
		unbanlist: ["Arbrella", "Krachiten", "Scalaron", "Rantler", "Woolora", "Albatrygon", "Orchile",
		"Embuck", "Cindoe", "Cobracotta", "Minillow", "Crossont", "Torgeist", "Platypad", "Lumoth",
		"Aurorowl", "Carapex", "Dojodo", "Nunopod", "Zeploom", "Brawnkey", "Salamalix", "Cinnastar",
		"MuabBoa", "Volvolpa", "Harzodia", "Cyllindrake", "Kodokai", "Electangle", "Dolphena", "Soleron",
		"Soleron-Awakened", "Jaegorm", "Jaegorm-Collective", "Elemadillo", "Axolacred", "Roscenti",
		"Blunderbusk", "Barracoth", "Jamborai", "Dracoil", "Celespirit", "Noxtrice", "Avastar",
		"Faerenheit", "Cellsius", "Kelven", "Salaos", "Morndos", "Pythos", "Corundell", "Quadringo",
		"Saphor", "Fenreil", "Efflor", "Flocura", "Flocura-Nexus"],
	},
	{
        name: "[Gen 9] Spookymod",
        desc: [
            "jumpscaare",
        ],
        threads: [
            `&bullet; <a href="https://www.youtube.com/shorts/bbZCltuyZlM">Spookymod on Smogon Forums</a>`,
              ],
        ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Spokymod'],
        banlist: [],
		teambuilderFormat: "National Dex",
        onValidateTeam(team, format) {
            /**@type {{[k: string]: true}} */
            let speciesTable = {};
            let f = false;
            let ff = false;
            for (const set of team) {
                if (set.species === 'Flutter Mane') f = true;
                else if (set.species === 'Flutter Mane 2') ff = true;
                if(f && ff) return ['Did you think you could bring two Flutter Manes to a game? Are you stupid?'];
                let template = this.dex.species.get(set.species);
                if (template.tier !== 'SM') {
                    return [set.species + ' is not usable in Spookymod.'];
                }
            }
        },
        mod: 'spookymod',
    },
	// {
		// name: "[Gen 9] Super Types OU",
		// desc: "The Super Type mechanic from Scootopia, only it's applied to current gen 9 OU.",
		// threads: [
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/1khgnzqe3xldhLw1LbfjyYDcsltZrgyo8by4Y8EDE4vQ/edit#gid=1291687635">Types + Moves Explained</a>`,
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/1khgnzqe3xldhLw1LbfjyYDcsltZrgyo8by4Y8EDE4vQ/edit#gid=894228879">List of Defensive Type Combos</a>`,
		// ],
		// mod: "supertypesou",
		// ruleset: ['Standard NatDex', 'Z-Move Clause', 'Data Mod'],
	// },
	{
		name: "[Gen 2] Tera Crystal",
		desc: ["<b>Tera Crystal</b>- A Gen 2 solomod where the Gen 9 mechanic of Terastallization is added to the game."],
		mod: 'gen2teracrystal',
		ruleset: ['Standard', 'Data Mod', 'Can Terastal'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 8] The 3-3-1 Typechart",
		desc: [
			"<b>The 3-3-1 Typechart</b>: A solomod that gives every type 3 weaknesses, 3 resistances, and 1 immunity.",
			],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3660004/post-8939651">Post in the Solomods Megathread</a>`,
		],

		mod: 'the331typechart',
		teambuilderFormat: 'OU',
		ruleset: ['Standard', 'Dynamax Clause', 'Data Mod'],
		banlist: ['Uber', 'Moody', 'Shadow Tag', 'Baton Pass', 'Kyurem', 'Slowking-Base', 'Slowbro-Base'],
	},
	{
		name: "[Gen 1] Tradebacks Expanded",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/solomods-megathread.3711007/post-9881531">Post in Solomods Megathread</a>`,
      	`&bullet; <a href="https://docs.google.com/spreadsheets/d/1F-e0PZF2LpVBS3yBzO-pCU6XPX1RfmoEucrhNgTco5Y/edit#gid=0">Spreadsheet</a>`,
		],
		mod: 'gen1tradebacksexpanded',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Violet Version G1",
		desc: "Violet Version G1 Rainbow Edition is a balance mod focused on bringing wonderful new feelings and colors to RBY competitive play.",
		mod: "gen1violetversion",
		gen: 1,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['All Pokemon'],
		unbanlist: ['Aerodactyl', 'Alakazam', 'Arbok', 'Articuno', 'Beedrill', 'Blastoise', 'Butterfree', 'Chansey', 'Charizard', 'Cloyster', 'Dragonite', 'Dugtrio', 'Electabuzz', 'Electrode', 'Exeggutor', 'Flareon', 'Gengar', 'Golbat', 'Golduck', 'Golem', 'Gyarados', 'Hypno', 'Jynx', 'Kabutops', 'Machamp', 'Magmar', 'Magneton', 'Mew', 'Moltres', 'Muk', 'Nidoqueen', 'Ninetales', 'Parasect', 'Pidgeot', 'Pinsir', 'Poliwrath', 'Porygon', 'Slowbro', 'Snorlax', 'Starmie', 'Tangela', 'Tauros', 'Vileplume', 'Zapdos'],
	},
	{
		name: "[Gen 8] Weedmons",
		desc: `Weedmons is a SoloMod originally led by The Reptile, whose purpose is primarily to make a fun micrometa based on the	completely arbitrary limitations of the theme of Weed!.`,
		mod: 'weedmons',
		gen: 9,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause'],
		banlist: ['All Pokemon', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'item: Quick Claw' /*Wtf is this validator on? What ability?*/, 'Razor Fang',
		'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Altarianite', 'Charizardite X', 'Charizardite Y', 'Blazikenite',],
		unbanlist: ['Altaria', 'Azumarill', 'Azurill', 'Blaziken', 'Braixen', 'Brionne', 'Blitzle', 'Bouffalant', 'Castform', 'Centiskorch', 'Charizard', 'Charmander', 'Charmeleon', 'Cherubi',
		'Chimchar', 'Cinderace', 'Combusken', 'Crocalor', 'Cyndaquil', 'Dartrix', 'Deerling', 'Delphox', 'Dragonair', 'Drampa', 'Drizzile', 'Emboar', 'Farigiraf', 'Fennekin', 'Fuecoco', 'Girafarig',
		'Gogoat', 'Golduck', 'Goodra', 'Goodra-Hisui', 'Goomy', 'Hakamo-O', 'Heatmor', 'Incineroar', 'Infernape', 'Lickilicky', 'Lickitung', 'Linoone', 'Linoone-Galar', 'Litten', 'Marill', 'Metang',
		'Mightyena', 'Miltank', 'Monferno', 'Oddish', 'Pansear', 'Pignite', 'Poipole', 'Psyduck', 'Quilava', 'Raboot', 'Sawsbuck', 'Scorbunny', 'Shelgon', 'Simisear', 'Sizzlipede', 'Skeledirge',
		'Skiddo', 'Sliggoo', 'Sliggoo-Hisui', 'Stantler', 'Swablu', 'Tepig', 'Thwackey', 'Torchic', 'Torkoal', 'Torracat', 'Typhlosion', 'Typhlosion-Hisui', 'Watchog', 'Wyrdeer', 'Zebstrika', 'Zweilous',
		],
	},
	///////////////////////////////////////////////////////////////
	///////////////////// Non-Smogon Mods /////////////////////////
	///////////////////////////////////////////////////////////////
	// {
		// section: "Non-Smogon Mods",
		// column: 2,
	// },

	///////////////////////////////////////////////////////////////
	//////////////////////// Randbats /////////////////////////////
	///////////////////////////////////////////////////////////////
	// {
		// section: "Randbats",
		// column: 2,
	// },
	// {
        // name: "[Gen 9] Duomod Randbats",
        // desc: `<b>gen 9 duomod back and better than ever baybeeeeee</b>`,
        // threads: [
            // `&bullet; <a href="https://docs.google.com/spreadsheets/d/1VZp8emRachS_ieusnF8FWKFqTcOUjrVyr393J-J17pY/edit?usp=sharing">Spreadsheet</a>`,
        // ],
        // team: 'random',
        // mod: 'gen9duomod',
        // ruleset: ['Standard NatDex', 'Subscribe For More Content', 'Duomod Data Mod'],
        // onSwitchIn(pokemon) {
            // this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
        // },
    // },
	// {
		// name: "[Gen 8] Duomod Randbats",
		// desc: `<b>Duomod</b>: Legendary YouTuber and professional Smash player DuoM2's solomod, build around the idea where nobody is ever truly losing.`,
        // threads: [
            // `&bullet; <a href="https://docs.google.com/spreadsheets/d/1lguyF31tjV8f-Gv3uLxmZXGAlg23k2fkF_nBqevJouM/edit?usp=sharing">Spreadsheet</a>`,
        // ],
		// team: 'random',
		// mod: 'duomod',
		// ruleset: ['Standard NatDex', 'Subscribe For More Content', 'Duomod Data Mod'],
		// onSwitchIn(pokemon) {
			// this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
		// },
	// },
	// {
		// name: "[Gen 8] Fusion Evolution UU Random Battle",
		// threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/fusion-evolution-under-used-submission-slate-3.3674163/">Fusion Evolution Under Used on Smogon Forums</a>`,
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/1zFk1_DBIoXFFn_7JpvYbVBrW-f1oFFh80Wn0CJNnbVo/edit#gid=0">Spreadsheet</a>`,
		// ],
		// mod: 'feuu',
		// team: 'random',
		// ruleset: ['OHKO Clause', 'Obtainable', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod', 'Cancel Mod'],
	// },
	// {
		// name: "[Gen 1] FutureProofing Random Battle",
	   // desc: `<b>[Gen 1] FutureProofing</b>: Adapting Dark, Steel, and Fairy-type moves and Pokemon to the Gen 1 OU metagame.`,
	   // threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/gen-1-futureproofing-slate-1-discussion.3703375/">FutureProofing on Smogon Forums</a>`,
	   // ],
		// mod: 'gen1futureproofing',
		// team: 'random',
		// ruleset: ['Standard', 'Data Mod'],
	// },
	// {
		// name: "[Gen 8] JolteMons Random Battle",
		// desc: [
			// "<b>JolteMons</b>: A sequel to SylveMons where Pokemon, items, abilities and moves are redesigned for OU (and new items, abilities and moves are added) without changing base stats.",
		// ],
		// threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/joltemons-slate-1-distribution-phase.3694234/">Thread on the Smogon Forums</a>`,
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/149ZlQY0bJIAqfWB_233Dvbpqs3pVSHYpIoAQQkwquls/edit?usp=sharing">Spreadsheet</a>`,
		// ],
		// mod: 'joltemons',
		// team: 'random',
		// ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Mega Data Mod', 'Data Mod', 'Z-Move Clause'],
	// },
	// {
// name: "[Gen 1] Modern Gen 1 Randbats",
		// desc: [
			// "<b>Modern Gen 1</b>: Gen 1 with all Pokemon and moves from Gen 9 Natdex added.",
		// ],
		// threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-1.3711533/">Thread on the Smogon Forums</a>`,
		// ],
		// mod: 'moderngen1',
		// team: 'random',
		// ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	// },
	// {
		// name: "[Gen 8] Roulettemons Random",
		// threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/3649106/">Roulettemons on Smogon Forums</a>`,
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/1EOA1m7JXTq7Zz0ViVI4n6lBppFjVBa4S1GqhAwkPTZQ/edit?usp=sharing">Spreadsheet</a>`,
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/1J5ZMVzTAfJ48KQWVE7jt1S6fm7Y8DQX1tFX0-iENWiw/edit?usp=sharing">Bonus Random Team Generator</a>`,
		// ],
		// team: 'random',
		// mod: 'roulettemons',
		// ruleset: ['Standard NatDex', 'Dynamax Clause', 'Sleep Clause Mod'],
		// onSwitchIn(pokemon) {
			// this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
		// },
		// onChangeSet(set) {
			// if (set.species === 'Chillyte-Mega') {
				// set.species = 'Chillyte';
				// set.ability = 'Grassy Surge';
			// }
		// },
	// },
	// {
      // name: "[Gen 8] OU Theorymons Random Battle",
      // threads: [
          // `&bullet; <a href="https://www.smogon.com/forums/threads/ss-ou-theorymon.3695574/">OU Theorymons on Smogon Forums</a>`,
          // `&bullet; <a href="https://docs.google.com/spreadsheets/d/1AgqKo8IiXky8apuu0FUgx4MJRVtsVwtuhg_Wj_ACgao/edit#gid=0">Spreadsheet</a>`,
      // ],
      // team: 'random',
		// mod: 'outheorymons',
		// ruleset: ['Dynamax Clause', 'Data Mod', 'Species Clause'],
	// },
	// {
		// name: "[Gen 8] Roulettemons Random Doubles",
		// threads: [
		   // `&bullet; <a href="https://www.smogon.com/forums/threads/3649106/">Roulettemons on Smogon Forums</a>`,
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/1EOA1m7JXTq7Zz0ViVI4n6lBppFjVBa4S1GqhAwkPTZQ/edit?usp=sharing">Spreadsheet</a>`,
			// `&bullet; <a href="https://docs.google.com/spreadsheets/d/1J5ZMVzTAfJ48KQWVE7jt1S6fm7Y8DQX1tFX0-iENWiw/edit?usp=sharing">Bonus Random Team Generator</a>`,
		// ],
		// team: 'random',
		// gameType: 'doubles',
		// mod: 'roulettemons',
		// ruleset: ['Standard NatDex', 'Sleep Clause Mod'],
		// onSwitchIn(pokemon) {
			// this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
		// },
		// onChangeSet(set) {
			// if (set.species === 'Chillyte-Mega') {
				// set.species = 'Chillyte';
			// }
		// },
	// },
	///////////////////////////////////////////////////////////////
	/////////////// Pet Mods Bonus Formats //////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Pet Mods Bonus Formats",
		column: 3,
		// name: "petmodsbonusformats",
	},
	{
		name: "[Gen 3] Hoenn Gaiden UU",
		desc: ["<b>Hoenn Gaiden</b>: A Gen 3 pet mod that aims to devamp Gen 4-8 Pokemon, moves and items into the Gen 3 mechanics."],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/hoenn-gaiden-pet-mod-of-the-season.3714737/">Hoenn Gaiden on Smogon Forums</a>`,
		],

		mod: 'gen3uuhoenngaiden',
		ruleset: ['Standard', 'Data Mod', 'Freeze Clause Mod'],
		banlist: [
				'Uber', 'OU', 'UUBL', 'Snow Warning', 'Air Balloon',
				'Babiri Berry', 'Charti Berry', 'Chilan Berry', 'Chople Berry', 'Coba Berry', 'Colbur Berry',
				'Haban Berry', 'Kasib Berry', 'Kebia Berry', 'Occa Berry', 'Passho Berry', 'Payapa Berry',
				'Rindo Berry', 'Roseli Berry', 'Shuca Berry', 'Tanga Berry', 'Wacan Berry', 'Yache Berry',
		],
		unbanlist: [],
	},
	{
		name: "[Gen 8] JolteMons Random Battle",
		desc: `Pok&eacute;mon, items, abilities, and moves are redesigned for OU, and new items, abilities, and moves are added, all without changing base stats.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694234/">JolteMons</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/149ZlQY0bJIAqfWB_233Dvbpqs3pVSHYpIoAQQkwquls/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'joltemons',
		team: 'random',
		ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Mega Data Mod', 'Z-Move Clause'],
	},
	{
		name: "[Gen 9] M4A OU NatDex",
		desc: ["<b>Megas for All</b>: A Pet Mod that aims to create unique Mega Evolutions for every fully evolved Pokémon. Plays like National Dex, just with more Megas.",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/megas-for-all-v7-slate-33-electrode-golurk-and-silvally-please-read-the-first-post-fully-playable-through-slate-32.3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		ruleset: ['Standard NatDex', 'Standard M4A', 'Mega Data Mod', 'Terastal Clause'],
		mod: 'm4ag9',
		// teambuilderFormat: 'OU',
	},
	{
		name: "[Gen 9] M4A Paldea VGC",
		desc: ["Megas for All v7 but it's a VGC format",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		gameType: 'doubles',
		ruleset: ['Team Preview', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Picked Team Size = 4', 'Adjust Level = 50', 'VGC Timer', 'Mega Data Mod', 'Terastal Clause'],
		banlist: [
			'Koraidon', 'Miraidon',
		],
		mod: 'm4apaldea',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.doublesTier !== 'Mega' && template.doublesTier !== 'Paldea' && template.doublesTier !== 'Paldea (NFE)') {
					return [set.species + ' is not a part of the Paldea Pokédex.'];
				}
			}
		},
		onValidateSet(set) {
			const problems: string[] = [];
			const setHas: {[k: string]: true} = {};
			let species = this.dex.species.get(set.species);
			let item = this.dex.items.get(set.item);
			let tierSpecies = species;

			if (item.megaEvolves === species.name) {
				if (item.megaStone && this.dex.species.get(item.megaStone).tier !== 'Mega') return [item.name + ' is not a legal Mega Stone.'];
			}
		},
	},
	{
		name: "[Gen 9] MetaMons Expanded",
		desc: [
			"In this Pet Mod, we will aim to create a decently-sized micrometa that will expand in the unique niches of some Pokémon, giving them the spotlight after all the time they have been waiting.",
		],
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/metamons-slate-3-galarian-slowbro-sableye-grapploct.3703361/">MetaMons</a>',
			'&bullet; <a href="https://docs.google.com/spreadsheets/d/142lxuFtTgQCY56Wz_ZjAGaqlk7HgJj0CVKMChQcei1U/edit#gid=0">Spreadsheet</a>',
		],
		mod: 'metamons',
		ruleset:['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Terastal Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod', 'Z-Move Clause'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass', 'Beedrillite'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'MetaMons' && template.tier !== 'Gen 8 MetaMons' && template.tier !== 'Gen 7 MetaMons') {
					return [set.species + ' is not usable in MetaMons Expanded.'];
				}
			}
		},
	},
	{
		name: "[Gen 6] Mix and Megas Revisited",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713949/">Megas Revisited on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1wK11cPHnPCmH7JFss6leKW6_-cumn3DuZA-YMzrzF-U/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen6mixandmegasrevisited',
		ruleset: ['Standard', 'Swagger Clause', 'Mega Data Mod'],
		banlist: [
			'Medichamite', 'Glalitite', 'Altarianite',
		],
		restricted: [
			'Arceus', 'Cresselia', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Normal', 'Deoxys-Speed', 'Dialga', 'Dragonite', 'Genesect',
			'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario', 'Lugia', 'Manaphy', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Xerneas', 'Yveltal', 'Zekrom',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.megaStone && !item.onPrimal &&
					!item.forcedForme?.endsWith('Origin') && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if ((item.itemUser?.includes(species.name) && !item.megaStone && !item.onPrimal) ||
					(natdex && species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each mega stone/orb/rusted item/sinnoh item.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const originalFormeSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (originalFormeSpecies.exists && pokemon.m.originalSpecies !== originalFormeSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalFormeSpecies.requiredItem || originalFormeSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		// Starting innate abilities in scripts#actions
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] VaporeMons UU",
		desc: [
			"<b>VaporeMons</b>: The third mod in the SylveMons series where Pokemon, items, abilities and moves are redesigned for OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/vaporemons-slate-1-discussion-phase.3722917/">Thread on the Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1_5AwZ24dPu3-5m5yOyIO4OTPmW9OwIWXXzZ5IJZkj4c/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen9vaporemons',
		teambuilderFormat: 'UU',
		ruleset: ['Standard', 'Terastal Clause', 'Data Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['OU', 'UUBL', 'Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Light Clay', 'Dancing Shoes', 'Fling + Segin Star Shard', 'Damp Rock'],
	},

	///////////////////////////////////////////////////////////////
	/////////////// Gen 9 Offical Smogon Formats //////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Offical Smogon Formats",
		column: 3,
		// name: "officialsmogonformats",
	},
	{
		name: "[Gen 9] OU",

		mod: 'gen9',
		ruleset: ['Standard'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 9] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710911/">AG Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 9] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710876/">Doubles OU Sample Teams</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Shadow Tag'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 9] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: ['ND Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex'],
	},
	// Please keep these here for testing / debugging
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710887/">SS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710892/">SS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717979/">SS OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685980/">USM OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695427/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719305/">ORAS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694551/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666724/">BW2 OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3686880/">BW2 OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3668699/">BW2 OU Viability Rankings</a>`,
		],

		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Swagger Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Assist'],
	},
	{
		name: "[Gen 4] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685887/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687351/">DPP OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3683332/">DPP OU Viability Rankings</a>`,
		],

		mod: 'gen4',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687814/">ADV OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687813/">ADV OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Rankings</a>`,
		],

		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688141/">GSC OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688523/">GSC OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3633233/">GSC OU Viability Rankings</a>`,
		],

		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685846/">RBY OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689726/">RBY OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685861/">RBY OU Viability Rankings</a>`,
		],

		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Custom Game",
		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Custom Game",
		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	///////////////////////////////////////////////////////////////
	/////////////// Official Non-Smogon Formats //////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Official Non-Smogon Formats",
		column: 3,
		// name: "officialnonsmogonformats",
	},
	{
		name: "[Gen 9] BSS Reg G",
		mod: 'gen9',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] VGC 2024 Reg G",
		mod: 'gen9',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] VGC 2024 Reg G (Bo3)",
		mod: 'gen9',
		gameType: 'doubles',
		challengeShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},

	///////////////////////////////////////////////////////////////
	/////////////// Non-Pet Mod Formats //////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Non-Pet Mod Formats",
		column: 3,
		// name: "nonpetmodformats",
	},
	{
		name: "[Gen 9] Littlest Cup",
		desc: [
			"<b>Littlest Cup</b>: A National Dex metagame where only Baby Pokemon are allowed."
		],
		threads: [
			`&bullet; <a href="https://pastebin.com/PtqmRUhG">Littlest Cup VR and Sample Sets</a>`,
		],
		mod: 'littlestcup',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Max Level = 1'],
		teambuilderFormat: 'National Dex',
		banlist: ['All Pokemon', 'Belly Drum', 'Huge Power', 'Shadow Tag'],
		unbanlist: ['Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Azurill', 'Wynaut', 'Budew', 'Chingling', 'Bonsly', 'Mime Jr.', 'Happiny', 'Munchlax', 'Riolu', 'Mantyke', 'Toxel'],
  },
	{
		name: "[Gen 9] Littlest Cup (No Tera)",
		desc: [
			"<b>Littlest Cup</b>: A National Dex metagame where only Baby Pokemon are allowed."
		],
		threads: [
			`&bullet; <a href="https://pastebin.com/PtqmRUhG">Littlest Cup VR and Sample Sets</a>`,
		],
		mod: 'littlestcup',
		searchShow: false,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Max Level = 1', 'Terastal Clause'],
		teambuilderFormat: 'National Dex',
		banlist: ['All Pokemon', 'Belly Drum', 'Huge Power', 'Shadow Tag'],
		unbanlist: ['Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Azurill', 'Wynaut', 'Budew', 'Chingling', 'Bonsly', 'Mime Jr.', 'Happiny', 'Munchlax', 'Riolu', 'Mantyke', 'Toxel'],
  },
	{
		name: "[Gen 9] Littlest Cup Random Battle",
		desc: [
			"<b>Littlest Cup</b>: A National Dex metagame where only Baby Pokemon are allowed."
		],
		threads: [
			`&bullet; <a href="https://pastebin.com/PtqmRUhG">Littlest Cup VR and Sample Sets</a>`,
		],
		mod: 'littlestcup',
		team: 'random',
		ruleset: ['Data Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Z-Move Clause', 'Max Level = 1'],
	},
	{
		name: "[Gen 6] TPDP Open",
		mod: 'tpdp',
		debug: true,
		desc: `a close approximation of Touhou Puppet Dance Performance`,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod'],
		banlist: ['Boundary Trance', 'Dream Shard',
		'Camouflage', 'Favorable Wind', 'Dead of Night', //evasion
		'Poison Labyrinth', 'Adverse Wind', //trapping
		'Moody',
		'Backup Plan', //baton pass
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['TPDP OU', 'TPDP LC'];
			let natures = ['Red', 'Blue', 'Black', 'Green', 'White'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not allowed in TPDP.'];
				}
				if (!natures.includes(set.nature)) {
					return [set.nature + ' is not a valid nature in TPDP. Hint: to set Red, Blue, Black, White, or Green nature, use the Import/Export button.'];
				}
			}
		},
	},
	{
		name: "[Gen 6] TPDP Stylemons",
		mod: 'tpdp',
		debug: true,
		desc: `TPDP Stylemons`,
		ruleset: ['Standard NatDex', 'Stylemons Move Legality', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod'],
		banlist: ['Boundary Trance', 'Dream Shard',
		'Camouflage', 'Favorable Wind', 'Dead of Night', //evasion
		'Poison Labyrinth', 'Adverse Wind', //trapping
		'Moody',
		'Backup Plan', //baton pass
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['TPDP OU', 'TPDP LC'];
			let natures = ['Red', 'Blue', 'Black', 'Green', 'White'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not allowed in TPDP.'];
				}
				if (!natures.includes(set.nature)) {
					return [set.nature + ' is not a valid nature in TPDP. Hint: to set Red, Blue, Black, White, or Green nature, use the Import/Export button.'];
				}
			}
		},
	},
	{
		name: "[Gen 6] TPDP Shared Power",
		mod: 'tpdp',
		debug: true,
		desc: `TPDP Shared Power`,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod'],
		banlist: ['Boundary Trance', 'Dream Shard',
		'Camouflage', 'Favorable Wind', 'Dead of Night', //evasion
		'Poison Labyrinth', 'Adverse Wind', //trapping
		'Moody',
		'Backup Plan', //baton pass
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['TPDP OU', 'TPDP LC'];
			let natures = ['Red', 'Blue', 'Black', 'Green', 'White'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not allowed in TPDP.'];
				}
				if (!natures.includes(set.nature)) {
					return [set.nature + ' is not a valid nature in TPDP. Hint: to set Red, Blue, Black, White, or Green nature, use the Import/Export button.'];
				}
			}
		},
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (pokemon.battle.ruleTable.isRestricted(`ability:${ally.baseAbility}`)) continue;
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 6] TPDP Netplay",
		mod: 'tpdp',
		debug: true,
		desc: `a close approximation of Touhou Puppet Dance Performance`,
		ruleset: ['Obtainable', 'Team Preview', 'Cancel Mod', 'Species Clause', 'Item Clause', 'Adjust Level Down = 50', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod'],
		banlist: ['Boundary Trance', 'Dream Shard',
		'Camouflage', 'Favorable Wind', 'Dead of Night', //evasion
		'Poison Labyrinth', 'Adverse Wind', //trapping
		'Moody',
		'Backup Plan', //baton pass
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['TPDP OU', 'TPDP LC'];
			let natures = ['Red', 'Blue', 'Black', 'Green', 'White'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not allowed in TPDP.'];
				}
				if (!natures.includes(set.nature)) {
					return [set.nature + ' is not a valid nature in TPDP. Hint: to set Red, Blue, Black, White, or Green nature, use the Import/Export button.'];
				}
			}
		},
	},
	{
		name: "[Gen 2] VGC 2001",
		mod: 'gen2doubles',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer', 'Open Team Sheets', 'Team Preview', 'Picked Team Size = 4'],
		banlist: [],
		teambuilderFormat: 'OU',
	},
	{
		name: "[Gen 9] White Tusk",

		mod: 'whitetusk',
		ruleset: ['Standard', 'Data Mod'],
		banlist: ['All Pokemon', 'King\'s Rock', 'Baton Pass'],
		unbanlist: ['Dust Bunnie', 'Rebirb', 'Strummingbird', 'Strummingbird-Viola', 'Strummingbird-Cello', 'Strummingbird-Contrabass', 'Strummingbird-Acoustic', 'Strummingbird-Electric', 'Strummingbird-Bass', 'Xylomist', 'Yeomelt', 'Zoplite', 'Yeoxylo', 'Xylozop', 'Zopyeo', 'Xylyeozop', 'Xylobone', 'Dormirr', 'Pufferfinch', 'Gumbawl', 'Gumbrawl', 'Gumbrawl-Bubble', 'Gumbrawl-Fresh', 'Gnawing Bark', 'Iron Mint', 'Caramilitant', 'Toughfee', 'Gasharmoir', 'Gumbrawl-Gachamech', 'Tartridge', 'Opixsi', 'Pinfrino', 'Leagle', 'Kuadrosin', 'Blite', 'Doctoxin', 'Moosquito', 'Parrox'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			const combinationTable = ['Xylomist', 'Yeomelt', 'Zoplite', 'Yeoxylo', 'Xylozop', 'Zopyeo', 'Xylyeozop'];
			let combinationTest = [];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				console.log(template.name);
				if (combinationTable.includes(template.name)) {
					combinationTest.push(template.name);
				}
			}
			if (combinationTest.length > 1) {	//Skip the check if only one was found at most
				if ((combinationTest.includes('Xylomist') && (combinationTest.includes('Yeoxylo') || combinationTest.includes('Xylozop') || combinationTest.includes('Xylyeozop')))
					|| (combinationTest.includes('Yeomelt') && (combinationTest.includes('Yeoxylo') || combinationTest.includes('Zopyeo') || combinationTest.includes('Xylyeozop')))
					|| (combinationTest.includes('Zoplite') && (combinationTest.includes('Xylozop') || combinationTest.includes('Zopyeo') || combinationTest.includes('Xylyeozop')))) {
					return ['You cannot have XYZ Pokemon with their combined forms.'];
				}
			}
		},
	},
	{
		section: "Modern Gen Series",
		column: 3,
		// name: "moderngenseries",
	},
	{
		name: "[Gen 1] Modern Gen 1",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-1.3711533/">Smogon Thread</a>`,
		],
		mod: 'moderngen1',
		searchShow: false,
		ruleset: ['Standard', 'Partial Trapping Clause', 'Protect Clause', 'Field Effect Clause', 'Sleep Moves Clause', '+No Ability', '-All Abilities', '-All Items'],
		banlist: ['Uber', 'Fake Out', 'Confuse Ray', 'Supersonic', 'Swagger', 'Sweet Kiss', 'Flatter'],
	},
	{
		name: "[Gen 1] Modern Gen 1 Randbats",
		desc: `Pok&eacute;mon, items, abilities, and moves are redesigned for OU, and new items, abilities, and moves are added, all without changing base stats.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-1.3711533/">MG1</a>`,
		],
		mod: 'moderngen1',
		team: 'random',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Modern Gen 1 Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-1.3711533/">Smogon Thread</a>`,
		],
		mod: 'moderngen1',
		searchShow: false,
		ruleset: ['Standard', 'Partial Trapping Clause', 'Protect Clause', 'Field Effect Clause', 'Sleep Moves Clause', '+No Ability', '-All Abilities', '-All Items'],
		banlist: ['AG', 'Fake Out', 'Confuse Ray', 'Supersonic', 'Swagger', 'Sweet Kiss', 'Flatter'],
		teambuilderFormat: 'Uber',
	},
	{
		name: "[Gen 1] Modern Gen 1 UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-1.3711533/">Smogon Thread</a>`,
		],
		mod: 'moderngen1',
		searchShow: false,
		ruleset: ['Standard', 'Partial Trapping Clause', 'Protect Clause', 'Field Effect Clause', 'Sleep Moves Clause', '+No Ability', '-All Abilities', '-All Items'],
		banlist: ['Uber', 'OU', 'UUBL', 'Fake Out', 'Confuse Ray', 'Supersonic', 'Swagger', 'Sweet Kiss', 'Flatter'],
	},
	{
		name: "[Gen 1] Modern Gen 1 LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-1.3711533/">Smogon Thread</a>`,
		],
		mod: 'moderngen1',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Partial Trapping Clause', 'Field Effect Clause', 'Sleep Moves Clause', '+No Ability', '-All Abilities', '-All Items'],
		banlist: ['Basculin-White-Striped', 'Qwilfish-Hisui', 'Sneasel', 'Stantler', 'Tangela', 'Sneasel-Hisui', 'Dunsparce', 'Scyther', 'Girafarig', 'Type: Null', 'Fake Out'],
	},
	{
		name: "[Gen 2] Modern Gen 2",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-2.3725808/">Smogon Thread</a>`,
		],
		mod: 'moderngen2',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', '+No Ability', '-All Abilities'],
		banlist: ['AG', 'Uber', 'Fake Out', 'Shell Smash', 'Last Respects', 'Baton Pass', 'Alakazite', 'Soul Dew'],
	},
	{
		name: "[Gen 2] Modern Gen 2 Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-2.3725808/">Smogon Thread</a>`,
		],
		mod: 'moderngen2',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', '+No Ability', '-All Abilities'],
		banlist: ['AG', 'Fake Out', 'Baton Pass', 'Rusted Sword'],
		teambuilderFormat: 'Uber',
	},
	{
		name: "[Gen 2] Modern Gen 2 LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-2.3725808/">Smogon Thread</a>`,
		],
		mod: 'moderngen2',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause', '+No Ability', '-All Abilities'],
		banlist: ['Basculin-White-Striped', 'Qwilfish-Hisui', 'Sneasel-Hisui', 'Dunsparce', 'Scyther', 'Girafarig', 'Type: Null', 'Fake Out', 'Sonic Boom', 'Dragon Rage'],
	},
	{
		name: "[Gen 3] Modern Gen 3",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-3.3713372/">Smogon Thread</a>`,
		],
		mod: 'moderngen3',
		searchShow: false,
		ruleset: ['Standard', 'Z-Move Clause'],
		banlist: ['AG', 'Uber', 'Assist', 'Baton Pass', 'Arena Trap', 'Shadow Tag', 'Sand Veil', 'Snow Cloak', 'Moody', 'Sand Rush', 'Power Construct', 'Battle Bond', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Shed Tail'],
	},
	{
		name: "[Gen 3] Modern Gen 3 Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-3.3713372/">Smogon Thread</a>`,
		],
		mod: 'moderngen3',
		searchShow: false,
		ruleset: ['Standard', 'Z-Move Clause'],
		banlist: ['AG'],
		teambuilderFormat: 'Uber',
	},
	{
		name: "[Gen 4] Modern Gen 4",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-3.3713372/">Smogon Thread</a>`,
		],
		mod: 'moderngen4',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Shadow Tag', 'Moody', 'Sand Rush', 'Power Construct', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Soul Dew'],
	},
	{
		name: "[Gen 4] Modern Gen 4 Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-9-modern-gen-3.3713372/">Smogon Thread</a>`,
		],
		mod: 'moderngen4',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['AG'],
		teambuilderFormat: 'Uber',
	},
];
