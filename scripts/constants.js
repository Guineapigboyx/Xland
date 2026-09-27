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
const attacks = {};

const elements = {};

/**
 * @typedef {person} basePepole - the persons stat
 *
 * @typedef {Object} - the persons stat
 * @property {Number}
 */
const basePepole = {
    Koopa: {
        HP: 100,
        str: 3,
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
 */
const equipSlots = {};
