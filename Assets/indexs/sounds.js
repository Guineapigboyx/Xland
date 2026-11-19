/**
 * Preload every sound in the sounds object.
 *
 * @param {Object} soundGroup - The sounds object or a nested sound category.
 */
function preloadAllSounds(soundGroup = sounds) {
    for (const key in soundGroup) {
        const sound = soundGroup[key];

        if (typeof sound === "string") {
            const audio = new Audio(`Assets/sounds/${sound}`);
            audio.preload = "auto";

            soundGroup[key] = audio;
        } else {
            preloadAllSounds(sound);
        }
    }
}

// Every sound from smash poker
const sounds = {
    CPU: {
        blocked_shank: "CPU/Blocked shank.wav",
        rage: "CPU/Rage.wav",
        end_turn: "CPU/End Turn.wav",
    },

    shop: {
        buy_$: "Shop/Buy $.wav",
        buy_mc: "Shop/Buy MC.wav",
        get_ace: "Shop/Get Ace.wav",
        get_amiibo: "Shop/Get Amiibo.wav",
        get_character: "Shop/Get Character.wav",
        get_item: "Shop/Get Item.wav",
        get_triforce: "Shop/Get triforce.mp3",
    },

    Pity: {
        mercpitystrong: "Pity/MercPityStrong.wav",
        mercpityweak: "Pity/MercPityWeak.wav",
        pitystrong: "Pity/PityStrong.wav",
        pityweak: "Pity/PityWeak.wav",
    },

    Items: {
        other: {
            ace_full: "Items/other/Ace Full.mp3",
            amiibo_full: "Items/other/Amiibo full.mp3",
            found_stone: "Items/other/Found stone.wav",
            inventory_full: "Items/other/Inventory full.mp3",
        },

        Basic_sounds: {
            blocked: "Items/Basic sounds/Blocked.wav",
            "Daruk's_Protection": "Items/Basic sounds/Daruk's Protection.mp3",
            discard_item: "Items/Basic sounds/Discard Item.mp3",
            item_with_timer: "Items/Basic sounds/Item with timer.wav",
            poison_2: "Items/Basic sounds/Poison 2.wav",
            poison: "Items/Basic sounds/Poison.wav",
            use_item: "Items/Basic sounds/Use item.wav",
        },

        Shank: {
            cleave: "Items/Shank/Cleave.wav",
            nuke: "Items/Shank/Nuke.wav",
            shank_special: "Items/Shank/Shank special.wav",
            shank: "Items/Shank/Shank.wav",
        },

        Item_auto: {
            airstrike: "Items/Item auto/Airstrike.wav",
            alarm_clock: "Items/Item auto/Alarm Clock.wav",
            bell_fast: "Items/Item auto/bell fast.wav",
            bowser_revolution: "Items/Item auto/Bowser Revolution.wav",
            chaching: "Items/Item auto/Chaching.mp3",
            club_card: "Items/Item auto/Club Card.mp3",
            combat_copter: "Items/Item auto/Combat Copter.wav",
            counterspell: "Items/Item auto/Counterspell.wav",
            fowl_foot: "Items/Item auto/Fowl Foot.wav",
            glowstone_dust: "Items/Item auto/Glowstone dust.mp3",
            goldenscarab: "Items/Item auto/GoldenScarab.wav",
            guard_breaker: "Items/Item auto/Guard Breaker.wav",
            infinity_shank: "Items/Item auto/Infinity shank.wav",
            quantum_instability: "Items/Item auto/Quantum Instability.wav",
            lucky_block_new_amiibo: "Items/Item auto/Lucky block new amiibo.mp3",
            lucky_winlose: "Items/Item auto/Lucky winlose.wav",
            mystic_shield: "Items/Item auto/Mystic Shield.wav",
            real_infinity_gauntlet: "Items/Item auto/Real infinity gauntlet.wav",
            roar_of_time: "Items/Item auto/Roar of Time.wav",
            saul_goodman: "Items/Item auto/Saul Goodman.wav",
            timeradded: "Items/Item auto/TimerAdded.wav",
            use_triforce: "Items/Item auto/Use triforce.mp3",
            vulture_amulet: "Items/Item auto/Vulture Amulet.wav",
            whirlpool: "Items/Item auto/Wirlpool.mp3",
            ragingcore: "Items/Item auto/RagingCore.wav",
            wand_of_cloning: "Items/Item auto/Wand of Cloning.wav",
            target_dummy: "Items/Item auto/Target Dummy.wav",
            self_combustor: "Items/Item auto/Self Combustor.wav",
            toy_wrench_success: "Items/Item auto/Toy Wrench Success.wav",
            glassbreak: "Items/Item auto/GlassBreak.mp3",
        },
    },

    System: {
        other: {
            set_handicap: "System/other/Set handicap.wav",
            winlose: "System/other/Winlose.wav",
            FlareSound: "System/other/FlareSound.wav",
        },

        Setting_change: {
            amiibo_selection: "System/Setting change/Amiibo selection.mp3",
            change_speed: "System/Setting change/Chnage speed.wav",
            mayham: "System/Setting change/Mayham.wav",
        },

        Game_start: {
            cpu_start: "System/Game start/CPU start.wav",
            hmn_start: "System/Game start/HMN start.wav",
            mcpu_start: "System/Game start/MCPU start.wav",
        },

        Basic_sounds: {
            beep: "System/Basic sounds/Beep.wav",
            beep2: "System/Basic sounds/Beep2.wav",
            invalid: "System/Basic sounds/Invalid.wav",
            very_invalid: "System/Basic sounds/Very Invalid.wav",
        },

        Game_finish: {
            cpu_game_over: "System/Game finish/CPU Game Over.mp3",
            game_over: "System/Game finish/Game Over.wav",
            mcpu_game_over: "System/Game finish/MCPU Game Over.wav",
            no_amiibos: "System/Game finish/No amiibos.wav",
            player_win: "System/Game finish/Player Win.wav",
            reroll_loop: "System/Game finish/Reroll loop.wav",
        },

        "Pun_&_prize": {
            highrisk: "System/Pun & prize/HighRisk.wav",
            no_prizes: "System/Pun & prize/NO prizes.wav",
        },
    },
};

preloadAllSounds();

/**
 * Play a sound
 *
 * @param {HTMLAudioElement} sound - A sound object from sounds
 * @param {Number} volume - The volume of the sound (0-1)
 * @param {Number} offset - How many seconds in to start the sound
 */
async function playSound(sound, volume = 1, offset = 0) {
    if (!(sound instanceof HTMLAudioElement)) {
        console.warn("Invalid sound", sound);
        return;
    }

    const audio = sound.cloneNode();

    audio.volume = volume;
    audio.currentTime = offset;

    await audio.play();

    return new Promise((resolve) => {
        audio.addEventListener("ended", resolve, { once: true });
    });
}
