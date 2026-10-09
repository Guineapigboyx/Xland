/**
 * Convert a items.item into a inventoryItem
 * @param {String|items.item} item
 * @param {Number|undefined} craftingId
 */
function makeInventoryItem(item, craftingId) {
    if (typeof item === "string" && items[item]) {
        // if useing a item key id
        return {
            item: item,
            craftedItemID: craftingId,
            inventory: [],
            timesUsed: 0,
        };
    } else if (typeof item === "object") {
        // If using an item object reference
        itemKey = Object.keys(items).find((key) => items[key] === item);
        if (itemKey === undefined) {
            console.warn(`Invalid Item reference`, item);
            return false;
        }

        return {
            item: itemKey,
            craftedItemID: craftingId,
            inventory: [],
            timesUsed: 0,
        };
    } else {
        console.warn(`Invalid Item reference or item ID`, item);
        return false;
    }
}
