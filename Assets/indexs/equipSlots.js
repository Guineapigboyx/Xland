/**
 * @typedef {Object} equipSlots - defineing all of the slots in the inventory
 * @property {slot}
 *
 * @typedef {Object} slot - the slot and all its paramiters
 * @property {string} htmlSlot - the value for data-equipment in the person overview
 * @property {weaponTypes.weaponType|undefined} weaponType - if used as a weapon and has none it falls back on to this weapon type, if undefined it can't be held
 */
const equipSlots = {
    head: { name: "Head", htmlSlot: "head", weaponType: weaponTypes.gloves },
    necklace: { name: "Necklace", htmlSlot: "necklace", weaponType: weaponTypes.slapstick },
    pants: { name: "Pants", htmlSlot: "pants", weaponType: weaponTypes.hammer },
    body: { name: "Body", htmlSlot: "body", weaponType: weaponTypes.shield },
    hands: { name: "Gloves", htmlSlot: "hands", weaponType: weaponTypes.gloves },
    feet: { name: "Shoes", htmlSlot: "feet", weaponType: weaponTypes.pickaxe },
    belt: { name: "Belt", htmlSlot: "belt", weaponType: weaponTypes.whip },
    storage: { name: "Bag", htmlSlot: "storage", weaponType: weaponTypes.bluntObject },
    mainHand: { name: "Main Hand", htmlSlot: "mainHand", weaponType: weaponTypes.gloves }, // unarmed is gloves
    offHand: { name: "Off Hand", htmlSlot: "offHand", weaponType: weaponTypes.gloves }, // unarmed is gloves
};
