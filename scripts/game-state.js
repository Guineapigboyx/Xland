/**
 * @typedef {Object} iventoryItem
 * @property {String} item - the item that is stored, it should be a items.item key
 * @property {Number|undefined} craftedItemID - the position in the craftedItemData Object that craftingData for crafted item items is found
 * @property {string|undefined} material1 - material from material.css (ignored if craftedItemID has one)
 * @property {string|undefined} material2 - material2 from material.css (ignored if craftedItemID has one)
 * @property {iventoryItem[]|undefined} inventory - items held inside of this item
 * @property {Number|undefined} timesUsed - how many times the item was used
 */

/**
 * @typedef {Object} gameState - kinda like a save file of everything about this current playthough
 * @property {person[]} persons
 * @property {gameState.persons.persons[]} activeTeam
 * @property {Number} gigaBeastsKilled
 * @property {Object} unlocked
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
 * @typedef {Object} unlocked
 * @property {Array} schematic - the schematics unlocked
 * @property {Array} modules - the modules unlocked
 */
let gameState = {
    activeTeam: [],
    persons: {},
    gigaBeastsKilled: 0,
    unlocked: { schematic: ["sword", "hammer"] },
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
        inActiveTeam: false,
    };

    gameState.persons[basePerson.id] = person;
}

/**
 * Adds a person from gamestate.persons to your team
 *
 * @param {gameState.persons.person} person - person that is inside of gameState.persons
 */
function addToTeam(person) {
    if (!person) {
        console.warn("invalid person", person);
        return;
    }
    if (!person.personData) {
        console.warn("invalid person", person);
        return;
    }

    if (typeof gameState.persons[person.personData.id] !== "object") {
        console.warn("person not unlocked", person);
        return;
    }
    if (!Object.keys(gameState.activeTeam).length >= 3) {
        console.warn("full team can't add person to team");
        return;
    }

    gameState.activeTeam.push(person.personData.id);
    person.inActiveTeam = true;
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
    8: {
        name: "Basic Underwear",
        components: {
            schematic: schematics.pants,
            craftedModules: [
                {
                    module: modules.fabric,
                    part: schematics.pants.parts.waist,
                    materials: [{ item: "oldRag" }],
                },
            ],
        },
    },
    9: {
        name: "Basic Tunic",
        components: {
            schematic: schematics.shirt,
            craftedModules: [
                {
                    module: modules.longShirt,
                    part: schematics.shirt.parts.body,
                    materials: [{ item: "oldRag" }, { item: "oldRag" }, { item: "oldRag" }],
                },
            ],
        },
    },
    10: {
        name: "templateHammer",
        components: {
            schematic: schematics.hammer,
            craftedModules: [
                {
                    module: modules.hammerHead,
                    part: schematics.hammer.parts.rightHead,
                    materials: [{ item: "schematic3" }],
                },
                {
                    module: modules.hammerHead,
                    part: schematics.hammer.parts.leftHead,
                    materials: [{ item: "schematic3" }],
                },
                {
                    module: modules.thickHandle,
                    part: schematics.hammer.parts.handle,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    11: {
        name: "templateDrill",
        components: {
            schematic: schematics.drill,
            craftedModules: [
                {
                    module: modules.basicBit,
                    part: schematics.drill.parts.bit,
                    materials: [{ item: "schematic3" }],
                },
                {
                    module: modules.motor,
                    part: schematics.drill.parts.motor,
                    materials: [{ item: "schematic2" }],
                },
                {
                    module: modules.basicGrip,
                    part: schematics.drill.parts.grip,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    12: {
        name: "templateshield",
        components: {
            schematic: schematics.shield,
            craftedModules: [
                {
                    module: modules.flatFace,
                    part: schematics.shield.parts.face,
                    materials: [{ item: "schematic4" }],
                },
                {
                    module: modules.straps,
                    part: schematics.shield.parts.grip,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    13: {
        name: "templatesword",
        components: {
            schematic: schematics.sword,
            craftedModules: [
                {
                    module: modules.basicBlade,
                    part: schematics.sword.parts.blade,
                    materials: [{ item: "schematic3" }],
                },
                {
                    module: modules.thickHandle,
                    part: schematics.sword.parts.hilt,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    14: {
        name: "templateslapstick",
        components: {
            schematic: schematics.slapstick,
            craftedModules: [
                {
                    module: modules.curvedHandle,
                    part: schematics.slapstick.parts.stick,
                    materials: [{ item: "schematic1" }],
                },
                {
                    module: modules.stringBinding,
                    part: schematics.slapstick.parts.string,
                    materials: [{ item: "schematic4" }],
                },
                {
                    module: modules.ball,
                    part: schematics.slapstick.parts.ball1,
                    materials: [{ item: "schematic3" }],
                },
                {
                    module: modules.ball,
                    part: schematics.slapstick.parts.ball2,
                    materials: [{ item: "schematic3" }],
                },
            ],
        },
    },
    15: {
        name: "templategloves",
        components: {
            schematic: schematics.gloves,
            craftedModules: [
                {
                    module: modules.basicGloves,
                    part: schematics.gloves.parts.body,
                    materials: [{ item: "schematic" }],
                },
            ],
        },
    },
    16: {
        name: "templatebow",
        components: {
            schematic: schematics.bow,
            craftedModules: [
                {
                    module: modules.basicStave,
                    part: schematics.bow.parts.stave,
                    materials: [{ item: "schematic1" }],
                },
                {
                    module: modules.bowString,
                    part: schematics.bow.parts.string,
                    materials: [{ item: "schematic2" }],
                },
            ],
        },
    },
    17: {
        name: "templatespear",
        components: {
            schematic: schematics.spear,
            craftedModules: [
                {
                    module: modules.basicHead,
                    part: schematics.spear.parts.head,
                    materials: [{ item: "schematic3" }],
                },
                {
                    module: modules.longHandle,
                    part: schematics.spear.parts.shaft,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    18: {
        name: "templateclub",
        components: {
            schematic: schematics.club,
            craftedModules: [
                {
                    module: modules.batHead,
                    part: schematics.club.parts.head,
                    materials: [{ item: "schematic1" }],
                },
                {
                    module: modules.thickHandle,
                    part: schematics.club.parts.handle,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    19: {
        name: "templatepants",
        components: {
            schematic: schematics.pants,
            craftedModules: [
                {
                    module: modules.fabric,
                    part: schematics.pants.parts.waist,
                    materials: [{ item: "schematic2" }],
                },
                {
                    module: modules.fabric,
                    part: schematics.pants.parts.rightLeg,
                    materials: [{ item: "schematic1" }],
                },
                {
                    module: modules.fabric,
                    part: schematics.pants.parts.leftLeg,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    20: {
        name: "templateshirt",
        components: {
            schematic: schematics.shirt,
            craftedModules: [
                {
                    module: modules.fabric,
                    part: schematics.shirt.parts.body,
                    materials: [{ item: "schematic2" }],
                },
                {
                    module: modules.fabric,
                    part: schematics.shirt.parts.rightSleeve,
                    materials: [{ item: "schematic1" }],
                },
                {
                    module: modules.fabric,
                    part: schematics.shirt.parts.leftSleeve,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
    21: {
        name: "templateboots",
        components: {
            schematic: schematics.boots,
            craftedModules: [
                {
                    module: modules.fabric,
                    part: schematics.boots.parts.body,
                    materials: [{ item: "schematic1" }],
                },
                {
                    module: modules.fabric,
                    part: schematics.boots.parts.toe,
                    materials: [{ item: "schematic2" }],
                },
            ],
        },
    },
    22: {
        name: "templatehelmet",
        components: {
            schematic: schematics.helmet,
            craftedModules: [
                {
                    module: modules.halfShell,
                    part: schematics.helmet.parts.skull,
                    materials: [{ item: "schematic1" }],
                },
            ],
        },
    },
};
