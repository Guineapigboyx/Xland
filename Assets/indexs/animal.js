/**
 * Beasts/Animals formating
 * @typedef {Object} animals - all of the xland animals
 * @typedef {animal}
 *
 * @typedef {Object} animal
 * @property {String} species - name of what it is like "dog"
 * @property {Number} level - what level is this NPC, this also determnites various other things
 * @property {String} description - what is this (this does not change battles)
 *
 *
 * @property {itemDrop[]} itemDrops - list of items that can be droped in this format [itemName, dropChance, min, max]
 *
 * @typedef {Object} behavior - How this beast acts or would start combat
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onSight - how it acts when sees a someone
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onAnger - how it acts when angered by someone (like getting a bad roll when tameing)
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onAttack - how it acts when it is attacked by someone
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onLowHealth - how it acts when is broght below 1/6 hp
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.chased - how it acts when it is successfully being chased
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.teamateKilled - how it acts when someone on its team is killed
 *
 * @property {attacks.attack[]} moveList - list of all moves this beast can preform
 * @property {equipSlots.slot[]} equipSlots - slots equipment can in
 * @property {stat[]} - normal base stat ranges
 *
 * ----
 * @typedef {Object} stat - base stat ranges
 * @property {statTypes.stat} stat - the stat that is effected
 * @property {[Number, Number]} range - stat range [min, max], if this will be 0 don't include the stat
 * @property {Number} alpaMult - the mutiplyer if a alpha
 *
 * ----
 * @typedef {Object} tame - can it be tamed
 * @property {Array} tame.items - which possible items does it want (must be aligned with tame.chance)
 * @property {Array} tame.chance - the chance that each item has to tame (must be aligned with tame.items)
 * @property {Boolean} tame.dangerSense - notice that you are trying to tame it with a dangerous item
 *
 * ---
 * @typedef {Object} itemDrops
 * @property {String} item - the item that is droped, it should be a items.item key
 * @property {Number} dropChance - the change of it being droped
 * @property {[Number, Number]} amount - how many of the item is droped [min, max]
 */
const animals = {};
