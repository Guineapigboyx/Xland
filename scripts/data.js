/**
 * Convert a items.item into a inventoryItem
 * @param {String|items.item} item
 * @param {Number|undefined} craftingId
 * @param {String|undefined} materialCss1
 * @param {String|undefined} materialCss2
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
            count: 1,
        };
    } else if (typeof item === "object") {
        // If using an item object reference
        let itemKey = Object.keys(items).find((key) => items[key] === item);
        if (itemKey === undefined) {
            console.warn(`Invalid Item reference`, item);
            return false;
        }

        return {
            item: itemKey,
            craftedItemID: craftingId,
            material1: materialCss1,
            material2: materialCss1,
            inventory: [],
            timesUsed: 0,
            count: 1,
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
 * @param {gameState.persons.person.inventory} inventory - the inventory to put the item into
 * @param {boolean|undefined} noCombine - does not combine like items
 * @returns
 */
function addItemToInventory(item, inventory, noCombine) {
    if (inventory.length === undefined) {
        console.warn("could not get inventory to add item to", inventory);
        return;
    }

    if (typeof item !== "object" && isArray(item)) {
        console.warn("invalid item", item);
        return;
    }

    if (typeof item === "string" || Object.values(items).find((x) => x.name === item.name)) {
        // checks to see if the item is a item or inventoryItem
        item = makeInventoryItem(item);
    }

    if (!item.item) {
        console.warn("Failed to crate item");
        return;
    }

    // Combine like items
    let combineItem = inventory.find(
        (invenItem) =>
            invenItem.item === item.item && invenItem.craftedItemID === item.craftedItemID,
    );

    if (typeof item.count !== "number") {
        console.log("Invalid count", item);
        item.count = 1;
    }

    if (combineItem && !noCombine) {
        combineItem.count += 1;
        if (item.material1) combineItem.material1 = item.material1;
        if (item.material2) combineItem.material2 = item.material2;
    } else {
        inventory.push(item);
    }
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

/**
 * Gives the stats fro a module with a set of materials
 *
 * @param {Function} statsFunction - function from itemStats
 * @param {materialData|items.item|inventoryItem|string} material - material put into the itemstats function
 */
function getMaterialData(material) {
    if (typeof material !== "object" || Array.isArray(material)) return false;

    // translate all of the materials into materialData
    if (material.item) {
        // is a inventory item
        if (material.craftedItemID) {
            // is a crafted item
            material = getCraftedItem(material);
        } else if (items[material.item]) {
            // is a non crafted item
            material = items[material.item];
        } else {
            console.warn("Malformed Inventory Item", material);
            return false;
        }

        if (!material.materialData) return false;

        material = material.materialData;
    } else if (material.materialData) {
        // is a items.item
        material = material.materialData;
    }
    // is alreday material data

    if (
        !(
            material.density &&
            material.toughness &&
            material.hardness &&
            material.flexiblity &&
            material.sharpness
        )
    ) {
        console.warn("not valid material data", material);
        return false;
    }

    return material;
}

/**
 * Gets the stats for a set of material data with a set of modules
 *
 * @param {modules.module[]} modules - array that lines up with materialData to say which modules functions should be used for which material
 * @param {materialData[]} materialData - array of materialData
 */
function getCraftedStats(modules, materialData) {
    if (!Array.isArray(modules) || !Array.isArray(materialData))
        return console.log("getCraftedStats got non arrays", modules, materialData);

    if (modules.length !== materialData.length)
        return console.log("getCraftedStats arrays do not line up", modules, materialData);

    let weaponData = {
        actionSurge: 0,
        attack: 0,
        defense: 0,
        accuracy: 3,
        crit: 0,
        durablity: 0,
        speed: 5,
        range: 0,
    };
    for (let i = 0; i < materialData.length; i++) {
        const material = materialData[i];
        const module = modules[i];
        if (!material || !module) continue;

        weaponData = module.itemStats(weaponData, material);
    }

    // round the number to make it look nice
    const weaponKeys = Object.keys(weaponData);

    // todo add effects

    // todo add onhit

    console.log(weaponData);

    for (let i = 0; i < weaponKeys.length; i++) {
        if (!isNaN(weaponData[weaponKeys[i]])) {
            weaponData[weaponKeys[i]] = round(weaponData[weaponKeys[i]], 2);
        }
    }

    return weaponData;
}

/**
 * Get all of the modules that you have unlocked for a specific schematic.
 *
 * @param {schematics.schematic|string} schematic - The schematic object or its .name
 */
function getUnlockedModules(schematic) {
    if (typeof schematic === "object" && schematic !== null) {
        schematic = schematic.name;
    }

    if (!schematics[schematic]) {
        console.log("Could not find schematic:", schematic);
        return [];
    }

    let validParts = gameState.unlocked.module;

    if (!validParts.length) {
        console.log("Malformed schematic:", schematic);
        return [];
    }

    return Object.values(modules).filter((module) =>
        mapObject(module.part, "name").some((part) => validParts.includes(part)),
    );
}

/**
 * Get all unlocked modules compatible with a specific schematic.
 *
 * @param {schematics.schematic|string} schematic - Schematic object or its .name
 * @param {Boolean|undefined} giveFull - give the full modules.module or just the names
 * @param {string|string[]|undefined} parts - Specific schematic parts to get modules for
 */
function getUnlockedModules(schematic, giveFull, parts) {
    if (typeof schematic === "object" && schematic !== null) {
        schematic = schematic.name;
    }

    if (!schematics[schematic]?.parts) {
        console.log("Could not find schematic:", schematic);
        return [];
    }

    let validParts = Object.keys(schematics[schematic].parts);

    if (parts) {
        parts = Array.isArray(parts) ? parts : [parts];
        validParts = validParts.filter((part) => parts.includes(part));
    }

    if (!validParts.length) return [];

    let validModules = Object.fromEntries(
        Object.entries(modules).filter(
            ([id, module]) =>
                gameState.unlocked.module.includes(id) &&
                mapObject(module.part, "name").some((part) => validParts.includes(part)),
        ),
    );

    if (giveFull) {
        return validModules;
    } else return mapObject(validModules, "name");
}
