/**
 * @typedef {Object} schematics - all the diffrent schematics in xland
 * @property {schematic}
 *
 * @typedef {object} schematic - data about this crafting recipe
 * @property {String} name - name of the schematic
 * @property {String} itemName - the item made by the schematic (the name would be "{socket prefix}{material name}{itemName}")
 * @property {String} modularItem - the item that is stored, it should be a items.item key
 * @property {commonPart} commonPart - A special SVG that is put below all the parts
 * @property {part[]} parts - parts of the schematic that modules go in
 * @property {Number} iconID - the crafted item ID associated with this item
 *
 * ----
 * @typedef {Object} part - parts of the schematic that modules go in
 * @property {String} name - name of the part
 * @property {Number} layer - which layer is this on, must be a unique number (1 is the bottom)(layer 0 is the schematics common SVG)
 * @property {Boolean|undefined} optional - Is it not nessary for this schematic
 *
 * ----
 * @typedef {Object} commonPart
 * @property {String} SVG - SVG class for the common part
 * @property {String} material - The part that the common part gets its color from
 */
const schematics = {
    hammer: {
        // technicly not a hammer since this can also be a axe / pickaxe
        name: "hammer",
        itemName: "Hammer",
        modularItem: items.hammer,
        parts: {
            leftHead: { name: "leftHead", partName: "Left Head", layer: 2, optional: true },
            rightHead: { name: "rightHead", partName: "Right Head", layer: 3 },
            handle: { name: "handle", partName: "Handle", layer: 1 },
            binding: { name: "binding", partName: "Binding", layer: 4 },
        },
        iconID: 10,
    },
    drill: {
        name: "drill",
        itemName: "Drill",
        modularItem: items.drill,
        parts: {
            bit: { name: "bit", partName: "Bit", layer: 3 },
            motor: { name: "motor", partName: "Motor", layer: 2 },
            grip: { name: "grip", partName: "Grip", layer: 1 },
        },
        iconID: 11,
    },
    shield: {
        name: "shield",
        itemName: "Shield",
        modularItem: items.shield,
        parts: {
            face: { name: "face", partName: "Face", layer: 2 },
            grip: { name: "grip", partName: "Grip", layer: 1 },
        },
        iconID: 12,
    },
    sword: {
        name: "sword",
        itemName: "Sword",
        modularItem: items.sword,
        parts: {
            blade: { name: "blade", partName: "Blade", layer: 1 },
            hilt: { name: "hilt", partName: "Hilt", layer: 2 },
            guard: { name: "guard", partName: "Guard", layer: 3, optional: true },
        },
        iconID: 13,
    },
    slapstick: {
        name: "slapstick",
        itemName: "Slapstick",
        modularItem: items.slapstick,
        commonPart: { SVG: "item-commonSlapstick", material: "stick" },
        parts: {
            stick: { name: "stick", partName: "Stick", layer: 1 },
            string: { name: "string", partName: "String", layer: 2 },
            ball1: { name: "ball1", partName: "Ball 1", layer: 3 },
            ball2: { name: "ball2", partName: "Ball 2", layer: 4, optional: true },
            ball3: { name: "ball3", partName: "Ball 3", layer: 5, optional: true },
        },
        iconID: 14,
    },
    gloves: {
        name: "gloves",
        itemName: "Gloves",
        modularItem: items.gloves,
        parts: {
            knuckle: { name: "knuckle", partName: "Knuckle", layer: 2, optional: true },
            body: { name: "body", partName: "Body", layer: 1 },
        },
        iconID: 15,
    },
    bow: {
        name: "bow",
        itemName: "Bow",
        modularItem: items.bow,
        parts: {
            stave: { name: "stave", partName: "Stave", layer: 2 },
            string: { name: "string", partName: "String", layer: 1 },
        },
        iconID: 16,
    },
    spear: {
        name: "spear",
        itemName: "Spear",
        modularItem: items.spear,
        parts: {
            head: { name: "head", partName: "Head", layer: 2 },
            shaft: { name: "shaft", partName: "Shaft", layer: 1 },
            binding: { name: "binding", partName: "Binding", layer: 3 },
        },
        iconID: 17,
    },
    club: {
        name: "club",
        itemName: "Club",
        modularItem: items.club,
        parts: {
            head: { name: "head", partName: "Head", layer: 2 },
            handle: { name: "handle", partName: "Handle", layer: 1 },
        },
        iconID: 18,
    },
    pants: {
        name: "pants",
        itemName: "Pants",
        modularItem: items.pants,
        parts: {
            leftLeg: { name: "leftLeg", partName: "Left Leg", layer: 1, optional: true },
            rightLeg: { name: "rightLeg", partName: "Right Leg", layer: 2, optional: true },
            waist: { name: "waist", partName: "Waist", layer: 3 },
        },
        iconID: 19,
    },
    shirt: {
        name: "shirt",
        itemName: "Shirt",
        modularItem: items.shirt,
        parts: {
            leftSleeve: { name: "leftSleeve", partName: "Left Sleeve", layer: 1, optional: true },
            rightSleeve: {
                name: "rightSleeve",
                partName: "Right Sleeve",
                layer: 2,
                optional: true,
            },
            body: { name: "body", partName: "Body", layer: 3 },
        },
        iconID: 20,
    },
    boots: {
        name: "boots",
        itemName: "Boots",
        modularItem: items.boots,
        parts: {
            toe: { name: "toe", partName: "Toe", layer: 3, optional: true },
            shaft: { name: "shaft", partName: "Shaft", layer: 2, optional: true }, // the part your ankle goes in
            body: { name: "body", partName: "Body", layer: 1 },
        },
        iconID: 21,
    },
    helmet: {
        name: "helmet",
        itemName: "Helmet",
        modularItem: items.helmet,
        parts: {
            skull: { name: "skull", partName: "Skull", layer: 1 },
            visor: { name: "visor", partName: "Visor", layer: 2, optional: true },
        },
        iconID: 22,
    },
};

/**
 * @typedef {Object} modules - all the crafting modules, think parts of the weapon/item
 * @property {module}
 *
 * @typedef {Object} module - a specific part you can put materials in
 * @property {string} name - the name of this module
 * @property {schematics.schematic.part[]} part - all the schematic part this module can be used in
 * @property {allowedMaterial[]|undefined} materials - the sets materials needed to make this
 * lets say you want a module that needs both bolts and wood in the to do that you make 2 allowedMaterial objects one for wood another for bolts
 *
 * @property {Function} itemStats - a function for setting all the values in {items.item.weaponData}
 *
 * @property {equipSlots.slot|undefined} equipSlot - can items with this type be equiped (if a item has multiple it can be in any of those slots)
 * @property {weaponTypes.weaponType|undefined} weaponType - if a item is made with this module it will use this instead of the schematics
 * if you try to craft a item with multiple modules with diffrent weaponTypes it will say they are incompatible
 * ----
 * @typedef {Object} allowedMaterial
 * @property {(items.item|materialTypes|foodTypes)[]} material - every material or type that can be used here
 * lets say you can make this with wood or metal you would put both of those material types here
 * @property {Number} amount - the amount of this material required
 * @property {boolean} same - the materials must both be the same
 *
 * ---- from item.js
 * @typedef {object} weaponData - properties about this item in combat
 * @property {weaponTypes.weaponType} weaponType - what weapon type is this,
 * @property {damageTypes.damagetype} damagetype - the damagetype this item gives
 * @property {Number} durablity
 * @property {Number|undefined} attack
 * @property {Number|undefined} defense
 * @property {Number|undefined} accuracy
 * @property {Number|undefined} crit
 * @property {Number|undefined} actionSurge - how much ep does it cost to action surge with this item (default = 3)
 * @property {1|2|3|4|5|6|7|8|undefined} range - overides the weapon types with this range
 * @property {Number} speed - starts at 5; every module only subtracts speed
 *
 * --- from item.js
 * @typedef {object} materialData - data about a material if
 * @property {Number} density
 * @property {Number} hardness
 * @property {Number} flexiblity
 * @property {Number} toughness
 * @property {Number} sharpness
 *
 * @property {damagetypes[]} damagetypes - amplify the power of this damage type when crafted with something that gives the same
 * @property {effects[]} effects
 * @property {materialTypes} materialType - the type of matrial this item is
 */
const modules = {
    // tool heads
    hammerHead: {
        name: "Hammer",
        part: [schematics.hammer.parts.leftHead, schematics.hammer.parts.rightHead],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.rock, materialTypes.wood],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.28 + materialData.density * 0.07 - materialData.flexibility * 0.018;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 1.5;
            weaponData.attack -= materialData.flexiblity * 0.5;
            weaponData.speed -= materialData.density * 0.25;
            weaponData.speed -= materialData.toughness * 0.1;
            weaponData.accuracy -= 1;
            weaponData.durablity += materialData.hardness * 5;
            weaponData.durablity -= materialData.sharpness * 2;

            return weaponData;
        },
    },
    axeHead: {
        name: "Axe",
        part: [schematics.hammer.parts.leftHead, schematics.hammer.parts.rightHead],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.17 + materialData.density * 0.055 - materialData.flexibility * 0.024;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack +=
                materialData.sharpness * 1.5 +
                materialData.hardness * 0.65 +
                materialData.density * 0.35;
            weaponData.accuracy -= 0.35;
            weaponData.crit += materialData.sharpness * 0.15;
            weaponData.durablity +=
                materialData.hardness * 4 +
                materialData.toughness * 1.5 -
                materialData.sharpness * 0.7;
            weaponData.speed -= materialData.density * 0.23;

            return weaponData;
        },
    },
    scytheHead: {
        name: "Scythe",
        part: [schematics.hammer.parts.leftHead, schematics.hammer.parts.rightHead],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                    materialTypes.gemStone,
                ],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.55 + materialData.density * 0.08 - materialData.flexibility * 0.024;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.8 + materialData.flexiblity * 0.45;
            weaponData.accuracy -= 0.7;
            weaponData.crit += materialData.sharpness * 0.3;
            weaponData.durablity +=
                materialData.hardness * 3.5 + materialData.toughness - materialData.sharpness * 0.8;
            weaponData.speed -= materialData.density * 0.2 + materialData.flexiblity * 0.025;

            return weaponData;
        },
    },
    pickaxeHead: {
        name: "Pickaxe",
        part: [schematics.hammer.parts.leftHead, schematics.hammer.parts.rightHead],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                    materialTypes.gemStone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.42 + materialData.density * 0.075 - materialData.flexibility * 0.018;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.6 + materialData.density * 0.9;
            weaponData.accuracy -= 0.5;
            weaponData.crit += materialData.hardness * 0.08;
            weaponData.durablity +=
                materialData.hardness * 5 +
                materialData.toughness * 2 -
                materialData.sharpness * 0.4;
            weaponData.speed -= materialData.density * 0.27;

            return weaponData;
        },
    },
    spikeHammerHead: {
        name: "Spiky Hammer",
        part: [schematics.hammer.parts.leftHead, schematics.hammer.parts.rightHead],
        materials: [
            {
                allowedMaterials: [materialTypes.wood],
                amount: 3,
                same: true,
            },
            {
                allowedMaterial: [materialTypes.metal, materialTypes.gemStone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.48 + materialData.density * 0.07 - materialData.flexibility * 0.018;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.density * 1.2 + materialData.sharpness * 1.35;
            weaponData.accuracy -= 0.6;
            weaponData.crit += materialData.sharpness * 0.15;
            weaponData.durablity +=
                materialData.hardness * 4 +
                materialData.toughness * 1.6 -
                materialData.sharpness * 0.7;
            weaponData.speed -= materialData.density * 0.28;

            return weaponData;
        },
    },
    sledgeHead: {
        name: "Sledge Hammer",
        part: [schematics.hammer.parts.leftHead, schematics.hammer.parts.rightHead],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.rock],
                amount: 5,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                1.18 + materialData.density * 0.105 - materialData.flexibility * 0.012;
            weaponData.damagetype = damageTypes.crushing;
            weaponData.attack += materialData.density * 2 + materialData.toughness * 0.8;
            weaponData.accuracy -= 1.2;
            weaponData.durablity += materialData.hardness * 6 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.38 + materialData.toughness * 0.09;

            return weaponData;
        },
    },
    clawHead: {
        name: "Claw",
        part: [schematics.hammer.parts.leftHead, schematics.hammer.parts.rightHead],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                    materialTypes.gemStone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.04 + materialData.density * 0.04 - materialData.flexibility * 0.03;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 0.95 + materialData.hardness * 0.6;
            weaponData.accuracy += 0.25;
            weaponData.crit += materialData.sharpness * 0.16;
            weaponData.durablity +=
                materialData.hardness * 4 +
                materialData.toughness * 1.5 -
                materialData.sharpness * 0.5;
            weaponData.speed -= materialData.density * 0.17;

            return weaponData;
        },
    },
    // handles (shared)
    basicHandle: {
        name: "Baisc Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.22 + materialData.density * 0.024 - materialData.flexibility * 0.03;
            weaponData.defense += materialData.toughness * 0.15;
            weaponData.accuracy += materialData.flexiblity * 0.05;
            weaponData.durablity += materialData.hardness * 1.6 + materialData.toughness * 2.5;
            weaponData.speed -= materialData.density * 0.07;

            return weaponData;
        },
    },
    wrappedHandle: {
        name: "Wrapped Hilt",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 1,
            },
            {
                allowedMaterial: [
                    materialTypes.wire,
                    materialTypes.plants,
                    materialTypes.skin,
                    items.rubber,
                ],
                amount: 3,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.36 + materialData.density * 0.025 - materialData.flexibility * 0.045;
            weaponData.defense += materialData.toughness * 0.25;
            weaponData.accuracy += 0.35 + materialData.flexiblity * 0.14;
            weaponData.durablity +=
                materialData.hardness * 1.7 + materialData.toughness * 2 + materialData.flexiblity;
            weaponData.speed -= materialData.density * 0.06;

            return weaponData;
        },
    },
    curvedHandle: {
        name: "Curved Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.29 + materialData.density * 0.035 - materialData.flexibility * 0.045;
            weaponData.accuracy += 0.15 + materialData.flexiblity * 0.15;
            weaponData.crit += 0.1;
            weaponData.durablity += materialData.hardness * 1.5 + materialData.toughness * 1.8;
            weaponData.speed -= materialData.density * 0.09;

            return weaponData;
        },
    },
    shieldedHandle: {
        name: "Shielded Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 1,
            },
            {
                allowedMaterial: [materialTypes.metal, materialTypes.wire],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.17 + materialData.density * 0.045 - materialData.flexibility * 0.015;
            weaponData.defense += materialData.toughness * 0.5 + materialData.hardness * 0.2;
            weaponData.accuracy += 0.05;
            weaponData.durablity += materialData.hardness * 2.5 + materialData.toughness * 2.5;
            weaponData.speed -= materialData.density * 0.13;

            return weaponData;
        },
    },
    thickHandle: {
        name: "Thick Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.33 + materialData.density * 0.064 - materialData.flexibility * 0.016;
            weaponData.attack += materialData.density * 0.15;
            weaponData.defense += materialData.toughness * 0.45;
            weaponData.accuracy -= 0.2;
            weaponData.durablity += materialData.hardness * 2.7 + materialData.toughness * 3.2;
            weaponData.speed -= materialData.density * 0.14;

            return weaponData;
        },
    },
    hollowHandle: {
        name: "Hollow Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.49 + materialData.density * 0.015 - materialData.flexibility * 0.035;
            weaponData.accuracy += 0.2 + materialData.flexiblity * 0.12;
            weaponData.durablity +=
                materialData.hardness +
                materialData.toughness * 1.5 -
                materialData.flexiblity * 0.4;
            weaponData.speed -= materialData.density * 0.025;

            return weaponData;
        },
    },
    stickyHandle: {
        name: "Sticky Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 1,
            },
            { allowedMaterial: [materialTypes.sticky], amount: 2 },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.39 + materialData.density * 0.025 - materialData.flexibility * 0.025;
            weaponData.accuracy += 0.4 + materialData.flexiblity * 0.1;
            weaponData.durablity += materialData.hardness * 1.2 + materialData.toughness * 1.5;
            weaponData.speed -= materialData.density * 0.06;

            return weaponData;
        },
    },
    longHandle: {
        name: "long Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.rock,
                    materialTypes.wood,
                    materialTypes.bone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.13 + materialData.density * 0.045 - materialData.flexibility * 0.025;
            weaponData.defense += materialData.toughness * 0.15;
            weaponData.accuracy -= 0.15;
            weaponData.crit += 0.1;
            weaponData.durablity += materialData.hardness * 2.0 + materialData.toughness * 2.2;
            weaponData.speed -= materialData.density * 0.12;

            return weaponData;
        },
    },
    flexibleHandle: {
        // whip
        name: "Flexible Handle",
        part: [
            schematics.hammer.parts.handle,
            schematics.sword.parts.hilt,
            schematics.slapstick.parts.stick,
            schematics.spear.parts.shaft,
            schematics.club.parts.handle,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.skin,
                    materialTypes.plants,
                    items.xtramite,
                    items.rubber,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.38 + materialData.density * 0.025 - materialData.flexibility * 0.06;
            weaponData.attack += materialData.flexiblity * 0.35;
            weaponData.accuracy += materialData.flexiblity * 0.15 - 0.35;
            weaponData.crit += materialData.flexiblity * 0.17;
            weaponData.durablity +=
                materialData.hardness * 0.7 +
                materialData.toughness * 2.6 +
                materialData.flexiblity * 1.2;
            weaponData.speed -= materialData.density * 0.055;

            return weaponData;
        },
    },
    // binding
    glueBinding: {
        name: "Glue",
        part: [
            schematics.hammer.parts.binding,
            schematics.sword.parts.guard,
            schematics.spear.parts.binding,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.sticky],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.08 + materialData.density * 0.017 - materialData.flexibility * 0.035;
            weaponData.accuracy += 0.05 + materialData.flexiblity * 0.08;
            weaponData.durablity += materialData.toughness * 1.5 + materialData.flexiblity * 0.9;
            weaponData.speed -= materialData.density * 0.025;

            return weaponData;
        },
    },
    stringBinding: {
        name: "String",
        part: [
            schematics.hammer.parts.binding,
            schematics.sword.parts.guard,
            schematics.slapstick.parts.string,
            schematics.spear.parts.binding,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.wire, materialTypes.plants],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.13 + materialData.density * 0.015 - materialData.flexibility * 0.042;
            weaponData.accuracy += materialData.flexiblity * 0.1;
            weaponData.durablity += materialData.toughness * 1.9 + materialData.flexiblity * 1.2;
            weaponData.speed -= materialData.density * 0.03;

            return weaponData;
        },
    },
    metalBinding: {
        name: "Bradied",
        part: [
            schematics.hammer.parts.binding,
            schematics.sword.parts.guard,
            schematics.slapstick.parts.string,
            schematics.spear.parts.binding,
        ],
        materials: [
            {
                allowedMaterials: [items.wire, materialTypes.metal, materialTypes.skin],
                amount: 3,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.08 + materialData.density * 0.04 - materialData.flexibility * 0.016;
            weaponData.defense += materialData.toughness * 0.17;
            weaponData.accuracy += 0.05;
            weaponData.durablity += materialData.hardness * 2 + materialData.toughness * 2.1;
            weaponData.speed -= materialData.density * 0.065;

            return weaponData;
        },
    },
    barbedBinding: {
        name: "Barbed",
        part: [
            schematics.hammer.parts.binding,
            schematics.sword.parts.guard,
            schematics.spear.parts.binding,
            schematics.slapstick.parts.string,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wire],
                amount: 3,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.24 + materialData.density * 0.05 - materialData.flexibility * 0.012;
            weaponData.attack += materialData.sharpness * 0.3;
            weaponData.accuracy -= 0.1;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity += materialData.hardness * 1.8 + materialData.toughness * 1.3;
            weaponData.speed -= materialData.density * 0.075;

            return weaponData;
        },
    },
    cuffBinding: {
        name: "Cuff",
        part: [
            schematics.hammer.parts.binding,
            schematics.sword.parts.guard,
            schematics.spear.parts.binding,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.12 + materialData.density * 0.045 - materialData.flexibility * 0.018;
            weaponData.defense += materialData.toughness * 0.2;
            weaponData.accuracy += 0.12;
            weaponData.durablity += materialData.hardness * 2.5 + materialData.toughness * 2;
            weaponData.speed -= materialData.density * 0.085;

            return weaponData;
        },
    },
    // drill bits
    basicBit: {
        name: "Spiral",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.gemStone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.15 + materialData.density * 0.05 - materialData.flexibility * 0.015;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.15 + materialData.sharpness * 0.6;
            weaponData.crit += materialData.sharpness * 0.07;
            weaponData.durablity +=
                materialData.hardness * 4 + materialData.toughness - materialData.sharpness * 0.5;
            weaponData.speed -= materialData.density * 0.15;

            return weaponData;
        },
    },
    spadeBit: {
        name: "Spade",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.32 + materialData.density * 0.06 - materialData.flexibility * 0.016;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.2 + materialData.density * 0.3;
            weaponData.accuracy -= 0.15;
            weaponData.durablity += materialData.hardness * 4.2 + materialData.toughness * 1.2;
            weaponData.speed -= materialData.density * 0.2;

            return weaponData;
        },
    },
    augerBit: {
        name: "Auger",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.55 + materialData.density * 0.07 - materialData.flexibility * 0.013;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.4 + materialData.sharpness * 0.9;
            weaponData.accuracy -= 0.2;
            weaponData.crit += materialData.sharpness * 0.06;
            weaponData.durablity += materialData.hardness * 4 + materialData.toughness * 1.4;
            weaponData.speed -= materialData.density * 0.24;

            return weaponData;
        },
    },
    coreBit: {
        name: "Core",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.24 + materialData.density * 0.053 - materialData.flexibility * 0.015;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.1 + materialData.sharpness * 0.4;
            weaponData.accuracy += 0.1;
            weaponData.durablity += materialData.hardness * 5 + materialData.toughness * 1.5;
            weaponData.speed -= materialData.density * 0.21;

            return weaponData;
        },
    },
    masonryBit: {
        name: "Masonry",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.43 + materialData.density * 0.065 - materialData.flexibility * 0.014;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.7 + materialData.density * 0.35;
            weaponData.accuracy -= 0.3;
            weaponData.durablity += materialData.hardness * 6 + materialData.toughness * 1.8;
            weaponData.speed -= materialData.density * 0.25;

            return weaponData;
        },
    },
    stepBit: {
        name: "Step",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 3,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.3 + materialData.density * 0.053 - materialData.flexibility * 0.022;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.1 + materialData.sharpness * 0.8;
            weaponData.accuracy += 0.15;
            weaponData.crit += materialData.sharpness * 0.08;
            weaponData.durablity += materialData.hardness * 3.5 + materialData.toughness;
            weaponData.speed -= materialData.density * 0.2;

            return weaponData;
        },
    },
    lanceBit: {
        name: "Lance bit",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.67 + materialData.density * 0.08 - materialData.flexibility * 0.012;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.hardness * 1.85 + materialData.sharpness * 0.8;
            weaponData.accuracy -= 0.5;
            weaponData.crit += materialData.hardness * 0.12;
            weaponData.durablity += materialData.hardness * 5 + materialData.toughness * 1.7;
            weaponData.speed -= materialData.density * 0.3;

            return weaponData;
        },
    },
    thinBit: {
        name: "Thin Bit",
        part: [schematics.drill.parts.bit],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.2 + materialData.density * 0.035 - materialData.flexibility * 0.03;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 0.9 + materialData.hardness * 0.55;
            weaponData.accuracy += 0.4;
            weaponData.crit += materialData.sharpness * 0.15;
            weaponData.durablity +=
                materialData.hardness * 2 +
                materialData.toughness * 0.8 -
                materialData.sharpness * 0.5;
            weaponData.speed -= materialData.density * 0.09;

            return weaponData;
        },
    },
    // motor // it will use the xland V1 - V12 engine system
    motor: {
        name: "Motor",
        part: [schematics.drill.parts.motor],
        materials: [
            {
                allowedMaterials: [items.motor],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.33 + materialData.density * 0.03 - materialData.flexibility * 0.009;
            // todo add motors

            return weaponData;
        },
    },
    // drill handle
    basicGrip: {
        name: "Basic grip",
        part: [schematics.drill.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
            {
                allowedMaterials: [items.bolts],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.16 + materialData.density * 0.023 - materialData.flexibility * 0.023;
            weaponData.defense += materialData.toughness * 0.1;
            weaponData.accuracy += 0.15;
            weaponData.durablity += materialData.hardness * 1.6 + materialData.toughness * 1.8;
            weaponData.speed -= materialData.density * 0.06;

            return weaponData;
        },
    },
    pistolGrip: {
        name: "Pistol Grip",
        part: [schematics.drill.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.35 + materialData.density * 0.019 - materialData.flexibility * 0.045;
            weaponData.accuracy += 0.3 + materialData.flexiblity * 0.07;
            weaponData.durablity += materialData.hardness * 1.3 + materialData.toughness * 2;
            weaponData.speed -= materialData.density * 0.07;

            return weaponData;
        },
    },
    spadeGrip: {
        name: "Spade Grip",
        part: [schematics.drill.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.12 + materialData.density * 0.03 - materialData.flexibility * 0.025;
            weaponData.defense += materialData.toughness * 0.25;
            weaponData.accuracy += 0.18;
            weaponData.durablity += materialData.hardness * 2 + materialData.toughness * 2.5;
            weaponData.speed -= materialData.density * 0.09;

            return weaponData;
        },
    },
    doubleSpadeGrid: {
        name: "Double Spade Grid",
        part: [schematics.drill.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.24 + materialData.density * 0.045 - materialData.flexibility * 0.036;
            weaponData.defense += materialData.toughness * 0.35;
            weaponData.accuracy += 0.35;
            weaponData.durablity += materialData.hardness * 2.4 + materialData.toughness * 2.8;
            weaponData.speed -= materialData.density * 0.15;

            return weaponData;
        },
    },
    // shield
    barGrip: {
        name: "Bar Grip",
        part: [schematics.shield.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.1 + materialData.density * 0.03 - materialData.flexibility * 0.018;
            weaponData.defense += materialData.toughness * 0.15;
            weaponData.accuracy += 0.15;
            weaponData.durablity += materialData.hardness * 1.5 + materialData.toughness * 2;
            weaponData.speed -= materialData.density * 0.06;

            return weaponData;
        },
    },
    holeGrip: {
        name: "Hole Grip",
        part: [schematics.shield.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.32 + materialData.density * 0.018 - materialData.flexibility * 0.03;
            weaponData.defense += materialData.toughness * 0.08;
            weaponData.accuracy += 0.3;
            weaponData.durablity += materialData.hardness + materialData.toughness * 1.3;
            weaponData.speed -= materialData.density * 0.04;

            return weaponData;
        },
    },
    doubleBarGrip: {
        name: "Double Bar Grip",
        part: [schematics.shield.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.08 + materialData.density * 0.04 - materialData.flexibility * 0.018;
            weaponData.defense += materialData.toughness * 0.4;
            weaponData.accuracy += 0.25;
            weaponData.durablity += materialData.hardness * 2.5 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.13;

            return weaponData;
        },
    },
    straps: {
        name: "Straps",
        part: [schematics.shield.parts.grip],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.skin,
                    materialTypes.wire,
                    materialTypes.plants,
                    items.xtramite,
                ],
                amount: 2,
                same: true,
            },
            {
                allowedMaterial: [materialTypes.sticky],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.33 + materialData.density * 0.02 - materialData.flexibility * 0.049;
            weaponData.defense += materialData.toughness * 0.2 + materialData.flexiblity * 0.1;
            weaponData.accuracy += materialData.flexiblity * 0.13;
            weaponData.durablity += materialData.toughness * 2.5 + materialData.flexiblity * 1.4;
            weaponData.speed -= materialData.density * 0.045;

            return weaponData;
        },
    },
    guigeStrap: {
        name: "Guige Strap",
        part: [schematics.shield.parts.grip],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },
            {
                allowedMaterial: [materialTypes.sticky],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.22 + materialData.density * 0.023 - materialData.flexibility * 0.038;
            weaponData.defense += materialData.toughness * 0.25;
            weaponData.accuracy += materialData.flexiblity * 0.06 - 0.15;
            weaponData.durablity += materialData.toughness * 2.7 + materialData.hardness * 1.1;
            weaponData.speed -= materialData.density * 0.08;

            return weaponData;
        },
    },
    // shield face
    flatFace: {
        name: "Flat Face",
        part: [schematics.shield.parts.face],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.25 + materialData.density * 0.05 - materialData.flexibility * 0.015;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 0.22;
            weaponData.defense += materialData.toughness * 1.4 + materialData.hardness * 0.6;
            weaponData.durablity += materialData.hardness * 4.2 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.21;

            return weaponData;
        },
    },
    curvedFace: {
        name: "Curved Face",
        part: [schematics.shield.parts.face],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.08 + materialData.density * 0.045 - materialData.flexibility * 0.02;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 0.15;
            weaponData.defense += materialData.toughness * 1.3 + materialData.hardness * 0.5;
            weaponData.accuracy += 0.1;
            weaponData.durablity += materialData.hardness * 4 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.19;

            return weaponData;
        },
    },
    spikedFace: {
        name: "Spiked Face",
        part: [schematics.shield.parts.face],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },

            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.gemStone,
                    materialTypes.rock,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.41 + materialData.density * 0.065 - materialData.flexibility * 0.012;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.1 + materialData.density * 0.35;
            weaponData.defense += materialData.toughness * 1.2 + materialData.hardness * 0.55;
            weaponData.accuracy -= 0.2;
            weaponData.crit += materialData.sharpness * 0.12;
            weaponData.durablity +=
                materialData.hardness * 4.1 +
                materialData.toughness * 2.4 -
                materialData.sharpness * 0.5;
            weaponData.speed -= materialData.density * 0.24;

            return weaponData;
        },
    },
    armoredFace: {
        name: "Armored Face",
        part: [schematics.shield.parts.face],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.82 + materialData.density * 0.09 - materialData.flexibility * 0.011;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 0.5;
            weaponData.defense += materialData.toughness * 1.65 + materialData.hardness * 0.8;
            weaponData.accuracy -= 0.25;
            weaponData.durablity += materialData.hardness * 5.5 + materialData.toughness * 3.5;
            weaponData.speed -= materialData.density * 0.32;

            return weaponData;
        },
    },
    barbedFace: {
        name: "Barbed Face",
        part: [schematics.shield.parts.face],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wire],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.42 + materialData.density * 0.06 - materialData.flexibility * 0.014;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 0.9;
            weaponData.defense += materialData.toughness * 1.3 + materialData.hardness * 0.55;
            weaponData.accuracy -= 0.1;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity += materialData.hardness * 4 + materialData.toughness * 2.8;
            weaponData.speed -= materialData.density * 0.24;

            return weaponData;
        },
    },
    bladeFace: {
        name: "Blade Face",
        part: [schematics.shield.parts.face],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },
            {
                allowedMaterial: [items.metal],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.37 + materialData.density * 0.053 - materialData.flexibility * 0.018;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.4 + materialData.hardness * 0.3;
            weaponData.defense += materialData.toughness * 1.25 + materialData.hardness * 0.5;
            weaponData.accuracy -= 0.25;
            weaponData.crit += materialData.sharpness * 0.14;
            weaponData.durablity +=
                materialData.hardness * 4 +
                materialData.toughness * 2.5 -
                materialData.sharpness * 0.6;
            weaponData.speed -= materialData.density * 0.27;

            return weaponData;
        },
    },
    wideRimFace: {
        name: "Wide Rim Face",
        part: [schematics.shield.parts.face],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 3,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.58 + materialData.density * 0.07 - materialData.flexibility * 0.013;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 0.28;
            weaponData.defense += materialData.toughness * 1.55 + materialData.hardness * 0.65;
            weaponData.accuracy -= 0.1;
            weaponData.durablity += materialData.hardness * 4.8 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.28;

            return weaponData;
        },
    },
    // sword blades
    basicBlade: {
        name: "Basic Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.16 + materialData.density * 0.045 - materialData.flexibility * 0.018;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.25 + materialData.hardness * 0.5;
            weaponData.crit += materialData.sharpness * 0.08;
            weaponData.durablity +=
                materialData.hardness * 4 +
                materialData.toughness * 1.6 -
                materialData.sharpness * 0.4;
            weaponData.speed -= materialData.density * 0.17;

            return weaponData;
        },
    },
    claymoreBlade: {
        name: "Claymore Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.rock],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.7 + materialData.density * 0.077 - materialData.flexibility * 0.012;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack +=
                materialData.sharpness * 1.1 +
                materialData.hardness * 0.6 +
                materialData.density * 0.55;
            weaponData.accuracy -= 0.45;
            weaponData.crit += materialData.sharpness * 0.09;
            weaponData.durablity +=
                materialData.hardness * 4.3 +
                materialData.toughness * 2 -
                materialData.sharpness * 0.45;
            weaponData.speed -= materialData.density * 0.3;

            return weaponData;
        },
    },
    katanaBlade: {
        name: "Katana Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.04 + materialData.density * 0.044 - materialData.flexibility * 0.029;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.6 + materialData.hardness * 0.55;
            weaponData.accuracy += 0.15;
            weaponData.crit += materialData.sharpness * 0.19;
            weaponData.durablity +=
                materialData.hardness * 3.7 +
                materialData.toughness * 1.3 -
                materialData.sharpness * 0.6;
            weaponData.speed -= materialData.density * 0.17;

            return weaponData;
        },
    },
    rapierBlade: {
        name: "Rapier Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.gemStone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.39 + materialData.density * 0.027 - materialData.flexibility * 0.045;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.25 + materialData.hardness * 0.65;
            weaponData.accuracy += 0.8;
            weaponData.crit += materialData.sharpness * 0.23;
            weaponData.durablity +=
                materialData.hardness * 2.8 +
                materialData.toughness * 0.9 -
                materialData.sharpness * 0.5;
            weaponData.speed -= materialData.density * 0.08;

            return weaponData;
        },
    },
    jagidBlade: {
        name: "Jagid Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.gemStone,
                    materialTypes.rock,
                    materialTypes.wood,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge += 0.08 + materialData.density * 0.044;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 0.8 + materialData.hardness * 0.7;
            weaponData.accuracy -= materialData.density * 0.1;
            weaponData.durablity +=
                materialData.hardness * 1.7 +
                materialData.toughness * 1 -
                materialData.sharpness * 0.6;
            weaponData.speed -= materialData.density * 0.17;
        },
    },
    shortBlade: {
        name: "Short Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.24 + materialData.density * 0.03 - materialData.flexibility * 0.04;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 0.85 + materialData.hardness * 0.4;
            weaponData.accuracy += 0.55;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity += materialData.hardness * 3.1 + materialData.toughness * 1.1;
            weaponData.speed -= materialData.density * 0.095;

            return weaponData;
        },
    },
    macheteBlade: {
        name: "Machete Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.33 + materialData.density * 0.063 - materialData.flexibility * 0.016;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack +=
                materialData.sharpness * 1.25 +
                materialData.density * 0.55 +
                materialData.hardness * 0.25;
            weaponData.accuracy -= 0.2;
            weaponData.crit += materialData.sharpness * 0.08;
            weaponData.durablity += materialData.hardness * 3.6 + materialData.toughness * 1.4;
            weaponData.speed -= materialData.density * 0.21;

            return weaponData;
        },
    },
    // guards
    basicGuard: {
        name: "Basic Guard",
        part: [schematics.sword.parts.guard],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.1 + materialData.density * 0.024 - materialData.flexibility * 0.015;
            weaponData.defense += materialData.toughness * 0.2;
            weaponData.accuracy += 0.05;
            weaponData.durablity += materialData.hardness * 1.4 + materialData.toughness * 1.8;
            weaponData.speed -= materialData.density * 0.045;

            return weaponData;
        },
    },
    shieldGuard: {
        name: "Shield Guard",
        part: [schematics.sword.parts.guard],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 1,
            },
            {
                allowedMaterials: [items.shield],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.24 + materialData.density * 0.065 - materialData.flexibility * 0.012;
            weaponData.defense += materialData.toughness * 0.75 + materialData.hardness * 0.25;
            weaponData.accuracy -= 0.1;
            weaponData.durablity += materialData.hardness * 3 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.16;

            return weaponData;
        },
    },
    wideGuard: {
        name: "Wide Guard",
        part: [schematics.sword.parts.guard],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.17 + materialData.density * 0.046 - materialData.flexibility * 0.014;
            weaponData.defense += materialData.toughness * 0.45 + materialData.hardness * 0.1;
            weaponData.accuracy -= 0.1;
            weaponData.durablity += materialData.hardness * 2.3 + materialData.toughness * 2.3;
            weaponData.speed -= materialData.density * 0.1;

            return weaponData;
        },
    },
    sweptGuard: {
        name: "Swept Guard",
        part: [schematics.sword.parts.guard],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.16 + materialData.density * 0.035 - materialData.flexibility * 0.029;
            weaponData.defense += materialData.toughness * 0.3;
            weaponData.accuracy += 0.2;
            weaponData.durablity += materialData.hardness * 1.9 + materialData.toughness * 1.9;
            weaponData.speed -= materialData.density * 0.065;

            return weaponData;
        },
    },
    weightedGuard: {
        name: "Weighted Guard",
        part: [schematics.sword.parts.guard],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.45 + materialData.density * 0.07 - materialData.flexibility * 0.015;
            weaponData.attack += materialData.density * 0.25;
            weaponData.defense += materialData.toughness * 0.4;
            weaponData.accuracy -= 0.18;
            weaponData.durablity += materialData.hardness * 2.5 + materialData.toughness * 2.5;
            weaponData.speed -= materialData.density * 0.18;

            return weaponData;
        },
    },
    // slackstick stones
    ball: {
        name: "Ball",
        part: [
            schematics.slapstick.parts.ball1,
            schematics.slapstick.parts.ball2,
            schematics.slapstick.parts.ball3,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                    materialTypes.meat,
                    materialTypes.plants,
                    materialTypes.gemStone,
                    materialTypes.sticky,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.12 + materialData.density * 0.055 - materialData.flexibility * 0.012;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 1.05 + materialData.toughness * 0.3;
            weaponData.accuracy -= 0.1;
            weaponData.durablity += materialData.hardness * 2.5 + materialData.toughness * 2.2;
            weaponData.speed -= materialData.density * 0.18;

            return weaponData;
        },
    },
    spikyBall: {
        name: "Spiky Ball",
        part: [
            schematics.slapstick.parts.ball1,
            schematics.slapstick.parts.ball2,
            schematics.slapstick.parts.ball3,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                    materialTypes.meat,
                    materialTypes.plants,
                    materialTypes.gemStone,
                    materialTypes.sticky,
                ],
                amount: 1,
            },
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.29 + materialData.density * 0.063 - materialData.flexibility * 0.014;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.density * 0.9 + materialData.sharpness * 1.1;
            weaponData.accuracy -= 0.25;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity +=
                materialData.hardness * 2.8 +
                materialData.toughness * 1.9 -
                materialData.sharpness * 0.35;
            weaponData.speed -= materialData.density * 0.22;

            return weaponData;
        },
    },
    largeBall: {
        name: "Large Ball",
        part: [
            schematics.slapstick.parts.ball1,
            schematics.slapstick.parts.ball2,
            schematics.slapstick.parts.ball3,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.rock,
                    materialTypes.meat,
                    materialTypes.plants,
                    materialTypes.gemStone,
                    materialTypes.sticky,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.7 + materialData.density * 0.095 - materialData.flexibility * 0.011;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 1.75 + materialData.toughness * 0.45;
            weaponData.accuracy -= 0.65;
            weaponData.durablity += materialData.hardness * 3.5 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.3;

            return weaponData;
        },
    },
    // gloves
    basicGloves: {
        name: "Basic Gloves",
        part: [schematics.gloves.parts.body],
        materials: [
            {
                allowedMaterials: [materialTypes.skin, materialTypes.plants, items.rubber],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.3 + materialData.density * 0.02 - materialData.flexibility * 0.045;
            weaponData.defense += materialData.toughness * 0.7 + materialData.flexiblity * 0.15;
            weaponData.accuracy += 0.25;
            weaponData.durablity +=
                materialData.toughness * 2.8 + materialData.flexiblity + materialData.hardness;
            weaponData.speed -= materialData.density * 0.06;

            return weaponData;
        },
    },
    chainGloves: {
        name: "Chain Mail Gloves",
        part: [schematics.gloves.parts.body],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.03 + materialData.density * 0.038 - materialData.flexibility * 0.03;
            weaponData.defense += materialData.toughness + materialData.hardness * 0.3;
            weaponData.accuracy += 0.1;
            weaponData.durablity += materialData.hardness * 3.4 + materialData.toughness * 2;
            weaponData.speed -= materialData.density * 0.14;

            return weaponData;
        },
    },
    gauntlets: {
        name: "Gauntlets",
        part: [schematics.gloves.parts.body],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.48 + materialData.density * 0.07 - materialData.flexibility * 0.015;
            weaponData.attack += materialData.density * 0.5;
            weaponData.defense += materialData.toughness * 1.4 + materialData.hardness * 0.6;
            weaponData.accuracy -= 0.25;
            weaponData.durablity += materialData.hardness * 4.5 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.23;

            return weaponData;
        },
    },
    insulatedGloves: {
        name: "Insulated Gloves",
        part: [schematics.gloves.parts.body],
        materials: [
            {
                allowedMaterials: [materialTypes.skin, materialTypes.plants],
                amount: 2,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.skin, materialTypes.plants],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.21 + materialData.density * 0.025 - materialData.flexibility * 0.045;
            weaponData.defense += materialData.toughness * 0.75 + materialData.flexiblity * 0.3;
            weaponData.accuracy += 0.15;
            weaponData.durablity += materialData.toughness * 3 + materialData.flexiblity * 1.7;
            weaponData.speed -= materialData.density * 0.09;

            return weaponData;
        },
    },
    climbingGloves: {
        name: "Climbing Gloves",
        part: [schematics.gloves.parts.body],
        materials: [
            {
                allowedMaterials: [materialTypes.skin, materialTypes.plants],
                amount: 2,
                same: true,
            },
            {
                allowedMaterial: [materialTypes.sticky],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.28 + materialData.density * 0.02 - materialData.flexibility * 0.045;
            weaponData.defense += materialData.toughness * 0.45 + materialData.flexiblity * 0.2;
            weaponData.accuracy += 0.5 + materialData.flexiblity * 0.1;
            weaponData.durablity += materialData.toughness * 2.2 + materialData.flexiblity * 1.5;
            weaponData.speed -= materialData.density * 0.08;

            return weaponData;
        },
    },
    // knuckle plates
    baiscPlate: {
        name: "Baisc Plate",
        part: [schematics.gloves.parts.knuckle, schematics.boots.parts.toe],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.gemStone,
                    materialTypes.wood,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.08 + materialData.density * 0.035 - materialData.flexibility * 0.018;
            weaponData.attack += materialData.density * 0.6 + materialData.hardness * 0.2;
            weaponData.defense += materialData.toughness * 0.45;
            weaponData.accuracy -= 0.12;
            weaponData.durablity += materialData.hardness * 2.8 + materialData.toughness * 1.6;
            weaponData.speed -= materialData.density * 0.11;

            return weaponData;
        },
    },
    spikedPlate: {
        name: "Spiked Plate",
        part: [schematics.gloves.parts.knuckle, schematics.boots.parts.toe],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.gemStone,
                    materialTypes.wood,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.2 + materialData.density * 0.044 - materialData.flexibility * 0.013;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.1 + materialData.density * 0.3;
            weaponData.defense += materialData.toughness * 0.3;
            weaponData.accuracy -= 0.18;
            weaponData.crit += materialData.sharpness * 0.12;
            weaponData.durablity +=
                materialData.hardness * 2.6 +
                materialData.toughness * 1.4 -
                materialData.sharpness * 0.4;
            weaponData.speed -= materialData.density * 0.13;

            return weaponData;
        },
    },
    gloveReinforcement: {
        name: "Glove Reinforcement",
        part: [schematics.gloves.parts.knuckle],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.skin],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.14 + materialData.density * 0.035 - materialData.flexibility * 0.016;
            weaponData.attack += materialData.density * 0.2;
            weaponData.defense += materialData.toughness * 0.75 + materialData.hardness * 0.15;
            weaponData.accuracy -= 0.12;
            weaponData.durablity += materialData.hardness * 2.5 + materialData.toughness * 2.2;
            weaponData.speed -= materialData.density * 0.15;

            return weaponData;
        },
    },
    dusters: {
        name: "Dusters",
        part: [schematics.gloves.parts.knuckle],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.wood],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.17 + materialData.density * 0.045 - materialData.flexibility * 0.018;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 0.8 + materialData.hardness * 0.25;
            weaponData.defense += materialData.toughness * 0.25;
            weaponData.accuracy -= 0.1;
            weaponData.durablity += materialData.hardness * 3 + materialData.toughness * 1.6;
            weaponData.speed -= materialData.density * 0.12;

            return weaponData;
        },
    },
    // bow stave
    basicStave: {
        name: "Basic Stave",
        part: [schematics.bow.parts.stave],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.16 + materialData.density * 0.055 - materialData.flexibility * 0.045;
            weaponData.attack += materialData.flexiblity * 1.35 + materialData.toughness * 0.4;
            weaponData.accuracy += 0.1;
            weaponData.durablity +=
                materialData.toughness * 3.5 +
                materialData.flexiblity * 1.7 +
                materialData.hardness;
            weaponData.speed -= materialData.density * 0.16;

            return weaponData;
        },
    },
    longStave: {
        name: "Long Stave",
        part: [schematics.bow.parts.stave],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.54 + materialData.density * 0.075 - materialData.flexibility * 0.045;
            weaponData.attack += materialData.flexiblity * 1.5 + materialData.toughness * 0.6;
            weaponData.accuracy -= 0.15;
            weaponData.durablity +=
                materialData.toughness * 4 +
                materialData.flexiblity * 2 +
                materialData.hardness * 1.2;
            weaponData.speed -= materialData.density * 0.23;

            return weaponData;
        },
    },
    recursiveStave: {
        name: "Recursive Stave",
        part: [schematics.bow.parts.stave],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.03 + materialData.density * 0.05 - materialData.flexibility * 0.06;
            weaponData.attack += materialData.flexiblity * 1.8 + materialData.toughness * 0.3;
            weaponData.accuracy += 0.15;
            weaponData.durablity +=
                materialData.toughness * 3.2 +
                materialData.flexiblity * 1.9 +
                materialData.hardness;
            weaponData.speed -= materialData.density * 0.17;

            return weaponData;
        },
    },
    warStave: {
        name: "War Stave",
        part: [schematics.bow.parts.stave],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.7 + materialData.density * 0.09 - materialData.flexibility * 0.035;
            weaponData.attack += materialData.flexiblity * 1.25 + materialData.toughness * 0.9;
            weaponData.accuracy -= 0.35;
            weaponData.durablity +=
                materialData.hardness * 2.5 + materialData.toughness * 4 + materialData.flexiblity;
            weaponData.speed -= materialData.density * 0.28;

            return weaponData;
        },
    },
    compoundStave: {
        name: "Compound Stave",
        part: [schematics.bow.parts.stave],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood],
                amount: 2,
                same: true,
            },
            {
                allowedMaterial: [items.gear],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.19 + materialData.density * 0.055 - materialData.flexibility * 0.043;
            weaponData.attack += materialData.flexiblity * 1.7 + materialData.hardness * 0.55;
            weaponData.accuracy += 0.35;
            weaponData.durablity +=
                materialData.hardness * 2.8 +
                materialData.toughness * 2.5 +
                materialData.flexiblity * 1.4;
            weaponData.speed -= materialData.density * 0.21;

            return weaponData;
        },
    },
    stablizerStave: {
        name: "Stablizer Stave",
        part: [schematics.bow.parts.stave],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood],
                amount: 2,
                same: true,
            },
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.18 + materialData.density * 0.049 - materialData.flexibility * 0.038;
            weaponData.attack += materialData.flexiblity * 1.25 + materialData.toughness * 0.35;
            weaponData.accuracy += 0.65;
            weaponData.durablity +=
                materialData.hardness * 2 +
                materialData.toughness * 3 +
                materialData.flexiblity * 1.5;
            weaponData.speed -= materialData.density * 0.26;

            return weaponData;
        },
    },
    sightedStave: {
        name: "Sighted Stave",
        part: [schematics.bow.parts.stave],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood],
                amount: 2,
                same: true,
            },
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.1 + materialData.density * 0.05 - materialData.flexibility * 0.039;
            weaponData.attack += materialData.flexiblity * 1.3 + materialData.toughness * 0.3;
            weaponData.accuracy += 0.85;
            weaponData.durablity +=
                materialData.hardness * 2 + materialData.toughness * 2.6 + materialData.flexiblity;
            weaponData.speed -= materialData.density * 0.19;

            return weaponData;
        },
    },
    // bow string
    bowString: {
        name: "String",
        part: [schematics.bow.parts.string],
        materials: [
            {
                allowedMaterials: [materialTypes.wire],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.2 + materialData.density * 0.022 - materialData.flexibility * 0.055;
            weaponData.attack += materialData.flexiblity * 1.1 + materialData.toughness * 0.2;
            weaponData.accuracy += 0.05;
            weaponData.durablity += materialData.flexiblity * 1.5 + materialData.toughness * 3.5;
            weaponData.speed -= materialData.density * 0.05;

            return weaponData;
        },
    },
    bowCable: {
        name: "Cable",
        part: [schematics.bow.parts.string],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.06 + materialData.density * 0.04 - materialData.flexibility * 0.042;
            weaponData.attack += materialData.flexiblity * 0.95 + materialData.toughness * 0.6;
            weaponData.accuracy += 0.1;
            weaponData.durablity += materialData.hardness * 2.8 + materialData.toughness * 3.5;
            weaponData.speed -= materialData.density * 0.09;

            return weaponData;
        },
    },
    // spear head
    basicHead: {
        name: "Basic Head",
        part: [schematics.spear.parts.head],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.06 + materialData.density * 0.039 - materialData.flexibility * 0.026;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.3 + materialData.hardness * 0.5;
            weaponData.accuracy += 0.35;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity += materialData.hardness * 3.5 + materialData.toughness * 1.4;
            weaponData.speed -= materialData.density * 0.15;

            return weaponData;
        },
    },
    glaiveHead: {
        name: "Glaive Head",
        part: [schematics.spear.parts.head],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.19 + materialData.density * 0.055 - materialData.flexibility * 0.027;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack +=
                materialData.sharpness * 1.55 +
                materialData.hardness * 0.6 +
                materialData.density * 0.2;
            weaponData.accuracy -= 0.05;
            weaponData.crit += materialData.sharpness * 0.16;
            weaponData.durablity +=
                materialData.hardness * 3.9 +
                materialData.toughness * 1.5 -
                materialData.sharpness * 0.4;
            weaponData.speed -= materialData.density * 0.21;

            return weaponData;
        },
    },
    halberdHead: {
        name: "Halberd Head",
        part: [schematics.spear.parts.head],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.71 + materialData.density * 0.082 - materialData.flexibility * 0.019;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack +=
                materialData.sharpness * 1.2 +
                materialData.hardness * 0.75 +
                materialData.density * 0.7;
            weaponData.accuracy -= 0.6;
            weaponData.crit += materialData.sharpness * 0.12;
            weaponData.durablity += materialData.hardness * 4.5 + materialData.toughness * 2;
            weaponData.speed -= materialData.density * 0.28;

            return weaponData;
        },
    },
    lanceHead: {
        name: "Lance Head",
        part: [schematics.spear.parts.head],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.rock],
                amount: 4,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.96 + materialData.density * 0.095 - materialData.flexibility * 0.015;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack +=
                materialData.hardness * 1.2 +
                materialData.sharpness * 0.75 +
                materialData.density * 0.65;
            weaponData.accuracy -= 0.65;
            weaponData.crit += materialData.hardness * 0.1;
            weaponData.durablity += materialData.hardness * 4.8 + materialData.toughness * 2.5;
            weaponData.speed -= materialData.density * 0.31;

            return weaponData;
        },
    },
    naginataHead: {
        name: "Naginata Head",
        part: [schematics.spear.parts.head],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.22 + materialData.density * 0.055 - materialData.flexibility * 0.031;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.6 + materialData.flexiblity * 0.25;
            weaponData.accuracy += 0.15;
            weaponData.crit += materialData.sharpness * 0.17;
            weaponData.durablity += materialData.hardness * 3.7 + materialData.toughness * 1.4;
            weaponData.speed -= materialData.density * 0.2;

            return weaponData;
        },
    },
    tridentHead: {
        name: "Trident Head",
        part: [schematics.spear.parts.head],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                    materialTypes.gemStone,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.21 + materialData.density * 0.052 - materialData.flexibility * 0.019;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.sharpness * 1.15 + materialData.hardness * 0.75;
            weaponData.accuracy += 0.1;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity += materialData.hardness * 4 + materialData.toughness * 1.7;
            weaponData.speed -= materialData.density * 0.22;

            return weaponData;
        },
    },
    // club head
    batHead: {
        name: "Bat Head",
        part: [schematics.club.parts.head],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.rock],
                amount: 4,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.16 + materialData.density * 0.06 - materialData.flexibility * 0.019;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.damagetype = damageTypes.crushing;
            weaponData.attack += materialData.density * 1.35 + materialData.toughness * 0.35;
            weaponData.accuracy -= 0.15;
            weaponData.durablity += materialData.hardness * 3.4 + materialData.toughness * 2.4;
            weaponData.speed -= materialData.density * 0.24;

            return weaponData;
        },
    },
    armoredHead: {
        name: "Armored Head",
        part: [schematics.club.parts.head],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.rock],
                amount: 4,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.rock],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.67 + materialData.density * 0.087 - materialData.flexibility * 0.015;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.damagetype = damageTypes.crushing;
            weaponData.attack += materialData.density * 1.65 + materialData.hardness * 0.4;
            weaponData.defense += materialData.toughness * 0.2;
            weaponData.accuracy -= 0.4;
            weaponData.durablity += materialData.hardness * 5 + materialData.toughness * 3;
            weaponData.speed -= materialData.density * 0.34;

            return weaponData;
        },
    },
    spikedHead: {
        name: "Spiked Head",
        part: [schematics.club.parts.head],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.rock],
                amount: 4,
                same: true,
            },
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.gemStone,
                    materialTypes.rock,
                    materialTypes.bone,
                ],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.48 + materialData.density * 0.078 - materialData.flexibility * 0.014;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.density * 1.05 + materialData.sharpness * 1.1;
            weaponData.accuracy -= 0.25;
            weaponData.crit += materialData.sharpness * 0.12;
            weaponData.durablity +=
                materialData.hardness * 4 +
                materialData.toughness * 2.3 -
                materialData.sharpness * 0.5;
            weaponData.speed -= materialData.density * 0.27;

            return weaponData;
        },
    },
    barbedHead: {
        name: "Barbed Head",
        part: [schematics.club.parts.head],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.rock],
                amount: 4,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wire],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.42 + materialData.density * 0.07 - materialData.flexibility * 0.02;
            weaponData.damagetype = damageTypes.sharp;
            weaponData.attack += materialData.density * 1.1 + materialData.sharpness * 0.95;
            weaponData.accuracy -= 0.3;
            weaponData.crit += materialData.sharpness * 0.13;
            weaponData.durablity +=
                materialData.hardness * 3.5 +
                materialData.toughness * 2 -
                materialData.sharpness * 0.3;
            weaponData.speed -= materialData.density * 0.26;

            return weaponData;
        },
    },
    wingBatHead: {
        name: "Wing Head",
        part: [schematics.club.parts.head],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.rock],
                amount: 3,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.07 + materialData.density * 0.05 - materialData.flexibility * 0.03;
            weaponData.damagetype = damageTypes.blunt;
            weaponData.attack += materialData.density * 1.15 + materialData.flexiblity * 0.2;
            weaponData.accuracy += 0.15;
            weaponData.durablity += materialData.hardness * 2.9 + materialData.toughness * 2.2;
            weaponData.speed -= materialData.density * 0.19;

            return weaponData;
        },
    },
    //armor
    fabric: {
        name: "Fabric",
        part: [
            schematics.pants.parts.leftLeg,
            schematics.pants.parts.rightLeg,
            schematics.shirt.parts.body,
            schematics.shirt.parts.leftSleeve,
            schematics.shirt.parts.rightSleeve,
            schematics.pants.parts.waist,
            schematics.boots.parts.body,
            schematics.boots.parts.shaft,
            schematics.boots.parts.toe,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.skin,
                    materialTypes.plants,
                    materialTypes.wire,
                    items.rubber,
                ],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.15 + materialData.density * 0.019 - materialData.flexibility * 0.055;
            weaponData.defense += materialData.toughness * 0.8 + materialData.flexiblity * 0.35;
            weaponData.accuracy += 0.2;
            weaponData.durablity += materialData.toughness * 2.5 + materialData.flexiblity * 1.6;
            weaponData.speed -= materialData.density * 0.075;

            return weaponData;
        },
    },
    plated: {
        name: "Plated",
        part: [
            schematics.pants.parts.leftLeg,
            schematics.pants.parts.rightLeg,
            schematics.shirt.parts.body,
            schematics.shirt.parts.leftSleeve,
            schematics.shirt.parts.rightSleeve,
            schematics.boots.parts.body,
            schematics.boots.parts.shaft,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.bone],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.45 + materialData.density * 0.075 - materialData.flexibility * 0.013;
            weaponData.defense += materialData.toughness * 1.3 + materialData.hardness * 0.6;
            weaponData.accuracy -= 0.1;
            weaponData.durablity += materialData.hardness * 4.5 + materialData.toughness * 3.2;
            weaponData.speed -= materialData.density * 0.22;

            return weaponData;
        },
    },
    chain: {
        name: "Chain",
        part: [
            schematics.pants.parts.leftLeg,
            schematics.pants.parts.rightLeg,
            schematics.shirt.parts.body,
            schematics.shirt.parts.leftSleeve,
            schematics.shirt.parts.rightSleeve,
            schematics.pants.parts.waist,
            schematics.helmet.parts.skull,
            schematics.boots.parts.body,
            schematics.boots.parts.shaft,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.13 + materialData.density * 0.049 - materialData.flexibility * 0.031;
            weaponData.defense +=
                materialData.toughness * 1.05 +
                materialData.hardness * 0.35 +
                materialData.flexiblity * 0.2;
            weaponData.accuracy += 0.1;
            weaponData.durablity +=
                materialData.hardness * 3 + materialData.toughness * 2.5 + materialData.flexiblity;
            weaponData.speed -= materialData.density * 0.13;

            return weaponData;
        },
    },
    studded: {
        name: "Studded",
        part: [
            schematics.pants.parts.leftLeg,
            schematics.pants.parts.rightLeg,
            schematics.shirt.parts.body,
            schematics.shirt.parts.leftSleeve,
            schematics.shirt.parts.rightSleeve,
            schematics.helmet.parts.skull,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.wood,
                    materialTypes.skin,
                    items.rubber,
                ],
                amount: 2,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal, materialTypes.gemStone, materialTypes.bone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.11 + materialData.density * 0.048 - materialData.flexibility * 0.028;
            weaponData.attack += materialData.density * 0.12 + materialData.sharpness * 0.12;
            weaponData.defense += materialData.toughness * 0.95 + materialData.hardness * 0.35;
            weaponData.accuracy -= 0.05;
            weaponData.durablity += materialData.hardness * 3 + materialData.toughness * 2.8;
            weaponData.speed -= materialData.density * 0.155;

            return weaponData;
        },
    },
    wrapped: {
        name: "Wrapped",
        part: [
            schematics.pants.parts.leftLeg,
            schematics.pants.parts.rightLeg,
            schematics.shirt.parts.body,
            schematics.shirt.parts.leftSleeve,
            schematics.shirt.parts.rightSleeve,
            schematics.pants.parts.waist,
            schematics.boots.parts.body,
            schematics.boots.parts.shaft,
        ],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.skin,
                    materialTypes.plants,
                    materialTypes.wire,
                    items.rubber,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.25 + materialData.density * 0.025 - materialData.flexibility * 0.05;
            weaponData.defense += materialData.toughness * 0.55 + materialData.flexiblity * 0.5;
            weaponData.accuracy += 0.15;
            weaponData.durablity += materialData.toughness * 2.4 + materialData.flexiblity * 1.7;
            weaponData.speed -= materialData.density * 0.065;

            return weaponData;
        },
    },
    splited: {
        name: "Splint",
        part: [
            schematics.pants.parts.leftLeg,
            schematics.pants.parts.rightLeg,
            schematics.shirt.parts.body,
            schematics.shirt.parts.leftSleeve,
            schematics.shirt.parts.rightSleeve,
            schematics.pants.parts.waist,
            schematics.boots.parts.body,
            schematics.boots.parts.shaft,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wood, materialTypes.bone],
                amount: 1,
            },
            {
                allowedMaterials: [
                    materialTypes.skin,
                    materialTypes.plants,
                    materialTypes.wire,
                    items.rubber,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.25 + materialData.density * 0.055 - materialData.flexibility * 0.028;
            weaponData.defense +=
                materialData.toughness * 1.2 +
                materialData.hardness * 0.4 +
                materialData.flexiblity * 0.25;
            weaponData.accuracy -= 0.05;
            weaponData.durablity +=
                materialData.hardness * 3.5 + materialData.toughness * 3 + materialData.flexiblity;
            weaponData.speed -= materialData.density * 0.17;

            return weaponData;
        },
    },
    padded: {
        name: "Padded",
        part: [
            schematics.pants.parts.leftLeg,
            schematics.pants.parts.rightLeg,
            schematics.shirt.parts.body,
            schematics.shirt.parts.leftSleeve,
            schematics.shirt.parts.rightSleeve,
            schematics.pants.parts.waist,
            schematics.helmet.parts.skull,
            schematics.boots.parts.body,
            schematics.boots.parts.shaft,
        ],
        materials: [
            {
                allowedMaterials: [
                    [materialTypes.skin, materialTypes.plants, materialTypes.wire, items.rubber],
                ],
                amount: 2,
                same: true,
            },
            {
                allowedMaterials: [[materialTypes.skin, materialTypes.plants, items.rubber]],
                amount: 3,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.32 + materialData.density * 0.035 - materialData.flexibility * 0.025;
            weaponData.defense += materialData.toughness * 1.35 + materialData.flexiblity * 0.65;
            weaponData.accuracy += 0.05;
            weaponData.durablity += materialData.toughness * 3 + materialData.flexiblity * 2.5;
            weaponData.speed -= materialData.density * 0.15;

            return weaponData;
        },
    },
    solid: {
        name: "Solid",
        part: [schematics.pants.parts.waist, schematics.boots.parts.body],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.wood,
                    materialTypes.bone,
                    materialTypes.rock,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.69 + materialData.density * 0.1 - materialData.flexibility * 0.012;
            weaponData.defense += materialData.toughness * 1.6 + materialData.hardness * 0.65;
            weaponData.accuracy -= 0.25;
            weaponData.durablity += materialData.hardness * 4.8 + materialData.toughness * 3.8;
            weaponData.speed -= materialData.density * 0.25;

            return weaponData;
        },
    },
    suppenders: {
        name: "Suppenders",
        part: [schematics.pants.parts.waist],
        materials: [
            {
                allowedMaterials: [
                    [materialTypes.skin, materialTypes.plants, materialTypes.wire, items.rubber],
                ],
                amount: 2,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.24 + materialData.density * 0.02 - materialData.flexibility * 0.042;
            weaponData.defense += materialData.toughness * 0.18 + materialData.flexiblity * 0.25;
            weaponData.accuracy += 0.2;
            weaponData.durablity += materialData.toughness * 1.7 + materialData.flexiblity * 1.3;
            weaponData.speed -= materialData.density * 0.04;

            return weaponData;
        },
    },
    barbbed: {
        name: "Barbbed",
        part: [schematics.shirt.parts.leftSleeve, schematics.shirt.parts.rightSleeve],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.skin,
                    materialTypes.plants,
                    materialTypes.wire,
                    items.rubber,
                ],
                amount: 2,
            },
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wire],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.22 + materialData.density * 0.047 - materialData.flexibility * 0.029;
            weaponData.attack += materialData.sharpness * 0.75;
            weaponData.defense += materialData.toughness * 0.5 + materialData.flexiblity * 0.2;
            weaponData.accuracy -= 0.08;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity += materialData.hardness * 2 + materialData.toughness * 2;
            weaponData.speed -= materialData.density * 0.105;

            return weaponData;
        },
    },
    shell: {
        name: "Shell",
        part: [schematics.shirt.parts.body],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.rock,
                ],
                amount: 4,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.79 + materialData.density * 0.105 - materialData.flexibility * 0.012;
            weaponData.defense += materialData.toughness * 1.9 + materialData.hardness * 0.8;
            weaponData.accuracy -= 0.3;
            weaponData.durablity += materialData.hardness * 5 + materialData.toughness * 4;
            weaponData.speed -= materialData.density * 0.33;

            return weaponData;
        },
    },
    longShirt: {
        name: "Long Shirt",
        part: [schematics.shirt.parts.body],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.skin,
                    materialTypes.plants,
                    materialTypes.wire,
                    items.rubber,
                ],
                amount: 3,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.12 + materialData.density * 0.028 - materialData.flexibility * 0.038;
            weaponData.defense += materialData.toughness * 0.85 + materialData.flexiblity * 0.3;
            weaponData.accuracy += 0.1;
            weaponData.durablity += materialData.toughness * 2.8 + materialData.flexiblity * 1.4;
            weaponData.speed -= materialData.density * 0.1;

            return weaponData;
        },
    },
    gambison: {
        name: "gambison",
        part: [schematics.shirt.parts.body],
        materials: [
            {
                allowedMaterials: [
                    [materialTypes.skin, materialTypes.plants, materialTypes.wire, items.rubber],
                ],
                amount: 3,
                same: true,
            },
            {
                allowedMaterials: [[materialTypes.skin, materialTypes.plants, items.rubber]],
                amount: 5,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.44 + materialData.density * 0.038 - materialData.flexibility * 0.025;
            weaponData.defense += materialData.toughness * 1.6 + materialData.flexiblity * 0.55;
            weaponData.durablity += materialData.toughness * 3.4 + materialData.flexiblity * 2.3;
            weaponData.speed -= materialData.density * 0.19;

            return weaponData;
        },
    },
    // helmets
    hat: {
        name: "Hat",
        part: [schematics.helmet.parts.skull],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.skin,
                    items.rubber,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.16 + materialData.density * 0.023 - materialData.flexibility * 0.042;
            weaponData.defense += materialData.toughness * 0.6 + materialData.flexiblity * 0.25;
            weaponData.accuracy += 0.15;
            weaponData.durablity += materialData.toughness * 2.2 + materialData.flexiblity * 1.2;
            weaponData.speed -= materialData.density * 0.05;

            return weaponData;
        },
    },
    halfShell: {
        name: "Half Shell",
        part: [schematics.helmet.parts.skull],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.metal,
                    materialTypes.skin,
                    materialTypes.rock,
                    items.rubber,
                ],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.18 + materialData.density * 0.05 - materialData.flexibility * 0.014;
            weaponData.defense += materialData.toughness * 1.15 + materialData.hardness * 0.45;
            weaponData.accuracy += 0.05;
            weaponData.durablity += materialData.hardness * 3.2 + materialData.toughness * 2.6;
            weaponData.speed -= materialData.density * 0.15;

            return weaponData;
        },
    },
    sallet: {
        name: "sallet",
        part: [schematics.helmet.parts.skull],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.62 + materialData.density * 0.077 - materialData.flexibility * 0.012;
            weaponData.defense += materialData.toughness * 1.65 + materialData.hardness * 0.65;
            weaponData.accuracy -= 0.1;
            weaponData.durablity += materialData.hardness * 4.5 + materialData.toughness * 3.5;
            weaponData.speed -= materialData.density * 0.24;

            return weaponData;
        },
    },

    // helmet visors
    noseGuard: {
        name: "Nose Guard",
        part: [schematics.helmet.parts.visor],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.wood],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.03 + materialData.density * 0.03 - materialData.flexibility * 0.016;
            weaponData.defense += materialData.toughness * 0.35 + materialData.hardness * 0.2;
            weaponData.accuracy += 0.05;
            weaponData.durablity += materialData.hardness * 1.8 + materialData.toughness * 1.6;
            weaponData.speed -= materialData.density * 0.045;

            return weaponData;
        },
    },
    barredVisor: {
        name: "Barred Visor",
        part: [schematics.helmet.parts.visor],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.wood],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.2 + materialData.density * 0.055 - materialData.flexibility * 0.017;
            weaponData.defense += materialData.toughness * 0.85 + materialData.hardness * 0.3;
            weaponData.accuracy -= 0.15;
            weaponData.durablity += materialData.hardness * 3 + materialData.toughness * 2.2;
            weaponData.speed -= materialData.density * 0.12;

            return weaponData;
        },
    },
    meshVisor: {
        name: "Mesh Visor",
        part: [schematics.helmet.parts.visor],
        materials: [
            {
                allowedMaterials: [materialTypes.wire, materialTypes.metal, materialTypes.skin],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                -0.07 + materialData.density * 0.028 - materialData.flexibility * 0.035;
            weaponData.defense += materialData.toughness * 0.45 + materialData.flexiblity * 0.35;
            weaponData.accuracy += 0.1;
            weaponData.durablity +=
                materialData.toughness * 2 + materialData.flexiblity * 1.9 + materialData.hardness;
            weaponData.speed -= materialData.density * 0.07;

            return weaponData;
        },
    },
    fullMask: {
        name: "Full Mask",
        part: [schematics.helmet.parts.visor],
        materials: [
            {
                allowedMaterials: [
                    materialTypes.metal,
                    materialTypes.bone,
                    materialTypes.wood,
                    materialTypes.rock,
                ],
                amount: 2,
                same: true,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.42 + materialData.density * 0.075 - materialData.flexibility * 0.012;
            weaponData.defense += materialData.toughness * 1.45 + materialData.hardness * 0.55;
            weaponData.accuracy -= 0.4;
            weaponData.durablity += materialData.hardness * 4.3 + materialData.toughness * 3.3;
            weaponData.speed -= materialData.density * 0.22;

            return weaponData;
        },
    },
    spikedVisor: {
        name: "Spiked Visor",
        part: [schematics.helmet.parts.visor],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.wood],
                amount: 2,
                same: true,
            },
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.gemStone],
                amount: 1,
            },
        ],
        itemStats: (weaponData, materialData) => {
            weaponData.actionSurge +=
                0.35 + materialData.density * 0.065 - materialData.flexibility * 0.011;
            weaponData.attack += materialData.sharpness * 0.8 + materialData.hardness * 0.2;
            weaponData.defense += materialData.toughness * 1 + materialData.hardness * 0.45;
            weaponData.accuracy -= 0.3;
            weaponData.crit += materialData.sharpness * 0.1;
            weaponData.durablity +=
                materialData.hardness * 3.8 +
                materialData.toughness * 2.6 -
                materialData.sharpness * 0.4;
            weaponData.speed -= materialData.density * 0.19;

            return weaponData;
        },
    },
};
