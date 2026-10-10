function createCtxtOptions(optionsFor, type) {
    switch (optionsFor) {
        case eqipmentSlot:
            return [
                {
                    label: `uneqip ${equipSlots[type]}`,
                    action: () => unEquip(type),
                },
                {
                    label: `inspect ${type}`,
                    action: () => inspectItem(type),
                },
            ];
        default:
            return [
                {
                    label: "no actions",
                    action: () => console.warn(`no ctxt options for ${optionsFor}`),
                },
            ];
            break;
    }
}

function fillInventory(selector, inventory) {
    const inventoryEl = document.querySelector(selector);
    if (!inventoryEl) {
        console.warn("Invalid inventory selector", inventoryEl);
        return;
    }
    inventoryEl.replaceChildren();

    for (let invenItems = 0; invenItems < inventory.length; invenItems++) {
        let item = document.createElement("img");
        item.dataset.inslot = inventory[invenItems].item;
        item.className = "border-extra-thin context-pointer";
        inventoryEl.appendChild(item);
    }
}
