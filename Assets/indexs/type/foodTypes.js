/**
 * @typedef {Object} foodTypes - all the diffent rarity levels in xland
 * @property {foodType}
 *
 * @typedef {object} foodType - the color and name of each food type
 * @property {String} name - name of the food type
 * @property {string} CssColor - the color of this food type and prefix (IT MUST BE A CSS VARIABLE)
 */
const foodTypes = {
    mushroom: { name: "mushroom", CssColor: "--mushroom-color" },
    pikmin: { name: "pikmin", CssColor: "--pikmin-color" },
    berries: { name: "berries", CssColor: "--berries-color" },
    pepper: { name: "pepper", CssColor: "--pepper-color" },
    herb: { name: "herb", CssColor: "--herb-color" },
    grain: { name: "grain", CssColor: "--grain-color" },
    mystic: { name: "mystic", CssColor: "--mystic-color" },
    fruit: { name: "fruit", CssColor: "--fruit-color" },
    flower: { name: "flower", CssColor: "--flower-color" },
    crystal: { name: "crystal", CssColor: "--crystal-color" },
    energizing: { name: "energizing", CssColor: "--energizing-color" },
    toxic: { name: "toxic", CssColor: "--toxic-color" },
    lquid: { name: "lquid", CssColor: "--lquid-color" },
    meat: { name: "meat", CssColor: "--meat-color" },
};
