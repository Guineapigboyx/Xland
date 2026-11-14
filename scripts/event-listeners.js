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
        }
    });
});
