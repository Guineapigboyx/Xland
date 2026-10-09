/**
 * @typedef {Object} basePepole - the persons stat
 * @property {person}
 *
 * @typedef {Object} person - the persons stat
 * @property {String} id - key of the object
 * @property {string} name - name of the person
 * @property {Number} hp - How much max HP they have
 * @property {stat[]} stats - the base stats of the person
 * @property {statusEffects.effect[]|undefined} ability - This is a status effect that this person always has active.
 * @property {attacks.attack[]|undefined} speicalMove - Array of special moves they have
 * @property {npcs.npc} npcData - mainly for the personality and background of the character
 * @property {equiped[]} equiped - the items they currently have equiped
 *
 * ----
 * @typedef {Object} equiped
 * @property {equipSlots.slot} slot - the slot
 * @property {iventoryItem} item - item
 *
 * ----
 * @typedef {Object} stat - base stat ranges
 * @property {statTypes.stat} stat - the stat that is effected
 * @property {[Number, Number]} amount - stat amount, if this will be 0 don't include the stat
 *
 */
const basePepole = {
    koopa: {
        id: "koopa",
        name: "Koopa",
        hp: 100,
        stats: [
            { stat: statTypes.strength, amount: 3 },
            { stat: statTypes.defense, amount: 3 },
            { stat: statTypes.speed, amount: 2 },
            { stat: statTypes.endurance, amount: 5 },
            { stat: statTypes.intelligence, amount: 3 },
            { stat: statTypes.crafting, amount: 1 },
            { stat: statTypes.charisma, amount: 2 },
        ],
        ability: [statusEffects.shellDefence],
        //todo npcData: npcs.koopa
        equiped: [
            {
                slot: equipSlots.pants,
                item: {
                    item: "koopasUnderwear",
                },
            },
        ],
    },
};
