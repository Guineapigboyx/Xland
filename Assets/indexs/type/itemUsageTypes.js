/**
 * @typedef {Object} itemUsageTypes - list of all of the diffrent ways something can be activated
 * @property {string} - the usageType
 */
const itemUsageTypes = {
    inBattle: {
        // the player way they can use the item
        useSelf: "useSelfCombat", // use it on your self
        useTeamOnly: "useTeamOnlyCombat", // use it only teamates
        useTeam: "useTeamCombat", // use it on your self or any teamate
        useEnemy: "useEnemyCombat", // use it on only Enemys
        useAnyone: "useAnyoneCombat", // use it on anyone
        useGiga: "useGigaCombat", // use only on giga beasts
        // when the item is auto activated
        onEnter: "onEnterCombat", // when you enter combat
        onHit: "onHitCombat", // when the user is hit it is used
        onDeath: "onDeathCombat", // when you die it is used
        onRollFail: "onRollFailCombat", // when you fail a roll it is used
        onRollSuccess: "onRollSuccessCombat", // when you succeed in a roll it is used
        onRollAny: "onRollAnyCombat", // when you do a roll with any outcome it will be used
        onRoll: "onRollCombat", // when you do a roll it is used (can be used for roll modifers)
        onDamage: "onDamageCombat", // when you hit something else it is used (it does not need to do damage)
        onCritical: "onCriticalCombat", // when you are at 1/6 of your max hp
        onTurnChange: "onTurnChange", // when the turns change
        onIncapable: "onIncapable", // when you lose the ability to attack in a turn (could come from haveing no EP or a status effect)
    },
    outBattle: {
        // the player way they can use the item
        useSelf: "useSelf", // use it on your self
        useTeamOnly: "useTeamOnly", // use it only teamates
        useTeam: "useTeam", //  use it on your self or any teamate
        useEnemy: "useEnemy", // use it on only Enemys
        useAnyone: "useAnyone", // use it on anyone
        useGiga: "useGiga", // use only on giga beasts
        // when the item is auto activated
        onLeave: "onLeave", // when you leave combat
        onCooking: "onCooking", // when you cook something it is used
        onCrafting: "onCrafting", // when you craft something it is used
        onHit: "onHit", // when the user is hit it is used
        onDeath: "onDeath", // when you die it is used
        onRollFail: "onRollFail", // when you fail a roll it is used
        onRollSuccess: "onRollSuccess", // when you succeed in a roll it is used
        onRollAny: "onRollAny", // when you do a roll with any outcome it will be used
        onRoll: "onRoll", // when you do a roll it is used (can be used for roll modifers)
        onDamage: "onDamage", // when you hit something else it is used (it does not need to do damage)
        onHour: "onHour", // when the hour changes
        onFire: "onFire", // when on fire
        onSleep: "onSleep", // when going to sleep
        onDay: "onDay", // when the day ends (if the day changes in combat this is ran after combat ends)
        onCritical: "onCritical", // when you are at 1/6 of your max hp
        // entering somewhere
        enterCold: "enterCold",
        enterHot: "enterHot",
        enterWater: "enterWater",
    },
};
