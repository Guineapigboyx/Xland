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
    basic_sounds: {
        error: {
            broken: "basic sounds/error/broken.wav",
            canceled: "basic sounds/error/canceled.wav",
            failure: "basic sounds/error/failure.wav",
            invalidSelect: "basic sounds/error/invalid select.wav",
            smallInvalid: "basic sounds/error/small invalid.wav",
            invalid: "basic sounds/error/invalid.wav",
        },
        select: {
            select: "basic sounds/select/Select.wav",
            turnon1: "basic sounds/select/turn on.wav",
            turnon2: "basic sounds/select/turn on 2.wav",
            turnon3: "basic sounds/select/turn on 3.wav",
            hoverSelect: "basic sounds/select/hover select.wav",
        },
        infomation: {
            info: "basic sounds/infomation/info.wav",
            question: "basic sounds/infomation/question.wav",
        },
        other: {
            good: "basic sounds/other/good.wav",
            veryGood: "basic sounds/other/very good.wav",
            scroll: "basic sounds/other/scroll.wav",
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
