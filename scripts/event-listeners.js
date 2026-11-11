// shift held
let shiftHeld = false;
document.addEventListener("keydown", (e) => {
    if (e.key === "Shift") shiftHeld = true;
});
document.addEventListener("keyup", (e) => {
    if (e.key === "Shift") shiftHeld = false;
});

document.addEventListener("DOMContentLoaded", () => {
    // Make vertical scrolling horizntal
    document.querySelector("#schematics-picker").onwheel = (e) => {
        e.preventDefault();
        e.currentTarget.scrollBy({
            left: e.deltaY,
            behavior: "smooth",
        });
    };

    document.querySelector("#schematics-picker").addEventListener("click", (e) => {
        const button = e.target.closest("button.button-icon");

        if (!button) return;

        document.querySelector("#schematics-picker .selected")?.classList.remove("selected");
        button.classList.add("selected");
    });

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
