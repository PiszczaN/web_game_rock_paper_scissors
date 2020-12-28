import { Ai } from "./ai.js";
import { GamePawn } from "./enums.js";
import { UpdateHtml } from "./update-html.js";
import { WinConditions } from "./win-conditions.js";



export class Options {

    constructor() {
        this.paperPawn = new GamePawn(1, '<div class="gameBoardItem__image">papier</div>');
        this.stonePawn = new GamePawn(2, '<div class="gameBoardItem__image">kamien</div>');
        this.scissorsPawn = new GamePawn(3, '<div class="gameBoardItem__image">nozyce</div>');
    }


    aiPawn(pawn) {
        switch (pawn) {
            case 1:
                return this.paperPawn;
            case 2:
                return this.stonePawn;
            case 3:
                return this.scissorsPawn;
        }
    }

    init() {
        const paper = document.querySelectorAll(".gameBoardItem__image")[0];
        const stone = document.querySelectorAll(".gameBoardItem__image")[1];
        const scissors = document.querySelectorAll(".gameBoardItem__image")[2];

        paper.addEventListener("click", () => { this.click(this.paperPawn.num, this.paperPawn.html) });
        stone.addEventListener("click", () => { this.click(this.stonePawn.num, this.stonePawn.html) });
        scissors.addEventListener("click", () => { this.click(this.scissorsPawn.num, this.scissorsPawn.html) });

        //console.log(Options.paperPawn.html);
    }

    click(playerOption, playerHtml) {
        const ai = new Ai();
        const matchCondition = new WinConditions();
        const ResultOfTurnView = new UpdateHtml();

        const aiOption = ai.generate(this.paperPawn.num, this.scissorsPawn.num);
        const aiHtml = this.aiPawn(aiOption).html;
        const matchResult = matchCondition.matchCompare(playerOption, aiOption);
        ResultOfTurnView.updateScoreTable(matchResult);
        ResultOfTurnView.matchResultView(matchResult, playerHtml, aiHtml);

    }

}