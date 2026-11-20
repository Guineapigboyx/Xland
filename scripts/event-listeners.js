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
                    clearDiv(".craft-screen > .inventory");
                    return;
                }

                if (!gameState.persons[value]) {
                    console.warn("invalid person");
                    return;
                }

                craftingTempData.person = value;

                // clear material selections
                for (let i = 0; i < Object.keys(craftingTempData.parts).length; i++) {
                    const partKey = Object.keys(craftingTempData.parts)[i];
                    if (!partKey) continue;

                    craftingTempData.parts[partKey].materials = [];
                }
                updateCraftScreen();
                if (Object.keys(craftingTempData.parts).length > 0) updateMaterialSelectors();

                // crafting screen with that persons data
                fillInventory(".craft-screen > .inventory", gameState.persons[value].inventory);
                break;
            // the module selectors
            case "crafting-module":
                // update craftingData
                const slot = dropdown.parentElement.dataset.slot;
                const module = Object.keys(modules).find((x) => modules[x].name === value);
                craftingTempData.parts[slot].module = module;
                // clears materials
                craftingTempData.parts[slot].materials = [];

                updateCraftScreen();
                break;
        }
    });
});

/**
 *  click handler for clikcing on materials in the craft inventory
 *
 * @param {Event} event - the onclick event
 * @param {String|HTMLElement} groupSel - the selector for the element holding the thing being clicked on
 * @param {String|HTMLElement} clickedSel - the class you are clicking on
 */
function selectDiv(event, groupSel, clickedSel) {
    const clickedDiv = event.target.closest(clickedSel);
    if (!clickedDiv) return;

    let selectedSlots;
    if (groupSel instanceof Element) {
        selectedSlots = groupSel;
    } else if (typeof groupSel === "string") {
        if (!document.querySelector(groupSel)) return;
        selectedSlots = document.querySelectorAll(`${groupSel} > .selected`);
    } else {
        console.warn("Invalid selector", `${groupSel} > .selected`);
        return;
    }

    // add/remove selected class

    if (selectedSlots) modfiyClass(selectedSlots, "selected", "remove");

    modfiyClass(clickedDiv, "selected", "add");
}
