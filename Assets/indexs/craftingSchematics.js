/**
 * @typedef {Object} schematics - all the diffrent schematics in xland
 * @property {schematic}
 *
 * @typedef {object} schematic - data about this crafting recipe
 * @property {String} name - name of the schematic
 * @property {String} itemName - the item made by the schematic (the name would be "{socket prefix}{material name}{itemName}")
 * @property {items.item} modularItem - the item that is being crafted
 * @property {part[]} parts - parts of the schematic that modules go in
 * @property {Number|undefined} accuracy - extra accuracy you get from this module
 * @property {Number|undefined} crit - modifer for attack rolls. Adds/subtracts this amount from the final roll. (allows for higher than 1.3 roll damage modifers)
 * @property {1|2|3|4|5|6|7|8|undefined} range - overides the weapon types with this range
 * @property {effect[]|undefined} effect - effects given with this module
 *
 * @property {attacks.attack[]|undefined} specialAttack - speical attack gotten form useing this module
 * @property {weaponTypes.weaponType|undefined} weaponType - if a item is made with this module it will use this instead of the schematics
 * if you try to craft a item with multiple modules with diffrent weaponTypes it will say they are incompatible
 *
 * ----
 * @typedef {Object} part - parts of the schematic that modules go in
 * @property {String} name - name of the part
 * @property {allowedMaterial[]} materials - the sets materials needed to make this
 * @property {Number} weightMax - max weight for this part
 * //any of these stats are undifined they don't give that stat
 * @property {Number|undefined} durablityMult
 * @property {Number|undefined} attackMult
 * @property {Number|undefined} defenseMult
 *
 * ----
 * @typedef {Object} allowedMaterial
 * @property {(items.item|materialTypes)[]} material - every material or type that can be used here
 * lets say you can make this with wood or metal you would put both of those material types here
 * @property {Number} amount - the amount of this material required
 * @property {boolean} same - the materials must both be the same
 *
 * ----
 * @typedef {Object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 * @property {itemUsageTypes[]} effectCondition - the condition the effect happens
 * @property {Boolean} onSelf - if the effect is given to your self or a target
 */
const schematics = {
    // hammers ----------------------------------------------
    jagidHammer: {
        name: "jagidHammer",
        itemName: "Jagid Hammer",
        modularItem: items.hammer,
        parts: {
            rightHead: { name: "Head" },
            handle: { name: "handle" },
            binding: { name: "binding" },
        },
    },
    carpenterHammer: {
        name: "carpenterHammer",
        itemName: "Carpenter Hammer",
        modularItem: items.hammer,
        parts: {
            leftHead: { name: "claw" },
            rightHead: { name: "rightHead" },
            handle: { name: "handle" },
            binding: { name: "binding" },
        },
    },
    doubleHammer: {
        name: "doubleHammer",
        itemName: "Double Hammer",
        modularItem: items.hammer,
        parts: {
            leftHead: { name: "leftHead" },
            rightHead: { name: "rightHead" },
            handle: { name: "handle" },
            binding: { name: "binding" },
        },
    },
    // axes ----------------------------------------------
    axe: {
        name: "axe",
        itemName: "Axe",
        modularItem: items.axe,
        parts: {
            rightHead: { name: "Head" },
            handle: { name: "handle" },
            binding: { name: "binding" },
        },
    },
    doubleAxe: {
        name: "doubleAxe",
        itemName: "Double Axe",
        modularItem: items.axe,
        parts: {
            leftHead: { name: "leftHead" },
            rightHead: { name: "rightHead" },
            handle: { name: "handle" },
            binding: { name: "binding" },
        },
    },
    // pickaxe ----------------------------------------------
    pickaxe: {
        name: "pickaxe",
        itemName: "Pickaxe",
        modularItem: items.pickaxe,
        parts: {
            leftHead: { name: "head" },
            handle: { name: "handle" },
            binding: { name: "binding" },
        },
    },
    // clubs ----------------------------------------------
    club: {
        name: "club",
        itemName: "Club",
        modularItem: items.club,
        parts: {
            head: { name: "head" },
            handle: { name: "handle" },
        },
    },
    spikedClub: {
        name: "spikedClub",
        itemName: "spiked Club",
        modularItem: items.club,
        parts: {
            head: { name: "head" },
            handle: { name: "handle" },
            spikes: { name: "spikes" },
        },
    },
    //drills ----------------------------------------------
    drill: {
        name: "drill",
        itemName: "Drill",
        modularItem: items.drill,
        parts: { bit: { name: "bit" }, motor: { name: "motor" }, grip: { name: "grip" } },
    },
    artDrill: {
        name: "artDrill",
        itemName: "Precision Drill",
        modularItem: items.drill,
        parts: { bit: { name: "bit" }, motor: { name: "motor" } },
    },
    // shield ----------------------------------------------
    shield: {
        name: "shield",
        itemName: "Shield",
        modularItem: items.shield,
        parts: {
            face: { name: "face" },
            grip: { name: "grip" },
        },
    },
    spikedShield: {
        name: "spikedShield",
        itemName: "Spike Shield",
        modularItem: items.shield,
        parts: {
            face: { name: "face" },
            grip: { name: "grip" },
            spikes: { name: "spikes" },
        },
    },
    buckler: {
        name: "buckler",
        itemName: "Buckler",
        modularItem: items.shield,
        parts: {
            face: { name: "face" },
            grip: { name: "grip" },
        },
    },
    // swords ----------------------------------------------
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
    shortBlade: {
        name: "shortBlade",
        itemName: "Short Blade",
        modularItem: items.sword,
        parts: {
            blade: { name: "blade" },
            hilt: { name: "hilt" },
            binding: { name: "binding" },
        },
    },
    // slapsticks ----------------------------------------------
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
    doubleSlapstick: {
        name: "doubleSlapstick",
        itemName: "Double Slapstick",
        modularItem: items.slapstick,
        parts: {
            stick: { name: "stick" },
            string: { name: "string" },
            ball: { name: "ball" },
        },
    },
    tripleSlapstick: {
        name: "tripleSlapstick",
        itemName: "Triple Slapstick",
        modularItem: items.slapstick,
        parts: {
            stick: { name: "stick" },
            string: { name: "string" },
            ball: { name: "ball" },
        },
    },
    // bows ----------------------------------------------
    bow: {
        name: "bow",
        itemName: "Bow",
        modularItem: items.bow,
        parts: {
            stave: { name: "stave" },
            string: { name: "string" },
        },
    },
    recurveBow: {
        name: "recurveBow",
        itemName: "Recurve Bow",
        modularItem: items.bow,
        parts: {
            stave: { name: "stave" },
            string: { name: "string" },
        },
    },
    compoundBow: {
        name: "compoundBow",
        itemName: "Compound Bow",
        modularItem: items.bow,
        parts: {
            stave: { name: "stave" },
            string: { name: "string" },
            gears: { name: "gears" },
        },
    },
    crossBow: {
        name: "Cross Bow",
        itemName: "Cross Bow",
        modularItem: items.bow,
        parts: {
            stave: { name: "stave" },
            string: { name: "string" },
            rest: { name: "rest" },
        },
    },
    // spears ----------------------------------------------
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
    pike: {
        name: "pike",
        itemName: "pike",
        modularItem: items.spear,
        parts: {
            head: { name: "head" },
            shaft: { name: "shaft" },
            binding: { name: "binding" },
        },
    },
    scythe: {
        name: "scythe",
        itemName: "scythe",
        modularItem: items.spear,
        parts: {
            head: { name: "head" },
            shaft: { name: "shaft" },
            binding: { name: "binding" },
        },
    },

    // armor ----------------------------------------------
    gloves: {
        name: "gloves",
        itemName: "Gloves",
        modularItem: items.gloves,
        parts: { knuckle: { name: "knuckle" }, body: { name: "body" } },
    },
    climbingGloves: {
        name: "climbing Gloves",
        itemName: "Climbing Gloves",
        modularItem: items.gloves,
        parts: { body: { name: "body" }, sticky: { name: "sticky" } },
    },
};
