/**
 * @typedef {Object} basePepole - the persons stat
 * @property {person}
 *
 * @typedef {Object} person - the persons stat
 * @property {Number} hp - How much max HP they have
 * @property {Number} strength - How much strength they have
 * @property {Number} defense - How much defense they have
 * @property {Number} speed - How much speed they have
 * @property {Number} endurance - How much endurance they have
 * @property {Number} intelligence - How much intelligence they have
 * @property {ability[]|undefined} ability - How much HP they have
 * @property {attacks.attack[]|undefined} speicalMove - Array of special moves they have
 *
 * @typedef {Object} ability
 * @property {itemUsageTypes[]|undefined} abilityTrigger - speical usage types that activate this ability
 * @property {abilitys.ability} abilityFunction - the ability that gets ran when the itemUsageType occers
 */
const basePepole = {
    Koopa: {
        hp: 100,
        strength: 3,
        defense: 3,
        speed: 2,
        endurance: 5,
        intelligence: 3,
        ability: {
            name: "Shell defense",
            description:
                "Acts as passive shield until broken, shell curl doubles the defense given",
        },
        ability2: undefined,
        speicalMove: "koopaShellCurl",
    },
};
