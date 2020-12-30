import { Options } from "./options.js";
import { Sound } from "./sound.js";

document.addEventListener('DOMContentLoaded', () => {
    Sound.init();
    const gameStart = new Options();
    gameStart.init();

})