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
function addNewTeamate(basePerson, text) {
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

    gameState.activeTeam[`${basePerson.name}${Object.keys(gameState.activeTeam).length}`] = person;
}

/**
 * @typedef {Object} craftedItemData - this holds data about a item that is overid
 * @property {Record<number, item>} - the key should be the ID, the data in the Object should be a item
 */
let craftedItemData = {
    1: {
        name: "Koopas Underwear",
        components: {
            schematic: schematics.pants,
            craftedModules: [
                {
                    module: modules.solid,
                    part: schematics.pants.parts.waist,
                    materials: [{ item: "shell" }],
                },
            ],
        },
    },
    2: {
        name: "Koopas Shell",
        components: {
            schematic: schematics.shirt,
            craftedModules: [
                {
                    module: modules.shell,
                    part: schematics.shirt.parts.body,
                    materials: [
                        { item: "shell" },
                        { item: "shell" },
                        { item: "shell" },
                        { item: "shell" },
                    ],
                },
            ],
        },
        weaponData: {
            durablity: 50,
        },
    },
    3: {
        name: "Ripped pants",
        components: {
            schematic: schematics.pants,
            craftedModules: [
                {
                    module: modules.fabric,
                    part: schematics.pants.parts.waist,
                    materials: [{ item: "leather" }, { item: "oldRag" }],
                },
                {
                    module: modules.wrapped,
                    part: schematics.pants.parts.leftLeg,
                    materials: [{ item: "oldRag" }],
                },
                {
                    module: modules.wrapped,
                    part: schematics.pants.parts.rightLeg,
                    materials: [{ item: "oldRag" }],
                },
            ],
        },
    },
    4: {
        name: "Plumber Overalls",
        components: {
            schematic: schematics.pants,
            craftedModules: [
                {
                    module: modules.suppenders,
                    part: schematics.pants.parts.waist,
                    materials: [{ item: "leather" }, { item: "leather" }],
                },
                {
                    module: modules.wrapped,
                    part: schematics.pants.parts.leftLeg,
                    materials: [{ item: "oldRag" }],
                },
                {
                    module: modules.wrapped,
                    part: schematics.pants.parts.rightLeg,
                    materials: [{ item: "oldRag" }],
                },
            ],
        },
    },
    5: {
        name: "Plumber Boots",
        components: {
            schematic: schematics.boots,
            craftedModules: [
                {
                    module: modules.solid,
                    part: schematics.boots.parts.body,
                    materials: [{ item: "wood" }],
                },
                {
                    module: modules.baiscPlate,
                    part: schematics.boots.parts.toe,
                    materials: [{ item: "iron" }],
                },
            ],
        },
    },
    6: {
        name: "Red shirt",
        dye: items.pepper,
        components: {
            schematic: schematics.shirt,
            craftedModules: [
                {
                    module: modules.fabric,
                    part: schematics.shirt.parts.body,
                    materials: [{ item: "oldRag" }, { item: "oldRag" }],
                },
            ],
        },
    },
    7: {
        name: "Green shirt",
        dye: items.cacti,
        components: {
            schematic: schematics.shirt,
            craftedModules: [
                {
                    module: modules.fabric,
                    part: schematics.shirt.parts.body,
                    materials: [{ item: "oldRag" }, { item: "oldRag" }],
                },
            ],
        },
    },
};
