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
 * @property {String[]} elements - array of every element this attack has
 * @typedef {Object} statusEffects - array of every satus effect that is given by this weapon
 * @property {String} effect - effect name
 * @property {Number} effectChance - chance of the effect happening
 */
const attacks = {};

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
