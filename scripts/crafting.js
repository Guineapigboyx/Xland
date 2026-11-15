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

        modfiyClass("#schematics-picker .selected", "selected", "remove");
        modfiyClass(button, "selected", "add");

        //Select the modules menue
        clickPartNav("module");

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
 * Builds the craft preview from the modules currently selected in the module picker
 */
function updateCraftPreview() {
    const selectedSchematic = document.querySelector("#schematics-picker > .selected")?.dataset
        .schematic;
    const craftPreview = document.getElementById("craft-preview");

    if (!selectedSchematic || !craftPreview) return;

    const schematic = schematics[selectedSchematic];
    const iconData = [];

    for (const [partKey, part] of Object.entries(schematic.parts)) {
        const dropdown = document.querySelector(
            `#module-selector > [data-slot="${partKey}"] > .dropdown`,
        );

        const moduleName = dropdown?.getAttribute("value");

        if (!moduleName || moduleName === "N/A") continue;

        const moduleKey = Object.keys(modules).find((key) => modules[key].name === moduleName);

        if (!moduleKey) {
            console.warn("Could not find module:", moduleName);
            continue;
        }

        iconData.push({
            class: `item-${moduleKey}`,
            material: "schematic5",
            material2: "schematic1",
            layer: part.layer,
            slot: partKey,
        });

        // Add the schematic's shared SVG when its associated part is selected.
        if (schematic.commonPart?.material === partKey) {
            iconData.push({
                class: schematic.commonPart.SVG,
                material: "schematic5",
                material2: "schematic1",
                layer: 0,
            });
        }
    }

    const iconGroup = createItemIcon(iconData);
    const previewIcons = [...iconGroup.children];

    for (let i = 0; i < previewIcons.length; i++) {
        if (iconData[i].slot) {
            previewIcons[i].dataset.slot = iconData[i].slot;
        }
    }

    // craft-preview is already an item-group, so place the icons directly inside it.
    craftPreview.replaceChildren(...iconGroup.children);

    // Make the individual modules highlight when hovered.
    modfiyClass("#craft-preview > item-icon", "svg-hover-light", "add");
}

/**
 * Builds the material selectors for all currently selected modules.
 */
function updateMaterialSelectors() {
    // prettier-ignore
    const selectedSchematic = document.querySelector("#schematics-picker > .selected")?.dataset.schematic;
    const materialSelector = document.getElementById("material-selector");

    if (!selectedSchematic || !materialSelector) return;
    clearDiv(materialSelector);

    const schematic = schematics[selectedSchematic];

    for (const [partKey, part] of Object.entries(schematic.parts)) {
        const dropdown = document.querySelector(
            `#module-selector > [data-slot="${partKey}"] > .dropdown`,
        );

        const moduleName = dropdown?.getAttribute("value");
        if (!moduleName || moduleName === "N/A") continue;

        const moduleKey = Object.keys(modules).find((key) => modules[key].name === moduleName);
        if (!moduleKey) continue;

        const selectedModule = modules[moduleKey];

        // Create the material bubble element for this part.
        const materialBubble = document.createElement("div");
        const summary = document.createElement("summary");

        materialBubble.className = "material-selector flex-down small-text bubble square-bubble";
        materialBubble.dataset.slot = partKey;

        summary.textContent = `${part.partName} => ${moduleName}`;

        materialBubble.appendChild(summary);

        // Create one material selector for each requirement.
        for (let i = 0; i < selectedModule.materials.length; i++) {
            const requirement = selectedModule.materials[i];

            const materialSlot = document.createElement("div");
            const materialName = document.createElement("p");
            const materialAmount = document.createElement("p");
            const materialIcon = document.createElement("item-icon");

            // Get the allowed material names.
            const allowedMaterials = requirement.allowedMaterials.flat(Infinity);

            //prettier-ignore
            const allowedNames = allowedMaterials.map((material) => {
                if (typeof material === "string") {return material;}
                return material.name;
            });

            // Use a generic icon representing the first allowed material.
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

                iconClass = `item-${firstMaterial.SVG || itemKey}`;
            }

            // Configure the material icon.
            materialIcon.className = `fit-svg ${iconClass}`;
            materialIcon.dataset.material = "schematic5";

            // Configure the material requirement label.
            if (allowedMaterials.every((material) => typeof material === "string")) {
                materialName.textContent = `Any ${allowedNames.join(" / ")}`;
            } else {
                materialName.textContent = allowedNames.join(" / ");
            }

            materialAmount.textContent = `${requirement.amount}x`;

            // Style the material amount
            materialAmount.className =
                "small-text center-text header-text dark-bubble square-bubble";

            // semi auto scale text for material name
            if (materialName.textContent.length > 30) {
                materialName.className = "tiny-text";
            } else if (materialName.textContent.length > 20) {
                materialName.className = "small-text";
            } else {
                materialName.className = "medium-text";
            }
            modfiyClass(materialName, "center-text", "add");

            // Configure the material slot.
            materialSlot.className = "material-slot border-super-thin bad";
            materialSlot.dataset.part = partKey;
            materialSlot.dataset.materialSlot = i;

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

    const partKey = clickedModule.dataset.slot;

    // Switch to the material selector menu.
    clickPartNav("material");

    // Find the corresponding material details.
    const details = document.querySelector(`#material-selector > div[data-slot="${partKey}"]`);

    if (!details) return;

    details.open = true;
}
