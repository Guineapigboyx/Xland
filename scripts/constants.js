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
 * @typedef {object} attacks - all the xland attacks
 * @property {attack}
 *
 * @typedef {Object} attack - the id of the attack like "verticalSlash"
 * @property {weaponTypes.weaponType|undefined} attackFor - the weapon type this attack is for, if undefined its not connected to a weapon
 * @property {Number} damage - amount of damage it deals (if damageMult is present this is a bounus)
 * @property {Number} damageMult - multipler of the base damage that is added to the attack
 * @property {Number} armorDamage - how much defense is ignored when hitting with this attack
 * @property {Number} armorDamageMult - presentage of the armor ignored by this attack
 *
 * @property {Number} hits - amount of hit this attack does
 * @property {Boolean} endAfterMiss - if you miss stop all subsqent hits from this move
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
 * @property {damagetype} damagetype - array of every element this attack has
 * @property {statusEffect} effectGiven - array of every satus effect that is given by this weapon
 * @property {Number} effectChance - chance of the effect happening
 */
const attacks = {};

/**
 * @typedef {Object} basePepole - the persons stat
 * @property {person}
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
 * @typedef {Object} equipSlots - defineing all of the slots in the inventory
 * @property {slot}
 *
 * @typedef {Object} slot - the slot and all its paramiters
 * @property {string} htmlSlot - the value for data-equipment in the person overview
 * @property {weaponTypes.weaponType|undefined} weaponType - if used as a weapon and has none it falls back on to this weapon type, if undefined it can't be held
 */
const equipSlots = {
    head: { htmlSlot: "head", weaponType: weaponTypes.gloves },
    necklace: { htmlSlot: "necklace", weaponType: weaponTypes.slapstick },
    pants: { htmlSlot: "pants", weaponType: weaponTypes.hammer },
    body: { htmlSlot: "body", weaponType: weaponTypes.shield },
    hands: { htmlSlot: "hands", weaponType: weaponTypes.gloves },
    feet: { htmlSlot: "feet", weaponType: weaponTypes.pickaxe },
    belt: { htmlSlot: "belt", weaponType: weaponTypes.whip },
    storage: { htmlSlot: "storage", weaponType: weaponTypes.bluntObject },
    mainHand: { htmlSlot: "mainHand", weaponType: weaponTypes.gloves }, // unarmed is gloves
    offHand: { htmlSlot: "offHand", weaponType: weaponTypes.gloves }, // unarmed is gloves
};

/**
 * @typedef {Object} statusEffects - every status effect in xland
 * @property {statusEffect}
 *
 * @typedef {Object} statusEffect -
 * @property {string} name - name of the effect
 * // Combat
 * @property {boolean|undefined} fallbackOnGainCombat - if true onGainCombat fallbacks to onActivate, normally false
 * @property {boolean|undefined} fallbackOnLossCombat - if true onLossCombat fallbacks to onActivate, normally false
 * @property {Function|undefined} onGainCombat - function that runs when the effect is gained
 * @property {Function|undefined} onActivate - function that runs when the effect is lost
 * @property {Function|undefined} OnLossCombat - function that runs when the effect is lost
 * // Out of combat
 * @property {boolean|undefined} fallbackOnGainOut - if true onGainOut fallbacks to onHour, normally false
 * @property {boolean|undefined} fallbackOnLossOut - if true onLossOut fallbacks to onHour, normally false
 * @property {Function|undefined} onGainOut - function that runs when the effect is gained, if undifined do onHour
 * @property {Function|undefined} onHour - function that runs every hour, if false have no combat effects, if false have no out of combat effects
 * @property {Function|undefined} OnLossOut - function that runs when the effect is lost, if undifined do onHour
 *
 * @property {number|undefined} activateionTurn - How many turns it takes for the onActivate happens. If undefined it sets this to 1
 * @property {number|undefined} activateionHour - How many hours it takes for the onHour happens. If undefined it sets this to 1
 *
 * @property {statChange[]|undefined} statchanges - Array of which stat and how much is changed in each stat
 *
 * @typedef {object} statChange - how much is changed in this stat
 * @property {string} statName - the stats name (statType.name)
 * @property {Number} change - the amount it changes
 *
 */
const statusEffects = {};
