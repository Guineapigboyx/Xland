function createCtxtOptionsEqipSlot(optionsFor, type) {
    return [
        {
            label: `uneqip ${type}`,
            action: () => openWikiPage(type),
        },
    ];
}
