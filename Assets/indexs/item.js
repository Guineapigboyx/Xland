/**
 * All of the xland items
 *
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
 * @typedef {object} weaponData
 * @property {weaponTypes.weaponType|undefined} weaponType - what weapon type is this,
 * @property {Number} attack - attack stat
 * @property {Number|undefined} accuracy
 * @property {Number|undefined} pickaxePower
 * @property {Number|undefined} defense
 *
 */
