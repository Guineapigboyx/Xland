/**
 * @typedef {Object} statusEffects - every status effect in xland
 * @property {effect}
 *
 * @typedef {Object} effect -
 * @property {string} name - name of the effect
 * @property {string} description - decription of the effect
 * // Combat
 * @property {boolean|undefined} fallbackOnGainCombat - if true onGainCombat fallbacks to onActivate, normally false
 * @property {boolean|undefined} fallbackOnLossCombat - if true onLossCombat fallbacks to onActivate, normally false
 * @property {Function|undefined} onGainCombat - function that runs when the effect is gained
 * @property {Function|undefined} onActivate - function that runs when the effect is lost
 * @property {Function|undefined} OnLossCombat - function that runs when the effect is lost
 * // Out of combat
 * @property {boolean|undefined} fallbackOnGainOut - if true onGainOut fallbacks to onHour, normally false
 * @property {boolean|undefined} fallbackOnLossOut - if true onLossOut fallbacks to onHour, normally false
 * @property {Function|undefined} onGainOut - function that runs when the effect is gained, if undifined do onHour
 * @property {Function|undefined} onHour - function that runs every hour, if false have no combat effects, if false have no out of combat effects
 * @property {Function|undefined} OnLossOut - function that runs when the effect is lost, if undifined do onHour
 *
 * @property {number|undefined} activateionTurn - How many turns it takes for the onActivate happens. If undefined it sets this to 1
 * @property {number|undefined} activateionHour - How many hours it takes for the onHour happens. If undefined it sets this to 1
 *
 * @property {statChange[]|undefined} statchanges - Array of which stat and how much is changed in each stat
 *
 * @typedef {object} statChange - how much is changed in this stat
 * @property {string} statName - the stats name (statType.name)
 * @property {Number} change - the amount it changes
 *
 */
const statusEffects = {
    burning: { name: "Burning" },
    poisoned: { name: "Poisoned" },
    radiated: { name: "Radiated" },
    shocked: { name: "Shocked" },
    wet: { name: "Wet" },
    paralysis: { name: "Paralysis" },
    brokenArm: { name: "Broken Arm" },
    brokenLeg: { name: "Broken Leg" },
    bleed: { name: "Bleed" },
    stuned: { name: "Stuned" },
    unconscious: { name: "Unconscious" },
    regeneration: { name: "Regeneration" },
    superCharged: { name: "Sper Charged" },
    drowning: { name: "Drowning" },
    hungry: { name: "Hungry" },
    starving: { name: "Starving" },
    gross: { name: "Gross" },
    yum: { name: "yummy" },
    prone: { name: "Prone" },
    blind: { name: "Blind" },
    flash: { name: "Flash" },
    glassGear: { name: "Glass Gear" },
    sturdyGear: { name: "Sturdy Gear" },
    freeze: { name: "freeze" },
    // stat effects
    burstingVitality: { name: "Bursting Vitality" },
    waningVitality: { name: "Waning Vitality" },
    BurstingSpeed: { name: "Bursting Speed" },
    lethargic: { name: "Lethargic" },
    fear: { name: "Fear" },
    sharpShoot: { name: "Sharp Shoot" },
    bloodLust: { name: "BloodLust" },
    stupity: { name: "Stupity" },
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
};
