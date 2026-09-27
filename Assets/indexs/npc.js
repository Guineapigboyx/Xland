/**
 * NPC formating
 *
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
 * Tradeing
 * @property {Number} tradeThreshold - how high approval must be to trade
 * @property {function} restockItems - function to produce items inside the inventory
 * @property {Number} restockTime -  How many ingame hours it takes for them to restock
 *
 * @typedef  {Object} inventory - Which items they have in their inventory and are willing to sell
 * @property {String} id - Unique identifier for the item (e.g. “sword_01”)
 * @property {Boolean} canSell - do they want to sell this item
 * @property {Number} price - Price in currency
 * @property {Number} quantity - defaulting to 1 if omitted
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
 *
 * @property {("spear"|"lightSword"|"heavySword"|"lightSpear"|"heavySpear"|"lightHammer"|"heavyHammer"|"lightAxe"|"heavyAxe"|"flail"|"bow"|"unarmed")[]} proficiency
 * - Weapon types the NPC is proficient with
 */

/**
 * Beasts/Animals formating
 *
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

String;
