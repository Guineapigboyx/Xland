function toggleScreen(buttonClicked) {
    let sectionClass;
    const navButtonClicked = navButton[buttonClicked];

    if (!navButton[buttonClicked]) {
        console.error(`navbutton for ${buttonClicked} is not difined`);
        return;
    }

    // Checks if the screen is alreday active (it needs to be up here since the next it disables all screens)
    let buttonAlredayActive = false;
    if (hasClass(navButtonClicked.sectionClass, "hide")) {
        buttonAlredayActive = true;
    }

    // switch off of all screens
    for (let i = 0; i < Object.keys(navButton).length; i++) {
        section = navButton[Object.keys(navButton)[i]];
        updateTextContent(section.id, section.buttonText);
        modifyClass(section.sectionClass, "hide", "add");
    }

    // If the screens sectionClass is hidden show it and switch the button to say retur
    if (buttonAlredayActive) {
        modifyClass("#bottom-null", "hide", "add");
        updateTextContent(navButtonClicked.id, "return");
        modifyClass(navButtonClicked.sectionClass, "hide", "remove");
    } else {
        modifyClass("#bottom-null", "hide", "remove");
    }
}

function craftingScreen() {
    document.querySelector("#crafting-player-dropdown").attributes.value.value = "N/A";
    document.querySelector("#crafting-player-dropdown > label").textContent = "Select teamate";

    // hide all schematic buttons
    modifyClass("#schematics-picker > button", "hide", "add");
    // deselect all schematic buttons
    modifyClass("#schematics-picker > button", "selected", "remove");
    // hide play dropdown options
    modifyClass("#crafting-player-dropdown > section", "hide", "add");

    // clear module selector, craft preview, inventory
    clearDiv("#module-selector");
    clearDiv("#material-selector");
    clearDiv("#craft-preview");
    clearDiv(".craft-screen > .inventory");

    // clear craft preview
    modifyClass("#craft-values > div", "hide", "add");
    modifyClass("#craft-button", "good mid", "remove");
    modifyClass("#craft-button", "bad", "add");

    // show unlocked schematic buttons
    const unlockedSchematics = gameState.unlocked.schematic;
    for (let i = 0; i < unlockedSchematics.length; i++) {
        const schematicButton = document.querySelector(
            `#schematics-picker > [data-schematic="${unlockedSchematics[i]}"]`,
        );
        if (schematicButton) modifyClass(schematicButton, "hide", "remove");
    }

    toggleScreen("crafting");
}

// switch the part selector
function clickPartNav(section) {
    let otherSection;

    // finds out which section you clicked on
    if (section === "material") {
        otherSection = "module";
    } else if (section === "module") {
        otherSection = "material";
    } else {
        console.warn("Nav button broken", section);
        return;
    }

    // add selected class to nav button
    modifyClass(`#part-selectors > nav > [data-slot="${section}"]`, "selected", "add");
    modifyClass(`#part-selectors > nav > [data-slot="${otherSection}"]`, "selected", "remove");

    // hides/shows modules/materials
    modifyClass(`#${otherSection}-selector`, "hide", "add");
    modifyClass(`#${section}-selector`, "hide", "remove");
}

function craftButton() {
    if (hasClass("#craft-button", "disabled-click"))
        return playSound(sounds.basic_sounds.error.invalidSelect);

    const inventory = gameState.persons[craftingTempData.person].inventory;
    const schematic = craftingTempData.schematic;

    let materialData = [];
    let moduleList = [];
    let craftedModules = [];
    let inventoryUsage = {};

    // Build the crafted modules
    const partKeys = Object.keys(craftingTempData.parts);

    for (let i = 0; i < partKeys.length; i++) {
        const partKey = partKeys[i];
        const part = craftingTempData.parts[partKey];
        const module = modules[part.module];

        if (!module) continue;

        let craftedMaterials = [];

        // Get the materials assigned to this module
        for (let x = 0; x < part.materials.length; x++) {
            const inventorySlot = part.materials[x];
            const material = inventory[inventorySlot];
            const requirement = module.materials[x];

            // Store material stats for calculating the items stats
            materialData.push(getMaterialData(material));
            moduleList.push(module);

            // Track how many items need to be consumed
            inventoryUsage[inventorySlot] =
                (inventoryUsage[inventorySlot] || 0) + requirement.amount;

            // Store the material in the crafted item
            // Repeat it to represent the actual number of materials used
            for (let y = 0; y < requirement.amount; y++) {
                craftedMaterials.push({
                    item: material.item,
                    craftedItemID: material.craftedItemID,
                    material1: material.material1,
                    material2: material.material2,
                });
            }
        }

        craftedModules.push({
            module: module,
            part: schematic.parts[partKey],
            materials: craftedMaterials,
        });
    }

    // Calculate the items stats
    const weaponData = getCraftedStats(moduleList, materialData);

    // Merge with the base items weapon data
    const finalWeaponData = {
        ...schematic.modularItem.weaponData,
        ...weaponData,
    };

    // Create a new crafted item ID
    const craftedItemID = Math.max(0, ...Object.keys(craftedItemData).map(Number)) + 1;

    // Register the crafted item
    craftedItemData[craftedItemID] = {
        name: schematic.itemName,
        components: {
            schematic: schematic,
            craftedModules: craftedModules,
        },
        weaponData: finalWeaponData,
    };

    // Consume materials, it goes backwards so the item slots don't shift
    for (let i = inventory.length - 1; i >= 0; i--) {
        if (!inventoryUsage[i]) continue;
        inventory[i].count -= inventoryUsage[i];

        if (inventory[i].count <= 0) {
            inventory.splice(i, 1);
        }
    }

    // Add the crafted item to inventory
    addItemToInventory(makeInventoryItem(schematic.modularItem, craftedItemID), inventory);

    // Clear selected materials but keep the modules
    for (let i = 0; i < partKeys.length; i++) {
        craftingTempData.parts[partKeys[i]].materials = [];
    }

    // Refresh the crafting screen
    fillInventory(".craft-screen > .inventory", inventory);
    updateCraftScreen();
}
