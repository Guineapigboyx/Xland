/**
 * NPC formating
 *
 * @property {String[]} name - [first,last(optinal)]
 * @property {String} home - Where they live or if none put null and it will put them as traveling
 * @property {Number} level - what level is this NPC, this also determnites various other things
 * @property {[Number, Number]} maxHp - health range [min, max]
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
 * @property {Number|undefined} tradeThreshold - how high approval must be to trade
 * @property {Number|undefined} restockTime -  How many ingame hours it takes for them to restock
 *
 * @property {inventoryItem[]|undefined} inventory - inventory of the NPC
 * @property {equiped[]|undefined} equiped - items this npc has equiped
 * @property {stat[]} stats - the stats of the NPC
 *
 * @property {weaponTypes.weaponType[]} proficiency
 * - Weapon types the NPC is proficient with
 * ----
 * @typedef  {Object} inventoryItem - Which items they have in their inventory and are willing to sell
 * @property {items.item} item - the items object in items
 * @property {Boolean} canSell - do they want to sell this item
 * @property {Number} price - Price in currency
 * @property {Number} quantity - defaulting to 1 if omitted
 * @property {Boolean} canRestock - do the items restock in the shop
 *
 * ----
 * @typedef {Object} equiped - what could appear in each equipment slot
 * @property {equipSlots.slot} slot - the slot that items can appear in
 * @property {items.item[]} items - items that can appear in the slot
 *
 * ----
 * @typedef {Object} stat - base stat ranges
 * @property {statTypes.stat} stat - the stat that is effected
 * @property {[Number, Number]} range - stat range [min, max], if this will be 0 don't include the stat
 *
 */
const npcs = {
    billyMaye: {
        name: "billy maye",
        home: "new billy",
        level: 1,
        hp: [20, 20],

        profession: "local asshole",
        background:
            "Loves to throw rocks at windows for the sake of being an ass. Is frankly a local goon, loves to prank people and loves to make peoples lives kind of miserable. Does not deal with confrontation well; runs away when confronted about his behavior.",
        skills: ["strong", "cowardly"],

        goodPreferences: ["pranks", "gooning", "throwing rocks"],

        badPreferences: ["confrontation", "being threatened"],

        goodApproval: 10,
        badApproval: -5,
        fightThreshold: -10000000000,

        stats: [
            { stat: statTypes.strength, range: [1, 1] },
            { stat: statTypes.defense, range: [1, 1] },
            { stat: statTypes.speed, range: [1, 1] },
            { stat: statTypes.endurance, range: [1, 1] },
            { stat: statTypes.intelligence, range: [1, 1] },
            { stat: statTypes.stealth, range: [10, 10] },
        ],
    },
    johnLinus: {
        name: "john linus",
        home: "new billy",
        level: 1,
        maxHp: [50, 80],

        profession: "farmer",
        background:
            "has spend years as a local farmer, supplies the entire city of New Billy with food, and has made a fortune from this. Loves what he does. He's an extremely humble man who has no issues with helping those in need. Is very passive and patient. Speaks with a southern twang, however spends a lot of time being quiet. Mostly spends his days tending to crops and keeping up with news in the local paper.",
        skills: ["farming", "fishing", "hunter", "outdoorsman", "merchant"],

        goodPreferences: ["farming", "gift giving", "hunting", "local politics"],

        badPreferences: [
            "theft",
            "stealing",
            "looking down on people",
            "undermining the working class",
        ],

        goodApproval: 15,
        badApproval: -30,
        fightThreshold: -90,

        restockTime: 10,

        inventory: {
            leather: {
                // todo change to items
                id: "leather",
                canSell: true,
                price: 150,
                quantity: 5,
                canRestock: true,
            },
            cloth: {
                // todo change to items
                id: "cloth",
                canSell: true,
                price: 200,
                quantity: 5,
                canRestock: true,
            },
            wheat: {
                // todo change to items
                id: "wheat",
                canSell: true,
                price: 50,
                quantity: 15,
                canRestock: true,
            },
            xalerite: {
                // todo change to items | make a better way of handleing money
                id: "xalerite",
                canSell: false,
                price: 0,
                quantity: 200,
                canRestock: false,
            },
        },

        stats: [
            { stat: statTypes.strength, range: [2, 4] },
            { stat: statTypes.defense, range: [1, 3] },
            { stat: statTypes.speed, range: [1, 1] },
            { stat: statTypes.endurance, range: [2, 6] },
            { stat: statTypes.intelligence, range: [1, 5] },
            { stat: statTypes.stealth, range: [1, 1] },
            { stat: statTypes.crafting, range: [1, 5] },
            { stat: statTypes.courage, range: [10, 15] },
        ],
    },
};
