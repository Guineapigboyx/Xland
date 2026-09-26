/**
 * NPC formating
 *
 * @property {string[]} name - [first,last(optinal)]
 * @property {string} home - Where they live or if none put null and it will put them as traveling
 * @property {number} level - what level is this NPC, this also determnites various other things
 *
 * @property {string} profession - what they do (it does not have to be a job)
 * @property {string} background - talk about what they do and why they do it. You can be quite discriptive here since its bassicly who the NPC character is
 * @property {string[]} skills - Skills they are good at
 * @property {string[]} goodPreferences - who or what do they like
 * @property {string[]} badPreferences -  who or what do they not like
 * @property {number} goodApproval - how much appoval is gained from being in goodPreferences
 * @property {number} badApproval - how much appoval is lost from being in badPreferences
 * @property {number} fightThreshold - The approval level someone must be to start a auto fight (it can be always if set to 100%)
 *
 * Tradeing
 * @property {number} tradeThreshold - how high approval must be to trade
 * @property {function} restockItems - function to produce items inside the inventory
 * @property {number} restockTime -  How many ingame hours it takes for them to restock
 *
 * @typedef  {Object} inventory - Which items they have in their inventory and are willing to sell
 * @property {string} id - Unique identifier for the item (e.g. “sword_01”)
 * @property {Boolean} canSell - do they want to sell this item
 * @property {number} price - Price in currency
 * @property {number} quantity - defaulting to 1 if omitted
 *
 * Equipment
 * @typedef {object} equiped - what could appear in each equipment slot
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
 * @typedef {object} stats - base stat ranges
 * @property {[number, number]} hp - health range [min, max]
 * @property {[number, number]} strength - Strength range [min, max]
 * @property {[number, number]} defense - Defense range [min, max]
 * @property {[number, number]} speed - Speed range [min, max]
 * @property {[number, number]} endurance - Endurance range [min, max]
 * @property {[number, number]} intelligence - Intelligence range [min, max]
 * @property {[number, number]} stealth - Stealth range [min, max]
 * @property {[number, number]} crafting - Crafting range [min, max]
 *
 * @property {("spear"|"lightSword"|"heavySword"|"lightSpear"|"heavySpear"|"lightHammer"|"heavyHammer"|"lightAxe"|"heavyAxe"|"flail"|"bow"|"unarmed")[]} proficiency
 * - Weapon types the NPC is proficient with
 */

/**
 * Beasts/Animals formating
 *
 * @property {string} species - name of what it is like "dog"
 * @property {number} level - what level is this NPC, this also determnites various other things
 * @property {string} description - what is this (this does not change battles)
 *
 * @typedef {object} tame - can it be tamed
 * @property {Array} tame.items - which possible items does it want (must be aligned with tame.chance)
 * @property {Array} tame.chance - the chance that each item has to tame (must be aligned with tame.items)
 * @property {Boolean} tame.dangerSense - notice that you are trying to tame it with a dangerous item
 *
 * @property {object} itemDrops - list of items that can be droped in this format [itemName, dropChance, min, max]
 *
 * @typedef {object} behavior - How this beast acts or would start combat
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
 * @typedef {object} equiped - If a equipment can appear in a slot
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
 * @typedef {object} stats - normal base stat ranges
 * @property {[number, number]} stats.hp - health range [min, max]
 * @property {[number, number]} stats.strength - Strength range [min, max]
 * @property {[number, number]} stats.defense - Defense range [min, max]
 * @property {[number, number]} stats.speed - Speed range [min, max]
 * @property {[number, number]} stats.endurance - Endurance range [min, max]
 * @property {[number, number]} stats.intelligence - Intelligence range [min, max]
 * @property {[number, number]} stats.stealth - Stealth range [min, max]
 * @property {[number, number]} stats.crafting - Crafting range [min, max]
 *
 * @typedef {object} alphaStats - If alpha how much should the base stats be mutiplied
 * @property {number} alphaStats.hp - health mutipler
 * @property {number} alphaStats.strength - Strength mutipler
 * @property {number} alphaStats.defense - Defense mutipler
 * @property {number} alphaStats.speed - Speed mutipler
 * @property {number} alphaStats.endurance - Endurance mutipler
 * @property {number} alphaStats.intelligence - Intelligence mutipler
 * @property {number} alphaStats.stealth - Stealth mutipler
 * @property {number} alphaStats.crafting - Crafting mutipler
 */
