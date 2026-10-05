/**
 * @typedef {Object} foodPrefixes
 * @property {prefix}
 *
 * @typedef {prefix}
 * @property {string} prefixName - the name of the prefix that getts applied to foods cooked primarily with this type
 * @property {statusEffects.effect|undefined} prefixEffect - the effect given by the prefix
 * @property {Number|undefined} effectChance - chance of getting the effect
 * @property {Number|undefined} effectTime - how long the effect lasts in turns/hours
 * @property {statTypes.statType|undefined} prefixStat - the stat that gets changed
 * @property {Number|undefined} statChange - the amount of the prefixStat changes
 */
const foodPrefixes = {
    spicy: { name: "spicy" },
    superSpicy: { name: "superSpicy" },
    cold: { name: "cold" },
    mystic: { name: "mystic" },
    hardened: { name: "hardened" },
    deadly: { name: "deadly" },
    salty: { name: "salty" },
    energizing: { name: "energizing" },
    disguesting: { name: "disguesting" },
    wet: { name: "wet" },
    shocking: { name: "shocking" },
    sweet: { name: "sweet" },
    starchy: { name: "starchy" }, // might change the name
    earthy: { name: "earthy" },
    minty: { name: "minty" }, // special one for mint
    strange: { name: "strange" },
};
