document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector("#crafting-player-dropdown");

    const observer = new MutationObserver(() => {
        const dropdownValue = document.getElementById("crafting-player-dropdown").attributes.value
            .value;

        // reset craft screen
        if (dropdownValue === "N/A") {
            clearInventory(".craft-screen > .inventory");
            return;
        }

        // fill inventory
        fillInventory(".craft-screen > .inventory", gameState.activeTeam[dropdownValue].inventory);
    });

    observer.observe(dropdown, {
        attributes: true,
        attributeFilter: ["value"],
    });
});
