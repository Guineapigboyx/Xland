/**
 * @typedef {object} items - All of the xland items
 * @property {item}
 *
 * @typedef {object} item - data about this item
 * @property {String} name - name of the item
 * @property {Number} weight
 * @property {raritys.rarity|undefined} rarity - Hardcoded rarity of a item, if undifined it is determined from the materials
 * @property {materialData|undefined} materialData - Data about it as a crafting material
 * @property {socketData|undefined} socketData - Data about socketing with this material
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
 * @property {attack|undefined} speicalAttack - special attack that is added to this item
 * @property {Function} onHit - when you hit something this function runs
 *
 * ----
 * @typedef {Object} foodData
 * @property {foodType} foodType - the type of food it is
 * @property {Number|undefined} maxUses - how many times can it be used before it's gone (if undifined it 1)
 * @property {foodPrefixes.prefix} - prefixes that this item counts to (like spicy food would count towards the spicy prefix)
 * @property {Number|undefined} healAmount - the amount of hp you gain or lose from eating this
 * @property {Number|undefined} epAmount - the amount of ep you gain or lose from eating this
 * @property {effects[]} effects - effects gotten from eating
 *
 * ---
 * @typedef {Object} socketData
 * @property {string} prefix - the name that gets applied to the start of socketd items
 * @property {itemUsageTypes[]} socketUsageType - how to activate the socket
 * @property {Number} socketUses - how many times you can use the item before it socket runs out
 * @property {Number} socketTime - how long a single usage of a socket lasts
 * @property {boolean|undefined} cancelable - can you cancel the imbule effects, this also allows a reaction to deny its effects
 * @property {boolean|undefined} denyCost - if you deny a socket effect it still subtracts 1 from socketUses (does nothing unless cancelable is on)
 *
 * socket effects
 * @property {statChange|undefined} statChange - Array of which stat and how much is changed in each stat
 * @property {effects[]|undefined} effects - effects gotten from doing the effectCondition and haveing the socketd item equiped
 * @property {Number} attack - attack bonus added to any item with this socket
 * @property {Number} accuracy - accuracy bonus added to any item with this socket
 * @property {Number} defense - defense bonus added to any item with this socket
 * @property {damageTypes.damagetype} damagetype - the damagetype this socket changes the wepon to have
 * @property {attack[]|undefined} instantAction - when the socket is activated the attack it activates
 * @property {boolean|undefined} actionCost - the action still has a EP cost
 *
 * @example The socketUsageType is onHit and uses 8. so you can get hit the 8 times before the socket is lost
 * @example The socketUsageType is onHit and time 3. So if you get hit it activates the socket effects for 3 turns.
 *
 * ---
 * @typedef {Object} statChange
 * @property {statTypes.statType} stat - the stats object
 * @property {Number} amount - the amount the stat changes
 *
 * ----
 * @typedef {Object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect (does NOT apply for socketData)
 * @property {Number} effectTime - how long the effect lasts in turns/hours (does NOT apply for socketData)
 * @property {itemUsageTypes[]} effectCondition - the condition the effect happens (does NOT apply for foodData or socketData)
 * @property {Boolean} onSelf - if the effect is given to your self or a target (does NOT apply for foodData)
 */
const items = {
    wood: {
        name: "Wood",
        rarity: raritys.basic,
        weight: 2.18,
        materialData: { weight: 2, durablity: 3, attack: 2.5, defense: 3, pickaxePower: 2.5 },
        weaponData: { weaponType: weaponTypes.club },
    },
    stone: {
        name: "Stone",
        rarity: raritys.basic,
        weight: 4.36,
        materialData: { weight: 4, durablity: 4, attack: 3, defense: 2, pickaxePower: 5 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    bone: {
        name: "Bone",
        rarity: raritys.common,
        weight: 1.3,
        materialData: { weight: 1, durablity: 1, attack: 3, defense: 1, pickaxePower: 10 },
        weaponData: { weaponType: weaponTypes.club },
    },
    tin: {
        name: "Tin",
        rarity: raritys.common,
        weight: 1.64,
        materialData: {
            weight: 1.5,
            durablity: 2,
            attack: 4,
            defense: 3,
            pickaxePower: 10,
            effect: [
                {
                    effectGiven: statusEffects.bloodLust,
                    effectChance: 0.15,
                    effectTime: 1,
                    effectCondition: [itemUsageTypes.inBattle.onDamage],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    iron: {
        name: "Iron",
        rarity: raritys.common,
        weight: 4.09,
        materialData: { weight: 3.75, durablity: 7, attack: 5, defense: 2, pickaxePower: 15 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    aluminum: {
        name: "Aluminum",
        rarity: raritys.common,
        weight: 3.05,
        materialData: { weight: 2.8, durablity: 5, attack: 6, defense: 4, pickaxePower: 20 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    copper: {
        name: "Copper",
        rarity: raritys.common,
        weight: 3.65,
        materialData: {
            weight: 3.35,
            durablity: 6,
            attack: 5,
            defense: 3,
            pickaxePower: 20,
            damageType: damageTypes.electric,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    zinc: {
        name: "Zinc",
        rarity: raritys.common,
        weight: 2.84,
        materialData: {
            weight: 2.6,
            durablity: 2,
            attack: 9,
            defense: 3,
            pickaxePower: 15,
            effect: [
                {
                    effectGiven: statusEffects.magicResitance,
                    effectChance: 0.1,
                    effecttime: 2,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDamage,
                        itemUsageTypes.inBattle.onRollSuccess,
                        itemUsageTypes.inBattle.onHit,
                    ],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    shinyStone: {
        name: "Shiny Stone",
        rarity: raritys.common,
        weight: 6.0,
        materialData: {
            weight: 5.5,
            durablity: 8,
            attack: 7,
            defense: 6,
            pickaxePower: 20,
            effect: [
                {
                    effectGiven: statusEffects.flash,
                    effectChance: 0.25,
                    effectTime: 2,
                    effectCondition: [
                        itemUsageTypes.inBattle.onTurnChange,
                        itemUsageTypes.outBattle.onCooking,
                        itemUsageTypes.inBattle.onDamage,
                    ],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    carbon: {
        name: "Carbon",
        rarity: raritys.common,
        weight: 1.42,
        materialData: {
            weight: 1.3,
            durablity: 3,
            attack: 7,
            defense: 7,
            pickaxePower: 10,
            damageType: damageTypes.fire,
            effect: [
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 0.6,
                    effectTime: 1,
                    effectCondition: [
                        itemUsageTypes.inBattle.onFire,
                        itemUsageTypes.outBattle.onFire,
                    ],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.glassGear,
                    effectChance: 1.0,
                    effectTime: 1,
                    effectCondition: [
                        itemUsageTypes.inBattle.onFire,
                        itemUsageTypes.outBattle.onFire,
                    ],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.firePowerUp,
                    effectChance: 0.4,
                    effectTime: 1,
                    effectCondition: [
                        itemUsageTypes.inBattle.onFire,
                        itemUsageTypes.outBattle.onFire,
                    ],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    carbonBone: {
        name: "Carbon Bone",
        rarity: raritys.uncommon,
        weight: 1.13,
        materialData: {
            weight: 0.75,
            durablity: -10,
            attack: 15,
            defense: 5,
            pickaxePower: 20,
            effect: [
                {
                    effectGiven: statusEffects.bloodLust,
                    effectChance: 0.22,
                    effectTime: 1,
                    effectCondition: [itemUsageTypes.inBattle.onDamage],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.glassGear,
                    effectChance: 0.25,
                    effectTime: 1,
                    effectCondition: [itemUsageTypes.inBattle.onIncapable],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.glassGear,
                    effectChance: 0.25,
                    effectTime: 1,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDeath,
                        itemUsageTypes.outBattle.onDeath,
                    ],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.club },
    },
    silver: {
        name: "Silver",
        rarity: raritys.uncommon,
        weight: 3.11,
        materialData: { weight: 2.85, durablity: 7, attack: 6, defense: 3, pickaxePower: 25 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    brass: {
        name: "Brass",
        rarity: raritys.uncommon,
        weight: 3.82,
        materialData: { weight: 3.5, durablity: 8, attack: 4, defense: 6, pickaxePower: 25 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    uramite: {
        name: "Uramite",
        rarity: raritys.uncommon,
        weight: 4.36,
        materialData: {
            weight: 4,
            durablity: 9,
            attack: 5,
            defense: 5,
            pickaxePower: 25,
            effect: [
                {
                    effectGiven: statusEffects.fireResitance,
                    effectChance: 0.1,
                    effectTime: 2,
                    effectCondition: [itemUsageTypes.inBattle.onTurnChange],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.electricResitance,
                    effectChance: 0.1,
                    effectTime: 2,
                    effectCondition: [itemUsageTypes.inBattle.onTurnChange],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.toxicResitance,
                    effectChance: 0.1,
                    effectTime: 2,
                    effectCondition: [itemUsageTypes.inBattle.onTurnChange],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    gold: {
        name: "Gold",
        rarity: raritys.uncommon,
        weight: 4.9,
        materialData: { weight: 5.0, durablity: 10, attack: 8, defense: 8, pickaxePower: 30 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    steel: {
        name: "Steel",
        rarity: raritys.uncommon,
        weight: 6.11,
        materialData: { weight: 5.6, durablity: 13, attack: 11, defense: 8, pickaxePower: 30 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    lithium: {
        name: "Lithium",
        rarity: raritys.rare,
        weight: 3.27,
        materialData: {
            weight: 3,
            durablity: 7,
            attack: 5,
            defense: 9,
            pickaxePower: 50,
            damageType: damageTypes.electric,
            effect: [
                {
                    effectGiven: statusEffects.shocked,
                    effectChance: 0.5,
                    effectTime: 2,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDamage,
                        itemUsageTypes.inBattle.onHit,
                        itemUsageTypes.inBattle.onDeath,
                        itemUsageTypes.outBattle.onDamage,
                        itemUsageTypes.outBattle.onHit,
                        itemUsageTypes.outBattle.onDeath,
                    ],
                },
                {
                    effectGiven: statusEffects.shocked,
                    effectChance: 0.03,
                    effectTime: 3,
                    effectCondition: [itemUsageTypes.outBattle.onHour],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.shocked,
                    effectChance: 0.13,
                    effectTime: 2,
                    effectCondition: [
                        itemUsageTypes.outBattle.onRollFail,
                        itemUsageTypes.inBattle.onRollFail,
                    ],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.shocked,
                    effectChance: 1,
                    effectTime: 2,
                    effectCondition: [itemUsageTypes.outBattle.enterWater],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    carbonSteel: {
        name: "Carbon steel",
        rarity: raritys.rare,
        weight: 8.29,
        materialData: { weight: 7.6, durablity: 20, attack: 16, defense: 12, pickaxePower: 50 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    platium: {
        name: "Platium",
        rarity: raritys.rare,
        weight: 5.78,
        materialData: { weight: 5.3, durablity: 17, attack: 13, defense: 10, pickaxePower: 50 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    magnesium: {
        name: "Magnesium",
        rarity: raritys.rare,
        weight: 3.82,
        materialData: {
            weight: 3.5,
            durablity: 11,
            attack: 11,
            defense: 9,
            pickaxePower: 50,
            effect: [
                {
                    effectGiven: statusEffects.superCharged,
                    effectChance: 0.25,
                    effectTime: 1,
                    effectCondition: [itemUsageTypes.inBattle.onDamage],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    lead: {
        name: "Lead",
        rarity: raritys.rare,
        weight: 12.0,
        materialData: {
            weight: 11,
            durablity: 25,
            attack: 7,
            defense: 13,
            pickaxePower: 75,
            damageType: damageTypes.blunt,
            effect: [
                {
                    effectGiven: statusEffects.bluntPowerUp,
                    effectChance: 1,
                    effectTime: 1,
                    effectCondition: [itemUsageTypes.inBattle.onDamage],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.largeObject },
    },
    mithril: {
        name: "Mithril",
        rarity: raritys.rare,
        weight: 8.7,
        materialData: {
            weight: 8.3,
            durablity: 7,
            attack: 19,
            defense: 7,
            pickaxePower: 75,
            damageType: damageTypes.sharp,
            effect: [
                {
                    effectGiven: statusEffects.bleed,
                    effectChance: 0.8,
                    effectTime: 2,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDamage,
                        itemUsageTypes.outBattle.onDamage,
                    ],
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    crystal: {
        name: "Crystal",
        rarity: raritys.master,
        weight: 3.27,
        materialData: {
            weight: 3,
            durablity: 7,
            attack: 12,
            defense: 11,
            pickaxePower: 110,
            damageType: damageTypes.sharp,
            effect: [
                {
                    effectGiven: statusEffects.sharpShoot,
                    effectChance: 0.4,
                    effectTime: 1,
                    effectCondition: [itemUsageTypes.inBattle.onTurnChange],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.flash,
                    effectChance: 0.25,
                    effectTime: 3,
                    effectCondition: [itemUsageTypes.outBattle.onRollAny],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.knife },
    },
    flameright: {
        name: "Flameright",
        rarity: raritys.master,
        weight: 4.36,
        materialData: {
            weight: 4,
            durablity: 13,
            attack: 13,
            defense: 9,
            pickaxePower: 100,
            damageType: damageTypes.fire,
            effect: [
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 1,
                    effectTime: 3,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDamage,
                        itemUsageTypes.outBattle.onDamage,
                    ],
                },
                {
                    effectGiven: statusEffects.firePowerUp,
                    effectChance: 1,
                    effectTime: 1,
                    effectCondition: [
                        itemUsageTypes.inBattle.onFire,
                        itemUsageTypes.outBattle.onFire,
                    ],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    adamantite: {
        name: "Adamantite",
        rarity: raritys.master,
        weight: 3.55,
        materialData: { weight: 3.25, durablity: 20, attack: 17, defense: 13, pickaxePower: 100 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    stainlessSteel: {
        name: "Stainless Steel",
        rarity: raritys.master,
        weight: 9.05,
        materialData: { weight: 8.3, durablity: 30, attack: 14, defense: 9, pickaxePower: 100 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    uranium: {
        name: "Uranium",
        rarity: raritys.master,
        weight: 12.0,
        materialData: {
            weight: 11,
            durablity: 12,
            attack: 30,
            defense: 9,
            pickaxePower: 100,
            damageType: damageTypes.toxic,
            effect: [
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 1,
                    effectTime: 5,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDamage,
                        itemUsageTypes.outBattle.onDamage,
                    ],
                },
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 0.3,
                    effectTime: 5,
                    effectCondition: [itemUsageTypes.inBattle.onTurnChange],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 0.05,
                    effectTime: 8,
                    effectCondition: [itemUsageTypes.outBattle.onHour],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    plutonium: {
        name: "Plutonium",
        rarity: raritys.legendary,
        weight: 5.45,
        materialData: {
            weight: 5,
            durablity: 13,
            attack: 30,
            defense: 10,
            pickaxePower: 125,
            damageType: damageTypes.toxic,
            effect: [
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 1,
                    effectTime: 8,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDamage,
                        itemUsageTypes.outBattle.onDamage,
                    ],
                },
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 0.3,
                    effectTime: 5,
                    effectCondition: [itemUsageTypes.inBattle.onTurnChange],
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 0.05,
                    effectTime: 12,
                    effectCondition: [itemUsageTypes.outBattle.onHour],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    xtramite: {
        name: "Xtramite",
        rarity: raritys.legendary,
        weight: 3.82,
        materialData: { weight: 3.5, durablity: 25, attack: 13, defense: 25, pickaxePower: 125 },
        weaponData: { weaponType: weaponTypes.whip },
    },
    titanium: {
        name: "Titanium",
        rarity: raritys.legendary,
        weight: 4.36,
        materialData: { weight: 4, durablity: 33, attack: 28, defense: 21, pickaxePower: 150 },
    },
    titaniumGold: {
        name: "Titanium gold",
        rarity: raritys.legendary,
        weight: 6.0,
        materialData: {
            weight: 5.5,
            durablity: 43,
            attack: 31,
            defense: 25,
            pickaxePower: 150,
            effect: [
                {
                    effectGiven: statusEffects.flash,
                    effectChance: 0.5,
                    effectTime: 1,
                    effectCondition: [itemUsageTypes.inBattle.onTurnChange],
                    onSelf: true,
                },
            ],
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    masterOre: {
        name: "Master ore",
        rarity: raritys.mythic,
        weight: 3.82,
        materialData: { weight: 3.5, durablity: 50, attack: 35, defense: 25, pickaxePower: 200 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    pale: {
        name: "Pale",
        rarity: raritys.mythic,
        weight: 2.84,
        materialData: { weight: 2.6, durablity: 60, attack: 40, defense: 30, pickaxePower: 200 },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    raindite: {
        name: "Raindite",
        rarity: raritys.ultraRank,
        weight: 2.18,
        materialData: {
            weight: 2,
            durablity: 70,
            attack: 50,
            defense: 50,
            pickaxePower: 200,
            damageType: damageTypes.magic,
        },
        weaponData: { weaponType: weaponTypes.knife },
    },
    diamond: {
        name: "Diamond",
        rarity: raritys.master,
        weight: 0.82,
        materialData: { weight: 0.75, durablity: 1, attack: 2, defense: 2, pickaxePower: 100 },
        weaponData: { weaponType: weaponTypes.knife },
        socketData: {
            prefix: "vivid",
            socketUsageType: [itemUsageTypes.inBattle.useSelf],
            socketUses: 3,
            socketTime: 2,
            accuracy: 10,
        },
    },
    ruby: {
        name: "Ruby",
        rarity: raritys.rare,
        weight: 0.82,
        materialData: { weight: 0.75, durablity: 1, attack: 3, defense: 2, pickaxePower: 30 },
        weaponData: { weaponType: weaponTypes.knife },
        socketData: {
            prefix: "Rubinated",
            socketUsageType: [itemUsageTypes.inBattle.useSelf, itemUsageTypes.outBattle.useSelf],
            socketUses: 12,
            socketTime: 4,
            damageType: damageTypes.electric,
            effect: [
                {
                    effectGiven: statusEffects.electricPowerUp,
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.electricResitance,
                    onSelf: true,
                },
            ],
        },
    },
    sapphire: {
        name: "Sapphire",
        rarity: raritys.uncommon,
        weight: 0.82,
        materialData: { weight: 0.75, durablity: 1, attack: 2, defense: 3, pickaxePower: 30 },
        weaponData: { weaponType: weaponTypes.knife },
        socketData: {
            prefix: "Ice Spiked",
            socketUsageType: [
                itemUsageTypes.inBattle.useAnyone,
                itemUsageTypes.outBattle.useAnyone,
            ],
            socketUses: 8,
            socketTime: 4,
            damageType: damageTypes.cold,
            effect: [
                {
                    effectGiven: statusEffects.sharpVulnerability,
                },
                {
                    effectGiven: statusEffects.coldPowerUp,
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.coldResitance,
                    onSelf: true,
                },
            ],
        },
    },
    amethyst: {
        name: "Amethyst",
        rarity: raritys.common,
        weight: 0.82,
        materialData: { weight: 0.75, durablity: 1, attack: 3, defense: 3, pickaxePower: 30 },
        weaponData: { weaponType: weaponTypes.knife },
        socketData: {
            prefix: "Peril",
            socketUsageType: [itemUsageTypes.inBattle.onCritical],
            socketUses: 3,
            socketTime: 3,
            cancelable: true,
            effect: [
                {
                    effectGiven: statusEffects.regeneration,
                    onSelf: true,
                },
                {
                    effectGiven: statusEffects.burstingVitality,
                    onSelf: true,
                },
            ],
        },
    },
    emerald: {
        name: "Emerald",
        rarity: raritys.rare,
        weight: 0.82,
        materialData: { weight: 0.75, durablity: 1, attack: 3, defense: 5, pickaxePower: 30 },
        weaponData: { weaponType: weaponTypes.knife },
        socketData: {
            prefix: "Sturdy",
            socketUsageType: [itemUsageTypes.inBattle.onSelf, itemUsageTypes.outBattle.onSelf],
            socketUses: 8,
            socketTime: 12,
            effect: [
                {
                    effectGiven: statusEffects.sturdyGear,
                    onSelf: true,
                },
            ],
            statChange: { stat: statTypes.defense, amount: 2 },
        },
    },
    amber: {
        name: "Amber",
        rarity: raritys.rare,
        weight: 3.27,
        materialData: { weight: 3, durablity: 1, attack: 5, defense: 5 },
        weaponData: {
            weaponType: weaponTypes.bluntObject,
            // todo expolde attack
            onHit: () => {
                console.warn("explode function missing for amber");
            },
        },
        socketData: {
            prefix: "Expolsive",
            socketUsageType: [
                itemUsageTypes.outBattle.onDamage,
                itemUsageTypes.inBattle.onDamage,
                itemUsageTypes.inBattle.onHit,
                itemUsageTypes.outBattle.onHit,
            ],
            socketUses: 1,
            socketTime: 1,
            statChange: { stat: statTypes.courage, amount: 3 },
            instantAction: "explode",
        },
    },
    topaz: {
        name: "Topaz",
        rarity: raritys.legendary,
        weight: 1.64,
        materialData: { weight: 1.5, durablity: 7, attack: 15, defense: 11, pickaxePower: 100 },
        weaponData: { weaponType: weaponTypes.knife },
        socketData: {
            prefix: "Divine",
            socketUsageType: [itemUsageTypes.inBattle.onDamage, itemUsageTypes.outBattle.onDamage],
            socketUses: 20,
            socketTime: 1,
            cancelable: true,
            instantAction: "Divine Smite",
        },
    },
    geode: {
        name: "Geode",
        rarity: raritys.uncommon,
        weight: 5.45,
        materialData: { weight: 5, durablity: 5, attack: 4, defense: 3, pickaxePower: 5 },
    },
    grass: {
        name: "Grass",
        rarity: raritys.basic,
        weight: 0.27,
        materialData: { weight: 0.25, durablity: 1, attack: 1.5, defense: 1, pickaxePower: 1.5 },
    },
    treeBranch: {
        name: "Tree Branch",
        rarity: raritys.basic,
        weight: 1.09,
        materialData: { weight: 1, durablity: 1.5, attack: 1.25, defense: 1.5 },
    },
    leaf: {
        name: "Leaf",
        rarity: raritys.basic,
        weight: 0.27,
        materialData: { weight: 0.25, durablity: 1, attack: 1.5, defense: 1 },
    },
    leather: {
        name: "Leather",
        rarity: raritys.common,
        weight: 1.47,
        materialData: { weight: 1.35, durablity: 4, attack: 0, defense: 2 },
    },
    hide: {
        name: "Hide",
        rarity: raritys.uncommon,
        weight: 1.64,
        materialData: { weight: 1.5, durablity: 8, attack: 0, defense: 3 },
    },
    mud: {
        name: "Mud",
        rarity: raritys.basic,
        weight: 3.82,
        materialData: { weight: 3.5, durablity: 1.75, attack: 0, defense: 1.5 },
    },
    glue: {
        name: "Glue",
        rarity: raritys.basic,
        weight: 2.1,
        materialData: { weight: 0.5, durablity: 2.3, attack: 0, defense: 2 },
    },
    wire: {
        name: "Wire",
        rarity: raritys.basic,
        weight: 1.0,
        materialData: { weight: 0.1, durablity: 4, attack: 3, defense: 0.5 },
    },
    string: {
        name: "String",
        rarity: raritys.basic,
        weight: 0.5,
        materialData: { weight: 0.1, durablity: 2, attack: 0, defense: 0.25 },
    },
};
