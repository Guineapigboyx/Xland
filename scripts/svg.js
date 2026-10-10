/**
 * @typedef {Object} itemIcons - all of the SVG's in xland
 * @property {svgData} - data about the svg
 *
 * @typedef {Object} svgData -
 * @property {String} cssClass - the CSS class this SVG is useing
 * @property {String} file - the Assets/items/ file path to the svg files
 * @property {undefined|svg} svg - the svg file data, it will be filled in by loadIcons
 */
let itemIcons = [
    { cssClass: "item-adamantite", file: "adamantite.svg" },
    { cssClass: "item-aluminum", file: "aluminum.svg" },
    { cssClass: "item-amber", file: "amber.svg" },
    { cssClass: "item-apple", file: "apple.svg" },
    { cssClass: "item-bean", file: "bean.svg" },
    { cssClass: "item-blue-berry", file: "blue berry.svg" },
    { cssClass: "item-bulborb", file: "bulborb.svg" },
    { cssClass: "item-cactus", file: "cactus.svg" },
    { cssClass: "item-cloth", file: "cloth.svg" },
    { cssClass: "item-coal", file: "coal.svg" },
    { cssClass: "item-copper", file: "copper.svg" },
    { cssClass: "item-corn", file: "corn.svg" },
    { cssClass: "item-crystal-flower", file: "crystal flower.svg" },
    { cssClass: "item-crystal-fruit", file: "crystal fruit.svg" },
    { cssClass: "item-death-fruit", file: "death fruit.svg" },
    { cssClass: "item-dragon-fruit", file: "dragon fruit.svg" },
    { cssClass: "item-eureka-leaves", file: "eureka leaves.svg" },
    { cssClass: "item-fire-flower", file: "fire flower.svg" },
    { cssClass: "item-fire-herb", file: "fire herb.svg" },
    { cssClass: "item-flameright", file: "flameright.svg" },
    { cssClass: "item-flint", file: "flint.svg" },
    { cssClass: "item-flower", file: "flower.svg" },
    { cssClass: "item-fumming flower", file: "fumming flower.svg" },
    { cssClass: "item-ghost-pepper", file: "ghost pepper.svg" },
    { cssClass: "item-glass", file: "glass.svg" },
    { cssClass: "item-gold", file: "gold.svg" },
    { cssClass: "item-goop", file: "goop.svg" },
    { cssClass: "item-grass", file: "grass.svg" },
    { cssClass: "item-hyrule-herb", file: "hyrule herb.svg" },
    { cssClass: "item-iron", file: "iron.svg" },
    { cssClass: "item-killer berry", file: "killer berry.svg" },
    { cssClass: "item-lead", file: "lead.svg" },
    { cssClass: "item-leaf", file: "leaf.svg" },
    { cssClass: "item-leather", file: "leather.svg" },
    { cssClass: "item-life-fruit", file: "life fruit.svg" },
    { cssClass: "item-lithium", file: "lithium.svg" },
    { cssClass: "item-magnesium", file: "magnesium.svg" },
    { cssClass: "item-master-ore", file: "master ore.svg" },
    { cssClass: "item-milk", file: "milk.svg" },
    { cssClass: "item-mint", file: "mint.svg" },
    { cssClass: "item-mithril", file: "mithril.svg" },
    { cssClass: "item-mushroom", file: "mushroom.svg" },
    { cssClass: "item-orange-berries", file: "orange berries.svg" },
    { cssClass: "item-pale", file: "pale.svg" },
    { cssClass: "item-pepper", file: "pepper.svg" },
    { cssClass: "item-pikmin-meat", file: "pikmin meat.svg" },
    { cssClass: "item-pikmin", file: "pikmin.svg" },
    { cssClass: "item-platinum", file: "platinum.svg" },
    { cssClass: "item-plutonium", file: "plutonium.svg" },
    { cssClass: "item-powder", file: "powder.svg" },
    { cssClass: "item-rat", file: "rat.svg" },
    { cssClass: "item-rice", file: "rice.svg" },
    { cssClass: "item-shiny-stone", file: "shiny stone.svg" },
    { cssClass: "item-shroom-soup", file: "shroom soup.svg" },
    { cssClass: "item-silver", file: "silver.svg" },
    { cssClass: "item-stone", file: "stone.svg" },
    { cssClass: "item-string", file: "string.svg" },
    { cssClass: "item-tin", file: "tin.svg" },
    { cssClass: "item-titanium", file: "titanium.svg" },
    { cssClass: "item-tree-branch", file: "tree branch.svg" },
    { cssClass: "item-uramite", file: "uramite.svg" },
    { cssClass: "item-uranium", file: "uranium.svg" },
    { cssClass: "item-venom", file: "venom.svg" },
    { cssClass: "item-volcano fruit", file: "volcano fruit.svg" },
    { cssClass: "item-water", file: "water.svg" },
    { cssClass: "item-watermelon", file: "watermelon.svg" },
    { cssClass: "item-wheat", file: "wheat.svg" },
    { cssClass: "item-wood", file: "wood.svg" },
    { cssClass: "item-Xtramite", file: "Xtramite.svg" },
    { cssClass: "item-zinc", file: "zinc.svg" },
];

/**
 * Display a SVG
 * @param {String} selector - the selector you are wanting to put the svg on
 * @param {itemIcons.svgData} svg - the svgData
 * @param {String|undefined} - the material type that this SVG will be useing
 */
function displayIcon() {
    for (let icon = 0; icon < itemIcons.length; icon++) {
        if (!itemIcons[icon].svg) {
            continue;
        }
        document
            .querySelectorAll(`.${itemIcons[icon].cssClass}`)
            .forEach((svgIcon) => (svgIcon.innerHTML = itemIcons[icon].svg));
    }
}

async function loadIcons() {
    let fetcher;
    for (let icon = 0; icon < itemIcons.length; icon++) {
        if (!itemIcons[icon].file) {
            console.warn(`error loading icon ${icon}`);
            continue;
        }
        fetcher = await fetch(`Assets/items/${itemIcons[icon].file}`);
        itemIcons[icon].svg = await fetcher.text();
    }
}
loadIcons();
