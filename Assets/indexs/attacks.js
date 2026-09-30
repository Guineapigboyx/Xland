/**
 * Data for all of the attacks in xland
 *
 * @typedef {object} attacks - all the xland attacks
 * @property {attack}
 *
 * @typedef {Object} attack - the id of the attack like "verticalSlash"
 * @property {weaponTypes.weaponType|undefined} attackFor - the weapon type this attack is for, if undefined its not connected to a weapon
 * @property {Number} damage - amount of damage it deals (if damageMult is present this is a bounus)
 * @property {Number} damageMult - multipler of the base damage that is added to the attack
 * @property {Number} armorDamage - how much defense is ignored when hitting with this attack
 * @property {Number} armorDamageMult - presentage of the armor ignored by this attack
 *
 * @property {Number} hits - amount of hit this attack does
 * @property {Boolean} endAfterMiss - if you miss stop all subsqent hits from this move
 *
 * @property {Number} speed - how fast the attack is (default is 5)
 * @property {Number} accuracy - how much accuracy is removed or added
 * @property {Number} citChance - how much crit chance is removed or added
 *
 * @property {Number} epCost - amount of enduance it costs to use the attack
 * @property {Number} selfDamage - how much damage is delt to the user
 * @property {Number} durablity - how much durablity is lost when useing the move
 *
 * @property {Function} requirements - function to check if the user meets the special requirements to use this move
 *
 * @property {damagetype} damagetype - array of every element this attack has
 * @property {statusEffect} effectGiven - array of every satus effect that is given by this weapon
 * @property {Number} effectChance - chance of the effect happening
 */
const attacks = {};