/**
 * @typedef {Object} schematics - all the diffrent schematics in xland
 * @property {schematic}
 *
 * @typedef {object} schematic - data about this crafting recipe
 * @property {String} schematicName - name of the schematic
 * @property {String} itemName - the item made by the schematic (the name would be "{socket prefix}{material name}{itemName}")
 *
 * @property {module[]} module - a specific part you can put materials in
 * @property {weaponTypes.weaponType} preferedTool - the tool that should be used to make this
 * @property {weaponTypes.weaponType[]} allowedTools - tools that can be used but are't but have disavantage when crafting
 * @property {craftingStations.station} preferedStation
 *
 * @property {Number} craftingLevel - the level you need in crafting to craft this
 *
 * ----
 * @typedef {Object} module - a specific part you can put materials in
 * @property {string} moduleName - the name of this module
 * @property {Number} gridXPos - the grid-column of the box you can click on
 * @property {Number} gridYPos - the grid-row of the box you can click on
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
 */
