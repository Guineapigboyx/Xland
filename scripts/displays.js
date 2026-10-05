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
