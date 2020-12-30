import { Ai } from "./ai.js";
import { pawns } from "./enums.js";
import { Sound } from "./sound.js";
import { UpdateHtml } from "./update-html.js";
import { WinConditions } from "./win-conditions.js";

export class Options {

    aiPawn(pawn) {
        switch (pawn) {
            case 1:
                return pawns[0];
            case 2:
                return pawns[1];
            case 3:
                return pawns[2];
        }
    }

    init() {
        const paper = document.querySelectorAll(".gameBoardItem__image")[0];
        const stone = document.querySelectorAll(".gameBoardItem__image")[1];
        const scissors = document.querySelectorAll(".gameBoardItem__image")[2];

        paper.addEventListener("click", () => { this.click(pawns[0].num, pawns[0].html) });
        stone.addEventListener("click", () => { this.click(pawns[1].num, pawns[1].html) });
        scissors.addEventListener("click", () => { this.click(pawns[2].num, pawns[2].html) });

        document.addEventListener('keydown', (e) => {
            if (UpdateHtml.isCheck && !e.repeat) {
                switch (e.code) {
                    case 'ArrowLeft':
                        this.click(pawns[0].num, pawns[0].html);
                        UpdateHtml.isCheck = false;
                        break;
                    case 'ArrowDown':
                        this.click(pawns[1].num, pawns[1].html);
                        UpdateHtml.isCheck = false;
                        break;
                    case 'ArrowRight':
                        this.click(pawns[2].num, pawns[2].html);
                        UpdateHtml.isCheck = false;
                        break;
                }
            }

        });
    }


    click(playerOption, playerHtml) {
        const ai = new Ai();
        const matchCondition = new WinConditions();
        const resultOfTurnView = new UpdateHtml();

        resultOfTurnView.scoreResetInit();

        Sound.play('click.wav');
        const aiOption = ai.generate(pawns[0].num, pawns[2].num); /*Map*/
        const aiHtml = this.aiPawn(aiOption).html;
        const matchResult = matchCondition.matchCompare(playerOption, aiOption);

        resultOfTurnView.matchResultView(matchResult, playerHtml, aiHtml);
        resultOfTurnView.updateScoreTable(matchResult);
    }

}