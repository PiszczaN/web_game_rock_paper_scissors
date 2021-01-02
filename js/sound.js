export class Sound {
    static play(src) {

        if (Sound.isPlay) {
            const path = `./sound/${src}`;

            const audio = new Audio(path);
            audio.play();
        }
    }

    static isPlay = true;

    static init() {
        const audioButton = document.querySelector(".sound");
        audioButton.addEventListener("click", () => {
            Sound.isPlay = !Sound.isPlay;

            if (Sound.isPlay) {
                audioButton.classList.remove("buttonOff");
            } else if (!Sound.isPlay) {
                audioButton.classList.add("buttonOff");
            }

        });
    }
}