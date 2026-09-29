/**
 * @typedef {object} items - All of the xland items
 * @property {item}
 *
 * @typedef {object} item - data about this item
 * @property {String} name - name of the item
 * @property {Number|undefined} maxUses - how many times can it be used before it's gone (just put undifined if non consumeable)
 * @property {raritys.rarity|undefined} rarity - Hardcoded rarity of a item, if undifined it is determined from the materials
 * @property {materialData|undefined} materialData - Data about it as a crafting material
 * @property {foodData|undefined} foodData - data about this meal
 * @property {weaponData} weaponData - various properties about this item
 * @property {Number} weight
 * @property {Number} storageCapacity
 * @property {Array|undefined} materialList - list of the matrials that make up this item
 *
 * @property {equipSlots.slot|undefined} equipSlot - can items with this type be equiped
 * @property {itemUseageTypes|undefined} itemUseageType - the way(s) this item can be used (not includeing attacks)
 *
 * ----
 * @typedef {object} materialData - data about a material if
 * //any of these stats are undifined they are 0
 * @property {Number|undefined} weight
 * @property {Number|undefined} storage
 * @property {Number|undefined} durablity
 * @property {Number|undefined} attack
 * @property {Number|undefined} defense
 * @property {Number|undefined} accuracy
 * @property {Number|undefined} pickaxePower
 *
 * @property {damagetype[]} damagetypes
 * @property {effectGiven[]|undefined} effects - can be multiple
 *
 * @typedef {object} effectGiven
 * @property {statusEffects.effect} effectGiven
 * @property {itemUsageTypes[]} effectCondition - the condition the effect happens
 * @property {Number} effectChance - chance of getting the effect
 * @property {0|1|2|3|4|5|6} effectPryority - should this effect be overwritten by other matrials // only use 6 for bad effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 *
 * ----
 * @typedef {object} weaponData - properties about this item in combat
 * @property {weaponTypes.weaponType} weaponType - what weapon type is this,
 * @property {Number} attack - attack stat
 * @property {Number|undefined} accuracy
 * @property {Number|undefined} pickaxePower
 * @property {Number|undefined} defense
 * @property {"stab"|"slash"|"slam"|"boom"|"swoosh"|"mechnical"} sound - sound category this item uses
 *
 * ----
 * @typedef {Object} foodData
 * @property {foodType} foodType - the type of food it is
 * @property {foodPrefixes.prefix} - prefixes that this item counts to (like spicy food would count towards the spicy prefix)
 * @property {Number|undefined} healAmount - the amount of hp you gain or lose from eating this
 * @property {Number|undefined} epAmount - the amount of ep you gain or lose from eating this
 * @property {statusEffects.effect} effectGiven
 * @property {Number} effectChance - chance of getting the effect
 * @property {0|1|2|3|4|5|6} effectPryority - should this effect be overwritten by other matrials // only use 6 for bad effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 */
const items = {
    wood: { name: "Wood", rarity: raritys.basic },
    stone: { name: "Stone", rarity: raritys.basic },
    bone: { name: "Bone", rarity: raritys.common },
    tin: { name: "Tin", rarity: raritys.common },
    iron: { name: "Iron", rarity: raritys.common },
    aluminum: { name: "Aluminum", rarity: raritys.common },
    copper: { name: "Copper", rarity: raritys.common },
    zinc: { name: "Zinc", rarity: raritys.common },
    shinyStone: { name: "Shiny Stone", rarity: raritys.common },
    carbon: { name: "Carbon", rarity: raritys.common },
    carbonBone: { name: "Carbon Bone", rarity: raritys.uncommon },
    silver: { name: "Silver", rarity: raritys.uncommon },
    brass: { name: "Brass", rarity: raritys.uncommon },
    uramite: { name: "Uramite", rarity: raritys.uncommon },
    gold: { name: "Gold", rarity: raritys.uncommon },
    steel: { name: "Steel", rarity: raritys.uncommon },
    lithium: { name: "Lithium", rarity: raritys.rare },
    carbonSteel: { name: "Carbon steel", rarity: raritys.rare },
    platium: { name: "Platium", rarity: raritys.rare },
    magnesium: { name: "Magnesium", rarity: raritys.rare },
    lead: { name: "Lead", rarity: raritys.rare },
    mithril: { name: "Mithril", rarity: raritys.rare },
    crystal: { name: "Crystal", rarity: raritys.master },
    flameright: { name: "Flameright", rarity: raritys.master },
    adamantite: { name: "Adamantite", rarity: raritys.master },
    stainlessSteel: { name: "Stainless Steel", rarity: raritys.master },
    uranium: { name: "Uranium", rarity: raritys.master },
    plutonium: { name: "Plutonium", rarity: raritys.legendary },
    xtramite: { name: "Xtramite", rarity: raritys.legendary },
    titanium: { name: "Titanium", rarity: raritys.legendary },
    titaniumGold: { name: "Titanium gold", rarity: raritys.legendary },
    masterOre: { name: "Master ore", rarity: raritys.mythic },
    pale: { name: "Pale", rarity: raritys.mythic },
    // gemstones
    raindite: { name: "Raindite", rarity: raritys.ultraRank },
    diamond: { name: "Diamond", rarity: raritys.master },
    ruby: { name: "Ruby", rarity: raritys.rare },
    sapphire: { name: "Sapphire", rarity: raritys.uncommon },
    amethyst: { name: "Amethyst", rarity: raritys.common },
    emerald: { name: "Emerald", rarity: raritys.rare },
    negimite: { name: "Negimite", rarity: raritys.legendary },
    amber: { name: "Amber", rarity: raritys.rare },
    topaz: { name: "Topaz", rarity: raritys.legendary },
    geode: { name: "Geode", rarity: raritys.uncommon },
    grass: { name: "Grass", rarity: raritys.basic },
    treeBranch: { name: "Tree Branch", rarity: raritys.basic },
    leaf: { name: "Leaf", rarity: raritys.basic },
    leather: { name: "Leather", rarity: raritys.common },
    hide: { name: "Hide", rarity: raritys.uncommon },
    mud: { name: "Mud", rarity: raritys.basic },
    glue: { name: "Glue", rarity: raritys.basic },
    wire: { name: "Wire", rarity: raritys.basic },
    string: { name: "String", rarity: raritys.basic },
};
