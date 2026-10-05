/**
 * Data for all the screens in xland
 *
 * @property {String} id - the button you click on to show this screen
 * @property {String} sectionClass - the class that gets shown when this screen is active
 * @property {String} buttonText - the button that is on the text (also a label for the button)
 */
const navButton = {
    status: {
        id: "#status-button",
        sectionClass: ".status-screen",
        buttonText: "Status",
    },
    interact: {
        id: "#interact-button",
        sectionClass: ".interact-screen",
        buttonText: "Interact",
    },
    crafting: {
        id: "#crafting-button",
        sectionClass: ".craft-screen",
        buttonText: "crafting",
    },
};

/**
 * @typedef {Object} raritys - all the diffent rarity levels in xland
 * @property {rarity}
 *
 * @typedef {object} rarity - the color and name of the rarity
 * @property {String} name - name of the rarity
 * @property {string} CssColor - the color of this damage type (IT MUST BE A CSS VARIABLE)
 */
const raritys = {
    basic: {
        name: "Basic",
        CssColor: "--basic-color",
    },
    common: {
        name: "Common",
        CssColor: "--common-color",
    },
    uncommon: {
        name: "Uncommon",
        CssColor: "--uncommon-color",
    },
    rare: {
        name: "Rare",
        CssColor: "--rare-color",
    },
    master: {
        name: "Master",
        CssColor: "--master-color",
    },
    legendary: {
        name: "Legendary",
        CssColor: "--legendary-color",
    },
    mythic: {
        name: "Mythic",
        CssColor: "--mythic-color",
    },
    ultraRank: {
        name: "Ultra-rank",
        CssColor: "--ultra-rank-color",
    },
};

/**
 * @typedef {Object} materialTypes - all the diffrent types of matrials there can be in xland
 * @property {String}
 */
const materialTypes = {
    metal: "metal",
    bone: "bone",
    rock: "rock",
    wood: "wood",
    gemStone: "gemStone",
    plants: "plant",
    liquid: "liquid",
    meat: "meat",
    skin: "skin",
    sticky: "sticky",
    wire: "wire", // would call it string but "String" is used by JS
    other: "other",
};

/**
 * @typedef {Object} craftingStations
 * @property {station}
 *
 * @typedef {Object} station - a station where things can be crafted
 * @property {String} name
 * @property {items.item} item
 */
const craftingStations = {
    campfire: { name: "Campfire", items: items.campfire },
    furnace: { name: "Furnace", items: items.furnace },
    workbench: { name: "Workbench", items: items.workbench },
    anvil: { name: "Anvil", items: items.anvil },
    morterPestal: { name: "MorterPestal", items: items.morterPestal },
    crusher: { name: "Crusher", items: items.crusher },
    brewerMixer: { name: "BrewerMixer", items: items.brewerMixer },
    godsForge: { name: "GodsForge", items: items.godsForge },
};
