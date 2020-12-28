import { Options } from "./options.js";
import { Sound } from "./sound.js";

document.addEventListener('DOMContentLoaded', () => {
    const sound = new Sound();
    const gameStart = new Options();
    gameStart.init();

})