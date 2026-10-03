/**
 * @typedef {Object} statusEffects - every status effect in xland
 * @property {effect}
 *
 * @typedef {Object} effect -
 * @property {string} name - name of the effect
 * @property {string} description - decription of the effect
 *
 * @property {effectFunctions[]} effectFunctions - when the item usage type happens it will run corisponding function
 * @property {statTypes.statType[]|undefined} saveingThrow - stat the effect uses for saveing throws
 * @property {statChange[]|undefined} statchanges - Array of which stat and how much is changed in each stat
 * @property {attacks.attack} specialAttack - a special attack given by this effect
 *
 * ----
 * @typedef {object} statChange - how much is changed in this stat
 * @property {string} statName - the stats name (statType.name)
 * @property {Number} change - the amount it changes
 *
 * ----
 * @typedef {Object} effectFunctions - when the item usage type happens it will run corisponding function
 * @property {itemUsageTypes} usageType
 * @property {Function} effectFunction - the function for the when the corisponding usageType happens
 */
const statusEffects = {
    burning: { name: "Burning" },
    sick: { name: "Sick" },
    radiated: { name: "Radiated" },
    shocked: { name: "Shocked" },
    wet: { name: "Wet" },
    paralysis: { name: "Paralysis" },
    brokenArm: { name: "Broken Arm" }, // attack rolls have disavantage
    brokenLeg: { name: "Broken Leg" }, // movement rolls have disavantage and speed is lowered
    bleed: { name: "Bleed" },
    stuned: { name: "Stuned" },
    unconscious: { name: "Unconscious" }, // your turn gets skiped (each stack will last for 1 turn)
    regeneration: { name: "Regeneration" },
    superCharged: { name: "Sper Charged" }, // all positive stats boosted
    drowning: { name: "Drowning" },
    hungry: { name: "Hungry" },
    starving: { name: "Starving" },
    gross: { name: "Gross" },
    yum: { name: "yummy" },
    prone: { name: "Prone" }, // knocked down to the ground
    blind: { name: "Blind" },
    flash: { name: "Flash" }, // the one with the effect glows
    glassGear: { name: "Glass Gear" }, // duribility damage gets 2x per stack
    sturdyGear: { name: "Sturdy Gear" }, // duribility damage gets 1/2 per stack
    freeze: { name: "freeze" },
    // stat effects
    burstingVitality: { name: "Bursting Vitality" }, // max hp up
    waningVitality: { name: "Waning Vitality" }, // max hp down
    BurstingSpeed: { name: "Bursting Speed" },
    tired: { name: "Tired" },
    lethargic: { name: "Lethargic" }, // you get disavantage on anything phisical
    fear: { name: "Fear" },
    sharpShoot: { name: "Sharp Shoot" },
    bloodLust: { name: "BloodLust" }, // free action surge
    stupity: { name: "Stupity" },
    guarding: { name: "Guarding" },
    counterReady: { name: "Ready To Counter" },
    noDefend: { name: "Unable to defend" }, // can't use any shield moves or guard
    // Power
    //up
    bluntPowerUp: { name: "Blunt Power Up" },
    sharpPowerUp: { name: "Sharp Power Up" },
    crushingPowerUp: { name: "Crushing Power Up" },
    firePowerUp: { name: "Fire Power Up" },
    electricPowerUp: { name: "Electric Power Up" },
    magicPowerUp: { name: "Magic Power Up" },
    windPowerUp: { name: "Wind Power Up" },
    toxicPowerUp: { name: "Toxic Power Up" },
    waterPowerUp: { name: "Water Power Up" },
    coldPowerUp: { name: "Cold Power Up" },
    // down
    bluntPowerDown: { name: "Blunt Power Down" },
    sharpPowerDown: { name: "Sharp Power Down" },
    crushingPowerDown: { name: "Crushing Power Down" },
    firePowerDown: { name: "Fire Power Down" },
    electricPowerDown: { name: "Electric Power Down" },
    magicPowerDown: { name: "Magic Power Down" },
    windPowerDown: { name: "Wind Power Down" },
    toxicPowerDown: { name: "Toxic Power Down" },
    waterPowerDown: { name: "Water Power Down" },
    coldPowerDown: { name: "Cold Power Down" },
    // Resitance
    bluntResitance: { name: "Blunt Resitance" },
    sharpResitance: { name: "Sharp Resitance" },
    crushingResitance: { name: "Crushing Resitance" },
    fireResitance: { name: "Fire Resitance" },
    electricResitance: { name: "Electric Resitance" },
    magicResitance: { name: "Magic Resitance" },
    windResitance: { name: "Wind Resitance" },
    toxicResitance: { name: "Toxic Resitance" },
    waterResitance: { name: "Water Resitance" },
    coldResitance: { name: "cold Resitance" },
    pushResitance: { name: "Push Resitacnce" },
    // Vulnerability
    bluntVulnerability: { name: "Blunt Vulnerability" },
    sharpVulnerability: { name: "Sharp Vulnerability" },
    crushingVulnerability: { name: "Crushing Vulnerability" },
    fireVulnerability: { name: "Fire Vulnerability" },
    electricVulnerability: { name: "Electric Vulnerability" },
    magicVulnerability: { name: "Magic Vulnerability" },
    windVulnerability: { name: "Wind Vulnerability" },
    toxicVulnerability: { name: "Toxic Vulnerability" },
    waterVulnerability: { name: "Water Vulnerability" },
    coldVulnerability: { name: "Cold Vulnerability" },
    // ability effects
    shellDefence: { name: "Shell Defence" }, // grants tmp HP, regernates over time
    angerIssues: { name: "Anger Issues" }, // randomly when ever a roll is failed you could get mad and will auto do attacks
    bellyArmor: { name: "Belly Armor" }, // Allows you to not be one shot leaveing you with 1 hp // can't stack
    superBellyArmor: { name: "Super Belly Armor" }, // make it so one attack can't do over 3/4th of your hp (each stack will lower this even further)
    adrenaline: { name: "adrenaline" }, // when ever you don't attack your next attack does a 0.05 damage multiper stacking (this gets reset after a battle ends)
    spontaneousFear: { name: "Spontaneous Fear" }, // randomly when a roll is failed it will lower your corage by how ever many stacks there are // todo maybe a better name
    fireAspect: { name: "Fire Aspect" }, // all damage you deal also does fire damage
};
