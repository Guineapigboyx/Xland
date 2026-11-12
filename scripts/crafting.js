document.addEventListener("DOMContentLoaded", () => {
    const schematicPicker = document.getElementById("schematics-picker");

    // construct elements for craft screen picker
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

    const dropdown = document.querySelector("#crafting-player-dropdown");

    // prettier-ignore
    const observer = new MutationObserver(() => {
        const dropdownValue = document.getElementById("crafting-player-dropdown").attributes.value.value;

        // reset craft screen
        if (dropdownValue === "N/A") {
            clearInventory(".craft-screen > .inventory");
            return;
        }

        if (!gameState.persons[dropdownValue]) {
            console.warn("invalid person");
            return;
        }

        // crafting screen with that persons data
        fillInventory(".craft-screen > .inventory", gameState.persons[dropdownValue].inventory);
    });

    observer.observe(dropdown, {
        attributes: true,
        attributeFilter: ["value"],
    });
});
