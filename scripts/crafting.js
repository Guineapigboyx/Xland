/**
 * @typedef {object} craftingTempData
 * @property {string} person - the person crafting from the dropdown
 * @property {schematics.schematic} schematic - the schematic crafting with
 * @property {parts[]} parts - all the parts of the schematic and their materials
 *
 * @typedef {Object} Parts - all the parts of the schematic and their materials
 * @property {String} name - part key
 * @property {modules.module} module - the module that is applied to this slot
 * @property {Number[]} materials - the index number from the person.inventory for the material used
 */
let craftingTempData = {
    person: "",
    schematic: "",
    parts: {},
};

document.addEventListener("DOMContentLoaded", () => {
    const schematicPicker = document.getElementById("schematics-picker");

    // construct elements for craft screen picker ------------------------------------------------------------------------------------------------
    for (let i = 0; i < Object.keys(schematics).length; i++) {
        // schematic picker
        const currentSchematic = schematics[Object.keys(schematics)[i]];
        let button = document.createElement("button");

        button.className = "button-icon fit-img large-text hover-light hide";

        // get the icon for the schematic Picker
        iconData = getIcon({
            item: currentSchematic.modularItem.name,
            craftedItemID: currentSchematic.iconID,
        });
        if (!iconData) {
            console.warn("Failed to get icon Data");
            continue;
        }

        let icon = createItemIcon(iconData);
        if (!icon) {
            console.warn("Failed to create icon");
            continue;
        }

        button.dataset.schematic = currentSchematic.name;

        button.appendChild(icon);

        // the reason i can't just change the content of button is becuase i want the text as the last child
        let text = document.createElement("span");
        text.textContent = currentSchematic.itemName;
        button.appendChild(text);

        schematicPicker.appendChild(button);
    }

    // selecting a schematic ------------------------------------------------------------------------------------------------
    document.querySelector("#schematics-picker").addEventListener("click", (e) => {
        const button = e.target.closest("button.button-icon");
        if (!button) return;

        const schematic = schematics[button.dataset.schematic];
        if (!schematic) return;

        // clear craft and material preview
        clearDiv("#craft-preview");
        clearDiv("#material-selector");

        modifyClass("#schematics-picker .selected", "selected", "remove");
        modifyClass(button, "selected", "add");

        //Select the modules menue
        clickPartNav("module");

        // fill in schematic data in tempdata
        craftingTempData.schematic = schematic;
        craftingTempData.parts = {};
        for (let i = 0; i < Object.keys(schematic.parts).length; i++) {
            const partKey = Object.keys(schematic.parts)[i];
            craftingTempData.parts[partKey] = {
                module: null,
                materials: [],
            };
        }

        updateCraftScreen();

        // fill in module selector
        const moduleSelector = document.querySelector("#module-selector");
        clearDiv(moduleSelector);
        const schematicParts = Object.entries(schematic.parts);

        for (let i = 0; i < schematicParts.length; i++) {
            const [partKey, part] = schematicParts[i];

            let partBubble = document.createElement("div");
            let dropDownRoot = document.createElement("div");
            let partName = document.createElement("span");

            partName.textContent = part.partName;
            partBubble.dataset.slot = partKey;

            createDropDown(
                dropDownRoot,
                createOptions(getUnlockedModules(schematic, false, partKey)),
                `#module-selector > [data-slot="${partKey}"] > .dropdown`,
                "Select Module",
                "crafting-module",
            );

            // add css classes
            partBubble.className = "blue-bubble fit-div pointer";
            dropDownRoot.className = "dropdown fit-div";
            partName.className = "large-text";

            // make it so the dropdowns don't cover each other up
            partBubble.style.zIndex = schematicParts.length - i;

            // insert all the elements
            partBubble.appendChild(partName);
            partBubble.appendChild(dropDownRoot);
            moduleSelector.appendChild(partBubble);

            // make it so you can click anywhere in the part bubble
            partBubble.onclick = dropDownRoot.onclick;
            dropDownRoot.onclick = "";
        }
    });
});

/**
 * Builds the craft preview from the selected modules
 */
function updateCraftPreview() {
    const craftPreview = document.getElementById("craft-preview");
    if (!craftPreview) return;

    const schematic = craftingTempData.schematic;
    if (!schematic) return;

    const parts = Object.keys(craftingTempData.parts);

    // make the icon
    const iconData = [];
    for (let i = 0; i < parts.length; i++) {
        //the current part
        const partKey = parts[i];
        const part = craftingTempData.parts[partKey];
        if (!part) continue;

        // get materials
        let materials = [];
        for (let i = 0; i < part.materials.length; i++) {
            let invenItem = gameState.persons[craftingTempData.person].inventory[part.materials[i]];
            if (!invenItem) continue;
            invenItem = items[invenItem.item];
            if (!invenItem) continue;

            let material = invenItem.name.toLowerCase();
            if (invenItem.material) {
                material = invenItem.material;
            }

            materials.push(material);
        }

        if (!materials[0]) materials.push("schematic5");
        if (!materials[1]) materials.push("schematic1");

        // Add the main icon
        iconData.push({
            class: `item-${part.module}`,
            material: materials[0],
            material2: materials[1],
            layer: schematic.parts[partKey].layer,
            slot: partKey,
        });

        // if this part has a common shematic SVG add it
        if (!schematic.commonPart) continue;
        if (schematic.commonPart.material !== partKey) continue;

        iconData.push({
            class: schematic.commonPart.SVG,
            material: materials[0],
            material2: materials[1],
            layer: 0,
        });
    }

    // Put a data-slot on every item-icon in in the craft preview
    const iconGroup = createItemIcon(iconData);

    for (let i = 0; i < iconGroup.children.length; i++) {
        if (iconData[i].slot) {
            iconGroup.children[i].dataset.slot = iconData[i].slot;
        }
    }

    // Put all of the item-icons into the craft preview instead of nesting item-groups
    craftPreview.replaceChildren(...iconGroup.children);

    modifyClass("#craft-preview > item-icon", "svg-hover-light", "add");
}

/**
 * Builds the material selectors for all currently selected modules
 */
function updateMaterialSelectors() {
    const materialSelector = document.getElementById("material-selector");
    if (!materialSelector) return;

    clearDiv(materialSelector);

    const schematic = craftingTempData.schematic;

    for (const partKey of Object.keys(schematic.parts)) {
        const part = craftingTempData.parts[partKey];

        if (!part.module) continue;

        const selectedModule = modules[part.module];

        // Create the material bubble element for this part
        const materialBubble = document.createElement("div");
        const summary = document.createElement("summary");

        materialBubble.className = "material-selector flex-down small-text bubble square-bubble";
        materialBubble.dataset.slot = partKey;

        summary.textContent = `${schematic.parts[partKey].partName} => ${selectedModule.name}`;

        materialBubble.appendChild(summary);

        // Create one material selector for each requirement
        for (let i = 0; i < selectedModule.materials.length; i++) {
            const requirement = selectedModule.materials[i];

            const materialInslot = craftingTempData.parts[partKey].materials[i];

            const materialSlot = document.createElement("div");
            const materialName = document.createElement("p");
            const materialAmount = document.createElement("p");

            // Get the allowed material names.
            const allowedMaterials = requirement.allowedMaterials.flat(Infinity);

            const allowedNames = allowedMaterials.map((material) => {
                if (typeof material === "string") {
                    return material;
                }

                return material.name;
            });

            let materialIcon;
            // make material Icon
            if (!materialInslot || !craftingTempData.person) {
                // Use a generic icon representing the first allowed material
                const firstMaterial = allowedMaterials[0];

                let iconClass = "item-ingot";

                if (typeof firstMaterial === "string") {
                    const materialIcons = {
                        [materialTypes.metal]: "item-ingot",
                        [materialTypes.rock]: "item-stone",
                        [materialTypes.wood]: "item-treeBranch",
                        [materialTypes.bone]: "item-bone",
                        [materialTypes.gemStone]: "item-gemstone",
                        [materialTypes.plants]: "item-leaf",
                        [materialTypes.liquid]: "item-water",
                        [materialTypes.meat]: "item-meat",
                        [materialTypes.skin]: "item-leather",
                        [materialTypes.sticky]: "item-goop",
                        [materialTypes.wire]: "item-string",
                    };

                    iconClass = materialIcons[firstMaterial] || "item-ingot";
                } else if (firstMaterial) {
                    const itemKey = Object.keys(items).find((key) => items[key] === firstMaterial);

                    if (firstMaterial.SVG) {
                        iconClass = `item-${firstMaterial.SVG}`;
                    } else if (itemKey) {
                        iconClass = `item-${itemKey}`;
                    }
                }

                // Make the material icon
                materialIcon = createItemIcon(getIcon(iconClass, "schematic5"));
            } else {
                // Icon preview for ones that alreday have a material selected
                const craftingWith =
                    gameState.persons[craftingTempData.person].inventory[materialInslot];

                materialIcon = createItemIcon(getIcon(craftingWith));
            }

            // Configure the material requirement label
            if (allowedMaterials.every((material) => typeof material === "string")) {
                materialName.textContent = `Any ${allowedNames.join(" / ")}`;
            } else {
                materialName.textContent = allowedNames.join(" / ");
            }

            materialAmount.textContent = `${requirement.amount}x`;

            // Style the material amount
            materialAmount.className =
                "small-text center-text header-text dark-bubble square-bubble";

            // Semi-auto scale text for material name
            if (materialName.textContent.length > 30) {
                materialName.className = "tiny-text";
            } else if (materialName.textContent.length > 20) {
                materialName.className = "small-text";
            } else {
                materialName.className = "medium-text";
            }

            modifyClass(materialName, "center-text", "add");

            // Configure the material slot
            materialSlot.className = "material-slot border-super-thin bad";
            materialSlot.dataset.part = partKey;
            materialSlot.dataset.materialSlot = i;
            materialSlot.dataset.module = part.module;
            materialSlot.dataset.selected = "";

            materialSlot.append(materialIcon, materialName, materialAmount);

            materialBubble.appendChild(materialSlot);
        }

        materialSelector.appendChild(materialBubble);
    }
}

/** Select a module in the material preview */
function selectModulePart(event) {
    const clickedModule = event.target.closest("item-icon[data-slot]");
    if (!clickedModule) return;

    // Switch to the material selector menu.
    clickPartNav("material");
}

function selectMaterialSel(event) {
    const clickedSlot = event.target.closest(".material-slot");
    if (!clickedSlot || !craftingTempData.person) return;

    // Get the selected inventory item.
    let clickedMaterial = document.querySelectorAll(".craft-screen > .inventory > .selected");

    if (clickedMaterial.length === 0) return console.log("No material selected");
    if (clickedMaterial.length > 1) console.log("Multiple materials selected", clickedMaterial);

    clickedMaterial = clickedMaterial[0];

    // Get the item.
    const item = items[clickedMaterial.dataset.inslot];
    if (!item) return console.log("Can't get item");

    // Get the part and its selected module.
    const part = craftingTempData.parts[clickedSlot.dataset.part];
    if (!part || !part.module) return console.log("No module selected");

    const module = modules[part.module];
    if (!module) return console.log("Invalid module");

    // Get the material requirement.
    const materialSlot = Number(clickedSlot.dataset.materialSlot);
    const requirement = module.materials[materialSlot];

    if (!requirement) return console.warn("Malformed module", module);

    // Check if the material is allowed.
    const allowedMaterials = requirement.allowedMaterials.flat(Infinity);

    // prettier-ignore
    if (!(
            requirement.allowedMaterials.includes(item.name) ||
            requirement.allowedMaterials.includes(item.materialData.materialType)   
    )) {
        playSound(sounds.basic_sounds.error.invalidSelect);
        spawnTextBox(clickedSlot,"Invalid material",2000)
        return;
    }

    // Save the selected inventory slot.
    part.materials[materialSlot] = Number(clickedMaterial.dataset.slot);

    // Update inventory quantities.
    updateCraftScreen();
}

/**
 * Recalculates inventory quantities based on currently assigned materials.
 */
function updateCraftingInventory() {
    if (!craftingTempData.person) return;
    const inventory = gameState.persons[craftingTempData.person].inventory;

    const inventorySlots = document.querySelectorAll(".craft-screen > .inventory > [data-slot]");

    const materialSlots = document.querySelectorAll(".material-selector > .material-slot");

    for (let i = 0; i < inventorySlots.length; i++) {
        const inventorySlot = inventorySlots[i];
        const slotID = Number(inventorySlot.dataset.slot);

        let remaining = inventory[slotID].count;

        for (let x = 0; x < materialSlots.length; x++) {
            const materialSlot = materialSlots[x];
            const selectedPart = craftingTempData.parts[materialSlot.dataset.part];

            if (
                !selectedPart ||
                selectedPart.materials[Number(materialSlot.dataset.materialSlot)] !== slotID
            )
                continue;

            const selectedModule = modules[selectedPart.module];
            const requirement = selectedModule.materials[Number(materialSlot.dataset.materialSlot)];

            modifyClass(materialSlot, "good bad", "remove");

            if (remaining >= requirement.amount) {
                modifyClass(materialSlot, "good", "add");
                remaining -= requirement.amount;
            } else {
                modifyClass(materialSlot, "bad", "add");
                playSound(sounds.basic_sounds.error.invalidSelect);
            }
        }

        inventorySlot.querySelector("span").textContent = remaining;
    }
}

/**
 * Updates the stats preview based on the currently selected modules
 * and materials.
 */
function updateCraftValues() {
    const statsPreview = document.querySelector("#craft-values");
    if (!statsPreview) return;

    let materialData = [];
    // For finding out which material is for which icon without changeing materialData
    let partMap = [];

    for (let i = 0; i < Object.keys(craftingTempData.parts).length; i++) {
        const partKey = Object.keys(craftingTempData.parts)[i];
        const materials = craftingTempData.parts[partKey].materials;

        for (let x = 0; x < materials.length; x++) {
            const item = gameState.persons[craftingTempData.person].inventory[materials[x]];

            const itemData = getMatrialData(item);
            if (!itemData) return;
            materialData.push(itemData);
            partMap.push(partKey);
        }
    }

    // Should the craft button be enabled
    const mandotoryParts = Object.keys(craftingTempData.schematic.parts).filter(
        (part) => !craftingTempData.schematic.parts[part].optional,
    );

    modifyClass("#craft-button", "good bad pointer disabled-click", "remove");
    if (mandotoryParts.every((part) => partMap.includes(part))) {
        modifyClass("#craft-button", "good pointer", "add");
    } else {
        modifyClass("#craft-button", "bad disabled-click", "add");
    }

    // get modules from partMap
    let moduleList = [];
    for (let i = 0; i < partMap.length; i++) {
        const partKey = partMap[i];

        const module = modules[craftingTempData.parts[partKey].module];
        if (module) moduleList.push(module);
    }

    const weaponData = getCraftedStats(moduleList, materialData);
    if (!weaponData) return;

    // Update stats preview
    modifyClass(Array.from(statsPreview.children), "hide", "add");

    // This is to make it so all the craft values are hidden when no modles are selected
    if (moduleList.length === 0 || materialData.length === 0) return;

    const weaponKeys = Object.keys(weaponData);
    for (let i = 0; i < weaponKeys.length; i++) {
        const statPreview = document.querySelector(
            `#craft-values > div > [data-slot="${weaponKeys[i]}"]`,
        );
        if (!statPreview) continue;

        // round the number to make it look nice
        if (!isNaN(weaponData[weaponKeys[i]])) {
            weaponData[weaponKeys[i]] = round(weaponData[weaponKeys[i]], 2);
        }

        if (weaponData[weaponKeys[i]] <= 0) continue;
        statPreview.textContent = weaponData[weaponKeys[i]];
        modifyClass(statPreview.parentElement, "hide", "remove");
    }
}

/** Updates the craft screen */
function updateCraftScreen() {
    if (Object.keys(craftingTempData.parts).length > 0) {
        updateCraftPreview(); // big preview of what it looks like
        updateMaterialSelectors(); // the material selectors
        updateCraftValues(); // the values for the materials used
    }
    updateCraftingInventory(); // the inventory on the craft screen
}
