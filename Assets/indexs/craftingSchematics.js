/**
 * @typedef {Object} schematics - all the diffrent schematics in xland
 * @property {schematic}
 *
 * @typedef {object} schematic - data about this crafting recipe
 * @property {String} schematicName - name of the schematic
 * @property {String} itemName - the item made by the schematic (the name would be "{socket prefix}{material name}{itemName}")
 *
 * @property {weaponTypes.weaponType} preferedTool - the tool that should be used to make this
 * @property {weaponTypes.weaponType[]} allowedTools - tools that can be used but are't but have disavantage when crafting
 * @property {craftingStations.station} preferedStation
 * @property {Number} craftingLevel - the level you need in crafting to craft this
 *
 * ----
 */
const schematics = {};

/**
 * @typedef {Object} modules - all the crafting modules
 * @property {module}
 *
 * @typedef {Object} module - a specific part you can put materials in
 * @property {string} moduleName - the name of this module
 * //any of these stats are undifined they are 0, these should not go higher than 1 in most cases
 * @property {Number} heldEffects - how many effects can this module hold
 * @property {(items.item|materialTypes|"any")[]} allowedMaterials - array of the matrials/types that can be put in this module.
 *
 * @property {Number} weightMult
 * @property {Number|undefined} storageMult
 * @property {Number|undefined} durablityMult
 * @property {Number|undefined} attackMult
 * @property {Number|undefined} defenseMult
 * @property {Number|undefined} accuracyMult
 * @property {Number|undefined} pickaxePowerMult
 *
 * @property {weaponTypes.weaponType|undefined} preferedTool - the tool that should be used to make this
 * @property {weaponTypes.weaponType[]|undefined} allowedTools - tools that can be used but are't but have disavantage when crafting
 * @property {craftingStations.station|undefined} preferedStation
 * @property {Number|undefined} craftingLevel - the level you need in crafting to craft this
 */
const modules = {};
