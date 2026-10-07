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
        parts: { bit: { name: "bit" }, motor: { name: "motor" }, handle: { name: "handle" } },
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
            handle: { name: "hilt" },
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
            rock: { name: "rock" },
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
                allowedMaterial: [materialTypes.wire, materialTypes.plants, materialTypes.skin],
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
                allowedMaterials: [materialTypes.skin, materialTypes.plants, items.xtramite],
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
                allowedMaterials: [materialTypes.wire, materialTypes.plants, items.xtramite],
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
                allowedMaterials: [materialTypes.metal, materialTypes.bone],
                amount: 3,
            },
        ],
    },
    barbedString: {
        name: "Barbed",
        part: [schematics.slapstick.parts.string],
        materials: [
            {
                allowedMaterials: [materialTypes.metal, materialTypes.bone],
                amount: 2,
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
    basicGrip: { name: "" },
    pistolGrip: { name: "" },
    spadeGrip: { name: "" },
    doubleSpadeGrid: { name: "" },
    ropeGrip: { name: "" },
    strightGrip: { name: "" },
    // shield
    barGrip: { name: "" },
    holeGrip: { name: "" },
    doubleBarGrip: { name: "" },
    straps: { name: "" },
    rope: { name: "" },
    guigeStrap: { name: "" },
    // shield face
    flatFace: { name: "" },
    curvedFace: { name: "" },
    spikedFace: { name: "" },
    armoredFace: { name: "" },
    barbedFace: { name: "" },
    bladeFace: { name: "" },
    wideRimdFace: { name: "" },
    // sword blades
    basicBlade: { name: "" },
    broadBlade: { name: "" },
    katanaBlade: { name: "" },
    rapierBlade: { name: "" },
    shortBlade: { name: "" },
    knifeBlade: { name: "" },
    macheteBlade: { name: "" },
    // guards
    basicGuard: { name: "" },
    shieldGuard: { name: "" },
    wideGuard: { name: "" },
    sweptGuard: { name: "" },
    weightedGuard: { name: "" },
    // slackstick stones
    ball: { name: "" },
    spiky: { name: "" },
    largeBall: { name: "" },
    // gloves
    basicPlate: { name: "" },
    chainGloves: { name: "" },
    gauntlets: { name: "" },
    insulatedGloves: { name: "" },
    climbingGloves: { name: "" },
    // knuckle plates
    baiscPlate: { name: "" },
    spikedPlate: { name: "" },
    gloveReinforcement: { name: "" },
    dusters: { name: "" },
    // bow stave
    basicStave: { name: "" },
    longStave: { name: "" },
    recursiveStave: { name: "" },
    warStave: { name: "" },
    compoundStave: { name: "" },
    stablizerStave: { name: "" },
    sightedStave: { name: "" },
    // bow string
    bowString: { name: "" },
    bowCable: { name: "" },
    // spear head
    basicHead: { name: "" },
    glaiveHead: { name: "" },
    halberdHead: { name: "" },
    lanceHead: { name: "" },
    naginataHead: { name: "" },
    pikeHead: { name: "" },
    tridentHead: { name: "" },
    // club head
    batHead: { name: "" },
    armoredHead: { name: "" },
    spikedHead: { name: "" },
    barbedHead: { name: "" },
    wingBatHead: { name: "" },
};
