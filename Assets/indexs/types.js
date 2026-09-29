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

/**
 * @typedef {object} weaponTypes - All the diffrent weapon/held item types
 * @property {weaponType}
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
 * @typedef {object} damageTypes - elements like fire, lighting, ice
 * @property {damagetype}
 *
 * @typedef {object} damagetype - the type of damage and the properties of it
 * @property {string} name - name of the damage type
 * @property {string} CssColor - the color of this damage type (IT MUST BE A CSS VARIABLE)
 * @property {Number} damage - bonus damage added ontop of any damage source that uses this type
 * @property {Number} damageMult - mutiplier of the base damage
 * @property {effect[]} effects - the effects given
 *
 * @typedef {object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 */
const damageTypes = {
    blunt: {
        name: "Blunt",
        CssColor: "--blunt-color",
        effects: [{ effectGiven: statusEffects.stuned, effectChance: 0.2, effectTime: 1 }],
    },
    sharp: {
        name: "Sharp",
        damageMult: 1.1,
        CssColor: "--sharp-color",
        effects: [{ effectGiven: statusEffects.bleed, effectChance: 0.1, effectTime: 6 }],
    },
    crushing: {
        name: "Crushing",
        CssColor: "--crushing-color",
        effects: [
            { effectGiven: statusEffects.prone, effectChance: 1.0, effectTime: 1 },
            { effectGiven: statusEffects.brokenArm, effectChance: 0.05, effectTime: 16 },
            { effectGiven: statusEffects.brokenLeg, effectChance: 0.05, effectTime: 16 },
        ],
    },
    fire: {
        name: "Fire",
        CssColor: "--fire-color",
        effects: [{ effectGiven: statusEffects.burning, effectChance: 0.4, effectTime: 3 }],
    },
    electric: {
        name: "Electric",
        damageMult: 1.2,
        CssColor: "--electric-color",
        effects: [{ effectGiven: statusEffects.shocked, effectChance: 0.4, effectTime: 3 }],
    },
    magic: { name: "Magic", CssColor: "--magic-color" },
    wind: {
        name: "Wind",
        CssColor: "--wind-color",
        effects: [{ effectGiven: statusEffects.prone, effectChance: 0.2, effectTime: 1 }],
    },
    toxic: {
        name: "Toxic",
        CssColor: "--toxic-color",
        effects: [
            { effectGiven: statusEffects.poisoned, effectChance: 0.75, effectTime: 5 },
            { effectGiven: statusEffects.waningVitality, effectChance: 0.25, effectTime: 2 },
        ],
    },
    water: {
        name: "Water",
        CssColor: "--water-color",
        effects: [{ effectGiven: statusEffects.wet, effectChance: 0.75, effectTime: 5 }],
    },
    heal: { name: "heal", CssColor: "--heal-color", damageMult: -1 },
    instantDeath: { name: "Instant Death", CssColor: "--instant-death-color", damage: 200000 },
};

/**
 * @typedef {Object} itemUsageTypes - list of all of the diffrent ways something can be activated
 */
const itemUsageTypes = {
    inBattle: {
        // the player way they can use the item
        useSelf: "useSelfCombat", // use it on your self
        useTeamOnly: "useTeamOnlyCombat", // use it only teamates
        useTeam: "useTeamCombat", // use it on your self or any teamate
        useEnemy: "useEnemyCombat", // use it on only Enemys
        useAnyone: "useAnyoneCombat", // use it on anyone
        useGiga: "useGigaCombat", // use only on giga beasts
        // when the item is auto activated
        onEnter: "onEnterCombat", // when you enter combat
        onHit: "onHitCombat", // when the user is hit it is used
        onDeath: "onDeathCombat", // when you die it is used
        onRollFail: "onRollFailCombat", // when you fail a roll it is used
        onRollSuccess: "onRollSuccessCombat", // when you succeed in a roll it is used
        onRollAny: "onRollAnyCombat", // when you do a roll with any outcome it will be used
        onRoll: "onRollCombat", // when you do a roll it is used (can be used for roll modifers)
        onDamage: "onDamageCombat", // when you hit something else it is used (it does not need to do damage)
        onTurnChange: "onTurnChangeCombat", // when the turns change
    },
    outBattle: {
        // the player way they can use the item
        useSelf: "useSelf", // use it on your self
        useTeamOnly: "useTeamOnly", // use it only teamates
        useTeam: "useTeam", //  use it on your self or any teamate
        useEnemy: "useEnemy", // use it on only Enemys
        useAnyone: "useAnyone", // use it on anyone
        useGiga: "useGiga", // use only on giga beasts
        // when the item is auto activated
        onLeave: "onLeave", // when you leave combat
        onCooking: "onCooking", // when you cook something it is used
        onCrafting: "onCrafting", // when you craft something it is used
        onHit: "onHit", // when the user is hit it is used
        onDeath: "onDeath", // when you die it is used
        onRollFail: "onRollFail", // when you fail a roll it is used
        onRollSuccess: "onRollSuccess", // when you succeed in a roll it is used
        onRollAny: "onRollAny", // when you do a roll with any outcome it will be used
        onRoll: "onRoll", // when you do a roll it is used (can be used for roll modifers)
        onDamage: "onDamage", // when you hit something else it is used (it does not need to do damage)
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
 * @typedef {Object} foodTypes - all the diffent rarity levels in xland
 * @property {foodType}
 *
 * @typedef {object} foodType - the color and name of each food type
 * @property {String} name - name of the food type
 * @property {string} CssColor - the color of this food type and prefix (IT MUST BE A CSS VARIABLE)
 */
const foodTypes = {
    mushroom: { name: "mushroom", CssColor: "--mushroom-color" },
    pikmin: { name: "pikmin", CssColor: "--pikmin-color" },
    berries: { name: "berries", CssColor: "--berries-color" },
    pepper: { name: "pepper", CssColor: "--pepper-color" },
    herb: { name: "herb", CssColor: "--herb-color" },
    grain: { name: "grain", CssColor: "--grain-color" },
    mystic: { name: "mystic", CssColor: "--mystic-color" },
    fruit: { name: "fruit", CssColor: "--fruit-color" },
    flower: { name: "flower", CssColor: "--flower-color" },
    crystal: { name: "crystal", CssColor: "--crystal-color" },
    energizing: { name: "energizing", CssColor: "--energizing-color" },
    toxic: { name: "toxic", CssColor: "--toxic-color" },
    lquid: { name: "lquid", CssColor: "--lquid-color" },
    meat: { name: "meat", CssColor: "--meat-color" },
};

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
    deadly: { name: "deadly" },
    salty: { name: "salty" },
    energizing: { name: "energizing" },
    disguesting: { name: "disguesting" },
    wet: { name: "wet" },
    shocking: { name: "shocking" },
};
