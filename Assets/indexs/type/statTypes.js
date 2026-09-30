/**
 * @typedef {statType} statTypes - every xland stat
 * @property {statType}
 *
 * @typedef {Object} statType - xland stat
 * @property {string} name - name of the stat
 * @property {Number} max - the highest this stat can go with levels //min level is 0
 * @property {string} description - description of the stat
 * @property {Number} levelPerBonus - How much you divide the stat by to get the modifer on rolls
 * @property {Number} baselevel - below this level you will start getting negitive modifer on rolls
 * @example if a person had a 14 in lookingCool and the lookingCool has a levelPerBonus of 2 and baseLevel of 10. the person's lookingCool modifer would be +2
 */
const statTypes = {
    strength: {
        name: "Strength",
        max: 20,
        description: "Overall pysical abillity to pysical actions like mineing or swiming",
        levelPerBonus: 3,
        baselevel: 5, // the median of Strength in the "the pepole" doc
    },
    defense: {
        // this will need to be fucked with later
        name: "Defense",
        max: 16,
        description: "Overall pysical abillity take pysical hits and resist hard hits",
        levelPerBonus: 2,
        baselevel: 5,
    },
    speed: {
        name: "Speed",
        max: 7,
        description: "How quick one can move and do quick action",
        levelPerBonus: 1, // in the pepole this has super high power curve
        baselevel: 4,
    },
    endurance: {
        name: "Endurance",
        max: 22, // might change this later
        description: "How much someone can do before becomeing tired",
        levelPerBonus: 4,
        baselevel: 2,
    },
    intelligence: {
        name: "Intelligence",
        max: 27,
        description: "the ABILITY to be smart and not do stupid things",
        levelPerBonus: 3,
        baselevel: 12, // I need a lot of room for somethings to be super stupid
    },
    stealth: {
        name: "Stealth",
        max: 10, // might change this later
        description: "the abiblity to stay undetected and stay quiet",
        levelPerBonus: 2,
        baselevel: 6,
    },
    crafting: {
        name: "Crafting",
        max: 49, // might look random but there are 17 crafting slots i multipled that by 3 and subtracted the first slot
        description: "How complicated can someone craft something",
        levelPerBonus: 3,
        baselevel: 1, // 0 means you can't craft
    },
    courage: {
        name: "Courage",
        max: 24,
        description: "How you are at doing dangous or even deadly things",
        levelPerBonus: 2,
        baselevel: 10,
    },
};
