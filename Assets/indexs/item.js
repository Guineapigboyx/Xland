/**
 * @typedef {object} items - All of the xland items
 * @property {item}
 *
 * @typedef {object} item - data about this item
 * @property {String} name - name of the item
 * @property {Number} maxUses - how many times can it be used before it's gone (just put infinity if non consumeable)
 * @property {rarity|undefined} rarity - Hardcoded rarity of a item, if undifined it is determined from the materials
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
 * @property {statusEffects.statusEffect} effectGiven
 * @property {itemUsageTypes[]} effectCondition - the condition the effect happens
 * @property {Number} effectChance - chance of getting the effect
 * @property {0|1|2|3|4|5|6} effectPryority - should this effect be overwritten by other matrials // only use 6 for bad effect
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
 * @property {statusEffects.statusEffect} effectGiven
 * @property {Number} effectChance - chance of getting the effect
 * @property {0|1|2|3|4|5|6} effectPryority - should this effect be overwritten by other matrials // only use 6 for bad effect
 */
const items = {};
