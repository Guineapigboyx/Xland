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
 * Data for all of the attacks in xland
 *
 * @typedef {Object} attack - the id of the attack like "verticalSlash"
 * @property {Number} damage - amount of damage it deals (if damageMult is present this is a bounus)
 * @property {Number} damageMult - multipler of the base damage that is added to the attack
 * @property {Number} armorDamage - how much defense is ignored when hitting with this attack
 * @property {Number} armorDamageMult - presentage of the armor ignored by this attack
 *
 * @property {Number} hits - amount of hit this attack does
 * @property {boolean} endAfterMiss - if you miss stop all subsqent hits from this move
 *
 * @property {Number} speed - how fast the attack is (default is 5)
 * @property {Number} accuracy - how much accuracy is removed or added
 * @property {Number} citChance - how much crit chance is removed or added
 *
 * @property {Number} epCost - amount of enduance it costs to use the attack
 * @property {Number} selfDamage - how much damage is delt to the user
 * @property {Number} durablity - how much durablity is lost when useing the move
 *
 * @property {Function} requirements - function to check if the user meets the special requirements to use this move
 *
 * @property {String[]} elements - array of every element this attack has
 * @typedef {Object} statusEffects - array of every satus effect that is given by this weapon
 * @property {String} effect - effect name
 * @property {Number} effectChance - chance of the effect happening
 *
 *
 */

/**
 * @typedef {person} basePepole - the persons stat
 *
 * @typedef {Object} person - the persons stat
 * @property {Number} hp - how much HP they have
 * @property {Number} strength - how much HP they have
 * @property {Number} defense - how much HP they have
 * @property {Number} speed - how much HP they have
 * @property {Number} endurance - how much HP they have
 * @property {Number} intelligence - how much HP they have
 * @property {Object} ability - how much HP they have
 * @property {Object} ability2 - how much HP they have
 * @property {attack} speicalMove - how much HP they have
 */
const basePepole = {
    Koopa: {
        hp: 100,
        strength: 3,
        defense: 3,
        speed: 2,
        endurance: 5,
        intelligence: 3,
        ability: {
            name: "Shell defense",
            description:
                "Acts as passive shield until broken, shell curl doubles the defense given",
        },
        ability2: undefined,
        speicalMove: "koopaShellCurl",
    },
};

/**
 * @typedef {slot} equipSlots - defineing all of the slots in the inventory
 *
 * @typedef {Object} slot - the slot and all its paramiters
 * @property {string} htmlSlot - the value for data-equipment in the person overview
 * @property {weaponType|undefined} weaponType - if used as a weapon and has none it falls back on to this weapon type, if undefined it can't be held
 */
const equipSlots = {
    head: { htmlSlot: head },
};

/**
 * @typedef {weapon} weaponTypes - All the diffrent weapon types
 *
 * @typedef {Object} weaponType - this weapon types propertys
 * @property {"oneHand"|"twoHand"} heldSlot - can this item be held by hand and does it take 2 hands to hold
 * @property {statType} attackBonus - the stat to calculate the modifer for actions with this weapon
 */
const weaponTypes = {};

/**
 * @typedef {Object} statType - xland stat
 * @property {Number} max - the highest this stat can go with levels //min level is 0
 * @property {string} description - description of the stat
 * @property {Number} levelPerBonus - How much you divide the stat by to get the modifer on rolls
 * @property {Number} baselevel - below this level you will start getting negitive modifer on rolls
 * @example if a person had a 14 in lookingCool and the lookingCool has a levelPerBonus of 2 and baseLevel of 10. the person's lookingCool modifer would be +2
 */
const statTypes = {
    strength: {
        max: 20,
        description: "Overall pysical abillity to pysical actions like mineing or swiming",
        levelPerBonus: 3,
        baselevel: 5, // the median of Strength in the "the pepole" doc
    },
    defense: {
        // this will need to be fucked with later
        max: 16,
        description: "Overall pysical abillity take pysical hits and resist hard hits",
        levelPerBonus: 2,
        baselevel: 5,
    },
    speed: {
        max: 7,
        description: "How quick one can move and do quick action",
        levelPerBonus: 1, // in the pepole this has super high power curve
        baselevel: 4,
    },
    endurance: {
        max: 22, // might change this later
        description: "How much someone can do before becomeing tired",
        levelPerBonus: 4,
        baselevel: 2,
    },
    intelligence: {
        max: 27,
        description: "the ABILITY to be smart and not do stupid things",
        levelPerBonus: 3,
        baselevel: 12, // I need a lot of room for somethings to be super stupid
    },
    stealth: {
        max: 10, // might change this later
        description: "the abiblity to stay undetected and stay quiet",
        levelPerBonus: 2,
        baselevel: 6,
    },
    crafting: {
        max: 49, // might look random but there are 17 crafting slots i multipled that by 3 and subtracted the first slot
        description: "How complicated can someone craft something",
        levelPerBonus: 3,
        baselevel: 1, // 0 means you can't craft
    },
    corage: {
        max: 24,
        description: "How you are at doing dangous or even deadly things",
        levelPerBonus: 2,
        baselevel: 10,
    },
};

const attacks = {};

const elements = {};
