/**
 * @typedef {Object} schematics - all the diffrent schematics in xland
 * @property {schematic}
 *
 * @typedef {object} schematic - data about this crafting recipe
 * @property {String} name - name of the schematic
 * @property {String} itemName - the item made by the schematic (the name would be "{socket prefix}{material name}{itemName}")
 * @property {items.item} modularItem - the item that is being crafted
 * @property {part[]} parts - parts of the schematic that modules go in
 *
 * ----
 * @typedef {Object} part - parts of the schematic that modules go in
 * @property {String} name - name of the part
 */
const schematics = {
    hammer: {
        // technicly not a hammer since this can also be a axe / pickaxe
        name: "hammer",
        itemName: "Hammer",
        modularItem: items.hammer,
        parts: {
            leftHead: { name: "leftHead" },
            rightHead: { name: "rightHead" },
            handle: { name: "handle" },
            binding: { name: "binding" },
        },
    },
    drill: {
        name: "drill",
        itemName: "Drill",
        modularItem: items.drill,
        parts: { bit: { name: "bit" }, motor: { name: "motor" }, grip: { name: "grip" } },
    },
    shield: {
        name: "shield",
        itemName: "Shield",
        modularItem: items.shield,
        parts: {
            face: { name: "face" },
            grip: { name: "grip" },
        },
    },
    sword: {
        name: "sword",
        itemName: "Sword",
        modularItem: items.sword,
        parts: {
            blade: { name: "blade" },
            hilt: { name: "hilt" },
            guard: { name: "guard" },
        },
    },
    slapstick: {
        name: "slapstick",
        itemName: "Slapstick",
        modularItem: items.slapstick,
        parts: {
            stick: { name: "stick" },
            string: { name: "string" },
            ball: { name: "ball" },
        },
    },
    gloves: {
        name: "gloves",
        itemName: "Gloves",
        modularItem: items.gloves,
        parts: { knuckle: { name: "knuckle" }, body: { name: "body" } },
    },
    bow: {
        name: "bow",
        itemName: "Bow",
        modularItem: items.bow,
        parts: {
            stave: { name: "stave" },
            string: { name: "string" },
        },
    },
    spear: {
        name: "spear",
        itemName: "Spear",
        modularItem: items.spear,
        parts: {
            head: { name: "head" },
            shaft: { name: "shaft" },
            binding: { name: "binding" },
        },
    },
    club: {
        name: "club",
        itemName: "Club",
        modularItem: items.club,
        parts: {
            head: { name: "head" },
            handle: { name: "handle" },
        },
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
 * @property {Boolean} giveIntergiry - does the weight of this give or remove integrity
 * @property {Number} weightMult
 * //any of these stats are undifined they don't give that stat
 * @property {Number|undefined} durablityMult
 * @property {Number|undefined} attackMult
 * @property {Number|undefined} defenseMult
 * @property {Number|undefined} accuracy - extra accuracy you get from this module
 * @property {Number|undefined} crit - modifer for attack rolls. Adds/subtracts this amount from the final roll. (allows for higher than 1.3 roll damage modifers)
 * @property {1|2|3|4|5|6|7|8|undefined} range - overides the weapon types with this range
 * @property {effect[]|undefined} effect - effects given with this module
 *
 * @property {attacks.attack} specialAttack - speical attack gotten form useing this module
 * @property {weaponTypes.weaponType|undefined} weaponType - if a item is made with this module it will use this instead of the schematics
 * if you try to craft a item with multiple modules with diffrent weaponTypes it will say they are incompatible
 * ----
 * @typedef {Object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 * @property {itemUsageTypes[]} effectCondition - the condition the effect happens
 * @property {Boolean} onSelf - if the effect is given to your self or a target
 * ----
 * @typedef {Object} allowedMaterial
 * @property {(items.item|materialTypes)[]} material - every material or type that can be used here
 * lets say you can make this with wood or metal you would put both of those material types here
 * @property {Number} amount - the amount of this material required
 * @property {boolean} same - the materials must both be the same
 * @property {Number} statMult - mutipler for this materials stats (this effects every stat)
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
        accuracy: -1,
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
            },
        ],
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
    },
    // binding
    glueBinding: {
        name: "Glue",
        part: [
            schematics.hammer.parts.binding,
            schematics.sword.parts.guard,
            schematics.slapstick.parts.string,
            schematics.spear.parts.binding,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.sticky],
                amount: 1,
            },
        ],
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
    },
    barbedBinding: {
        name: "Barbed",
        part: [
            schematics.hammer.parts.binding,
            schematics.sword.parts.guard,
            schematics.spear.parts.binding,
        ],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.wire],
                amount: 3,
            },
        ],
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
    },
    lanceBit: {
        name: "Armor Lance",
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
                allowedMaterial: [items.knife],
                amount: 2,
            },
        ],
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
    },
    broadBlade: {
        name: "Broad Blade",
        part: [schematics.sword.parts.blade],
        materials: [
            {
                allowedMaterials: [materialTypes.wood, materialTypes.metal, materialTypes.rock],
                amount: 3,
                same: true,
            },
        ],
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
    },
    knifeBlade: {
        name: "Knife Blade",
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
    },
    // slackstick stones
    ball: {
        name: "Ball",
        part: [schematics.slapstick.parts.ball],
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
    },
    spikyBall: {
        name: "Spiky Ball",
        part: [schematics.slapstick.parts.ball],
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
    },
    largeBall: {
        name: "Large Ball",
        part: [schematics.slapstick.parts.ball],
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
    },
    // knuckle plates
    baiscPlate: {
        name: "Baisc Plate",
        part: [schematics.gloves.parts.knuckle],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.gemStone],
                amount: 1,
            },
        ],
    },
    spikedPlate: {
        name: "Spiked Plate",
        part: [schematics.gloves.parts.knuckle],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone, materialTypes.gemStone],
                amount: 1,
            },
        ],
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
    },
    dusters: {
        name: "Dusters",
        part: [schematics.gloves.parts.knuckle],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone],
                amount: 1,
            },
        ],
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
    },
    // bow string
    bowString: {
        name: "Bow String",
        part: [schematics.bow.parts.string],
        materials: [
            {
                allowedMaterials: [materialTypes.wire],
                amount: 1,
            },
        ],
    },
    bowCable: {
        name: "Bow Cable",
        part: [schematics.bow.parts.string],
        materials: [
            {
                allowedMaterials: [materialTypes.metal],
                amount: 1,
            },
        ],
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
    },
};
