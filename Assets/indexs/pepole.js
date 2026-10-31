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
 * @property {Boolean|undefined} blocked - Can the player equip something in this slot.
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
            { stat: statTypes.charisma, amount: 2 },
            { stat: statTypes.crafting, amount: 3 },
            { stat: statTypes.stealth, amount: 1 },
            { stat: statTypes.courage, amount: 1 },
            { stat: statTypes.Storage, amount: 4 },
        ],
        ability: [statusEffects.shellDefence],
        //todo npcData: npcs.koopa
        equiped: [
            {
                // koopas underwear
                slot: equipSlots.pants,
                item: {
                    item: "leggings",
                    craftedItemId: 1,
                },
            },
            {
                // koopas shell
                slot: equipSlots.body,
                item: {
                    item: "chestplate",
                    craftedItemId: 2,
                    blocked: true,
                },
            },
        ],
    },
    locario: {
        id: "locario",
        name: "Locario",
        hp: 70,
        stats: [
            { stat: statTypes.strength, amount: 10 },
            { stat: statTypes.defense, amount: 1 },
            { stat: statTypes.speed, amount: 3 },
            { stat: statTypes.endurance, amount: 7 },
            { stat: statTypes.intelligence, amount: 2 },
            { stat: statTypes.charisma, amount: 1 },
            { stat: statTypes.crafting, amount: 1 },
            { stat: statTypes.courage, amount: 4 },
            { stat: statTypes.evasion, amount: 2 },
        ],
        ability: [statusEffects.angerIssues],
        //todo speicalMove: attacks.mineingSmash
        //todo npcData: npcs.locario
        equiped: [
            {
                // locarios pants
                slot: equipSlots.pants,
                item: {
                    item: "leggings",
                    craftedItemId: 3,
                },
            },
        ],
    },
    luigi: {
        id: "luigi",
        name: "Luigi",
        hp: 115,
        stats: [
            { stat: statTypes.strength, amount: 1 },
            { stat: statTypes.defense, amount: 2 },
            { stat: statTypes.speed, amount: 4 },
            { stat: statTypes.endurance, amount: 5 },
            { stat: statTypes.intelligence, amount: 5 },
            { stat: statTypes.charisma, amount: 6 },
            { stat: statTypes.crafting, amount: 2 },
            { stat: statTypes.stealth, amount: 4 },
            { stat: statTypes.cooking, amount: 2 },
        ],
        ability: [statusEffects.spontaneousFear],
        //todo npcData: npcs.luigi
        equiped: [
            {
                // overalls
                slot: equipSlots.pants,
                item: {
                    item: "leggings",
                    craftedItemId: 4,
                },
            },
            {
                // shirt
                slot: equipSlots.body,
                item: {
                    item: "chestplate",
                    craftedItemId: 7,
                },
            },
            {
                // shoes
                slot: equipSlots.feet,
                item: {
                    item: "boots",
                    craftedItemId: 5,
                },
            },
        ],
    },
    mario: {
        id: "mario",
        name: "Mario",
        hp: 225,
        stats: [
            { stat: statTypes.strength, amount: 2 },
            { stat: statTypes.defense, amount: 8 },
            { stat: statTypes.speed, amount: 1 },
            { stat: statTypes.endurance, amount: 5 },
            { stat: statTypes.intelligence, amount: 6 },
            { stat: statTypes.charisma, amount: 2 },
            { stat: statTypes.crafting, amount: 1 },
            { stat: statTypes.courage, amount: 4 },
            { stat: statTypes.evasion, amount: 2 },
        ],
        ability: [statusEffects.bellyArmor],
        //todo speicalMove: attacks.stomp
        //todo npcData: npcs.mario
        equiped: [
            {
                // overalls
                slot: equipSlots.pants,
                item: {
                    item: "leggings",
                    craftedItemId: 4,
                },
            },
            {
                // shirt
                slot: equipSlots.body,
                item: {
                    item: "chestplate",
                    craftedItemId: 6,
                },
            },
            {
                // shoes
                slot: equipSlots.feet,
                item: {
                    item: "boots",
                    craftedItemId: 5,
                },
            },
        ],
    },
};
