/**
 * Convert a items.item into a inventoryItem
 * @param {String|items.item} item
 * @param {Number|undefined} craftingId
 * @param {String|undefined} material1
 * @param {String|undefined} material2
 */
function makeInventoryItem(item, craftingId, materialCss1, materialCss2) {
    if (typeof item === "string" && items[item]) {
        // if useing a item key id
        return {
            item: item,
            craftedItemID: craftingId,
            material1: materialCss1,
            material2: materialCss2,
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
            material1: material1,
            material2: material2,
            inventory: [],
            timesUsed: 0,
        };
    } else {
        console.warn(`Invalid Item reference or item ID`, item);
        return false;
    }
}

/**
 * Add a item to a inventory
 *
 * @param {items.item|inventoryItem} item - the item being put in the inventory
 * @param {gameState.persons.person.inventory} inventory  - the inventory to put the item into
 * @returns
 */
function addItemToInventory(item, inventory) {
    if (inventory.length === undefined) {
        console.warn("could not get inventory to add item to", inventory);
        return;
    }

    if (typeof item !== "object") {
        console.warn("invalid item", item);
        return;
    }
    if (!item.item) {
        // checks to see if the item is a item or inventoryItem
        item = makeInventoryItem(item);
    }

    inventory.push(item);
}

function getActiveTeamates() {
    const teamates = Object.fromEntries(
        Object.entries(gameState.persons).filter(([id, person]) => person.inActiveTeam),
    );
    // Also check if there are too many teamates in the party
    if (teamates.length > 3) {
        console.log("There are more than 3 teamates in the party");
    }

    return teamates;
}

function getCraftedItem(inventoryItem) {
    if (typeof inventoryItem !== "object") {
        console.warn("not a inventoryItem, can't get crafted data", inventoryItem);
        return;
    }

    let craftedItem = {};
    const craftedData = craftedItemData[inventoryItem.craftedItemID];
    const baseItem = items[inventoryItem.item];

    if (!baseItem) {
        console.warn("Can't get inventoryItem.item", inventoryItem);
        return;
    }

    if (!craftedData) {
        console.log("Has no craftedItemID", inventoryItem);
        return;
    }

    craftedItem = { ...baseItem, ...craftedData };
    return craftedItem;
}
