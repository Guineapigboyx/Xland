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
        onIncapable: "onIncapable", // when you lose the ability to attack in a turn (could come from haveing no EP or a status effect)
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
        onHour: "onHour", // when the hour changes
        onFire: "onFire", // when on fire
        // entering somewhere
        enterCold: "enterCold",
        enterHot: "enterHot",
        enterWater: "enterWater",
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
