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
 * @property {Number|undefined} level - This is weapon type level not person level (put 0 if you always have it) haveing 1 level in a weapon means you proficiency but no other levels
 * @property {boolean|undefined} targetSelf - if you need to pick a target to use this move (by defualt true)
 * @property {boolean} reactionUsageType - what must happen for this attack to appear as a reaction
 *
 * @property {Number|undefined} damage - amount of damage it deals (if damageMult is present this is a bounus)
 * @property {Number|undefined} damageMult - multipler of the base damage that is added to the attack
 * @property {Number|undefined} armorDamage - how much defense is ignored when hitting with this attack
 * @property {Number|undefined} armorDamageMult - presentage of the armor ignored by this attack
 *
 * @property {Number|undefined} hits - amount of hit this attack does
 * @property {Boolean|undefined} endAfterMiss - if you miss stop all subsqent hits from this move (costs epCost per hit)
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
 * @property {Function} requirements - function to check if the user meets the special requirements to use this move
 * @property {boolean} noConsume - don't consume ammo
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
    // level 0 attacks
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
    // shield attacks
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
        speicalFunction: () => {
            console.warn("guardingWith var not set");
        },
    },
    shieldBash: {
        name: "Shield bash",
        attackFor: [weaponTypes.shield],
        epCost: 1,
        level: 2,
        damageMult: 0.4,
        damagetype: [damageTypes.pushing],
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
        speicalFunction: () => {
            console.warn("guardingWith var not set");
        },
    },
    parry: {
        name: "Parry",
        attackFor: [weaponTypes.shield],
        targetSelf: true,
        epCost: 2,
        level: 6,
        damageMult: 0.4,
        speicalFunction: () => {
            console.warn("parry function missing");
        },
        attackUsageType: itemUsageTypes.inBattle.onRollAny,
        rollFor: statTypes.intelligence,
    },
    counter: {
        name: "counter",
        attackFor: [weaponTypes.shield, weaponTypes.guardingSword],
        level: 8,
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
        speicalFunction: () => {
            console.warn("guardingWith var not set", "attackWith var not set");
        },
    },
    counterParry: {
        name: "counter Parry",
        attackFor: [weaponTypes.shield],
        level: 10,
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
        speicalFunction: () => {
            console.warn(
                "guardingWith var not set",
                "attackWith var not set",
                "parry function missing",
            );
        },
    },
    // Gun moves
    shootGun: {
        name: "shoot",
        attackFor: [weaponTypes.boatWeapon, weaponTypes.gunFast, weaponTypes.gunSlow],
        level: 0,
        epCost: 0,
    },
    threeShot: {
        name: "3x shot",
        attackFor: [weaponTypes.gunFast],
        level: 1,
        hits: 3,
        epCost: 1,
        damageMult: 0.5,
    },
    aim: {
        name: "Steady aim",
        attackFor: [weaponTypes.gunFast, weaponTypes.gunSlow, weaponTypes.bow],
        level: 3,
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
    largeTwoShot: {
        name: "2x Shot",
        attackFor: [weaponTypes.gunSlow],
        level: 4,
        hits: 1,
        epCost: 2,
        damageMult: 0.7,
    },
    fiveShot: {
        name: "5x Shot",
        attackFor: [weaponTypes.gunFast],
        level: 5,
        hits: 5,
        epCost: 2,
        damageMult: 0.32,
    },
    legShot: {
        name: "leg Shot",
        attackFor: [weaponTypes.gunSlow, weaponTypes.gunFast, weaponTypes.bow],
        damageMult: 0.7,
        epCost: 3,
        level: 6,
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
        epCost: 2,
        level: 7,
        accuracy: -2,
    },
    largeThreeShot: {
        name: "3x Shot",
        attackFor: [weaponTypes.gunSlow],
        epCost: 3,
        level: 8,
        hits: 3,
        damageMult: 0.65,
        accuracy: -1,
    },
    eightShot: {
        name: "8x Shot",
        attackFor: [weaponTypes.gunFast],
        level: 10,
        epCost: 3,
        hits: 8,
        accuracy: -1,
        damageMult: 0.25,
    },
    precisionShot: {
        name: "Precision Shot",
        attackFor: [weaponTypes.gunSlow],
        epCost: 3,
        level: 10,
        accuracy: 3,
    },
    // bow some are in the gun section
    shootBow: {
        name: "shoot",
        attackFor: [weaponTypes.bow],
        epCost: 1,
        level: 0,
    },
    volly: {
        name: "Volly",
        attackFor: [weaponTypes.bow],
        level: 2,
        epCost: 2,
        accuracy: -2,
        aoiSize: "small",
    },
    mutiShot: {
        name: "muti Shot",
        attackFor: [weaponTypes.bow],
        epCost: 3,
        level: 4,
        hits: 3,
        accuracy: 2,
    },
    largeVolly: {
        name: "Large volly",
        attackFor: [weaponTypes.bow],
        level: 5,
        epCost: 4,
        accuracy: -1,
        aoiSize: "mid",
    },
    precisionShot: {
        name: "Precision Shot",
        attackFor: [weaponTypes.bow],
        epCost: 3,
        level: 7,
        accuracy: 3,
    },
    hugeVolly: {
        name: "huge volly",
        attackFor: [weaponTypes.bow],
        level: 10,
        epCost: 6,
        accuracy: -2,
        aoiSize: "large",
    },
    // slapsticks
    rapaSmack: {
        name: "Rapa smack",
        attackFor: [weaponTypes.slapstick],
        level: 2,
        epCost: 2,
        hits: 3,
        damageMult: 0.4,
    },
    spin: {
        name: "Spin",
        attackFor: [weaponTypes.slapstick],
        level: 3,
        epCost: 1,
        damageMult: 0.42,
        endAfterMiss: true,
    },
    dashSmack: {
        name: "Dash smack",
        attackFor: [weaponTypes.slapstick],
        level: 4,
        epCost: 2,
        speed: 4,
    },
    powerSmash: {
        name: "Power smack",
        attackFor: [weaponTypes.slapstick],
        level: 5,
        epCost: 3,
        damageMult: 1.5,
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
    quintupleSmack: {
        name: "Quintuple smack",
        attackFor: [weaponTypes.slapstick],
        level: 7,
        epCost: 3,
        hits: 5,
        damageMult: 0.35,
        accuracy: -1,
    },
    octoSmack: {
        name: "Octo smack",
        attackFor: [weaponTypes.slapstick],
        level: 10,
        epCost: 4,
        hits: 8,
        damageMult: 0.29,
        accuracy: -1,
    },
};
