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
    { cssClass: "item-adamantite", file: "items/adamantite.svg" },
    { cssClass: "item-aluminum", file: "items/aluminum.svg" },
    { cssClass: "item-apple", file: "items/apple.svg" },
    { cssClass: "item-bean", file: "items/bean.svg" },
    { cssClass: "item-blue-berry", file: "items/blue berry.svg" },
    { cssClass: "item-bone", file: "items/bone.svg" },
    { cssClass: "item-shell", file: "items/shell.svg" },
    { cssClass: "item-bulborb", file: "items/bulborb.svg" },
    { cssClass: "item-cactus", file: "items/cactus.svg" },
    { cssClass: "item-cloth", file: "items/cloth.svg" },
    { cssClass: "item-carbon", file: "items/carbon.svg" },
    { cssClass: "item-copper", file: "items/copper.svg" },
    { cssClass: "item-corn", file: "items/corn.svg" },
    { cssClass: "item-crystalFlower", file: "items/crystal flower.svg" },
    { cssClass: "item-crystalFruit", file: "items/crystal fruit.svg" },
    { cssClass: "item-deathFruit", file: "items/death fruit.svg" },
    { cssClass: "item-dragonFruit", file: "items/dragon fruit.svg" },
    { cssClass: "item-eurekaLeaves", file: "items/eureka leaves.svg" },
    { cssClass: "item-fireFlower", file: "items/fire flower.svg" },
    { cssClass: "item-fireHerb", file: "items/fire herb.svg" },
    { cssClass: "item-flameright", file: "items/flameright.svg" },
    { cssClass: "item-flint", file: "items/flint.svg" },
    { cssClass: "item-flower", file: "items/flower.svg" },
    { cssClass: "item-fummingFlower", file: "items/fumming flower.svg" },
    { cssClass: "item-gemstone", file: "items/gemstone.svg" },
    { cssClass: "item-ghostPepper", file: "items/ghost pepper.svg" },
    { cssClass: "item-glass", file: "items/glass.svg" },
    { cssClass: "item-gold", file: "items/gold.svg" },
    { cssClass: "item-goop", file: "items/goop.svg" },
    { cssClass: "item-grass", file: "items/grass.svg" },
    { cssClass: "item-hyruleHerb", file: "items/hyrule herb.svg" },
    { cssClass: "item-iron", file: "items/iron.svg" },
    { cssClass: "item-killerBerry", file: "items/killer berry.svg" },
    { cssClass: "item-lead", file: "items/lead.svg" },
    { cssClass: "item-leaf", file: "items/leaf.svg" },
    { cssClass: "item-leather", file: "items/leather.svg" },
    { cssClass: "item-lifeFruit", file: "items/life fruit.svg" },
    { cssClass: "item-lithium", file: "items/lithium.svg" },
    { cssClass: "item-magnesium", file: "items/magnesium.svg" },
    { cssClass: "item-meat", file: "items/meat.svg" },
    { cssClass: "item-masterOre", file: "items/master ore.svg" },
    { cssClass: "item-milk", file: "items/milk.svg" },
    { cssClass: "item-mint", file: "items/mint.svg" },
    { cssClass: "item-mithril", file: "items/mithril.svg" },
    { cssClass: "item-mushroom", file: "items/mushroom.svg" },
    { cssClass: "item-orangeBerries", file: "items/orange berries.svg" },
    { cssClass: "item-pale", file: "items/pale.svg" },
    { cssClass: "item-pepper", file: "items/pepper.svg" },
    { cssClass: "item-pikminMeat", file: "items/pikmin meat.svg" },
    { cssClass: "item-pikmin", file: "items/pikmin.svg" },
    { cssClass: "item-platinum", file: "items/platinum.svg" },
    { cssClass: "item-plutonium", file: "items/plutonium.svg" },
    { cssClass: "item-powder", file: "items/powder.svg" },
    { cssClass: "item-rat", file: "items/rat.svg" },
    { cssClass: "item-rice", file: "items/rice.svg" },
    { cssClass: "item-shinyStone", file: "items/shiny stone.svg" },
    { cssClass: "item-shroomSoup", file: "items/shroom soup.svg" },
    { cssClass: "item-silver", file: "items/silver.svg" },
    { cssClass: "item-stone", file: "items/stone.svg" },
    { cssClass: "item-string", file: "items/string.svg" },
    { cssClass: "item-tin", file: "items/tin.svg" },
    { cssClass: "item-titanium", file: "items/titanium.svg" },
    { cssClass: "item-treeBranch", file: "items/tree branch.svg" },
    { cssClass: "item-uramite", file: "items/uramite.svg" },
    { cssClass: "item-uranium", file: "items/uranium.svg" },
    { cssClass: "item-venom", file: "items/venom.svg" },
    { cssClass: "item-volcanoFruit", file: "items/volcano fruit.svg" },
    { cssClass: "item-water", file: "items/water.svg" },
    { cssClass: "item-watermelon", file: "items/watermelon.svg" },
    { cssClass: "item-wheat", file: "items/wheat.svg" },
    { cssClass: "item-ingot", file: "items/ingot.svg" },
    { cssClass: "item-xtramite", file: "items/Xtramite.svg" },
    { cssClass: "item-zinc", file: "items/zinc.svg" },

    // handles
    { cssClass: "item-basicHandle", file: "modules/handle/basic handle.svg" },
    { cssClass: "item-curvedHandle", file: "modules/handle/curved handle.svg" },
    { cssClass: "item-hollowHandle", file: "modules/handle/hollow handle.svg" },
    { cssClass: "item-shieldedHandle", file: "modules/handle/shielded handle.svg" },
    { cssClass: "item-stickyHandle", file: "modules/handle/sticky handle.svg" },
    { cssClass: "item-thickHandle", file: "modules/handle/thick handle.svg" },
    { cssClass: "item-wrapedHandle", file: "modules/handle/wraped handle.svg" },
    { cssClass: "item-flexibleHandle", file: "modules/handle/flexible handle.svg" },
    // schematic common handles
    { cssClass: "item-commonSlapstick", file: "modules/common/slapstick.svg" },

    { cssClass: "item-basicBlade", file: "modules/blade/basic blade.svg" },
    { cssClass: "item-claymoreBlade", file: "modules/blade/claymore blade.svg" },
    { cssClass: "item-jagidBlade", file: "modules/blade/jagid blade.svg" },
    { cssClass: "item-katanaBlade", file: "modules/blade/katana blade.svg" },
    { cssClass: "item-macheteBlade", file: "modules/blade/machete blade.svg" },
    { cssClass: "item-rapierBlade", file: "modules/blade/rapier blade.svg" },
    { cssClass: "item-shortBlade", file: "modules/blade/short blade.svg" },
];

/* Someones mad that XML does not support local scope */
const sharedSVGElements = `
<defs>
    <!-- material 1 (new gradient per path) -->
    <linearGradient
        id="M1-center-linear"
        gradientUnits="objectBoundingBox"
        x1="0%" y1="50%"
        x2="100%" y2="50%"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </linearGradient>

    <radialGradient
        id="M1-center-radial"
        gradientUnits="objectBoundingBox"
        cx="50%" cy="50%"
        r="70%"
        fx="40%" fy="35%"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </radialGradient>

    <!-- material 2 -->
    <linearGradient
        id="M2-center-linear"
        gradientUnits="objectBoundingBox"
        x1="0%" y1="50%"
        x2="100%" y2="50%"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </linearGradient>

    <radialGradient
        id="M2-center-radial"
        gradientUnits="objectBoundingBox"
        cx="50%" cy="50%"
        r="70%"
        fx="40%" fy="35%"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </radialGradient>


    <!-- spillover gradients (1 graident for all paths) -->
    <!-- material 1 -->
    <linearGradient
        id="M1-spill-linear"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </linearGradient>

    <radialGradient
        id="M1-spill-radial"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </radialGradient>

    <!-- material 2 -->
    <linearGradient
        id="M2-spill-linear"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </linearGradient>

    <radialGradient
        id="M2-spill-radial"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </radialGradient>
</defs>
`;

function displayIcon() {
    for (let icon of itemIcons) {
        if (!icon.svg) continue;

        document.querySelectorAll(`item-icon.${icon.cssClass}`).forEach((element) => {
            // Store the icon class and materials
            const loaded = JSON.stringify([
                icon.cssClass,
                element.dataset.material,
                element.dataset.material2,
            ]);

            // Skip if the correct icon and materials are already loaded
            if (element.dataset.loaded === loaded) return;

            // Create or reuse the shadow root
            let shadow =
                element.shadowRoot ||
                element.attachShadow({
                    mode: "open",
                });

            // Apply the material colors
            applyIconMaterials(element);

            // Insert the SVG into the shadow root
            shadow.innerHTML = icon.svg;
            shadow.querySelector("svg").setAttribute("part", "svg");

            element.dataset.loaded = loaded;

            // Select if it should use ingot or center gradients
            shadow.querySelectorAll("[data-material][data-gradient]").forEach((path) => {
                const number = path.dataset.material;
                const layout = path.dataset.gradient;

                const type = getComputedStyle(element)
                    .getPropertyValue(`--M${number}-material-gradient`)
                    .trim();

                const gradient = `url(#M${number}-${layout}-${type})`;

                if (path.getAttribute("stroke-width")) {
                    path.style.stroke = gradient;
                    path.style.fill = "none";
                } else {
                    path.style.fill = gradient;
                }

                // Special stroke butts have both fill and stroke
                if (path.dataset.stokebutt === "true") {
                    path.style.fill = gradient;
                }
            });
        });
    }
}

function applyIconMaterials(icon) {
    for (let i = 1; ; i++) {
        const material = icon.getAttribute(i === 1 ? "data-material" : `data-material${i}`);

        if (!material) break;

        if (!materials.includes(material)) console.log(`invalid material, ${material}`);

        // Get the existing material CSS
        const itemIcon = document.createElement("item-icon");
        itemIcon.dataset.material = material;
        itemIcon.style.cssText = "position:absolute;visibility:hidden";
        document.body.appendChild(itemIcon);

        const style = getComputedStyle(itemIcon);

        // Copy and rename the material variables
        for (const name of [
            "color1",
            "color2",
            "color3",
            "color4",
            "color-edge",
            "material-gradient",
        ]) {
            let value = style.getPropertyValue(`--${name}`).trim();

            // Rename variable references to the correct material slot
            value = value
                .replace(/--color([1-4])/g, `--M${i}-color$1`)
                .replace(/\b(duo2-mix|duo3-mix|triple3-mix)\b/g, `var(--M${i}-$1)`);

            if (value) {
                icon.style.setProperty(`--M${i}-${name}`, value);
            }
        }

        itemIcon.remove();
    }
}

async function loadIcons() {
    let fetcher;

    for (let icon = 0; icon < itemIcons.length; icon++) {
        if (!itemIcons[icon].file) {
            console.warn(`error loading icon ${icon}`);
            continue;
        }

        fetcher = await fetch(`Assets/${itemIcons[icon].file}`);
        itemIcons[icon].svg = await fetcher.text();

        let svg = new DOMParser().parseFromString(
            itemIcons[icon].svg,
            "image/svg+xml",
        ).documentElement;

        svg.insertAdjacentHTML("afterbegin", sharedSVGElements);

        // Automatically position spill gradients
        const [x, y, width, height] = svg
            .getAttribute("viewBox")
            .trim()
            .split(/[\s,]+/)
            .map(Number);

        svg.querySelectorAll('[id$="-spill-linear"]').forEach((gradient) => {
            gradient.setAttribute("x1", x);
            gradient.setAttribute("y1", y + height / 2);
            gradient.setAttribute("x2", x + width);
            gradient.setAttribute("y2", y + height / 2);
        });

        svg.querySelectorAll('[id$="-spill-radial"]').forEach((gradient) => {
            gradient.setAttribute("cx", x + width / 2);
            gradient.setAttribute("cy", y + height / 2);
            gradient.setAttribute("r", Math.max(width, height) / 2);
        });

        itemIcons[icon].svg = svg.outerHTML;
    }

    displayIcon();
}
loadIcons();

document.addEventListener("DOMContentLoaded", () => {
    const svgObserver = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            const element = mutation.target;

            // Ignore changes inside item-icon elements
            if (element.closest("item-icon") && !element.matches("item-icon")) continue;

            if (mutation.type === "childList") {
                for (let node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue;

                    if (node.matches("item-icon") || node.querySelector("item-icon")) {
                        displayIcon();
                        return;
                    }
                }
            }

            if (mutation.type === "attributes" && element.matches("item-icon")) {
                const name = mutation.attributeName;

                // Check material changes (data-material, data-material2, etc.)
                if (/^data-material\d*$/.test(name)) {
                    if (mutation.oldValue !== element.getAttribute(name)) {
                        displayIcon();
                        return;
                    }
                }

                // Check item-* class changes
                if (name === "class") {
                    const oldItem = (mutation.oldValue || "")
                        .split(/\s+/)
                        .find((c) => c.startsWith("item-"));

                    const newItem = [...element.classList].find((c) => c.startsWith("item-"));

                    if (oldItem !== newItem) {
                        displayIcon();
                        return;
                    }
                }
            }
        }
    });

    svgObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true,
    });
});

// Icon data

/**
 * This is for get icon data for non crafted item icons (icons that are only 1 SVG)
 *
 * @param {string|items.item|iventoryItem} icon - either a item iventoryItem or a item-icon CSS class
 * @param {string} material - data-material "does nothing for crafted items"
 * @returns {iconData[]}
 *
 * @typedef {Object} iconData
 * @property {String} class - the item-icon class
 * @property {String} material - data-material
 * @property {String} material2 - data-material2
 * @property {Number} layer - which that the svgs appear ontop of each other
 */
function getIcon(icon, materialOveride) {
    let iconData = [];

    if (!icon) {
        console.warn("can't get data for invalid icon", icon);
        return;
    }

    if (icon.craftedItemID) {
        // this is a crafted item
        const craftedItem = getCraftedItem(icon);
        const commonPart = craftedItem.components.schematic.commonPart;

        for (let i = 0; i < craftedItem.components.craftedModules.length; i++) {
            const craftedModule = craftedItem.components.craftedModules[i];
            // the materials in module.materials[0] are for material1 while module.materials[1] are for material 2
            const materialOffset = craftedModule.module.materials[0].amount;

            // Module key name and item- class are the same
            // prettier-ignore
            const moduleName = Object.keys(modules).find((module) => modules[module].name === craftedModule.module.name,);

            let currentIcon = {
                class: `item-${moduleName}`,
                material: craftedModule.materials[0].item,
                material2: craftedModule.materials[materialOffset],
                layer: craftedModule.part.layer,
            };

            // If the material is a valid item switch the material to the items name
            if (items[currentIcon.material.item]) {
                if (items[currentIcon.material.item].material) {
                    currentIcon.material = items[currentIcon.material.item].material;
                } else {
                    currentIcon.material = currentIcon.material.item;
                }
            }

            if (currentIcon.material2) currentIcon.material2 = currentIcon.material2.item;

            iconData.push(currentIcon);

            // if the schmatic has a common SVG apply it
            if (commonPart) {
                if (commonPart.material !== craftedModule.part.name) continue;
                iconData.push({
                    class: commonPart.SVG,
                    material: currentIcon.material,
                    material2: currentIcon.material2,
                    layer: 0,
                });
            }
        }

        return iconData;
    }

    // non crafted items --------------------------------------------

    let iconClass;
    let material;

    // Convert a inventory.item to a items.item
    if (items[icon.item]) {
        if (icon.material1) materialOveride = icon.material1;

        icon = items[icon.item];
    }

    if (Object.keys(items).find((item) => items[item].name === icon.name)) {
        // this is a items.item
        if (icon.SVG) {
            // with SVG overide
            iconClass = `item-${icon.SVG}`;
        } else {
            // no SVG
            iconClass = `item-${Object.keys(items).find((itemName) => items[itemName].name === icon.name)}`;
        }

        if (icon.material) {
            material = icon.material;
        } else {
            material = icon.name.toLocaleLowerCase();
        }
    } else if (itemIcons.find((itemIcon) => itemIcon.cssClass === icon)) {
        // It is item-icon class
        iconClass = icon;

        // find if this icon has a material
        const iconName = (material = icon.split("-")[1]);
        const relatedItem = Object.values(items).find((item) => item.SVG === iconName);

        if (relatedItem) {
            // use the material of a item that shares this icon
            material = relatedItem.name.toLocaleLowerCase();
        } else {
            // use the icon name (like copper) as the material
            material = iconName;
        }
    } else {
        console.warn("can't find data for invalid icon", icon);
        return;
    }

    if (materialOveride) material = materialOveride;

    return [
        {
            class: iconClass,
            material: material,
            material2: undefined,
            layer: 0,
        },
    ];
}
/**
 *
 * @param {Object} iconData - iconData from getIcon()
 * @returns {HTMLElement} - a section element with all the item-icons in them
 */
function createItemIcon(iconData) {
    let iconGroup = document.createElement("item-group");
    for (let i = 0; i < iconData.length; i++) {
        const icon = document.createElement("item-icon");

        if (!iconData[i].class || !iconData[i].material || typeof iconData[i].layer !== "number") {
            console.warn(`Icon ${i} is missing data`, iconData);
            continue;
        }

        icon.className = iconData[i].class;
        icon.dataset.material = iconData[i].material;
        if (icon.dataset.material2) icon.dataset.material2 = iconData[i].material2;
        icon.style.zIndex = iconData[i].layer;

        iconGroup.appendChild(icon);
    }
    return iconGroup;
}
