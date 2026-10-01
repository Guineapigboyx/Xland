/**
 * @typedef {object} weaponTypes - All the diffrent weapon/held item types
 * @property {weaponType}
 *
 * @typedef {Object} weaponType - this weapon types propertys
 * @property {string} name - name of the weapon type
 * @property {Number} weightThreshold - If the weight is above this amount it becomes 2 handed. Put 0 for always 2 handed
 * @property {statTypes.statType} attackBonus - the stat to calculate the modifer for actions with this weapon
 * @property {"stab"|"slash"|"slam"|"boom"|"swoosh"|"mechnical"} sound - fallback for if a move does not spesfiy
 * @property {damageTypes.damagetype} damagetype - fallback damage type if a item does not have one
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
    gunFast: {
        name: "Raipd Fire Gun",
        weightThreshold: 12,
        attackBonus: statTypes.intelligence,
        sound: "boom",
        rockBreaker: 1,
        metalBreaker: 1,
        woodBreaker: 1,
        fabricBreaker: 1,
        ranged: true,
    },
    gunSlow: {
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
