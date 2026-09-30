/**
 * Data for all the screens in xland
 *
 * @property {String} id - the button you click on to show this screen
 * @property {String} sectionClass - the class that gets shown when this screen is active
 * @property {String} buttonText - the button that is on the text (also a label for the button)
 */
const navButton = {
    status: {
        id: "#status-button",
        sectionClass: ".status-screen",
        buttonText: "Status",
    },
    world: {
        id: "#world-button",
        sectionClass: ".world-screen",
        buttonText: "World",
    },
};

/**
 * @typedef {Object} equipSlots - defineing all of the slots in the inventory
 * @property {slot}
 *
 * @typedef {Object} slot - the slot and all its paramiters
 * @property {string} htmlSlot - the value for data-equipment in the person overview
 * @property {weaponTypes.weaponType|undefined} weaponType - if used as a weapon and has none it falls back on to this weapon type, if undefined it can't be held
 */
const equipSlots = {
    head: { htmlSlot: "head", weaponType: "weaponTypes.gloves" },
    necklace: { htmlSlot: "necklace", weaponType: "weaponTypes.slapstick" },
    pants: { htmlSlot: "pants", weaponType: "weaponTypes.hammer" },
    body: { htmlSlot: "body", weaponType: "weaponTypes.shield" },
    hands: { htmlSlot: "hands", weaponType: "weaponTypes.gloves" },
    feet: { htmlSlot: "feet", weaponType: "weaponTypes.pickaxe" },
    belt: { htmlSlot: "belt", weaponType: "weaponTypes.whip" },
    storage: { htmlSlot: "storage", weaponType: "weaponTypes.bluntObject" },
    mainHand: { htmlSlot: "mainHand", weaponType: "weaponTypes.gloves" }, // unarmed is gloves
    offHand: { htmlSlot: "offHand", weaponType: "weaponTypes.gloves" }, // unarmed is gloves
};
