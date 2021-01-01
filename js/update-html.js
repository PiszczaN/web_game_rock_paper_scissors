import { pawns } from "./enums.js";
import { Options } from "./options.js";
import { Animations } from "./animations.js";

export class UpdateHtml {

    constructor() {
        this.board = document.querySelector(".gameBoard");
        this.gameRound = document.querySelector(".game__round");
        this.wins = document.querySelector(".wins");
        this.draws = document.querySelector(".draws");
        this.fails = document.querySelector(".fails");
    }

    static winScore = 0;
    static drawScore = 0;
    static failScore = 0;
    static roundCounter = 1;
    static isCheck = true;

    scoreResetInit() {
        const scoreResetButton = document.querySelector(".reset");
        scoreResetButton.addEventListener("click", () => { this.scoreReset() });
    }

    scoreReset() {
        UpdateHtml.winScore = 0;
        UpdateHtml.drawScore = 0;
        UpdateHtml.failScore = 0;
        UpdateHtml.roundCounter = 0;

        this.fails.innerHTML = UpdateHtml.failScore;
        this.wins.innerHTML = UpdateHtml.winScore;
        this.draws.innerHTML = UpdateHtml.drawScore;
        this.gameRound.innerHTML = `Runda ${UpdateHtml.roundCounter}. Wybierz symbol`;

        this.matchView();
    }

    updateScoreTable(result) {

        switch (result) {
            case 0:
                this.fails.innerHTML = ++UpdateHtml.failScore;
                break;
            case 1:
                this.wins.innerHTML = ++UpdateHtml.winScore;
                break;
            case 2:
                this.draws.innerHTML = ++UpdateHtml.drawScore;
                break;
        }
    }

    matchResultLabel(result) {
        switch (result) {
            case 0:
                return 'Niestety, przegrałeś! :(';
            case 1:
                return 'Gratulacje, wygrałeś!! :))';
            case 2:
                return 'Remis, graj dalej!';
        }
    }

    matchResultView(result, player, computer) {
        UpdateHtml.isCheck = false;
        const resultLabel = this.matchResultLabel(result);

        this.board.innerHTML = `<div class="gameBoard__item">${player}</div><div class="gameBoard__item">${computer}<button class="gameBoard__matchResult">Graj dalej!</button></div>`;
        const backToMatchView = document.querySelector(".gameBoard__matchResult");

        this.gameRound.innerHTML = resultLabel;
        backToMatchView.addEventListener("click", () => { this.matchView() });
    }

    matchView() {
        UpdateHtml.isCheck = true;
        this.gameRound.innerHTML = `Runda ${++UpdateHtml.roundCounter}. Wybierz symbol`;
        this.board.innerHTML = `<div class="gameBoard__item">${pawns.get("paper").html}${pawns.get("arrowLeft").html}</div>
            <div class = "gameBoard__item">${pawns.get("stone").html}${pawns.get("arrowDown").html}</div>
            <div class = "gameBoard__item">${pawns.get("scissors").html}${pawns.get("arrowRight").html}</div>`;

        const gameResume = new Options();
        gameResume.init();
    }


}