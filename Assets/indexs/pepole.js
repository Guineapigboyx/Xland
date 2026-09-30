/**
 * @typedef {Object} basePepole - the persons stat
 * @property {person}
 *
 * @typedef {Object} person - the persons stat
 * @property {Number} hp - how much HP they have
 * @property {Number} strength - how much HP they have
 * @property {Number} defense - how much HP they have
 * @property {Number} speed - how much HP they have
 * @property {Number} endurance - how much HP they have
 * @property {Number} intelligence - how much HP they have
 * @property {Object} ability - how much HP they have
 * @property {Object} ability2 - how much HP they have
 * @property {attack} speicalMove - how much HP they have
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
