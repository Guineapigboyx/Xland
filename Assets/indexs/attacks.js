/*
Xland battle mechanics

It is turn based so each person on your team will do their attack(s) then the enmmies would do theirs.

--- EP
A big diffrence with xland combat from a lot of other systems is EP(endurance points). Every thing (that can do combat) has EP.
Ep says how many moves and strength of moves one can do. Most moves drain some amount of EP so you can only do so many attacks before you run out

By default you can only do 1 attack per turn but you can do a action surge draining a small aditonal amount of ep to do another attack in the same turn.
(The cost of action surges are exponental so the first one may be 2 but the next one is 3 then the next is 5 then next one is 8)

Also every round you will restore a small amount of EP per turn (by defualt 1 but it can be raised with item or effects)
There are also some ways to get free action surges like from passive effects or the bloodlust status effect.
---

Tho for the most part battles are like DND just without bonus actions or spell slots.
*/

/**
 * Data for all of the attacks in xland
 *
 * @typedef {object} attacks - all the xland attacks
 * @property {attack}
 *
 * @typedef {Object} attack - the id of the attack like "verticalSlash"
 * @property {string} name - name of the attack
 * @property {string} description - decription of the attack
 * @property {weaponTypes.weaponType[]|undefined} attackFor - the weapon type this attack is for, if undefined its not connected to a weapon
 * @property {Number} epCost - amount of enduance it costs to use the attack
 * @property {"large"|"small"|undefined} weaponSize - if 2 handed or 1 handed or both can use this
 * @property {0|1|2|3|4|5|6|7|undefined} level - This is weapon type level not person level (put 0 if you always have it) haveing 1 level in a weapon means you proficiency but no other levels
 * @property {boolean|undefined} targetSelf - if you need to pick a target to use this move (by defualt true)
 * @property {boolean|undefined} reactionUsageType - what must happen for this attack to appear as a reaction
 *
 * @property {Number|undefined} damage - amount of damage it deals (if damageMult is present this is a bounus)
 * @property {Number|undefined} damageMult - multipler of the base damage that is added to the attack
 * @property {Number|undefined} armorDamage - how much defense is ignored when hitting with this attack
 * @property {Number|undefined} armorDamageMult - presentage of the armor ignored by this attack
 *
 * @property {Number|undefined} hits - amount of hit this attack does
 * @property {Boolean|undefined} endAfterMiss - keep hitting the target until you miss (costs epCost per hit)
 * @property {Number|undefined} targets - how many targets are you able to hit with this move (must be equal or lower than hits)
 *
 * @property {1|2|3|4|5|undefined} speed - how fast the attack is (default is 3)
 * @property {Number|undefined} accuracy - how much accuracy is removed or added
 * @property {Number|undefined} citChance - how much crit chance is removed or added
 *
 * @property {Number|undefined} selfDamage - how much damage is delt to the user
 * @property {Number|undefined} durablity - how much durablity is lost when useing the move (by default it uses 1)
 *
 * @property {statTypes.statType|undefined} rollFor - what stat are you rolling with for this attack
 *
 * @property {small|mid|large|huge} aoiSize - size of this attack if it is a aoi
 * @property {damagetype[]|undefined} damagetype - array of every element this attack has
 * @property {effect[]|undefined} effect - array of every satus effect that is given by this weapon
 *
 * @property {Function|undefined} requirements - function to check if the user meets the special requirements to use this move
 * @property {boolean|undefined} noConsume - don't consume ammo
 *
 * @property {Function|undefined} speicalFunction - special function for the attack (use only if you have to)
 * @property {itemUsageTypes.inBattle[]|undefined} attackUsageType - only run speicalFunction if this UsageType happens also
 *
 * ----
 * @typedef {Object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 * @property {boolean} duringAttack - does this effect happen right before the attack roll or after
 * @property {Boolean|undefined} onSelf - if the effect is given to your self or a target
 */
const attacks = {
    // basic attacks
    basicJab: {
        name: "Basic jab",
        attackFor: [
            weaponTypes.guardingSword,
            weaponTypes.sword,
            weaponTypes.knife,
            weaponTypes.drill,
            weaponTypes.spear,
        ],
        weaponSize: "small",
        epCost: 1,
        level: 0,
    },
    heavySlash: {
        name: "Heavy swing",
        attackFor: [
            weaponTypes.guardingSword,
            weaponTypes.sword,
            weaponTypes.knife,
            weaponTypes.pickaxe,
            weaponTypes.club,
            weaponTypes.guardingHammer,
            weaponTypes.hammer,
            weaponTypes.slapstick,
            weaponTypes.whip,
            weaponTypes.largeObject,
            weaponTypes.bluntObject,
        ],
        weaponSize: "large",
        epCost: 2,
        level: 0,
    },
    heavyJab: {
        name: "Heavy jab",
        attackFor: [weaponTypes.drill, weaponTypes.spear, weaponTypes.gloves, weaponTypes.shield],
        weaponSize: "large",
        epCost: 1,
        level: 0,
        effect: [
            {
                effectGiven: statusEffects.tired,
                effectChance: 0.5,
                effectTime: 1,
                duringAttack: false,
                onSelf: true,
            },
        ],
    },
    basicSwing: {
        name: "Basic swing",
        attackFor: [
            weaponTypes.club,
            weaponTypes.slapstick,
            weaponTypes.hammer,
            weaponTypes.pickaxe,
            weaponTypes.whip,
            weaponTypes.bluntObject,
        ],
        weaponSize: "small",
        epCost: 1,
        level: 0,
    },
    shootGun: {
        name: "shoot",
        attackFor: [weaponTypes.boatWeapon, weaponTypes.gunFast, weaponTypes.gunSlow],
        level: 0,
        epCost: 0,
    },
    shootBow: {
        name: "shoot",
        attackFor: [weaponTypes.bow],
        epCost: 1,
        level: 0,
    },
    // shields ---------------------------------------------------
    guard: {
        name: "Guard",
        targetSelf: true,
        level: 0,
        effect: [
            {
                effectGiven: statusEffects.guarding,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
                onSelf: true,
            },
        ],
        // todo guardingWith var not set
        speicalFunction: () => {
            console.warn("guardingWith var not set");
        },
    },
    shieldBash: {
        name: "Shield bash",
        attackFor: [weaponTypes.shield],
        epCost: 1,
        level: 1,
        damageMult: 0.4,
        damagetype: [damageTypes.pushing],
        rollFor: statTypes.strength,
    },
    shieldJump: {
        name: "Shield jump",
        attackFor: [weaponTypes.shield],
        epCost: 3,
        level: 2,
        selfDamage: 12,
        targetSelf: true,
        effect: [
            {
                effectGiven: statusEffects.bluntPowerUp,
                effectChance: 1,
                effectTime: 1,
                onSelf: true,
            },
            {
                effectGiven: statusEffects.sharpPowerUp,
                effectChance: 1,
                effectTime: 1,
                onSelf: true,
            },
            {
                effectGiven: statusEffects.noDefend, // stops you from shield jumping while alreday jumped
                effectChance: 1,
                effectTime: 1,
                onSelf: true,
            },
            {
                effectGiven: statusEffects.bloodLust,
                effectChance: 1,
                effectTime: 1,
                onSelf: true,
            },
        ],
        rollFor: statTypes.strength,
    },
    sturdyGuard: {
        name: "Sturdy guard",
        attackFor: [weaponTypes.shield, weaponTypes.guardingHammer, weaponTypes.guardingSword],
        targetSelf: true,
        level: 3,
        epCost: 1,
        effect: [
            {
                effectGiven: statusEffects.guarding,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
                onSelf: true,
            },
            {
                effectGiven: statusEffects.pushResitance,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
                onSelf: true,
            },
        ],
        // todo guardingWith var not set
        speicalFunction: () => {
            console.warn("guardingWith var not set");
        },
    },
    protect: {
        name: "Protect",
        attackFor: [weaponTypes.shield, weaponTypes.guardingHammer, weaponTypes.guardingSword],
        level: 4,
        epCost: 1,
        effect: [
            {
                effectGiven: statusEffects.guarding,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
                onSelf: true,
            },
            {
                effectGiven: statusEffects.guarding,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
            },
        ],
        // todo guardingWith var not set
        speicalFunction: () => {
            console.warn("guardingWith var not set");
        },
    },
    parry: {
        name: "Parry",
        attackFor: [weaponTypes.shield],
        targetSelf: true,
        epCost: 2,
        level: 5,
        damageMult: 0.4,
        // todo parry function missing
        speicalFunction: () => {
            console.warn("parry function missing");
        },
        attackUsageType: itemUsageTypes.inBattle.onRollAny,
        rollFor: statTypes.intelligence,
    },
    counter: {
        name: "counter",
        attackFor: [weaponTypes.shield, weaponTypes.guardingSword],
        level: 6,
        epCost: 3,
        effect: [
            {
                effectGiven: statusEffects.counterReady,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
                onSelf: true,
            },
        ],
        rollFor: statTypes.intelligence,
        // todo counter function
        speicalFunction: () => {
            console.warn("guardingWith var not set", "attackWith var not set");
        },
    },
    counterParry: {
        name: "counter Parry",
        attackFor: [weaponTypes.shield],
        level: 7,
        epCost: 4,
        effect: [
            {
                effectGiven: statusEffects.counterReady,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
                onSelf: true,
            },
        ],
        rollFor: statTypes.intelligence,
        // todo counter parry function
        speicalFunction: () => {
            console.warn(
                "guardingWith var not set",
                "attackWith var not set",
                "parry function missing",
            );
        },
    },

    // ranged shared ---------------------------------------------------
    aim: {
        name: "Steady aim",
        attackFor: [weaponTypes.gunFast, weaponTypes.gunSlow, weaponTypes.bow],
        level: 1,
        epCost: 2,
        durablity: 0,
        targetSelf: true,
        effect: [
            {
                effectGiven: statusEffects.sharpShoot,
                effectChance: 0.65,
                effectTime: 1,
                onSelf: true,
            },
        ],
    },
    legShot: {
        name: "leg Shot",
        attackFor: [weaponTypes.gunSlow, weaponTypes.gunFast, weaponTypes.bow],
        damageMult: 0.7,
        epCost: 3,
        level: 3,
        effect: [
            {
                effectGiven: statusEffects.prone,
                effectChance: 0.8,
                effectTime: 2,
            },
            {
                effectGiven: statusEffects.brokenLeg,
                effectChance: 0.2,
                effectTime: 5,
            },
        ],
    },
    headShot: {
        name: "Head Shot",
        attackFor: [weaponTypes.gunSlow, weaponTypes.gunFast, weaponTypes.bow],
        damageMult: 1.5,
        epCost: 5,
        level: 5,
        accuracy: -2,
    },

    // gun fast ---------------------------------------------------
    // lv 1 steady aim
    threeShot: {
        name: "3x shot",
        attackFor: [weaponTypes.gunFast],
        level: 2,
        hits: 3,
        epCost: 1,
        damageMult: 0.4,
    },
    // lv 3 leg shot
    fiveShot: {
        name: "5x Shot",
        attackFor: [weaponTypes.gunFast],
        level: 4,
        hits: 5,
        epCost: 2,
        damageMult: 0.32,
    },
    // lv 5 head shot
    mutiShot: {
        name: "Muti shot",
        attackFor: [weaponTypes.gunFast],
        level: 6,
        epCost: 4,
        targets: 3,
        hits: 3,
        damageMult: 0.5,
    },
    eightShot: {
        name: "8x Shot",
        attackFor: [weaponTypes.gunFast],
        level: 7,
        epCost: 3,
        hits: 8,
        accuracy: -1,
        damageMult: 0.3,
    },

    // gun slow ---------------------------------------------------
    // lv 1 steady aim
    piercingShot: {
        name: "Piercing Shot",
        attackFor: [weaponTypes.gunSlow],
        level: 2,
        epCost: 2,
        armorDamageMult: 0.3,
    },
    // lv 3 leg shot
    largeTwoShot: {
        name: "2x Shot",
        attackFor: [weaponTypes.gunSlow],
        level: 4,
        hits: 2,
        targets: 2,
        epCost: 2,
        damageMult: 0.7,
    },
    // lv 5 head shot
    gunPrecisionShot: {
        name: "Precision Shot",
        attackFor: [weaponTypes.gunSlow],
        epCost: 3,
        level: 6,
        accuracy: 3,
    },
    largeThreeShot: {
        name: "3x Shot",
        attackFor: [weaponTypes.gunSlow],
        epCost: 3,
        level: 7,
        hits: 3,
        damageMult: 0.65,
        accuracy: -1,
    },
    // bow ---------------------------------------------------
    // lv 1 steady aim
    volly: {
        name: "Volly",
        attackFor: [weaponTypes.bow],
        level: 2,
        epCost: 2,
        accuracy: -2,
        aoiSize: "small",
    },
    bowThreeShot: {
        name: "muti Shot",
        attackFor: [weaponTypes.bow],
        epCost: 3,
        level: 3,
        hits: 3,
        damageMult: 0.37,
        accuracy: 2,
    },
    largeVolly: {
        name: "Large volly",
        attackFor: [weaponTypes.bow],
        level: 4,
        epCost: 4,
        accuracy: -1,
        aoiSize: "mid",
    },
    bowPrecisionShot: {
        name: "Precision Arrow",
        attackFor: [weaponTypes.bow],
        epCost: 3,
        level: 5,
        accuracy: 3,
    },
    debilitatingShot: {
        name: "Debilitating Shot",
        attackFor: [weaponTypes.bow],
        level: 6,
        epCost: 3,
        accuracy: -1,
        effect: [
            {
                effectGiven: statusEffects.prone,
                effectChance: 0.8,
                effectTime: 1,
            },
            {
                effectGiven: statusEffects.prone,
                effectChance: 0.5,
                effectTime: 3,
            },
            {
                effectGiven: statusEffects.paralysis,
                effectChance: 0.2,
                effectTime: 1,
            },
        ],
    },
    hugeVolly: {
        name: "huge volly",
        attackFor: [weaponTypes.bow],
        level: 7,
        epCost: 6,
        accuracy: -2,
        aoiSize: "large",
    },
    // slapsticks ---------------------------------------------------
    rapaSmack: {
        name: "Rapa smack",
        attackFor: [weaponTypes.slapstick],
        level: 1,
        epCost: 2,
        hits: 3,
        damageMult: 0.4,
    },
    dashSmack: {
        name: "Dash smack",
        attackFor: [weaponTypes.slapstick],
        level: 2,
        epCost: 2,
        speed: 4,
    },
    powerSmash: {
        name: "Power smack",
        attackFor: [weaponTypes.slapstick],
        level: 3,
        epCost: 3,
        damageMult: 1.3,
    },
    spin: {
        name: "Spin",
        attackFor: [weaponTypes.slapstick],
        level: 4,
        epCost: 1,
        damageMult: 0.5,
        endAfterMiss: true,
    },
    quintupleSmack: {
        name: "Quintuple smack",
        attackFor: [weaponTypes.slapstick],
        level: 5,
        epCost: 3,
        hits: 5,
        damageMult: 0.35,
        accuracy: -1,
    },
    stunSmash: {
        name: "Stuning smash",
        attackFor: [weaponTypes.slapstick],
        level: 6,
        epCost: 3,
        damageMult: 0.8,
        endAfterMiss: true,
        effect: [
            {
                effectGiven: statusEffects.stuned,
                effectChance: 0.7,
                effectTime: 3,
            },
        ],
    },
    octoSmack: {
        name: "Octo smack",
        attackFor: [weaponTypes.slapstick],
        level: 7,
        epCost: 4,
        hits: 8,
        damageMult: 0.29,
        accuracy: -1,
    },
    // drill ---------------------------------------------------
    bore: {
        name: "Bore",
        attackFor: [weaponTypes.drill],
        level: 1,
        epCost: 3,
        hits: 5,
        damageMult: 0.15,
    },
    proneBore: {
        name: "Downwards bore",
        attackFor: [weaponTypes.drill],
        level: 1,
        epCost: 3,
        hits: 5,
        // todo function for checking if someone is prone
        requirements: () => {
            console.warn("check for is prone missing");
        },
        rollFor: statTypes.strength,
    },
    dashDrill: {
        name: "Dash Drill",
        attackFor: [weaponTypes.drill],
        level: 2,
        epCost: 2,
        speed: 3,
    },
    shred: {
        name: "Shred",
        attackFor: [weaponTypes.drill],
        level: 3,
        epCost: 2,
        damageMult: 0.5,
        armorDamageMult: 0.5,
    },
    drillGuard: {
        name: "Drill Guard",
        attackFor: [weaponTypes.drill],
        level: 4,
        epCost: 1,
        effect: [
            {
                effectGiven: statusEffects.counterReady,
                effectChance: 1,
                effectTime: 1,
                duringAttack: true,
                onSelf: true,
            },
        ],
        rollFor: statTypes.speed,
        // todo counter function and seting the weapon automatticly to the drill
        speicalFunction: () => {
            console.warn("guardingWith var not set", "attackWith not set to drill");
        },
    },
    shredGuard: {
        name: "Shred Guard",
        attackFor: [weaponTypes.drill],
        level: 5,
        epCost: 4,
        effect: [
            {
                effectGiven: statusEffects.noDefend,
                effectChance: 1,
                effectTime: 2,
            },
            {
                effectGiven: statusEffects.armorCrunch,
                effectChance: 1,
                effectTime: 2,
            },
            {
                effectGiven: statusEffects.armorCrunch,
                effectChance: 0.5,
                effectTime: 2,
            },
        ],
        rollFor: statTypes.intelligence,
    },
    overBore: {
        name: "Over Bore",
        attackFor: [weaponTypes.drill],
        level: 6,
        epCost: 1,
        damageMult: 0.4,
        endAfterMiss: true,
        effect: [
            {
                effectGiven: statusEffects.armorCrunch,
                effectChance: 0.333,
                effectTime: 2,
            },
        ],
    },
    pierceArmor: {
        name: "pierce armor",
        attackFor: [weaponTypes.drill],
        level: 7,
        epCost: 4,
        armorDamageMult: 0.8,
    },
};
