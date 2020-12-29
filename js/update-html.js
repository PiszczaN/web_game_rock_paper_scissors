import { GamePawn } from "./enums.js";
import { Options } from "./options.js";
export class UpdateHtml {

    constructor() {
        this.paperPawn = new GamePawn(1, '<div class="gameBoardItem__image">papier</div>');
        this.stonePawn = new GamePawn(2, '<div class="gameBoardItem__image">kamien</div>');
        this.scissorsPawn = new GamePawn(3, '<div class="gameBoardItem__image">nozyce</div>');
    }

    static winScore = 0;
    static drawScore = 0;
    static failScore = 0;
    static roundCounter = 1;
    static board = document.querySelector(".gameBoard");

    updateScoreTable(result) {
        const wins = document.querySelector(".wins");
        const draws = document.querySelector(".draws");
        const fails = document.querySelector(".fails");
        const gameRound = document.querySelector(".game__round");
        gameRound.innerHTML = `Runda ${++UpdateHtml.roundCounter}. Wybierz symbol `;

        switch (result) {
            case 0:
                fails.innerHTML = ++UpdateHtml.failScore;
                break;
            case 1:
                wins.innerHTML = ++UpdateHtml.winScore;
                break;
            case 2:
                draws.innerHTML = ++UpdateHtml.drawScore;
                break;
        }
    }
    matchResultView(result, player, computer) {

        UpdateHtml.board.innerHTML = `<div class="gameBoard__item">${player}</div><div class="gameBoard__item">${computer}<button class="gameBoard__matchResult">Graj dalej!</button></div>`;
        const BackToMatchView = document.querySelector(".gameBoard__matchResult");
        BackToMatchView.addEventListener("click", () => { this.matchView() });
    }
    matchView() {
        UpdateHtml.board.innerHTML = `<div class="gameBoard__item">${this.paperPawn.html}
            <div class = "gameBoardItem__icon"> X </div></div>
            <div class = "gameBoard__item">${this.stonePawn.html}
            <div class = "gameBoardItem__icon" > Y </div></div>
            <div class = "gameBoard__item">${this.scissorsPawn.html}
            <div class = "gameBoardItem__icon" > Z </div></div>`;

        const gameResume = new Options();
        gameResume.init();
    }
}