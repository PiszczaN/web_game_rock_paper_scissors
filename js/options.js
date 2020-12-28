import { Ai } from "./ai.js";
import { PAPER, STONE, SCISSORS } from "./enums.js";
import { UpdateHtml } from "./update-html.js";
import { WinConditions } from "./win-conditions.js";



export class Options {

    init() {
        const paper = document.querySelectorAll(".gameBoardItem__image")[0];
        const stone = document.querySelectorAll(".gameBoardItem__image")[1];
        const scissors = document.querySelectorAll(".gameBoardItem__image")[2];

        paper.addEventListener("click", () => { this.click(PAPER) });
        stone.addEventListener("click", () => { this.click(STONE) });
        scissors.addEventListener("click", () => { this.click(SCISSORS) });

    }

    click(playerOption) {
        const ai = new Ai();
        const matchCondition = new WinConditions();
        const ResultOfTurnView = new UpdateHtml();

        const aiOption = ai.generate(PAPER, SCISSORS);
        const matchResult = matchCondition.matchCompare(playerOption, aiOption);
        ResultOfTurnView.updateScoreTable(matchResult);
        ResultOfTurnView.matchResultView(matchResult, playerOption, aiOption);

    }

}