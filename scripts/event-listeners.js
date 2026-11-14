// shift held
let shiftHeld = false;
document.addEventListener("keydown", (e) => {
    if (e.key === "Shift") shiftHeld = true;
});
document.addEventListener("keyup", (e) => {
    if (e.key === "Shift") shiftHeld = false;
});

document.addEventListener("DOMContentLoaded", () => {
    // right click actions ------------------------------------------------
    document.querySelectorAll(".person-overview > *[data-equipment]").forEach((el) => {
        el.addEventListener("contextmenu", (event) => {
            event.preventDefault();

            const slot = el.dataset.equipment;
            const itemname = getItemFromName(el.dataset.inslot);

            // Define context menu options
            const options = createItemCtxtOptions(slot, itemname);

            // Show the context menu at cursor position
            if (options.length > 0) {
                showContextMenu(event.pageX, event.pageY, options);
            }
        });
    });

    /**
     * dropdowns value change handler
     *
     * @typedef {object} eventData
     * @property {string} value - The new value of the dropdown
     * @property {string} previousValue - The value the dropdown had before changeing
     * @property {HTMLElement} option - The option element clicked on
     */
    document.addEventListener("dropdownChange", (event) => {
        const dropdown = event.target;
        const eventData = event.detail;
        const value = eventData.value;

        switch (dropdown.dataset.dropdown) {
            // the player selector for the craft screen
            case "crafting-player":
                // reset craft screen
                if (value === "N/A") {
                    clearInventory(".craft-screen > .inventory");
                    return;
                }

                if (!gameState.persons[value]) {
                    console.warn("invalid person");
                    return;
                }

                // crafting screen with that persons data
                fillInventory(".craft-screen > .inventory", gameState.persons[value].inventory);

                addClass(".craft-screen > .inventory > item-group", "svg-hover");
                break;
            // the module selectors
            case "crafting-module":
                // reset craft screen
                if (value === "N/A") {
                    return;
                }

                // get the schematic
                // prettier-ignore
                const schematic = document.querySelector("#schematics-picker > .selected").dataset.schematic;
                if (!schematic) {
                    console.log("invalid schematic selected", value);
                    break;
                }

                // get the module
                // prettier-ignore
                const selectedModule = Object.keys(modules).find((key) => modules[key].name === value);
                if (!selectedModule) {
                    console.log("invalid module selected", value);
                    break;
                }

                //generate preview
                iconData = getIcon(`item-${selectedModule}`, "schematic5");

                if (!iconData) {
                    console.warn("Failed to get icon Data");
                    return;
                }

                let icon = createItemIcon(iconData);
                if (!icon) {
                    console.warn("Failed to create icon");
                    return;
                }

                icon.classList.add("fit-div");

                // put the icon in the preview
                const craftPreview = document.getElementById("craft-preview");
                document.getElementById("craft-preview").appendChild(icon);

                // makes it so the parts of the modules highlight when hovering over them
                addClass("#craft-preview > item-group > item-icon", "svg-hover-light");

                break;
        }
    });
});
