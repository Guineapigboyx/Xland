/**
 * @typedef {object} items - All of the xland items
 * @property {item}
 *
 * @typedef {object} item - data about this item
 * @property {String} name - name of the item
 * @property {Number} weight
 * @property {Number|undefined} maxUses - how many times can it be used before it's gone (just put undifined if non consumeable)
 * @property {raritys.rarity|undefined} rarity - Hardcoded rarity of a item, if undifined it is determined from the materials
 * @property {materialData|undefined} materialData - Data about it as a crafting material
 * @property {foodData|undefined} foodData - data about this meal
 * @property {weaponData} weaponData - various properties about this item
 * @property {Number|undefined} storageCapacity
 * @property {Array|undefined} materialList - list of the matrials that make up this item
 *
 * @property {equipSlots.slot|undefined} equipSlot - can items with this type be equiped
 * @property {itemUseageTypes|undefined} itemUsageType - the way(s) this item can be used (not includeing attacks)
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
 * @property {damagetypes[]} damagetypes - amplify the power of this damage type when crafted with something that gives the same
 * @property {effects[]} effects
 *
 * ----
 * @typedef {object} weaponData - properties about this item in combat
 * @property {weaponTypes.weaponType} weaponType - what weapon type is this,
 * @property {damageTypes.damagetype} damagetype - the damagetype this item gives
 * @property {Number|undefined} attack - attack stat, if there is non then it is weight based
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
 * @property {effects[]} effects - effects gotten from eating
 *
 * ----
 * @typedef {object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 * @property {itemUsageTypes[]} effectCondition - the condition the effect happens (does NOT apply for foodData)
 * @property {Boolean} onSelf - if the effect is given to your self or a target (does NOT apply for foodData)
 */
let items;

/**
 * @typedef {object} damageTypes - elements like fire, lighting, ice
 * @property {damagetype}
 *
 * @typedef {object} damagetype - the type of damage and the properties of it
 * @property {string} name - name of the damage type
 * @property {string} CssColor - the color of this damage type (IT MUST BE A CSS VARIABLE)
 * @property {Number} damage - bonus damage added ontop of any damage source that uses this type
 * @property {Number} damageMult - mutiplier of the base damage
 * @property {effect[]} effects - the effects given
 *
 * @typedef {object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 */
let damageTypes;

/**
 * @typedef {object} weaponTypes - All the diffrent weapon/held item types
 * @property {weaponType}
 *
 * @typedef {Object} weaponType - this weapon types propertys
 * @property {string} name - name of the weapon type
 * @property {Number} weightThreshold - If the weight is above this amount it becomes 2 handed. Put 0 for always 2 handed
 * @property {statTypes.statType} attackBonus - the stat to calculate the modifer for actions with this weapon
 * @property {"stab"|"slash"|"slam"|"boom"|"swoosh"|"mechnical"} sound - fallback for if a move does not spesfiy
 * @property {damageTypes.damagetype} damagetype - fallback damage type if a item does not have one
 *
 * @property {undefined|1|2|3} rockBreaker - gets a bonus if used for destorying rocky objects
 * @property {undefined|1|2|3} metalBreaker - gets a bonus if used for destorying metal objects
 * @property {undefined|1|2|3} woodBreaker - gets a bonus if used for cutting wood
 * @property {undefined|1|2|3} fabricBreaker - gets a bonus for cutting string/fabric
 *
 * @property {1|2|3|undefined} effectiveBlock - gets a bonus when blocking with
 * @property {undefined|Boolean} ranged - is this a ranged weapon
 * @property {undefined|Boolean} mountable - gets large debuffs if not mounted
 */
let weaponTypes;

/**
 * @typedef {Object} statusEffects - every status effect in xland
 * @property {effect}
 *
 * @typedef {Object} effect -
 * @property {string} name - name of the effect
 * @property {string} description - decription of the effect
 * // Combat
 * @property {boolean|undefined} fallbackOnGainCombat - if true onGainCombat fallbacks to onActivate, normally false
 * @property {boolean|undefined} fallbackOnLossCombat - if true onLossCombat fallbacks to onActivate, normally false
 * @property {Function|undefined} onGainCombat - function that runs when the effect is gained
 * @property {Function|undefined} onActivate - function that runs when the effect is lost
 * @property {Function|undefined} OnLossCombat - function that runs when the effect is lost
 * // Out of combat
 * @property {boolean|undefined} fallbackOnGainOut - if true onGainOut fallbacks to onHour, normally false
 * @property {boolean|undefined} fallbackOnLossOut - if true onLossOut fallbacks to onHour, normally false
 * @property {Function|undefined} onGainOut - function that runs when the effect is gained, if undifined do onHour
 * @property {Function|undefined} onHour - function that runs every hour, if false have no combat effects, if false have no out of combat effects
 * @property {Function|undefined} OnLossOut - function that runs when the effect is lost, if undifined do onHour
 *
 * @property {number|undefined} activateionTurn - How many turns it takes for the onActivate happens. If undefined it sets this to 1
 * @property {number|undefined} activateionHour - How many hours it takes for the onHour happens. If undefined it sets this to 1
 *
 * @property {statChange[]|undefined} statchanges - Array of which stat and how much is changed in each stat
 *
 * @typedef {object} statChange - how much is changed in this stat
 * @property {string} statName - the stats name (statType.name)
 * @property {Number} change - the amount it changes
 *
 */
let statusEffects;

/**
 * @typedef {Object} basePepole - the persons stat
 * @property {person}
 *
 * @typedef {Object} person - the persons stat
 * @property {Number} hp - how much HP they have
 * @property {Number} strength - how much HP they have
 * @property {Number} defense - how much HP they have
 * @property {Number} speed - how much HP they have
 * @property {Number} endurance - how much HP they have
 * @property {Number} intelligence - how much HP they have
 * @property {Object} ability - how much HP they have
 * @property {Object} ability2 - how much HP they have
 * @property {attack} speicalMove - how much HP they have
 */
let basePepole;

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
let attacks;

/**
 * NPC formating
 * @typedef {object} - all of the x land NPC's
 * @property {npc}
 *
 * @typedef {object} npc
 * @property {String[]} name - [first,last(optinal)]
 * @property {String} home - Where they live or if none put null and it will put them as traveling
 * @property {Number} level - what level is this NPC, this also determnites various other things
 *
 * @property {String} profession - what they do (it does not have to be a job)
 * @property {String} background - talk about what they do and why they do it. You can be quite discriptive here since its bassicly who the NPC character is
 * @property {String[]} skills - Skills they are good at
 * @property {String[]} goodPreferences - who or what do they like
 * @property {String[]} badPreferences -  who or what do they not like
 * @property {Number} goodApproval - how much appoval is gained from being in goodPreferences
 * @property {Number} badApproval - how much appoval is lost from being in badPreferences
 * @property {Number} fightThreshold - The approval level someone must be to start a auto fight (it can be always if set to 100%)
 *
 * Trading
 * @property {Number} tradeThreshold - how high approval must be to trade
 * @property {Number} restockTime -  How many ingame hours it takes for them to restock
 *
 * @typedef  {Object} inventory - Which items they have in their inventory and are willing to sell
 * @property {String} id - Unique identifier for the item (e.g. “sword_01”)
 * @property {Boolean} canSell - do they want to sell this item
 * @property {Number} price - Price in currency
 * @property {Number} quantity - defaulting to 1 if omitted
 * @property {Boolean} canRestock - do the items restock in the shop
 *
 * Equipment
 * @typedef {Object} equiped - what could appear in each equipment slot
 * @property {Array} head - head
 * @property {Array} necklace - necklace
 * @property {Array} body - body
 * @property {Array} pants - pants
 * @property {Array} hand - hands
 * @property {Array} feet - feet
 * @property {Array} belt - belt
 * @property {Array} mainHand - item in main hand
 * @property {Array} offHand - item in off hand
 *
 * @typedef {Object} stats - base stat ranges
 * @property {[Number, Number]} hp - health range [min, max]
 * @property {[Number, Number]} strength - Strength range [min, max]
 * @property {[Number, Number]} defense - Defense range [min, max]
 * @property {[Number, Number]} speed - Speed range [min, max]
 * @property {[Number, Number]} endurance - Endurance range [min, max]
 * @property {[Number, Number]} intelligence - Intelligence range [min, max]
 * @property {[Number, Number]} stealth - Stealth range [min, max]
 * @property {[Number, Number]} crafting - Crafting range [min, max]
 * @property {[Number, Number]} courage - courage range [min, max]
 *
 * @property {("spear"|"lightSword"|"heavySword"|"lightSpear"|"heavySpear"|"lightHammer"|"heavyHammer"|"lightAxe"|"heavyAxe"|"flail"|"bow"|"unarmed")[]} proficiency
 * - Weapon types the NPC is proficient with
 */
let npcs;

/**
 * Animals formating
 * @typedef {object} animals - all of the xland animals
 * @property {animal}
 *
 * @typedef {object} animal
 * @property {String} species - name of what it is like "dog"
 * @property {Number} level - what level is this NPC, this also determnites various other things
 * @property {String} description - what is this (this does not change battles)
 *
 * @typedef {Object} tame - can it be tamed
 * @property {Array} tame.items - which possible items does it want (must be aligned with tame.chance)
 * @property {Array} tame.chance - the chance that each item has to tame (must be aligned with tame.items)
 * @property {Boolean} tame.dangerSense - notice that you are trying to tame it with a dangerous item
 *
 * @property {Object} itemDrops - list of items that can be droped in this format [itemName, dropChance, min, max]
 *
 * @typedef {Object} behavior - How this beast acts or would start combat
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onSight - how it acts when sees a someone
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onAnger - how it acts when angered by someone (like getting a bad roll when tameing)
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onAttack - how it acts when it is attacked by someone
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.onLowHealth - how it acts when is broght below 1/6 hp
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.chased - how it acts when it is successfully being chased
 * @property {"flee"|"ignore"|"attack"|"stalk"|"warn"|"follow"} behavior.teamateKilled - how it acts when someone on its team is killed
 * @property {Boolean} behavior.dangerousFlee - if it is willing to put its self in danger to get away from you
 *
 * @property {Array} moveList - list of all moves this beast can preform
 *
 * @typedef {Object} equiped - If a equipment can appear in a slot
 * @property {Boolean} equiped.head - can a item appear in the head slot
 * @property {Boolean} equiped.necklace - can a item appear in the necklace slot
 * @property {Boolean} equiped.pants - can a item appear in the pants slot
 * @property {Boolean} equiped.body - can a item appear in the body slot
 * @property {Boolean} equiped.hand - can a item appear in the hands slot
 * @property {Boolean} equiped.feet - can a item appear in the feet slot
 * @property {Boolean} equiped.belt - can a item appear in the belt slot
 * @property {Boolean} equiped.mainHand - can a item appear in the item in main hand slot
 * @property {Boolean} equiped.offHand - can a item appear in the item in off hand slot
 *
 * @typedef {Object} stats - normal base stat ranges
 * @property {[Number, Number]} stats.hp - health range [min, max]
 * @property {[Number, Number]} stats.strength - Strength range [min, max]
 * @property {[Number, Number]} stats.defense - Defense range [min, max]
 * @property {[Number, Number]} stats.speed - Speed range [min, max]
 * @property {[Number, Number]} stats.endurance - Endurance range [min, max]
 * @property {[Number, Number]} stats.intelligence - Intelligence range [min, max]
 * @property {[Number, Number]} stats.stealth - Stealth range [min, max]
 * @property {[Number, Number]} stats.crafting - Crafting range [min, max]
 *
 * @typedef {Object} alphaStats - If alpha how much should the base stats be mutiplied
 * @property {Number} alphaStats.hp - health mutipler
 * @property {Number} alphaStats.strength - Strength mutipler
 * @property {Number} alphaStats.defense - Defense mutipler
 * @property {Number} alphaStats.speed - Speed mutipler
 * @property {Number} alphaStats.endurance - Endurance mutipler
 * @property {Number} alphaStats.intelligence - Intelligence mutipler
 * @property {Number} alphaStats.stealth - Stealth mutipler
 * @property {Number} alphaStats.crafting - Crafting mutipler
 */
let animals;

/**
 * @typedef {Object} foodPrefixes
 * @property {prefix}
 *
 * @typedef {prefix}
 * @property {string} prefixName - the name of the prefix that getts applied to foods cooked primarily with this type
 * @property {statusEffects.effect|undefined} prefixEffect - the effect given by the prefix
 * @property {Number|undefined} effectChance - chance of getting the effect
 * @property {Number|undefined} effectTime - how long the effect lasts in turns/hours
 * @property {statTypes.statType|undefined} prefixStat - the stat that gets changed
 * @property {Number|undefined} statChange - the amount of the prefixStat changes
 */
let foodPrefixes;

async function loadIndexs() {
    const itemIndex = await fetch("Assets/indexs/item.json");
    items = await itemIndex.json();
    console.log("loaded items");

    const damageTypeIndex = await fetch("Assets/indexs/damageTypes.json");
    damageTypes = await damageTypeIndex.json();
    console.log("loaded damageTypes");

    const weaponTypeIndex = await fetch("Assets/indexs/weaponTypes.json");
    weaponTypes = await weaponTypeIndex.json();
    console.log("loaded weaponTypes");

    const statusEffectIndex = await fetch("Assets/indexs/statusEffects.json");
    statusEffects = await statusEffectIndex.json();
    console.log("loaded statusEffects");

    const pepoleIndex = await fetch("Assets/indexs/pepole.json");
    basePepole = await pepoleIndex.json();
    console.log("loaded basePepole");

    const attackIndex = await fetch("Assets/indexs/attacks.json");
    attacks = await attackIndex.json();
    console.log("loaded attacks");

    const npcIndex = await fetch("Assets/indexs/npc.json");
    npcs = await npcIndex.json();
    console.log("loaded npcs");

    const animalIndex = await fetch("Assets/indexs/animal.json");
    animals = await animalIndex.json();
    console.log("loaded animals");

    const foodPrefixIndex = await fetch("Assets/indexs/foodPrefix.json");
    animals = await foodPrefixIndex.json();
    console.log("loaded foodPrefixes");
}

loadIndexs();
