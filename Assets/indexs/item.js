/**
 * @typedef {object} items - All of the xland items
 * @property {item}
 *
 * @typedef {object} item - data about this item
 * @property {String} name - name of the item
 * @property {Number} weight
 * @property {raritys.rarity|undefined} raritys - Hardcoded rarity of a item, if undifined it is determined from the materials
 * @property {materialData|undefined} materialData - Data about it as a crafting material
 * @property {socketData|undefined} socketData - Data about socketing with this material
 * @property {foodData|undefined} foodData - data about this meal
 * @property {weaponData} weaponData - various properties about this item
 * @property {Number|undefined} storageCapacity
 * @property {Array|undefined} materialList - list of the matrials that make up this item
 *
 * @property {schematics.schematic|undefined} schematic - the schematic that is used to craft this item
 *
 * @property {1|2|3|4|5|undefined} placementSize - how big is this item when placed
 * @property {Boolean|undefined} preferWater - wants to be floating in water
 * 1 small, 2 normal, 3 large, 4 huge, 5 colossal
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
 * @property {materialTypes} materialType - the type of matrial this item is
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
 * @property {Number|undefined} hpChange - the amount of hp you gain or lose from eating this
 * @property {Number|undefined} epAmount - the amount of ep you gain or lose from eating this
 * @property {foodPrefixes.prefix} prefix - prefixes that this item counts to (like spicy food would count towards the spicy prefix)
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
        materialData: {
            weight: 2,
            durablity: 3,
            attack: 2.5,
            defense: 3,
            pickaxePower: 2.5,
            materialType: materialTypes.wood,
        },
        weaponData: { weaponType: weaponTypes.club },
    },
    stone: {
        name: "Stone",
        rarity: raritys.basic,
        weight: 4.36,
        materialData: {
            weight: 4,
            durablity: 4,
            attack: 3,
            defense: 2,
            pickaxePower: 5,
            materialType: materialTypes.rock,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    bone: {
        name: "Bone",
        rarity: raritys.common,
        weight: 1.3,
        materialData: {
            weight: 1,
            durablity: 1,
            attack: 3,
            defense: 1,
            pickaxePower: 10,
            materialType: materialTypes.bone,
        },
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
            materialType: materialTypes.metal,
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
        materialData: {
            weight: 3.75,
            durablity: 7,
            attack: 5,
            defense: 2,
            pickaxePower: 15,
            materialType: materialTypes.metal,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    aluminum: {
        name: "Aluminum",
        rarity: raritys.common,
        weight: 3.05,
        materialData: {
            weight: 2.8,
            durablity: 5,
            attack: 6,
            defense: 4,
            pickaxePower: 20,
            materialType: materialTypes.metal,
        },
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
            materialType: materialTypes.metal,
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
            materialType: materialTypes.metal,
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
            materialType: materialTypes.rock,
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
            materialType: materialTypes.rock,
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
            materialType: materialTypes.bone,
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
        materialData: {
            weight: 2.85,
            durablity: 7,
            attack: 6,
            defense: 3,
            pickaxePower: 25,
            materialType: materialTypes.metal,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    brass: {
        name: "Brass",
        rarity: raritys.uncommon,
        weight: 3.82,
        materialData: {
            weight: 3.5,
            durablity: 8,
            attack: 4,
            defense: 6,
            pickaxePower: 25,
            materialType: materialTypes.metal,
        },
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
            materialType: materialTypes.metal,
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
        materialData: {
            weight: 5.0,
            durablity: 10,
            attack: 8,
            defense: 8,
            pickaxePower: 30,
            materialType: materialTypes.metal,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    steel: {
        name: "Steel",
        rarity: raritys.uncommon,
        weight: 6.11,
        materialData: {
            weight: 5.6,
            durablity: 13,
            attack: 11,
            defense: 8,
            pickaxePower: 30,
            materialType: materialTypes.metal,
        },
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
            materialType: materialTypes.metal,
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
        materialData: {
            weight: 7.6,
            durablity: 20,
            attack: 16,
            defense: 12,
            pickaxePower: 50,
            materialType: materialTypes.metal,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    platium: {
        name: "Platium",
        rarity: raritys.rare,
        weight: 5.78,
        materialData: {
            weight: 5.3,
            durablity: 17,
            attack: 13,
            defense: 10,
            pickaxePower: 50,
            materialType: materialTypes.metal,
        },
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
            materialType: materialTypes.metal,
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
            materialType: materialTypes.metal,
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
            materialType: materialTypes.metal,
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
            materialType: materialTypes.gemStone,
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
            materialType: materialTypes.metal,
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
        materialData: {
            weight: 3.25,
            durablity: 20,
            attack: 17,
            defense: 13,
            pickaxePower: 100,
            materialType: materialTypes.metal,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    stainlessSteel: {
        name: "Stainless Steel",
        rarity: raritys.master,
        weight: 9.05,
        materialData: {
            weight: 8.3,
            durablity: 30,
            attack: 14,
            defense: 9,
            pickaxePower: 100,
            materialType: materialTypes.metal,
        },
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
            materialType: materialTypes.metal,
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
            materialType: materialTypes.metal,
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
        materialData: {
            weight: 3.5,
            durablity: 25,
            attack: 13,
            defense: 25,
            pickaxePower: 125,
            materialType: materialTypes.metal,
        },
        weaponData: { weaponType: weaponTypes.whip },
    },
    titanium: {
        name: "Titanium",
        rarity: raritys.legendary,
        weight: 4.36,
        materialData: {
            weight: 4,
            durablity: 33,
            attack: 28,
            defense: 21,
            pickaxePower: 150,
            materialType: materialTypes.metal,
        },
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
            materialType: materialTypes.metal,
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
        materialData: {
            weight: 3.5,
            durablity: 50,
            attack: 35,
            defense: 25,
            pickaxePower: 200,
            materialType: materialTypes.metal,
        },
        weaponData: { weaponType: weaponTypes.bluntObject },
    },
    pale: {
        name: "Pale",
        rarity: raritys.mythic,
        weight: 2.84,
        materialData: {
            weight: 2.6,
            durablity: 60,
            attack: 40,
            defense: 30,
            pickaxePower: 200,
            materialType: materialTypes.metal,
        },
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
            materialType: materialTypes.gemStone,
            damageType: damageTypes.magic,
        },
        weaponData: { weaponType: weaponTypes.knife },
    },
    diamond: {
        name: "Diamond",
        rarity: raritys.master,
        weight: 0.82,
        materialData: {
            weight: 0.75,
            durablity: 1,
            attack: 2,
            defense: 2,
            pickaxePower: 100,
            materialType: materialTypes.gemStone,
        },
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
        materialData: {
            weight: 0.75,
            durablity: 1,
            attack: 3,
            defense: 2,
            pickaxePower: 30,
            materialType: materialTypes.gemStone,
        },
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
        materialData: {
            weight: 0.75,
            durablity: 1,
            attack: 2,
            defense: 3,
            pickaxePower: 30,
            materialType: materialTypes.gemStone,
        },
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
        materialData: {
            weight: 0.75,
            durablity: 1,
            attack: 3,
            defense: 3,
            pickaxePower: 30,
            materialType: materialTypes.gemStone,
        },
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
        materialData: {
            weight: 0.75,
            durablity: 1,
            attack: 3,
            defense: 5,
            pickaxePower: 30,
            materialType: materialTypes.gemStone,
        },
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
        materialData: {
            weight: 3,
            durablity: 1,
            attack: 5,
            defense: 5,
            materialType: materialTypes.gemStone,
        },
        weaponData: {
            weaponType: weaponTypes.bluntObject,
            // todo explode attack
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
        materialData: {
            weight: 1.5,
            durablity: 7,
            attack: 15,
            defense: 11,
            pickaxePower: 100,
            materialType: materialTypes.gemStone,
        },
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
        weaponData: { weaponType: weaponTypes.bluntObject },
        materialData: {
            weight: 5,
            durablity: 5,
            attack: 4,
            defense: 3,
            pickaxePower: 5,
            materialType: materialTypes.rock,
        },
    },
    grass: {
        name: "Grass",
        rarity: raritys.basic,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.knife },
        materialData: {
            weight: 0.25,
            durablity: 1,
            attack: 1.5,
            defense: 1,
            pickaxePower: 1.5,
            materialType: materialTypes.plant,
        },
    },
    treeBranch: {
        name: "Tree Branch",
        rarity: raritys.basic,
        weight: 1.09,
        weaponData: { weaponType: weaponTypes.club },
        materialData: {
            weight: 1,
            durablity: 1.5,
            attack: 1.25,
            defense: 1.5,
            materialType: materialTypes.wood,
        },
    },
    leaf: {
        name: "Leaf",
        rarity: raritys.basic,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.knife }, // imagine stabbing someone with a leaf
        materialData: {
            weight: 0.25,
            durablity: 1,
            attack: 0.8,
            defense: 1,
            materialType: materialTypes.plants,
        },
    },
    leather: {
        name: "Leather",
        rarity: raritys.common,
        weight: 1.47,
        weaponData: { weaponType: weaponTypes.whip },
        materialData: {
            weight: 1.35,
            durablity: 4,
            attack: 0,
            defense: 2,
            materialType: materialTypes.skin,
        },
    },
    hide: {
        name: "Hide",
        rarity: raritys.uncommon,
        weight: 1.64,
        weaponData: { weaponType: weaponTypes.whip },
        materialData: {
            weight: 1.5,
            durablity: 8,
            attack: 0,
            defense: 3,
            materialType: materialTypes.skin,
        },
    },
    mud: {
        name: "Mud",
        rarity: raritys.basic,
        weight: 3.82,
        weaponData: { weaponType: weaponTypes.bluntObject },
        materialData: {
            weight: 3.5,
            durablity: 1.75,
            attack: 0,
            defense: 1.5,
            materialType: materialTypes.sticky,
        },
    },
    glue: {
        name: "Glue",
        rarity: raritys.basic,
        weight: 2.1,
        weaponData: { weaponType: weaponTypes.bluntObject },
        materialData: {
            weight: 0.5,
            durablity: 2.3,
            attack: 0,
            defense: 2,
            materialType: materialTypes.sticky,
        },
    },
    wire: {
        name: "Wire",
        rarity: raritys.basic,
        weight: 1.0,
        weaponData: { weaponType: weaponTypes.whip },
        materialData: {
            weight: 0.1,
            durablity: 4,
            attack: 3,
            defense: 0.5,
            materialType: materialTypes.wire,
        },
    },
    string: {
        name: "String",
        rarity: raritys.basic,
        weight: 0.5,
        weaponData: { weaponType: weaponTypes.whip },
        materialData: {
            weight: 0.1,
            durablity: 2,
            attack: 0,
            defense: 0.25,
            materialType: materialTypes.wire,
        },
    },
    rubber: {
        name: "Rubber",
        rarity: raritys.basic,
        weight: 0.8,
        weaponData: { weaponType: weaponTypes.whip },
        materialData: {
            weight: 0.2,
            durablity: 3,
            attack: 0,
            defense: 0.4,
            materialType: materialTypes.sticky,
        },
    },
    flint: {
        name: "Flint",
        rarity: raritys.Common,
        weight: 0.82,
        weaponData: { weaponType: weaponTypes.knife },
        materialData: {
            weight: 0.75,
            durablity: 2,
            attack: 1.5,
            defense: 1.0,
            materialType: materialTypes.rock,
        },
    },
    plastic: {
        name: "Plastic",
        rarity: raritys.Uncommon,
        weight: 1.41,
        weaponData: { weaponType: weaponTypes.bluntObject },
        materialData: {
            weight: 1,
            durablity: 6,
            attack: 1.8,
            defense: 3.25,
        },
    },
    glass: {
        name: "Glass",
        rarity: raritys.Uncommon,
        weight: 1.09,
        weaponData: { weaponType: weaponTypes.knife },
        materialData: {
            weight: 0.1,
            durablity: 1,
            attack: 10,
            defense: 0.2,

            effect: [
                {
                    effectGiven: statusEffects.bleed,
                    effectChance: 0.6,
                    effectTime: 2,
                    effectCondition: [
                        itemUsageTypes.inBattle.onDamage,
                        itemUsageTypes.outBattle.onDamage,
                    ],
                },
            ],
        },
    },
    bolts: {
        name: "Bolts",
        rarity: raritys.Uncommon,
        weight: 0.4,
        weaponData: { weaponType: weaponTypes.hammer }, // i mean if you have a hammer sized bolt
        materialData: {
            weight: 0.15,
            durablity: 5,
            attack: 0,
            defense: 0.0,
        },
    },
    coil: {
        name: "Coil",
        rarity: raritys.Uncommon,
        weigh: 1.7,
        weaponData: { weaponType: weaponTypes.shield },
        materialData: {
            weight: 1.3,
            durablity: 4,
            attack: 0,
            defense: 3.25,
            // wire kinda makes sense i guess
        },
    },
    gear: {
        name: "Gear",
        rarity: raritys.Uncommon,
        weight: 1.12,
        weaponData: { weaponType: weaponTypes.bluntObject },
        materialData: {
            weight: 0.9,
            durablity: 3,
            attack: 1.7,
            defense: 1.1,
            // would make it metal but im worried about infnite crafting loops
        },
    },
    cloth: {
        name: "Cloth",
        rarity: raritys.Common,
        weight: 0.87,
        weaponData: { weaponType: weaponTypes.whip },
        materialData: {
            weight: 0.8,
            durablity: 1,
            attack: 0,
            defense: 0.5,
            materialType: materialTypes.skin,
        },
    },
    raiderscrap: {
        name: "Raider Scrap",
        rarity: raritys.Uncommon,
        weight: 3.82,
        weaponData: { weaponType: weaponTypes.bluntObject },
        materialData: {
            weight: 3.5,
            durablity: 10,
            attack: 6,
            defense: 6,
            materialType: materialTypes.metal,
        },
    },
    superRaiderscrap: {
        name: "Super Raider Scrap",
        rarity: raritys.Master,
        weight: 8.73,
        weaponData: { weaponType: weaponTypes.bluntObject },
        materialData: {
            weight: 8.73,
            durablity: 30,
            attack: 12,
            defense: 12,
            materialType: materialTypes.metal,
        },
    },
    // food -------------------------------------------------
    hyruleHerbs: {
        name: "Hyrule Herbs",
        raritys: raritys.common,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.herbs,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.starchy,
        },
    },
    coffeeBeans: {
        name: "Coffee Beans",
        raritys: raritys.common,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.energizing,
            maxUses: 1,
            prefix: foodPrefixes.energizing,
            effect: [
                {
                    effectGiven: statusEffects.BurstingSpeed,
                    effectChance: 1,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.BurstingSpeed,
                    effectChance: 0.8,
                    effectTime: 2,
                },
            ],
        },
    },
    hyruleMushrooms: {
        name: "Hyrule Mushrooms",
        raritys: raritys.common,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mushrooms,
            maxUses: 1,
            hpChange: -5,
            prefix: foodPrefixes.earthy,
        },
        effect: [
            {
                effectGiven: statusEffects.gross,
                effectChance: 0.6,
                effectTime: 4,
            },
        ],
    },
    rushrooms: {
        name: "Rushrooms",
        raritys: raritys.common,
        weight: 0.33,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mushrooms,
            maxUses: 1,
            prefix: foodPrefixes.energizing,
            effect: [
                {
                    effectGiven: statusEffects.BurstingSpeed,
                    effectChance: 1,
                    effectTime: 2,
                },
            ],
        },
    },
    pikmin: {
        name: "Pikmin",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.pikmin,
            maxUses: 1,
            hpChange: -5,
            prefix: foodPrefixes.sweet, // pik carrots are sweet in pikmin
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.5,
                    effectTime: 6,
                },
            ],
        },
    },
    rice: {
        name: "Rice",
        raritys: raritys.common,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.grains,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.starchy,
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.5,
                    effectTime: 5,
                },
                {
                    effectGiven: statusEffects.waterVulnerability,
                    effectChance: 0.6,
                    effectTime: 2,
                },
            ],
        },
    },
    wheat: {
        name: "Wheat",
        raritys: raritys.common,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: { foodType: foodTypes.grains, maxUses: 1, prefix: foodPrefixes.starchy },
    },
    firePikmin: {
        name: "Fire Pikmin",
        raritys: raritys.uncommon,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Flameing",
            socketUsageType: [itemUsageTypes.inBattle.onEnter],
            socketUses: 20,
            socketTime: 8,
            damageType: damageTypes.fire,
        },
        foodData: {
            foodType: foodTypes.pikmin,
            maxUses: 1,
            prefix: foodPrefixes.spicy,
            effect: [
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 0.9,
                    effectTime: 3,
                },
            ],
        },
    },
    coalPikmin: {
        name: "Coal Pikmin",
        raritys: raritys.uncommon,
        weight: 1.42,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "coal pikmin",
            socketUsageType: [itemUsageTypes.inBattle.onEnter],
            socketUses: 20,
            socketTime: 8,
            damageType: damageTypes.blunt,
        },
        foodData: {
            foodType: foodTypes.pikmin,
            maxUses: 1,
            prefix: foodPrefixes.disguesting,
            effect: [
                {
                    effectGiven: statusEffects.fireVulnerability,
                    effectChance: 0.8,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.bluntResitance,
                    effectChance: 0.8,
                    effectTime: 3,
                },
            ],
        },
    },
    waterPikmin: {
        name: "Water Pikmin",
        raritys: raritys.uncommon,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Wet",
            socketUsageType: [itemUsageTypes.inBattle.onEnter],
            socketUses: 20,
            socketTime: 8,
            damageType: damageTypes.water,
        },
        foodData: {
            foodType: foodTypes.liquid,
            maxUses: 1,
            hpChange: -30,
            prefix: foodPrefixes.wet,
            effect: [
                {
                    effectGiven: statusEffects.wet,
                    effectChance: 1,
                    effectTime: 5,
                },
                {
                    effectGiven: statusEffects.drowning,
                    effectChance: 0.15,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.6,
                    effectTime: 2,
                },
            ],
        },
    },
    blueBerries: {
        name: "Blue Berries",
        raritys: raritys.uncommon,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.berries,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.sweet,
        },
    },
    blackBerries: {
        name: "Black Berries",
        raritys: raritys.uncommon,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.berries,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.salty,
        },
    },
    orangeBerries: {
        name: "Orange Berries",
        raritys: raritys.uncommon,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.berries,
            maxUses: 1,
            prefix: foodPrefixes.disguesting, // foulBerries from mincemeat
            effect: [
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 0.7,
                    effectTime: 6,
                },
            ],
        },
    },
    mysticFlowers: {
        name: "Mystic Flowers",
        raritys: raritys.legendary,
        weight: 0.38,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mystic,
            maxUses: 1,
            hpChange: -500,
            prefix: foodPrefixes.mystic,
        },
    },
    fireFlowers: {
        name: "Fire Flowers",
        raritys: raritys.rare,
        weight: 0.38,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.flowerrs,
            maxUses: 1,
            prefix: foodPrefixes.spicy,
            effect: [
                {
                    effectGiven: statusEffects.fireAspect,
                    effectChance: 1,
                    effectTime: 7,
                },
            ],
        },
    },
    eurekaLeaves: {
        name: "Eureka Leaves",
        raritys: raritys.rare,
        weight: 0.33,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mystic,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.mystic,
        },
    },
    metalshrooms: {
        name: "Metalshrooms",
        raritys: raritys.rare,
        weight: 1.09,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mushrooms,
            maxUses: 1,
            prefix: foodPrefixes.hardened,
            effect: [
                {
                    effectGiven: statusEffects.bluntResitance,
                    effectChance: 0.8,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.sharpResitance,
                    effectChance: 0.8,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.crushingResitance,
                    effectChance: 0.8,
                    effectTime: 2,
                },
            ],
        },
    },
    pepper: {
        name: "Pepper",
        raritys: raritys.common,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: { foodType: foodTypes.peppers, maxUses: 1, prefix: foodPrefixes.spicy },
    },
    mint: {
        name: "Mint",
        raritys: raritys.common,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.herbs,
            maxUses: 1,
            prefix: foodPrefixes.minty,
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.5,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 0.5,
                    effectTime: 4,
                },
            ],
        },
    },
    watermelon: {
        name: "Watermelon",
        raritys: raritys.uncommon,
        weight: 0.76,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.fruit,
            maxUses: 1,
            prefix: foodPrefixes.wet,
            effect: [
                {
                    effectGiven: statusEffects.wet,
                    effectChance: 1,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.drowning,
                    effectChance: 0.15,
                    effectTime: 2,
                },
            ],
        },
    },
    lifefruit: {
        name: "Lifefruit",
        raritys: raritys.master,
        weight: 0.38,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mystic,
            maxUses: 1,
            prefix: foodPrefixes.mystic,
            effect: [
                {
                    effectGiven: statusEffects.burstingVitality,
                    effectChance: 1,
                    effectTime: 4,
                },
            ],
        },
    },
    dewleaf: {
        name: "Dewleaf",
        raritys: raritys.uncommon,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.liquid,
            maxUses: 1,
            prefix: foodPrefixes.wet,
            effect: [
                {
                    effectGiven: statusEffects.wet,
                    effectChance: 0.8,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 0.4,
                    effectTime: 2,
                },
            ],
        },
    },
    cacti: {
        name: "Cacti",
        raritys: raritys.uncommon,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.fruit,
            maxUses: 1,
            hpChange: 25,
            prefix: foodPrefixes.sweet,
            effect: [
                {
                    effectGiven: statusEffects.bleed,
                    effectChance: 1,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.burstingVitality,
                    effectChance: 0.7,
                    effectTime: 3,
                },
            ],
        },
    },
    iceshroom: {
        name: "Iceshroom",
        raritys: raritys.rare,
        weight: 0.38,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mushrooms,
            maxUses: 1,
            prefix: foodPrefixes.cold,
            effect: [
                {
                    effectGiven: statusEffects.freeze,
                    effectChance: 0.8,
                    effectTime: 1,
                },
                {
                    effectGiven: statusEffects.freeze,
                    effectChance: 0.4,
                    effectTime: 4,
                },
            ],
        },
    },
    snowflower: {
        name: "Snowflower",
        raritys: raritys.rare,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.flowerrs,
            maxUses: 1,
            hpChange: 15,
            prefix: foodPrefixes.cold,
            effect: [
                {
                    effectGiven: statusEffects.freeze,
                    effectChance: 0.6,
                    effectTime: 2,
                },
            ],
        },
    },
    desertshroom: {
        name: "Desertshroom",
        raritys: raritys.rare,
        weight: 0.38,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mushrooms,
            maxUses: 1,
            prefix: foodPrefixes.salty,
            effect: [
                {
                    effectGiven: statusEffects.regeneration,
                    effectChance: 0.3,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.6,
                    effectTime: 5,
                },
            ],
        },
    },
    killerBerry: {
        name: "Killer Berry",
        raritys: raritys.master,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.toxic,
            maxUses: 1,
            prefix: foodPrefixes.deadly,
            effect: [
                {
                    effectGiven: statusEffects.waningVitality,
                    effectChance: 1,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 1,
                    effectTime: 6,
                },
                {
                    effectGiven: statusEffects.lethargic,
                    effectChance: 1,
                    effectTime: 1,
                },

                {
                    effectGiven: statusEffects.lethargic,
                    effectChance: 0.5,
                    effectTime: 2,
                },
            ],
        },
    },
    crystalFlower: {
        name: "Crystal Flower",
        raritys: raritys.master,
        weight: 1.64,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Crystal Spiked",
            socketUsageType: [itemUsageTypes.inBattle.onEnter],
            socketUses: 20,
            socketTime: 8,
            damageType: damageTypes.sharp,
        },
        foodData: {
            foodType: foodTypes.crystal,
            maxUses: 1,
            hpChange: 50,
            prefix: foodPrefixes.hardened,
            effect: [
                {
                    effectGiven: statusEffects.bloodLust,
                    effectChance: 0.7,
                    effectTime: 1,
                },
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 0.6,
                    effectTime: 2,
                },
            ],
        },
    },
    crystalFruit: {
        name: "Crystal Fruit",
        raritys: raritys.master,
        weight: 1.64,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Crushing",
            socketUsageType: [itemUsageTypes.inBattle.onDamage],
            socketUses: 20,
            socketTime: 8,
            effect: [
                {
                    effectGiven: statusEffects.armorCrunch,
                },
            ],
        },
        foodData: {
            foodType: foodTypes.crystal,
            maxUses: 1,
            hpChange: 5,
            prefix: foodPrefixes.hardened,
            effect: [
                {
                    effectGiven: statusEffects.bloodLust,
                    effectChance: 0.8,
                    effectTime: 1,
                },
                {
                    effectGiven: statusEffects.bloodLust,
                    effectChance: 0.4,
                    effectTime: 1,
                },
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 0.6,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 0.4,
                    effectTime: 3,
                },
            ],
        },
    },
    volcanoFruit: {
        name: "Volcano Fruit",
        raritys: raritys.master,
        weight: 1.64,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Molten",
            socketUsageType: [itemUsageTypes.inBattle.onEnter],
            socketUses: 20,
            socketTime: 8,
            damageType: damageTypes.fire,
            effect: [
                {
                    effectGiven: statusEffects.fireAspect,
                    onSelf: true,
                },
            ],
        },
        foodData: {
            foodType: foodTypes.peppers,
            maxUses: 1,
            prefix: foodPrefixes.superSpicy,
            effect: [
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 1,
                    effectTime: 4,
                },
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 1,
                    effectTime: 4,
                },
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 0.6,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 0.3,
                    effectTime: 3,
                },
            ],
        },
    },
    dragonFruit: {
        name: "Dragon Fruit",
        raritys: raritys.rare,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.fruit,
            maxUses: 1,
            hpChange: -35,
            prefix: foodPrefixes.disguesting,
            effect: [
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 0.4,
                    effectTime: 5,
                },

                {
                    effectGiven: statusEffects.sharpPowerUp,
                    effectChance: 0.6,
                    effectTime: 2,
                },
            ],
        },
    },
    daybloom: {
        name: "Daybloom",
        raritys: raritys.rare,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.flowerrs,
            maxUses: 1,
            prefix: foodPrefixes.earthy,
            effect: [
                {
                    effectGiven: statusEffects.stupity,
                    effectChance: 0.6,
                    effectTime: 4,
                },
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 0.8,
                    effectTime: 5,
                },
            ],
        },
    },
    moonstalk: {
        name: "Moonstalk",
        raritys: raritys.rare,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: { foodType: foodTypes.flowerrs, maxUses: 1, prefix: foodPrefixes.cold },
    },
    corn: {
        name: "Corn",
        raritys: raritys.common,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: { foodType: foodTypes.grains, maxUses: 1, prefix: foodPrefixes.starchy },
    },
    proteinBean: {
        name: "Protein Bean",
        raritys: raritys.uncommon,
        weight: 0.11,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.energizing,
            maxUses: 1,
            prefix: foodPrefixes.energizing,
            effect: [
                {
                    effectGiven: statusEffects.superCharged,
                    effectChance: 0.8,
                    effectTime: 1,
                },
            ],
        },
    },
    deathFruit: {
        name: "Death Fruit",
        raritys: raritys.master,
        weight: 0.38,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.toxic,
            maxUses: 1,
            prefix: foodPrefixes.deadly,
            effect: [
                {
                    effectGiven: statusEffects.unconscious,
                    effectChance: 0.9,
                    effectTime: 4,
                },
            ],
        },
    },
    ghostPepper: {
        name: "Ghost Pepper",
        raritys: raritys.rare,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.peppers,
            maxUses: 1,
            hpChange: 30,
            prefix: foodPrefixes.superSpicy,
            effect: [
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 1,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 0.4,
                    effectTime: 4,
                },
            ],
        },
    },
    fireHerb: {
        name: "Fire Herb",
        raritys: raritys.rare,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.herbs,
            maxUses: 1,
            prefix: foodPrefixes.spicy,
            effect: [
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 1,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 0.4,
                    effectTime: 4,
                },
            ],
        },
    },
    fumingFlower: {
        name: "Fuming Flower",
        raritys: raritys.master,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Flumeing",
            socketUsageType: [itemUsageTypes.inBattle.onDamage],
            socketUses: 7,
            socketTime: 1,
            effect: [
                {
                    effectGiven: statusEffects.stuned,
                },
            ],
        },
        foodData: {
            foodType: foodTypes.flowerrs,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.disguesting,
            effect: [
                {
                    effectGiven: statusEffects.stuned,
                    effectChance: 1,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.unconscious,
                    effectChance: 0.6,
                    effectTime: 1,
                },
            ],
        },
    },
    nitroshroom: {
        name: "Nitroshroom",
        raritys: raritys.rare,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mushrooms,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.strange,
            effect: [
                {
                    effectGiven: statusEffects.fireResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.coldResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.electricResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.toxicResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.magicResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.windResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
            ],
        },
    },
    slurpshroom: {
        name: "Slurpshroom",
        raritys: raritys.rare,
        weight: 0.22,
        hpChange: -17,
        epAmount: 3,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: { foodType: foodTypes.mushrooms, maxUses: 1, prefix: foodPrefixes.strange },
    },
    poisonShroom: {
        name: "Poison Shroom",
        raritys: raritys.uncommon,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.toxic,
            maxUses: 1,
            prefix: foodPrefixes.deadly,
            effect: [
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 1,
                    effectTime: 10,
                },
            ],
        },
    },
    bulborb: {
        name: "Bulborb",
        raritys: raritys.rare,
        weight: 1.31,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            prefix: foodPrefixes.salty,
            effect: [
                {
                    effectGiven: statusEffects.burstingVitality,
                    effectChance: 0.6,
                    effectTime: 1,
                },
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 1,
                    effectTime: 3,
                },
            ],
        },
    },
    apple: {
        name: "Apple",
        raritys: raritys.common,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.fruit,
            maxUses: 1,
            hpChange: -10,
            prefix: foodPrefixes.sweet,
        },
    },
    pineApple: {
        name: "Pine Apple",
        raritys: raritys.common,
        weight: 0.22,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.fruit,
            maxUses: 1,
            prefix: foodPrefixes.sweet,
            effect: [
                {
                    effectGiven: statusEffects.bleed,
                    effectChance: 0.25,
                    effectTime: 2,
                },
            ],
        },
    },
    water: {
        name: "Water",
        raritys: raritys.basic,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.liquid,
            maxUses: 1,
            prefix: foodPrefixes.wet, // water is wet
        },
    },
    milk: {
        name: "Milk",
        raritys: raritys.common,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.liquid,
            maxUses: 1,
            prefix: foodPrefixes.wet, // i have no idea how to describe milk
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.85,
                    effectTime: 5,
                },
            ],
        },
    },
    salt: {
        name: "Salt",
        raritys: raritys.basic,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: { foodType: foodTypes.crystal, maxUses: 1, prefix: foodPrefixes.salty },
    },
    chemicalSoup: {
        name: "Chemical Soup",
        raritys: raritys.uncommon,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Radiated",
            socketUsageType: [itemUsageTypes.inBattle.onDamage],
            socketUses: 20,
            socketTime: 8,
            damageType: damageTypes.toxic,
            effect: [
                {
                    effectGiven: statusEffects.radiated,
                },
            ],
        },
        foodData: {
            foodType: foodTypes.toxic,
            maxUses: 1,
            prefix: foodPrefixes.deadly,
            effect: [
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 0.75,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 0.75,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 0.75,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 0.4,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 1,
                    effectTime: 5,
                },
            ],
        },
    },
    slurpJuice: {
        name: "Slurp Juice",
        raritys: raritys.rare,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.mystic,
            maxUses: 1,
            prefix: foodPrefixes.strange,
            effect: [
                {
                    effectGiven: statusEffects.fireResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.coldResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.electricResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.toxicResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.magicResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.windResitance,
                    effectChance: 0.75,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.superCharged,
                    effectChance: 0.4,
                    effectTime: 2,
                },
            ],
        },
    },
    fireJuice: {
        name: "Fire Juice",
        raritys: raritys.rare,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.toxic,
            maxUses: 1,
            prefix: foodPrefixes.spicy,
            effect: [
                {
                    effectGiven: statusEffects.burning,
                    effectChance: 0.6,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.sharpPowerUp,
                    effectChance: 0.6,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.bluntPowerUp,
                    effectChance: 0.6,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.crushingResitance,
                    effectChance: 0.6,
                    effectTime: 2,
                },
            ],
        },
    },
    dragonJuice: {
        name: "Dragon Juice",
        raritys: raritys.rare,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.energizing,
            maxUses: 1,
            hpChange: -35,
            prefix: foodPrefixes.shocking,
            socketData: {
                prefix: "Dragon Blood",
                socketUsageType: [itemUsageTypes.inBattle.onEnter],
                socketUses: 20,
                socketTime: 8,
                statChange: { stat: statTypes.strength, amount: 3 },
            },
            effect: [
                {
                    effectGiven: statusEffects.superCharged,
                    effectChance: 1,
                    effectTime: 2,
                },
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 1,
                    effectTime: 8,
                },
            ],
        },
    },
    ionizedWater: {
        name: "Ionized Water",
        raritys: raritys.basic,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.liquid,
            maxUses: 1,
            prefix: foodPrefixes.deadly,
            effect: [
                {
                    effectGiven: statusEffects.radiated,
                    effectChance: 1,
                    effectTime: 2,
                },
            ],
        },
    },
    cactusWater: {
        name: "Cactus Water",
        raritys: raritys.uncommon,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.liquid,
            maxUses: 1,
            prefix: foodPrefixes.sweet,
            effect: [
                {
                    effectGiven: statusEffects.regeneration,
                    effectChance: 0.8,
                    effectTime: 2,
                },
            ],
        },
    },
    crackleWater: {
        name: "Crackle Water",
        raritys: raritys.uncommon,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.toxic,
            maxUses: 1,
            prefix: foodPrefixes.shocking,
            effect: [
                {
                    effectGiven: statusEffects.shocked,
                    effectChance: 0.75,
                    effectTime: 3,
                },
                {
                    effectGiven: statusEffects.electricPowerUp,
                    effectChance: 1,
                    effectTime: 5,
                },
            ],
        },
    },
    venom: {
        name: "Venom",
        raritys: raritys.rare,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        socketData: {
            prefix: "Venom",
            socketUsageType: [itemUsageTypes.inBattle.onEnter],
            socketUses: 20,
            socketTime: 8,
            damageType: damageTypes.toxic,
            effect: [{ effectGiven: statusEffects.toxicPowerUp, onSelf: true }],
        },
        foodData: {
            foodType: foodTypes.toxic,
            maxUses: 1,
            prefix: foodPrefixes.deadly,
            effect: [
                {
                    effectGiven: statusEffects.sick,
                    effectChance: 1,
                    effectTime: 5,
                },
                {
                    effectGiven: statusEffects.lethargic,
                    effectChance: 1,
                    effectTime: 2,
                },
            ],
        },
    },
    rainWater: {
        name: "Rain Water",
        raritys: raritys.common,
        weight: 0.27,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.liquid,
            maxUses: 1,
            hpChange: -35,
            prefix: foodPrefixes.earthy,
        },
        effect: [
            {
                effectGiven: statusEffects.gross,
                effectChance: 0.5,
                effectTime: 6,
            },
        ],
    },
    mysteryMeat: {
        name: "Mystery Meat",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -10,
            prefix: foodPrefixes.strange,
            effect: [
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 0.8,
                    effectTime: 6,
                },
            ],
        },
    },
    brownMeat: {
        name: "Brown Meat",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -20,
            prefix: foodPrefixes.salty,
        },
    },
    pikminMeat: {
        name: "Pikmin Meat",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -15,
            prefix: foodPrefixes.sweet,
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.6,
                    effectTime: 6,
                },
            ],
        },
    },
    pork: {
        name: "Pork",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -20,
            prefix: foodPrefixes.earthy,
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.6,
                    effectTime: 6,
                },
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 0.3,
                    effectTime: 6,
                },
            ],
        },
    },
    primeMeat: {
        name: "Prime Meat",
        raritys: raritys.rare,
        weight: 0.82,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -50,
            prefix: foodPrefixes.salty,
        },
    },
    fish: {
        name: "Fish",
        raritys: raritys.uncommon,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -10,
            prefix: foodPrefixes.wet,
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.6,
                    effectTime: 6,
                },
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 0.6,
                    effectTime: 6,
                },
            ],
        },
    },
    snake: {
        name: "Snake",
        raritys: raritys.uncommon,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -20,
            prefix: foodPrefixes.salty,
            effect: [
                {
                    effectGiven: statusEffects.toxicPowerUp,
                    effectChance: 0.6,
                    effectTime: 6,
                },
                {
                    effectGiven: statusEffects.toxicVulnerability,
                    effectChance: 0.6,
                    effectTime: 6,
                },
            ],
        },
    },
    rat: {
        name: "Rat",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -20,
            prefix: foodPrefixes.disguesting,
            effect: [
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 1,
                    effectTime: 6,
                },
            ],
        },
    },
    raccoon: {
        name: "Raccoon",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -20,
            prefix: foodPrefixes.salty,
            effect: [
                {
                    effectGiven: statusEffects.gross,
                    effectChance: 1,
                    effectTime: 4,
                },
            ],
        },
    },
    thinMeat: {
        name: "Thin Meat",
        raritys: raritys.uncommon,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -5,
            prefix: foodPrefixes.starchy, // was going to make one called disapointing
        },
    },
    cookedMeat: {
        name: "Cooked Meat",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -20,
            prefix: foodPrefixes.salty, // fallback if you get not cooked, cooked meat
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 0.75,
                    effectTime: 2,
                },
            ],
        },
    },
    saltedMeat: {
        name: "Salted Meat",
        raritys: raritys.common,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -20,
            prefix: foodPrefixes.salty,
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 1,
                    effectTime: 4,
                },
            ],
        },
    },
    smokedMeat: {
        name: "Smoked Meat",
        raritys: raritys.uncommon,
        weight: 0.55,
        weaponData: { weaponType: weaponTypes.gloves },
        foodData: {
            foodType: foodTypes.meat,
            maxUses: 1,
            hpChange: -35,
            prefix: foodPrefixes.earthy,
            effect: [
                {
                    effectGiven: statusEffects.yum,
                    effectChance: 1,
                    effectTime: 4,
                },
            ],
        },
    },
    // crafting stations
    campfire: {
        name: "Campfire",
        raritys: raritys.basic,
        weight: 1.64,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 2,
    },
    furnace: {
        name: "Furnace",
        raritys: raritys.uncommon,
        weight: 3.27,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 3,
    },
    workbench: {
        name: "Workbench",
        raritys: raritys.basic,
        weight: 1.09,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 2,
    },
    anvil: {
        name: "Anvil",
        raritys: raritys.rare,
        weight: 5.45,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 2,
    },
    morterPestal: {
        name: "Morter Pestal",
        raritys: raritys.common,
        weight: 0.92,
        weaponData: { weaponType: weaponTypes.bluntObject },
        placementSize: 1,
    },
    crusher: {
        name: "Crusher",
        raritys: raritys.rare,
        weight: 6.55,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 3,
    },
    brewerMixer: {
        name: "Brewer Mixer",
        raritys: raritys.master,
        weight: 4.73,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 3,
    },
    godsForge: {
        name: "Gods Forge",
        raritys: raritys.mythic,
        weight: 32.73,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 4,
    },
    // placeable items
    bed: {
        name: "bed",
        raritys: raritys.uncommon,
        weight: 5.5,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 3,
    },
    smallBox: {
        name: "small Box",
        raritys: raritys.common,
        weight: 2.4,
        weaponData: { weaponType: weaponTypes.shield },
        placementSize: 1,
    },
    bigBox: {
        name: "big Box",
        raritys: raritys.uncommon,
        weight: 4.2,
        weaponData: { weaponType: weaponTypes.shield },
        placementSize: 2,
    },
    hugeBox: {
        name: "huge Box",
        raritys: raritys.rare,
        weight: 7,
        weaponData: { weaponType: weaponTypes.shield },
        placementSize: 3,
    },
    smallTrap: {
        name: "small Trap",
        raritys: raritys.uncommon,
        weight: 1.4,
        weaponData: { weaponType: weaponTypes.knife },
        placementSize: 1,
    },
    bigTrap: {
        name: "big Trap",
        raritys: raritys.rare,
        weight: 3.2,
        weaponData: { weaponType: weaponTypes.pickaxe },
        placementSize: 2,
    },
    hugeTrap: {
        name: "huge Trap",
        raritys: raritys.master,
        weight: 6.8,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 3,
    },
    floatingTrap: {
        name: "floating Trap",
        raritys: raritys.uncommon,
        weight: 1.3,
        weaponData: { weaponType: weaponTypes.bluntObject },
        placementSize: 2,
    },
    largeCanister: {
        name: "large Canister",
        raritys: raritys.rare,
        weight: 10.3,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 3,
    },
    massiveCanister: {
        name: "massive Canister",
        raritys: raritys.master,
        weight: 22.8,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 5,
    },
    table: {
        name: "table",
        raritys: raritys.uncommon,
        weight: 3.1,
        weaponData: { weaponType: weaponTypes.largeObject },
        placementSize: 3,
    },
    chair: {
        name: "chair",
        raritys: raritys.uncommon,
        weight: 3.4,
        weaponData: { weaponType: weaponTypes.club },
        placementSize: 2,
    },
    // equipment, fallback data --------------------------------------------------
    pickaxe: {
        name: "pickaxe",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.pickaxe },
        equipSlot: equipSlots.mainHand,
    },
    hammer: {
        name: "hammer",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.hammer },
        equipSlot: equipSlots.mainHand,
    },
    guardingHammer: {
        name: "guardingHammer",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.guardingHammer },
        equipSlot: equipSlots.mainHand,
    },
    drill: {
        name: "drill",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.drill },
        equipSlot: equipSlots.mainHand,
    },
    shield: {
        name: "shield",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.shield },
        equipSlot: equipSlots.mainHand,
    },
    knife: {
        name: "knife",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.knife },
        equipSlot: equipSlots.mainHand,
    },
    sword: {
        name: "sword",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.sword },
        equipSlot: equipSlots.mainHand,
    },
    guardingSword: {
        name: "guardingSword",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.guardingSword },
        equipSlot: equipSlots.mainHand,
    },
    slapstick: {
        name: "slapstick",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.slapstick },
        equipSlot: equipSlots.mainHand,
    },
    gloves: {
        name: "gloves",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.gloves },
        equipSlot: equipSlots.mainHand,
    },
    gunFast: {
        name: "gunFast",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.gunFast },
        equipSlot: equipSlots.mainHand,
    },
    gunSlow: {
        name: "gunSlow",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.gunSlow },
        equipSlot: equipSlots.mainHand,
    },
    bow: {
        name: "bow",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.bow },
        equipSlot: equipSlots.mainHand,
    },
    spear: {
        name: "spear",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.spear },
        equipSlot: equipSlots.mainHand,
    },
    club: {
        name: "club",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.club },
        equipSlot: equipSlots.mainHand,
    },
    whip: {
        name: "whip",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.whip },
        equipSlot: equipSlots.mainHand,
    },
    helmet: {
        name: "helmet",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.gloves },
        equipSlot: equipSlots.head,
    },
    pendent: {
        name: "pendent",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.slapstick },
        equipSlot: equipSlots.necklace,
    },
    leggings: {
        name: "leggings",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.hammer },
        equipSlot: equipSlots.pants,
    },
    chestplate: {
        name: "chestplate",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.shield },
        equipSlot: equipSlots.hands,
    },
    gloves: {
        name: "gloves",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.gloves },
        equipSlot: equipSlots.body,
    },
    boots: {
        name: "boots",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.pickaxe },
        equipSlot: equipSlots.feet,
    },
    belt: {
        name: "belt",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.whip },
        equipSlot: equipSlots.belt,
    },
    backPack: {
        name: "backPack",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.bluntObject },
        equipSlot: equipSlots.storage,
    },
    axe: {
        name: "axe",
        raritys: raritys.basic,
        weight: 1,
        weaponData: { weaponType: weaponTypes.axe },
        equipSlot: equipSlots.mainHand,
    },
};
