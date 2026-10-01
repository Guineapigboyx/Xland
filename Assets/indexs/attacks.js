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
 * @property {Number|undefined} level - This is weapon type level not person level (put 0 if you always have it)
 * @property {boolean|undefined} targetSelf - if you need to pick a target to use this move (by defualt true)
 * @property {boolean} reactionUsageType - what must happen for this attack to appear as a reaction
 * 
 * @property {Number|undefined} damage - amount of damage it deals (if damageMult is present this is a bounus)
 * @property {Number|undefined} damageMult - multipler of the base damage that is added to the attack
 * @property {Number|undefined} armorDamage - how much defense is ignored when hitting with this attack
 * @property {Number|undefined} armorDamageMult - presentage of the armor ignored by this attack
 *
 * @property {Number|undefined} hits - amount of hit this attack does
 * @property {Boolean|undefined} endAfterMiss - if you miss stop all subsqent hits from this move
 *
 * @property {Number|undefined} speed - how fast the attack is (default is 5)
 * @property {Number|undefined} accuracy - how much accuracy is removed or added
 * @property {Number|undefined} citChance - how much crit chance is removed or added
 *
 * @property {Number|undefined} selfDamage - how much damage is delt to the user
 * @property {Number|undefined} durablity - how much durablity is lost when useing the move (by default it uses 1)
 *
 * @property {statTypes.statType|undefined} rollFor - what stat are you rolling with for this attack
 * 
 * @property {small|meid|large|huge} aoiSize - size of this attack if it is a aoi
 * @property {damagetype[]|undefined} damagetype - array of every element this attack has
 * @property {effect[]|undefined} effect - array of every satus effect that is given by this weapon
 *
 * @property {Function} requirements - function to check if the user meets the special requirements to use this move
 
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
            weaponTypes.gloves,
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
};
