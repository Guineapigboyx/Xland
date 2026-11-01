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
    { cssClass: "item-crystalFlower", file: "crystal flower.svg" },
    { cssClass: "item-crystalFruit", file: "crystal fruit.svg" },
    { cssClass: "item-deathFruit", file: "death fruit.svg" },
    { cssClass: "item-dragonFruit", file: "dragon fruit.svg" },
    { cssClass: "item-eurekaLeaves", file: "eureka leaves.svg" },
    { cssClass: "item-fireFlower", file: "fire flower.svg" },
    { cssClass: "item-fireHerb", file: "fire herb.svg" },
    { cssClass: "item-flameright", file: "flameright.svg" },
    { cssClass: "item-flint", file: "flint.svg" },
    { cssClass: "item-flower", file: "flower.svg" },
    { cssClass: "item-fummingFlower", file: "fumming flower.svg" },
    { cssClass: "item-ghostPepper", file: "ghost pepper.svg" },
    { cssClass: "item-glass", file: "glass.svg" },
    { cssClass: "item-gold", file: "gold.svg" },
    { cssClass: "item-goop", file: "goop.svg" },
    { cssClass: "item-grass", file: "grass.svg" },
    { cssClass: "item-hyruleHerb", file: "hyrule herb.svg" },
    { cssClass: "item-iron", file: "iron.svg" },
    { cssClass: "item-killerBerry", file: "killer berry.svg" },
    { cssClass: "item-lead", file: "lead.svg" },
    { cssClass: "item-leaf", file: "leaf.svg" },
    { cssClass: "item-leather", file: "leather.svg" },
    { cssClass: "item-lifeFruit", file: "life fruit.svg" },
    { cssClass: "item-lithium", file: "lithium.svg" },
    { cssClass: "item-magnesium", file: "magnesium.svg" },
    { cssClass: "item-meat", file: "meat.svg" },
    { cssClass: "item-masterOre", file: "master ore.svg" },
    { cssClass: "item-milk", file: "milk.svg" },
    { cssClass: "item-mint", file: "mint.svg" },
    { cssClass: "item-mithril", file: "mithril.svg" },
    { cssClass: "item-mushroom", file: "mushroom.svg" },
    { cssClass: "item-orangeBerries", file: "orange berries.svg" },
    { cssClass: "item-pale", file: "pale.svg" },
    { cssClass: "item-pepper", file: "pepper.svg" },
    { cssClass: "item-pikminMeat", file: "pikmin meat.svg" },
    { cssClass: "item-pikmin", file: "pikmin.svg" },
    { cssClass: "item-platinum", file: "platinum.svg" },
    { cssClass: "item-plutonium", file: "plutonium.svg" },
    { cssClass: "item-powder", file: "powder.svg" },
    { cssClass: "item-rat", file: "rat.svg" },
    { cssClass: "item-rice", file: "rice.svg" },
    { cssClass: "item-shinyStone", file: "shiny stone.svg" },
    { cssClass: "item-shroomSoup", file: "shroom soup.svg" },
    { cssClass: "item-silver", file: "silver.svg" },
    { cssClass: "item-stone", file: "stone.svg" },
    { cssClass: "item-string", file: "string.svg" },
    { cssClass: "item-tin", file: "tin.svg" },
    { cssClass: "item-titanium", file: "titanium.svg" },
    { cssClass: "item-treeBranch", file: "tree branch.svg" },
    { cssClass: "item-uramite", file: "uramite.svg" },
    { cssClass: "item-uranium", file: "uranium.svg" },
    { cssClass: "item-venom", file: "venom.svg" },
    { cssClass: "item-volcanoFruit", file: "volcano fruit.svg" },
    { cssClass: "item-water", file: "water.svg" },
    { cssClass: "item-watermelon", file: "watermelon.svg" },
    { cssClass: "item-wheat", file: "wheat.svg" },
    { cssClass: "item-wood", file: "wood.svg" },
    { cssClass: "item-xtramite", file: "Xtramite.svg" },
    { cssClass: "item-zinc", file: "zinc.svg" },
];

const sharedSVGElements = `
<defs>
    <linearGradient
        id="ingot-linear"
        gradientUnits="userSpaceOnUse"
        x1="638" y1="250"
        x2="710" y2="250"
    >
        <stop offset="0" stop-color="var(--color1)" />
        <stop offset="0.48" stop-color="var(--color2)" />
        <stop offset="0.64" stop-color="var(--color3)" />
        <stop offset="1" stop-color="var(--color4)" />
    </linearGradient>
    <radialGradient
        id="ingot-radial"
        gradientUnits="userSpaceOnUse"
        cx="674" cy="250" r="40"
    >
        <stop offset="0" stop-color="var(--color1)" />
        <stop offset="0.48" stop-color="var(--color2)" />
        <stop offset="0.64" stop-color="var(--color3)" />
        <stop offset="1" stop-color="var(--color4)" />
    </radialGradient>
</defs>
`;

let svgGradientID = 0;
function updateMaterialGradient(svg) {
    let id = svg.dataset.gradientId;
    if (id === undefined) return;

    // Remove the inline override to read the actual CSS value
    svg.style.removeProperty("--material-gradient");

    let gradient = getComputedStyle(svg).getPropertyValue("--material-gradient").trim();

    svg.style.setProperty(
        "--material-gradient",
        gradient.replace(/url\(#(ingot-linear|ingot-radial)\)/, `url(#$1-${id})`),
    );
}

/**
 * Display a SVG
 * @param {String} selector - the selector you are wanting to put the svg on
 * @param {itemIcons.svgData} svg - the svgData
 * @param {String|undefined} - the material type that this SVG will be useing
 */
function displayIcon() {
    for (let icon = 0; icon < itemIcons.length; icon++) {
        if (!itemIcons[icon].svg) continue;

        document.querySelectorAll(`.${itemIcons[icon].cssClass}`).forEach((svgIcon) => {
            if (svgIcon.dataset.svgLoaded === itemIcons[icon].cssClass) return;

            // Generate an ID only once per SVG element
            let id = svgIcon.dataset.gradientId;

            if (id === undefined) {
                id = svgGradientID++;
                svgIcon.dataset.gradientId = id;
            }

            // Replace the artwork
            svgIcon.innerHTML = itemIcons[icon].svg;
            svgIcon.setAttribute("viewBox", itemIcons[icon].viewBox);

            // Give the gradients their existing unique IDs
            svgIcon.querySelectorAll("linearGradient, radialGradient").forEach((gradient) => {
                gradient.id += `-${id}`;
            });

            // Update the gradient reference only when needed
            updateMaterialGradient(svgIcon);

            svgIcon.dataset.svgLoaded = itemIcons[icon].cssClass;
        });
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

        let svg = new DOMParser().parseFromString(
            itemIcons[icon].svg,
            "image/svg+xml",
        ).documentElement;

        svg.insertAdjacentHTML("afterbegin", sharedSVGElements);
        itemIcons[icon].svg = svg.outerHTML;
    }
    displayIcon();
}
loadIcons();

document.addEventListener("DOMContentLoaded", () => {
    const svgObserver = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.type === "childList") {
                for (let node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue;

                    if (node.matches("svg") || node.querySelector("svg")) {
                        displayIcon();
                        return;
                    }
                }
            }

            if (mutation.type === "attributes") {
                let svg = mutation.target;
                if (!svg.matches("svg")) continue;

                if (mutation.attributeName === "data-material") {
                    updateMaterialGradient(svg);
                }

                if (mutation.attributeName === "class") {
                    let oldItem = (mutation.oldValue || "")
                        .split(/\s+/)
                        .find((c) => c.startsWith("item-"));
                    let newItem = [...svg.classList].find((c) => c.startsWith("item-"));

                    if (oldItem !== newItem) displayIcon();
                }
            }
        }
    });

    svgObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "data-material"],
        attributeOldValue: true,
    });
});
