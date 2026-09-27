// shift held
let shiftHeld = false;
document.addEventListener("keydown", (e) => {
    if (e.key === "Shift") shiftHeld = true;
});
document.addEventListener("keyup", (e) => {
    if (e.key === "Shift") shiftHeld = false;
});

document.addEventListener("DOMContentLoaded", () => {
    // right click actions
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
});
