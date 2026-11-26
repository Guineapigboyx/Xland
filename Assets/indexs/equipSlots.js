/**
 * @typedef {Object} equipSlots - defineing all of the slots in the inventory
 * @property {slot}
 *
 * @typedef {Object} slot - the slot and all its paramiters
 * @property {String} name - the key of the equip slot
 * @property {string} htmlSlot - the value for data-equipment in the person overview
 * @property {weaponTypes.weaponType|undefined} weaponType - if used as a weapon and has none it falls back on to this weapon type, if undefined it can't be held
 * @property {string[]} icon - the "item-" class to reresent this slot
 */
const equipSlots = {
    head: {
        name: "Head",
        htmlSlot: "head",
        weaponType: weaponTypes.gloves,
        icon: ["item-halfShell"],
    },
    necklace: {
        name: "Necklace",
        htmlSlot: "necklace",
        weaponType: weaponTypes.slapstick,
        icon: ["item-apple"], //todo add icon
    },
    pants: {
        name: "Pants",
        htmlSlot: "pants",
        weaponType: weaponTypes.hammer,
        icon: ["item-plated-leftLeg", "item-plated-rightLeg", "item-fabric-waist"],
    },
    body: {
        name: "Body",
        htmlSlot: "body",
        weaponType: weaponTypes.shield,
        icon: ["item-fabric-leftSleeve", "item-fabric-rightSleeve", "item-fabric-shirtBody"],
    },
    hands: {
        name: "Gloves",
        htmlSlot: "hands",
        weaponType: weaponTypes.gloves,
        icon: ["item-basicGlove"],
    },
    feet: {
        name: "Shoes",
        htmlSlot: "feet",
        weaponType: weaponTypes.pickaxe,
        icon: ["item-basicPlate-toe", "item-fabric-bootBody"],
    },
    belt: {
        name: "Belt",
        htmlSlot: "belt",
        weaponType: weaponTypes.whip,
        icon: ["item-apple"], //todo add icon
    },
    storage: {
        name: "Bag",
        htmlSlot: "storage",
        weaponType: weaponTypes.bluntObject,
        icon: ["item-apple"], //todo add icon
    },
    mainHand: {
        name: "Main Hand",
        htmlSlot: "mainHand",
        weaponType: weaponTypes.gloves, // unarmed is gloves
        icon: ["item-basicBlade", "item-basicHandle"],
    },
    offHand: {
        name: "Off Hand",
        htmlSlot: "offHand",
        weaponType: weaponTypes.gloves, // unarmed is gloves
        icon: ["item-basicBlade", "item-basicHandle"],
    },
};
