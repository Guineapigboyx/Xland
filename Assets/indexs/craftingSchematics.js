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
            rim: { name: "rim" },
            grip: { name: "grip" },
            boss: { name: "boss" },
        },
    },
    sword: {
        name: "sword",
        itemName: "Sword",
        modularItem: items.sword,
        parts: {
            blade: { name: "blade" },
            handle: { name: "handle" },
            guard: { name: "guard" },
            pommel: { name: "pommel" },
        },
    },
    slapstick: {
        name: "slapstick",
        itemName: "Slapstick",
        modularItem: items.slapstick,
        parts: {
            stick: { name: "stick" },
            rock1: { name: "rock1" },
            rock2: { name: "rock2" },
            rock3: { name: "rock3" },
            rock4: { name: "rock4" },
            rock5: { name: "rock5" },
        },
    },
    gloves: {
        name: "gloves",
        itemName: "Gloves",
        modularItem: items.gloves,
        parts: { knuckle: { name: "knuckle" }, body: { name: "body" } },
    },
    gun: {
        name: "gun",
        itemName: "Gun",
        modularItem: items.gun,
        parts: {
            barrel: { name: "barrel" },
            grip: { name: "grip" },
            accessory: { name: "accessory" },
            magazine: { name: "magazine" },
        },
    },
    bow: {
        name: "bow",
        itemName: "Bow",
        modularItem: items.bow,
        parts: {
            stave: { name: "stave" },
            string: { name: "string" },
            accessory: { name: "accessory" },
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
            pommel: { name: "pommel" },
        },
    },
    club: {
        name: "club",
        itemName: "Club",
        modularItem: items.club,
        parts: {
            head: { name: "head" },
            handle: { name: "handle" },
            covering: { name: "covering" },
        },
    },
    whip: {
        name: "whip",
        itemName: "Whip",
        modularItem: items.whip,
        parts: { body: { name: "body" }, handle: { name: "handle" }, tip: { name: "tip" } },
    },
    //  boatWeapon: boatWeapon:{ name: "boatWeapon", itemName: "Naval Weapon" },
};

/**
 * @typedef {Object} modules - all the crafting modules, think parts of the weapon/item
 * @property {module}
 *
 * @typedef {Object} module - a specific part you can put materials in
 * @property {string} name - the name of this module
 * @property {schematics.schematic.part} part - the schematic part this module is for
 * @property {(items.item|materialTypes|"any")[]} allowedMaterials - array of the matrials/types that can be put in this module.
 *
 * if undefined these will determin it based off of materials used
 * @property {weaponTypes.weaponType|undefined} preferedTool - the tool that should be used to make this
 * @property {weaponTypes.weaponType[]|undefined} allowedTools - tools that can be used but are't but have disavantage when crafting
 * @property {craftingStations.station|undefined} preferedStation
 * @property {Number|undefined} craftingLevel - the level you need in crafting to craft this
 *
 * @property {Number} weightMult
 * //any of these stats are undifined they are 1, these should not go higher than 1 in most cases
 * @property {Number|undefined} durablityMult
 * @property {Number|undefined} attackMult
 * @property {Number|undefined} defenseMult
 * @property {Number|undefined} accuracy - extra accuracy you get from this module
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
 */
const modules = {
    hammer: {},
    drill: {},
    shield: {},
    sword: {},
    slapstick: {},
    gloves: {},
    gun: {},
    bow: {},
    spear: {},
    club: {},
    whip: {},
};
