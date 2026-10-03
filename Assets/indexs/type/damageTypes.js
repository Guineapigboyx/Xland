/**
 * @typedef {object} damageTypes - elements like fire, lighting, ice
 * @property {damagetype}
 *
 * @typedef {object} damagetype - the type of damage and the properties of it
 * @property {string} name - name of the damage type
 * @property {string} CssColor - the color of this damage type (IT MUST BE A CSS VARIABLE)
 * @property {Number|undefined} damage - bonus damage added ontop of any damage source that uses this type
 * @property {Number|undefined} damageMult - mutiplier of the base damage
 * @property {effect[]|undefined} effects - the effects given
 *
 * @typedef {object} effect
 * @property {statusEffects.effect} effectGiven - the effect given
 * @property {Number} effectChance - chance of getting the effect
 * @property {Number} effectTime - how long the effect lasts in turns/hours
 */
const damageTypes = {
    blunt: {
        name: "Blunt",
        CssColor: "--blunt-color",
        effects: [{ effectGiven: statusEffects.stuned, effectChance: 0.2, effectTime: 1 }],
    },
    sharp: {
        name: "Sharp",
        damageMult: 1.1,
        CssColor: "--sharp-color",
        effects: [{ effectGiven: statusEffects.bleed, effectChance: 0.1, effectTime: 6 }],
    },
    crushing: {
        name: "Crushing",
        CssColor: "--crushing-color",
        effects: [
            { effectGiven: statusEffects.prone, effectChance: 1.0, effectTime: 1 },
            { effectGiven: statusEffects.brokenArm, effectChance: 0.05, effectTime: 16 },
            { effectGiven: statusEffects.brokenLeg, effectChance: 0.05, effectTime: 16 },
        ],
    },
    fire: {
        name: "Fire",
        CssColor: "--fire-color",
        effects: [{ effectGiven: statusEffects.burning, effectChance: 0.4, effectTime: 3 }],
    },
    cold: {
        name: "Cold",
        CssColor: "--cold-color",
        effects: [{ effectGiven: statusEffects.freeze, effectChance: 0.6, effectTime: 2 }],
    },
    electric: {
        name: "Electric",
        damageMult: 1.2,
        CssColor: "--electric-color",
        effects: [{ effectGiven: statusEffects.shocked, effectChance: 0.4, effectTime: 3 }],
    },
    magic: { name: "Magic", CssColor: "--magic-color" },
    wind: {
        name: "Wind",
        CssColor: "--wind-color",
        effects: [{ effectGiven: statusEffects.prone, effectChance: 0.2, effectTime: 1 }],
    },
    toxic: {
        name: "Toxic",
        CssColor: "--toxic-color",
        effects: [
            { effectGiven: statusEffects.poisoned, effectChance: 0.75, effectTime: 5 },
            { effectGiven: statusEffects.waningVitality, effectChance: 0.25, effectTime: 2 },
        ],
    },
    water: {
        name: "Water",
        CssColor: "--water-color",
        effects: [{ effectGiven: statusEffects.wet, effectChance: 0.75, effectTime: 5 }],
    },
    heal: { name: "heal", CssColor: "--heal-color", damageMult: -1 },
    instantDeath: { name: "Instant Death", CssColor: "--instant-death-color", damage: 200000 },
    pushing: { name: "Pushing", CssColor: "--pushing-color" },
};
