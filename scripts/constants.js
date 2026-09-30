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
    world: {
        id: "#world-button",
        sectionClass: ".world-screen",
        buttonText: "World",
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
