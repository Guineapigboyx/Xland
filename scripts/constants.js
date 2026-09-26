/**
 * Data for all the screens in xland
 *
 * @property {string} id - the button you click on to show this screen
 * @property {string} sectionClass - the class that gets shown when this screen is active
 * @property {string} buttonText - the button that is on the text (also a label for the button)
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
 * @typedef {object} attack - the id of the attack like "verticalSlash"
 * @property {number} damage - amount of damage it deals (if damageMult is present this is a bounus)
 * @property {number} damageMult - multipler of the base damage that is added to the attack
 * @property {number} armorDamage - how much defense is ignored when hitting with this attack
 * @property {number} armorDamageMult - presentage of the armor ignored by this attack
 *
 * @property {number} hits - amount of hit this attack does
 * @property {boolean} endAfterMiss - if you miss stop all subsqent hits from this move
 *
 * @property {number} speed - how fast the attack is (default is 5)
 * @property {number} accuracy - how much accuracy is removed or added
 * @property {number} citChance - how much crit chance is removed or added
 *
 * @property {number} epCost - amount of enduance it costs to use the attack
 * @property {number} selfDamage - how much damage is delt to the user
 * @property {number} durablity - how much durablity is lost when useing the move
 *
 * @property {Function} requirements - function to check if the user meets the special requirements to use this move
 *
 * @property {string[]} elements - array of every element this attack has
 * @typedef {object} statusEffects - array of every satus effect that is given by this weapon
 * @property {string} effect - effect name
 * @property {number} effectChance - chance of the effect happening
 *
 *
 */
const attacks = {};

const elements = {};

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
