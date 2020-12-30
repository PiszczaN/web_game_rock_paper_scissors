import { Ai } from "./ai.js";
import { pawns } from "./enums.js";
import { Sound } from "./sound.js";
import { UpdateHtml } from "./update-html.js";
import { WinConditions } from "./win-conditions.js";

export class Options {

    aiPawn(pawn) {
        switch (pawn) {
            case 1:
                return pawns.get("paper");
            case 2:
                return pawns.get("stone");
            case 3:
                return pawns.get("scissors");
        }
    }

    init() {
        const paper = document.querySelectorAll(".gameBoardItem__image")[0];
        const stone = document.querySelectorAll(".gameBoardItem__image")[1];
        const scissors = document.querySelectorAll(".gameBoardItem__image")[2];

        paper.addEventListener("click", () => { this.click(pawns.get("paper").num, pawns.get("paper").html) });
        stone.addEventListener("click", () => { this.click(pawns.get("stone").num, pawns.get("stone").html) });
        scissors.addEventListener("click", () => { this.click(pawns.get("scissors").num, pawns.get("scissors").html) });

        document.addEventListener('keydown', (e) => {
            if (UpdateHtml.isCheck && !e.repeat) {
                switch (e.code) {
                    case 'ArrowLeft':
                        this.click(pawns.get("paper").num, pawns.get("paper").html);
                        UpdateHtml.isCheck = false;
                        break;
                    case 'ArrowDown':
                        this.click(pawns.get("stone").num, pawns.get("stone").html);
                        UpdateHtml.isCheck = false;
                        break;
                    case 'ArrowRight':
                        this.click(pawns.get("scissors").num, pawns.get("scissors").html);
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
        const aiOption = ai.generate(pawns.get("paper").num, pawns.get("scissors").num);
        const aiHtml = this.aiPawn(aiOption).html;
        const matchResult = matchCondition.matchCompare(playerOption, aiOption);

        resultOfTurnView.matchResultView(matchResult, playerHtml, aiHtml);
        resultOfTurnView.updateScoreTable(matchResult);
    }

}