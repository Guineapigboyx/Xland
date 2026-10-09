/**
 * @typedef {Object} iventoryItem
 * @property {String} item - the item that is stored, it should be a items.item key
 * @property {Number|undefined} craftedItemID - the position in the craftedItemData Object that craftingData for crafted item items is found
 * @property {iventoryItem[]|undefined} inventory - items held inside of this item
 * @property {Number|undefined} timesUsed - how many times the item was used
 */

/**
 * @typedef {Object} gameState - kinda like a save file of everything about this current playthough
 * @property {person[]} persons
 * @property {gameState.persons.persons[]} activeTeam
 * @property {Number} gigaBeastsKilled
 *
 * ----
 * @typedef {Array} person - all of the persons you currently have in or out of your active team
 * @property {basePepole.person} personData - data about the base stats of this person
 * @property {inventoryItem[]} inventory - the items in a persons inventory
 * @property {statChange[]} stats - array of all the stats changes from the their base pernementlty
 * @property {equiped} equiped - the items they currently have equiped
 * @property {Number} level - the level they currently are
 * @property {Number} ep - the ep they currently have
 * @property {Number} hp - the hp they currently have
 * @property {activeEffect[]} activeEffects - all the currently active effects
 *
 * ----
 * @typedef {Object} statChange
 * @property {statTypes.statType} stat - the stats object
 * @property {Number} amount - the amount the stat changes
 *
 * ----
 * @typedef {Object} equiped
 * @property {equipSlots.slot} slot - the slot
 * @property {iventoryItem} item - item
 *
 * ----
 */
let gameState = {
    activeTeam: {},
    persons: {},
};

/**
 * @param {basePepole.person} basePerson -  1 of the base pepole
 */
function addNewTeamate(basePerson) {
    let person = {
        personData: basePerson,
        inventory: [],
        stats: [],
        equiped: [basePerson.equiped],
        level: 1,
        ep: basePerson.stats.find((stat) => stat.stat === statTypes.endurance).amount,
        hp: basePerson.hp,
        activeEffects: [],
    };

    gameState.persons[basePerson.id] = person;
}
