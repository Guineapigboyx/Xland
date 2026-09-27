/**
 * @typedef {statType} statTypes - every xland stat
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

/**
 * @typedef {weapon} weaponTypes - All the diffrent weapon/held item types
 *
 * @typedef {Object} weaponType - this weapon types propertys
 * @property {string} name - name of the weapon type
 * @property {Number} weightThreshold - If the weight is above this amount it becomes 2 handed. Put 0 for always 2 handed
 * @property {statTypes.statType} attackBonus - the stat to calculate the modifer for actions with this weapon
 * @property {"stab"|"slash"|"slam"|"boom"|"swoosh"|"mechnical"} sound - fallback for if a move does not spesfiy
 *
 * @property {undefined|1|2|3} rockBreaker - gets a bonus if used for destorying rocky objects
 * @property {undefined|1|2|3} metalBreaker - gets a bonus if used for destorying metal objects
 * @property {undefined|1|2|3} woodBreaker - gets a bonus if used for cutting wood
 * @property {undefined|1|2|3} fabricBreaker - gets a bonus for cutting string/fabric
 *
 * @property {1|2|3|undefined} effectiveBlock - gets a bonus when blocking with
 * @property {undefined|Boolean} ranged - is this a ranged weapon
 * @property {undefined|Boolean} mountable - gets large debuffs if not mounted
 */
const weaponTypes = {
    pickaxe: {
        name: "Pickaxe",
        weightThreshold: 0,
        attackBonus: statTypes.strength,
        sound: "slam",
        rockBreaker: 3,
        metalBreaker: 1,
    },
    hammer: {
        name: "Hammer",
        weightThreshold: 7,
        attackBonus: statTypes.strength,
        sound: "slam",
        rockBreaker: 2,
        metalBreaker: 2,
    },
    guardingHammer: {
        name: "Guarding Hammer",
        weightThreshold: 3,
        attackBonus: statTypes.strength,
        sound: "slam",
        rockBreaker: 1,
        metalBreaker: 1,
        effectiveBlock: true,
    },
    drill: {
        name: "Drill",
        weightThreshold: 0,
        attackBonus: statTypes.strength,
        sound: "mechnical",
        rockBreaker: 3,
        metalBreaker: 3,
        woodBreaker: 3,
    },
    shield: {
        name: "Shield",
        weightThreshold: 16,
        attackBonus: statTypes.strength,
        sound: "slam",
        rockBreaker: 1,
        effectiveBlock: true,
    },
    knife: {
        name: "Knife",
        weightThreshold: 25,
        attackBonus: statTypes.speed,
        sound: "slash",
        woodBreaker: 1,
        fabricBreaker: 3,
    },
    sword: {
        name: "Sword",
        weightThreshold: 13,
        attackBonus: statTypes.strength,
        sound: "slash",
        fabricBreaker: 3,
    },
    guardingSword: {
        name: "Guarding Sword",
        weightThreshold: 7,
        attackBonus: statTypes.strength,
        sound: "slash",
        fabricBreaker: 2,
        effectiveBlock: true,
    },
    slapstick: {
        name: "Slapstick",
        weightThreshold: 25,
        attackBonus: statTypes.endurance,
        sound: "swoosh",
    },
    gloves: {
        name: "Gloves",
        weightThreshold: Infinity,
        attackBonus: statTypes.strength,
        sound: "swoosh",
        rockBreaker: 1,
        metalBreaker: 1,
        effectiveBlock: true,
    },
    gun: {
        name: "Gun",
        weightThreshold: 12,
        attackBonus: statTypes.intelligence,
        sound: "boom",
        rockBreaker: 1,
        metalBreaker: 1,
        woodBreaker: 1,
        fabricBreaker: 1,
        ranged: true,
    },
    bow: {
        name: "Bow",
        weightThreshold: 4,
        attackBonus: statTypes.intelligence,
        sound: "swoosh",
        ranged: true,
    },
    spear: {
        name: "Spear",
        weightThreshold: 5,
        attackBonus: statTypes.speed,
        sound: "stab",
        fabricBreaker: 1,
    },
    club: {
        name: "Club",
        weightThreshold: 13,
        attackBonus: statTypes.strength,
        sound: "slam",
        rockBreaker: 2,
        metalBreaker: 3,
    },
    whip: {
        name: "Whip",
        weightThreshold: 24,
        attackBonus: statTypes.speed,
        sound: "swoosh",
        fabricBreaker: 1,
    },
    boatWeapon: {
        name: "Boat Weapon",
        weightThreshold: 0,
        attackBonus: statTypes.intelligence,
        sound: "boom",
        rockBreaker: 2,
        metalBreaker: 2,
        woodBreaker: 2,
        ranged: true,
        mountable: true,
    },
    bluntObject: {
        //like a rock
        name: "Blunt Object",
        weightThreshold: 9,
        attackBonus: statTypes.strength,
        sound: "slam",
        rockBreaker: 1,
    },
    largeObject: {
        // only use for generic items that could never be "small"
        name: "Large Object",
        weightThreshold: 0,
        attackBonus: statTypes.strength,
        sound: "slam",
        rockBreaker: 1,
        metalBreaker: 1,
    },
};

/**
 * @typedef {elemental} damageTypes - elements like fire, lighting, ice
 *
 * @typedef {object} damagetype - the type of damage and the properties of it
 * @property {Number} damage - bonus damage added ontop of any damage source that uses this type
 * @property {Number} damageMult - mutiplier of the base damage
 * @property {string} CssColor - the color of this damage type (IT MUST BE A CSS VARIABLE)
 * @property {statusEffect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {statusEffect} effectGiven2 - the 2nd effect given
 * @property {Number} effectChance2 - chance of getting the 2nd effect
 */
const damageTypes = {};
