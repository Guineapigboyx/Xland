document.addEventListener("DOMContentLoaded", () => {
    const schematicPicker = document.getElementById("schematics-picker");

    // construct elements for craft screen picker ------------------------------------------------
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

    // selecting a schematic ------------------------------------------------
    document.querySelector("#schematics-picker").addEventListener("click", (e) => {
        const button = e.target.closest("button.button-icon");
        if (!button) return;

        const schematic = schematics[button.dataset.schematic];
        if (!schematic) return;

        // clear craft preview
        clearDiv("#craft-preview");

        modfiyClass("#schematics-picker .selected", "selected", "remove");
        modfiyClass(button, "selected", "add");

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

    // craft-preview is already an item-group, so place the icons directly inside it.
    craftPreview.replaceChildren(...iconGroup.children);

    // Make the individual modules highlight when hovered.
    modfiyClass("#craft-preview > item-icon", "svg-hover-light", "add");
}

/** Selecting a module in the material preview */
function selectModulePart(event) {
    const clickedModule = event.target.closest("item-icon");
}
